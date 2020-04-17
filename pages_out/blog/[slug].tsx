import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import fetch from "node-fetch";
import { BlogInterface } from "src/interfaces/Blog";
import BlogContent from "src/pages/blog/BlogContent";

const BlogPage: NextPage<{ blog: BlogInterface }> = ({ blog }) => {
  return <BlogContent blog={blog} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const payload = await fetch(`${process.env.NOW_URL}/api/blogs`);
    const blogs = await payload.json();
    const slugs = blogs.map((x) => x.slug);
    const paths = slugs.map((slug) => ({
      params: {
        slug,
      },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Static patch err:", error.message);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  try {
    const payload = await fetch(`${process.env.NOW_URL}/api/blogs/${slug}`);
    const blog = await payload.json();

    return {
      props: {
        blog,
      },
    };
  } catch (error) {
    console.error("Static prop err: ", error);
    return {
      props: { blog: null },
    };
  }
};

export default BlogPage;
