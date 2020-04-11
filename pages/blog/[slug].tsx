import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Box, Flex, Heading, Text } from "@chakra-ui/core";
import Link from "next/link";
import fetch from "node-fetch";
import { BlogInterface } from "src/interfaces/Blog";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

const BlogPage: NextPage<{ blog: BlogInterface }> = ({ blog }) => {
  console.log("BLOG", blog);
  return (
    <Box>
      <Flex flexDirection="column">
        {/* <Link href="/blog" passHref>
          <a>back to TOC</a>
        </Link> */}
        <Heading as="h1" size="2xl" textAlign="center">
          {blog.title}
        </Heading>
        <ReactMarkdown
          renderers={ChakraUIRenderer()}
          source={blog.content}
          escapeHtml={false}
        />
      </Flex>
    </Box>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const payload = await fetch(`http://localhost:3000/api/blogs`);
    const blogs = await payload.json();
    const slugs = blogs.map((x) => x.slug);
    const paths = slugs.map((slug) => ({
      params: {
        slug,
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

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  try {
    const payload = await fetch(`http://localhost:3000/api/blogs/${slug}`);
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

export default BlogPage;
