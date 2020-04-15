import { NextPage, GetStaticProps } from "next";
import { Box, Flex, Heading, List, ListItem, Link } from "@chakra-ui/core";
import NextLink from "next/link";
import fetch from "node-fetch";
import { BlogInterface } from "src/interfaces/Blog";
import { BlogStatus } from "src/enums/BlogStatus";

const BlogIndexPage: NextPage<{
  blogs: BlogInterface[];
}> = (props) => {
  const { blogs } = props;
  return (
    <Box>
      <Flex flexDirection="column" alignItems="center">
        <Heading as="h1" size="2xl">
          Table of Contents
        </Heading>
        <List>
          {blogs.map((blog) => (
            <ListItem key={`/blog/${blog.slug}`}>
              <NextLink
                as={`/blog/${blog.slug}`}
                href={`/blog/${blog.slug}`}
                passHref
              >
                <Link>{blog.title}</Link>
              </NextLink>
            </ListItem>
          ))}
        </List>
      </Flex>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const payload = await (
      await fetch(`${process.env.HOST_URL}/api/blogs`)
    ).json();
    const blogs = payload
      .filter((blog) => blog.status === BlogStatus.draft)
      .sort((a, b) => {
        if (a.createdAt > b.createdAt) return -1;
        if (a.createdAt < b.createdAt) return 1;
        return 0;
      });
    return {
      props: { blogs },
    };
  } catch (error) {
    console.error(error.message);
    return {
      props: { blogs: [] },
    };
  }
};

export default BlogIndexPage;
