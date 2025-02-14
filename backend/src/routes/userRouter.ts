import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { Hono } from "hono";
import { signupInput } from "@mahe-npm/common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const reqData = await c.req.json();
  console.log(reqData);
  const { success } = signupInput.safeParse(reqData);

  if (!success) {
    c.status(400);
    return c.json({ message: "Invalid input" });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const user = await prisma.user.create({
      data: {
        username: reqData.username,
        password: reqData.password,
        name: reqData.name,
      },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ token });
  } catch (e) {
    return c.text("already exists or invalid");
  }
});
userRouter.post("/signin", async (c) => {
  const reqData = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const user = await prisma.user.findFirst({
    where: {
      username: reqData.username,
      password: reqData.password,
    },
  });

  if (!user) {
    c.status(401);
    return c.json({ message: "Invalid username or password" });
  }

  const token = await sign({ id: user.id }, c.env.JWT_SECRET);
  c.status(200);
  return c.json({ token });
});
