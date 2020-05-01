import React from "react";
import { useFormik } from "formik";
import BlogForm from "src/cms/blogs/BlogForm";
import { useBlogUpdate } from "src/cms/blogs/hooks";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Something is wrong");
  }
  return await res.json();
};

const DataLoader = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`/api/cms/blogs/${id}`, fetcher);

  if (error) {
    return <div>Something is wrong</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  return <BlogFormik blog={data} />;
};

const BlogFormik = ({ blog }) => {
  const { handleUpdate } = useBlogUpdate();
  const formik = useFormik({
    initialValues: blog,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      try {
        setSubmitting(true);
        await handleUpdate(blog.id, values);
        setStatus({ success: true });
      } catch (error) {
        setStatus({ error: true });
      }
    }
  });

  return <BlogForm formik={formik} />;
};

const BlogEdit = () => {
  return <DataLoader />;
};

export default BlogEdit;
