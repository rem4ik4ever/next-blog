import BlogStore from "../BlogStore";
import Blog from "..";

test("create BlogStore", () => {
  const store = new BlogStore();
  const blogs: Blog[] = store.get();
  expect(blogs.length).toBe(3);
});
