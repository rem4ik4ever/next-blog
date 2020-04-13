import ErrorPage from "next/error";
import { useFormik } from "formik";
import { postData } from "src/utils/fetch";
import BlogForm from "src/cms/blogs/BlogForm";
import { useToast } from "@chakra-ui/core";

const WritePage = () => {
  if (process.env.NODE_ENV !== "development") {
    return <ErrorPage statusCode={404} />;
  }
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      title: "",
      tldr: "",
      tags: [],
      content: "",
      thumbnail: null,
    },
    onSubmit: async (values) => {
      try {
        const result = await postData("/api/blogs", values);
        toast({
          title: "Success",
          description: "Blog post was created!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        // redirect here
      } catch (error) {
        toast({
          title: "Failed",
          description: "Failed to create blog post",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    },
  });
  return <BlogForm formik={formik} />;
};

export default WritePage;
