import ErrorPage from "next/error";
import BlogWrite from "src/pages/blog/BlogWrite";

const WritePage = () => {
  if (process.env.NODE_ENV !== "development") {
    return <ErrorPage statusCode={404} />;
  }
  return <BlogWrite />
};

export default WritePage;
