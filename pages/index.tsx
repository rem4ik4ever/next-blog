import { NextPage, GetStaticProps } from "next";
import { Flex } from "@chakra-ui/core";
import Intro from "src/pages/home/Intro";
import LinksSection from "src/pages/home/LinksSection";
import RecentPosts from "src/pages/home/RecentPosts";
import { BlogStatus } from "src/enums/BlogStatus";
import {allBlogs} from "src/cms/blogs/utils";

const IndexPage = ({ blogs }) => {
  return (
    <Flex flexDirection="column" alignItems="center" m={4}>
      <Intro />
      <LinksSection mt="3" w="full" />
      <RecentPosts blogs={blogs} />
    </Flex>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const blogs = allBlogs();
    const sortedBlogs = blogs.sort((a, b) => {
      if (a.createdAt > b.createdAt) return -1;
      if (a.createdAt < b.createdAt) return 1;
      return 0;
    });
    return {
      props: {
        blogs: sortedBlogs
          .filter((blog) => blog.status === BlogStatus.released)
          .slice(0, 3),
      },
    };
  } catch (error) {
    return {
      props: {
        blogs: [],
      },
    };
  }
};

export default IndexPage;
