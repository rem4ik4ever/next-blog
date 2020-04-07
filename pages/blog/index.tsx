import { NextPage, GetStaticProps } from "next";
import { Box, Flex, Heading, List, ListItem, Link } from "@chakra-ui/core";
import NextLink from "next/link";

const BlogIndexPage: NextPage<{
  blogs: { slug: string; title: string; text: string }[];
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
  const blogs = (await import("./blogs.json")).default;
  return {
    props: { blogs },
  };
};

export default BlogIndexPage;
