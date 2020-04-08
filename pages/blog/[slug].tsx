import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Box, Flex, Heading, Text } from "@chakra-ui/core";
import Link from "next/link";

const BlogPage: NextPage<{
  slug: string;
  title: string;
  text: string;
}> = (props) => {
  return (
    <Box>
      <Flex flexDirection="column" alignItems="center">
        <Link href="/blog" passHref>
          <a>back to TOC</a>
        </Link>
        <Heading as="h1" size="2xl">
          {props.title}
        </Heading>
        <Text>{props.text}</Text>
      </Flex>
    </Box>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = (await import("./blogs.json")).default;
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
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const blogs = (await import("./blogs.json")).default;
  const blog = blogs.find((bl) => bl.slug === slug);

  return {
    props: {
      title: blog.title,
      text: blog.text,
      slug: blog.slug,
    },
  };
};

export default BlogPage;
