import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { allBlogs, getSlug, updateBlogFile } from "src/cms/blogs/utils";
import { BlogStatus } from "src/enums/BlogStatus";

const find = async (req, res) => {
  const { id } = req.query;
  const blogs = allBlogs();
  const blog = blogs.find((blog) => String(blog.id) === String(id));
  if (!blog) {
    res.statusCode = 404;
    res.end();
  } else {
    res.statusCode = 200;
    res.end(JSON.stringify(blog));
  }
};

const update = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const payload = {
      ...req.body,
      updatedAt: new Date().toISOString(),
      slug: getSlug(req.body.title),
      status: BlogStatus[req.body.status],
    };
    const result = await updateBlogFile(payload, String(id));
    if (!result) throw new Error("Failed to update file");
    res.statusCode = 200;
    res.end(JSON.stringify(payload));
  } catch (error) {
    res.statusCode = 404;
    res.end();
  }
};

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case "PUT":
      update(req, res);
      break;

    default:
      find(req, res);
      break;
  }
};

export default handler;
