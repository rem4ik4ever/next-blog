import { useFormik } from "formik";
import { GetStaticPaths, GetStaticProps } from "next";
import ErrorPage from "next/error";
import fetch from "node-fetch";
import BlogForm from "src/cms/blogs/BlogForm";
import { useBlogUpdate } from "src/cms/blogs/hooks";
import { useEffect } from "react";

const EditPage = ({ blog }) => {
  if (process.env.NODE_ENV !== "development") {
    return <ErrorPage statusCode={404} />;
  }
  const { handleUpdate } = useBlogUpdate();
  const formik = useFormik({
    initialValues: blog,
    onSubmit: () => handleUpdate(blog.id, formik.values),
  });
  return <BlogForm formik={formik} />;
};
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const payload = await fetch(`${process.env.HOST_URL}/api/blogs`);
    const blogs = await payload.json();
    const ids = blogs.map((x) => x.id);
    const paths = ids.map((id) => ({
      params: {
        id: String(id),
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

export const getStaticProps: GetStaticProps = async ({ params: { id } }) => {
  try {
    const payload = await fetch(`${process.env.HOST_URL}/api/cms/blogs/${id}`);
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

export default EditPage;
