import { NextApiHandler } from "next";
import { allBlogs } from "pages/api/blogs/utils";

const show: NextApiHandler = async (req, res) => {
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

export default show;
