import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { Hono } from "hono";
import { signinInput, signupInput } from "@mahe-npm/common";
import bcrypt from "bcryptjs";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const reqData = await c.req.json();
  if (!reqData.username || !reqData.password) {
    c.status(400);
    return c.json({ msg: "empty data" });
  }
  const { success } = signupInput.safeParse(reqData);
  if (!success) {
    c.status(400);
    return c.json({ message: "Invalid input" });
  }
  const hashedPassword = await bcrypt.hash(reqData.password, 10);
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.create({
      data: {
        username: reqData.username,
        password: hashedPassword,
        name: reqData.name,
      },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    c.status(200);
    return c.json({ token });
  } catch (e) {
    c.status(400);
    return c.text("already exists or invalid");
  }
});
userRouter.post("/signin", async (c) => {
  const reqData = await c.req.json();
  if (!reqData.username || !reqData.password) {
    c.status(400);
    return c.json({ msg: "empty data" });
  }
  const { success } = signinInput.safeParse(reqData);
  if (!success) {
    c.status(400);
    return c.json({ message: "Invalid Signin  input " });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const user = await prisma.user.findFirst({
    where: {
      username: reqData.username,
    },
  });

  if (!user) {
    c.status(401);
    return c.json({ message: "Invalid username or password" });
  }
  const comparehash = await bcrypt.compare(reqData.password, user.password);
  console.log(comparehash + " comparing hash");
  if (!comparehash) {
    c.status(401);
    return c.json({ message: "Invalid username or password" });
  }

  const token = await sign({ id: user.id }, c.env.JWT_SECRET);
  c.status(200);
  return c.json({ token });
});
userRouter.post("/me", async (c) => {
  const token = c.req.header("Authorization");
  const originalToken = token?.split(" ")[1];
  if (!originalToken) {
    c.status(401);
    return c.json({ err: "token not found" });
  }

  const { id } = await verify(originalToken, c.env.JWT_SECRET);

  if (!id) {
    c.status(401);
    return c.json({ err: "Invalid token" });
  }

  c.status(200);
  return c.json({
    id: id,
  });
});
