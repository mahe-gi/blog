import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.use("/api/v1/blog/*", async (c, next) => {
  const AuthHeader = c.req.header("Authorization");
  const token = AuthHeader?.split(" ")[1] || " ";
  console.log(token);

  const VerifyHeader = await verify(token, c.env.JWT_SECRET);
  console.log(VerifyHeader);
  if (VerifyHeader.id) {
    return next();
  } else {
    c.status(403);
    return c.json({ err: "unauthorized" });
  }
});

app.post("/api/v1/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    const token = await sign({ id: body.email }, c.env.JWT_SECRET);

    return c.json({ token });
  } catch (e) {
    c.status(403);
    return c.json({ error: "error while signup	" });
  }
});
app.post("/api/v1/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });
    if (!user) {
      c.status(403);
      return c.json({ err: "user not found" });
    }

    const token = await sign({ id: user.email }, c.env.JWT_SECRET);
    return c.json({ token });
  } catch (e) {}
  return c.text("signin route");
});

app.get("/api/v1/blog/:id", (c) => {
  const id = c.req.param("id");
  console.log(id);
  return c.text("get blog route");
});

app.post("/api/v1/blog", (c) => {
  return c.text("signin route");
});

app.put("/api/v1/blog", (c) => {
  return c.text("signin route");
});

app.get("/api/v1/blog/:id", (c) => {
  return c.text("Hello World");
});
app.get("/api/v1/blog/bulk", (c) => {
  return c.text("Hello World");
});

export default app;
