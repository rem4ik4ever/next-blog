import ErrorPage from "next/error";
import { useFormik } from "formik";
import { postData } from "src/utils/fetch";
import BlogForm from "src/cms/blogs/BlogForm";
import { GetStaticPaths, GetStaticProps } from "next";
import fetch from "node-fetch";

const EditPage = ({ blog }) => {
  if (process.env.NODE_ENV !== "development") {
    return <ErrorPage statusCode={404} />;
  }
  console.log("Blog", blog);
  const formik = useFormik({
    initialValues: blog,
    onSubmit: async (values) => {
      const result = await postData("/api/blogs", values);
    },
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
