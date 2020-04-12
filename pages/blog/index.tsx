import { NextPage, GetStaticProps } from "next";
import { Box, Flex, Heading, List, ListItem, Link } from "@chakra-ui/core";
import NextLink from "next/link";
import fetch from "node-fetch";
import { BlogInterface } from "src/interfaces/Blog";

const BlogIndexPage: NextPage<{
  blogs: BlogInterface[];
}> = (props) => {
  const { blogs } = props;
  console.log("Blg", blogs);
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
    const blogs = await fetch(`${process.env.HOST_URL}/api/blogs`);
    return {
      props: { blogs: await blogs.json() },
    };
  } catch (error) {
    console.error(error.message);
    return {
      props: { blogs: [] },
    };
  }
};

export default BlogIndexPage;
