import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Box, Flex, Heading, Image, Text, Stack, Tag } from "@chakra-ui/core";
import fetch from "node-fetch";
import { BlogInterface } from "src/interfaces/Blog";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

const BlogPage: NextPage<{ blog: BlogInterface }> = ({ blog }) => {
  console.log("BLOG", blog);
  return (
    <Box>
      <Flex flexDirection="column">
        <Heading as="h1" size="2xl" textAlign="center" mb="0">
          {blog.title}
        </Heading>
        <Stack spacing={1} isInline>
          {blog.tags.map((tag) => (
            <Tag key={tag} variantColor="cyan" size="sm">
              {tag}
            </Tag>
          ))}
        </Stack>
        <Text mb="2" color="gray.500"></Text>
        <Image src={blog.thumbnailUrl} alt={blog.title} />
        <Heading as="h2" size="sm" fontWeight="regular" mt="5">
          {blog.tldr}
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
    const payload = await fetch(`${process.env.HOST_URL}/api/blogs`);
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
    const payload = await fetch(`${process.env.HOST_URL}/api/blogs/${slug}`);
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
