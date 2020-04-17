import Blog from "./index";
import { allBlogs } from "src/cms/blogs/utils";

class BlogStore {
  constructor() {}
  static BLOG_DATA_PATH: string = "./data/blogs";

  get(): Blog[] {
    const payload = allBlogs();
    return payload.map((entitiy) => {
      return new Blog(entitiy);
    });
  }
}

export default BlogStore;
