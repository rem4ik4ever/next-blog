import { Blog } from "src/classes/Blog";
import { allBlogs } from "src/cms/blogs/utils";

class BlogRepository {
  constructor() {}
  static BLOG_DATA_PATH: string = "./data/blogs";

  get(): Blog[] {
    const payload = allBlogs();
    return payload.map((entitiy) => {
      return new Blog(entitiy);
    });
  }
}

export default BlogRepository;
