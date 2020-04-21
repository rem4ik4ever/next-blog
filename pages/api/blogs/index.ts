import { NextApiHandler } from "next";
import { BlogStatus } from "src/enums/BlogStatus";
import {
  allBlogs,
  getSlug,
  generateFilename,
  saveBlogFile,
} from "src/cms/blogs/utils";



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
  listBlogs(req, res);
};

export default blog;
