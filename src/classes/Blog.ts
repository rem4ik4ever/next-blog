import { BlogInterface } from "src/interfaces/Blog";
import { BlogStatus } from "src/enums/BlogStatus";
import { allBlogs } from "src/cms/blogs/utils";

export class Blog {
  blog: BlogInterface;

  constructor(blog: BlogInterface) {
    this.blog = blog;
  }

  find(id: string): BlogInterface {
    const blogs = allBlogs();
    const blog = blogs.find((bl) => String(bl.id) === String(id));
    return blog;
  }

  all(): BlogInterface[] {
    return allBlogs();
  }
}
