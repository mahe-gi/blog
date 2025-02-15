import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@mahe-npm/common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const token = c.req.header("Authorization");
  const originalToken = token?.split(" ")[1];
  if (!originalToken) {
    c.status(401);
    return c.json({ err: "token not found" });
  }
  const tokenVerification = await verify(originalToken, c.env.JWT_SECRET);

  if (tokenVerification.id) {
    c.set("userId", String(tokenVerification.id));
    await next();
  } else {
    c.status(403);
    return c.json({ err: "token not valid" });
  }
});

blogRouter.post("/", async (c) => {
  const reqData = await c.req.json();
  const { success } = createBlogInput.safeParse(reqData);

  if (!success) {
    c.status(400);
    return c.json({ error: "invalid blog Input" });
  }

  const userId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const blog = await prisma.blog.create({
    data: {
      title: reqData.title,
      content: reqData.content,
      authorId: Number(userId),
    },
  });
  return c.json({
    id: blog.id,
    msg: "blog created",
  });
});
blogRouter.put("/", async (c) => {
  const reqData = await c.req.json();
  const { success } = updateBlogInput.safeParse(reqData);

  if (!success) {
    c.status(400);
    return c.json({ error: "invalid blog Input" });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const updateBlog = await prisma.blog.update({
    where: {
      id: reqData.id,
    },
    data: {
      title: reqData.title,
      content: reqData.content,
    },
  });
  c.status(200);
  return c.json({
    id: updateBlog.id,
    msg: " blog Updated",
  });
});
///add pagination :todo
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const blogs = await prisma.blog.findMany({});
  if (!blogs) {
    c.status(404);
    return c.json({ error: "No blogs found" });
  }
  c.status(200);
  return c.json({
    blogs,
  });
});
blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const id = c.req.param("id");

  const blog = await prisma.blog.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (blog) {
    return c.json(blog);
  } else {
    c.status(404);
    return c.json({ error: "Blog not found" });
  }
});
