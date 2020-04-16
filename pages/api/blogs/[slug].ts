import { NextApiHandler } from "next";
import { allBlogs } from "src/cms/blogs/utils";

const show: NextApiHandler = (req, res) => {
  const { slug } = req.query;
  const blogs = allBlogs();
  const blog = blogs.find((bl) => bl.slug === slug);
  if (!blog) {
    res.statusCode = 404;
    res.end();
  } else {
    res.statusCode = 200;
    res.end(JSON.stringify(blog));
  }
};

export default show;
