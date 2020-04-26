import React from "react";
import ErrorPage from "next/error";
import { useFormik } from "formik";
import { postData } from "src/utils/fetch";
import BlogForm from "src/cms/blogs/BlogForm";
import { BlogStatus } from "src/enums/BlogStatus";
import Router from "next/router";

const BlogWrite = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      tldr: "",
      tags: [],
      content: "",
      thumbnail: null,
      status: BlogStatus.draft
    },
    onSubmit: async (values, { setStatus, setSubmitting, setErrors }) => {
      setSubmitting(true);
      try {
        const result = await postData("/api/cms/blogs", values);
        setStatus({ success: true });
        Router.push(`/cms/write/${result.id}`);
      } catch (error) {
        setStatus({ error: true });
        setSubmitting(false);
      }
    }
  });
  return <BlogForm formik={formik} />;
};

export default BlogWrite;
