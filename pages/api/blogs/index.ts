import { NextApiHandler } from "next";
import { BlogStatus } from "src/enums/BlogStatus";
import {
  allBlogs,
  getSlug,
  generateFilename,
  saveBlogFile,
} from "src/cms/blogs/utils";

const saveToDraft = async (req, res) => {
  const timestamp = new Date().getTime();
  const payload = {
    ...req.body,
    author: "Rem Kim",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    slug: getSlug(req.body.title),
    status: BlogStatus.draft,
    id: timestamp,
  };
  const filename = generateFilename(payload.title, timestamp);
  const result = await saveBlogFile(filename, payload);
  if (!result) {
    res.statusCode = 500;
    res.end();
  }
  res.statusCode = 200;
  res.end(JSON.stringify(payload, undefined, 2));
};

const listBlogs = (req, res) => {
  // const filters = req.body?.filters;
  try {
    const payload = allBlogs();
    res.statusCode = 200;
    res.end(JSON.stringify(payload));
  } catch (error) {
    console.error(error.message);
    res.statusCode = 500;
    res.end();
  }
};

const blog: NextApiHandler = async (req, res) => {
  if (req.method === "POST" && process.env.NODE_ENV === 'development') {
    saveToDraft(req, res);
  } else {
    listBlogs(req, res);
  }
};

export default blog;
