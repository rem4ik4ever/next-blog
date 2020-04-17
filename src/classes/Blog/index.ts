import { BlogInterface } from "src/interfaces/Blog";

class Blog {
  blog: BlogInterface;

  constructor(blog: BlogInterface) {
    this.blog = blog;
  }
}

export default Blog;
