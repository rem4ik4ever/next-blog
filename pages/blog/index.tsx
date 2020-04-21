import { NextPage, GetStaticProps } from "next";
import { Box, Flex } from "@chakra-ui/core";
import { BlogInterface } from "src/interfaces/Blog";
import { BlogStatus } from "src/enums/BlogStatus";
import { allBlogs } from "src/cms/blogs/utils";
import BlogsList from "src/pages/home/BlogsList";
import PageTitle from "src/components/PageTitle";

const BlogIndexPage: NextPage<{
  blogs: BlogInterface[];
}> = props => {
  const { blogs } = props;
  return (
    <Box>
      <PageTitle title="Blog" />
      <Flex flexDirection="column" alignItems="center">
        <BlogsList blogs={blogs} label="Blog" />
      </Flex>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const payload = allBlogs();
    const blogs = payload
      .filter(blog => blog.status === BlogStatus.released)
      .sort((a, b) => {
        if (a.createdAt > b.createdAt) return -1;
        if (a.createdAt < b.createdAt) return 1;
        return 0;
      });
    return {
      props: { blogs }
    };
  } catch (error) {
    console.error(error.message);
    return {
      props: { blogs: [] }
    };
  }
};

export default BlogIndexPage;
