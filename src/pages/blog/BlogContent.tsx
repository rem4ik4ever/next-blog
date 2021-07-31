import React from "react";
import { Box, Flex, Heading, Text, Stack, Tag } from "@chakra-ui/core";
import { BlogInterface } from "src/interfaces/Blog";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import spacetime from "spacetime";
import Image from "next/image";

const BlogContent: React.FC<{ blog: BlogInterface }> = ({ blog }) => {
  return (
    <Box>
      <Flex flexDirection="column">
        <Text color="gray.400" fontSize="md" textAlign="center">
          {blog.author} - {spacetime(blog.createdAt).format("LL")}
        </Text>
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          mb="0"
          fontWeight="light"
        >
          {blog.title}
        </Heading>
        <Text mb="2" color="gray.500"></Text>
        <Box marginX="auto">
          <Image
            src={blog.thumbnailUrl}
            alt={blog.title}
            layout="fixed"
            width={448}
            height={298}
            unoptimized={process.env.NODE_ENV === "development"}
          />
        </Box>
        <Text>{blog.tldr}</Text>
        <ReactMarkdown
          renderers={ChakraUIRenderer()}
          source={blog.content}
          escapeHtml={false}
        />

        <Stack spacing={1} isInline flexWrap="wrap">
          {blog.tags.map((tag) => (
            <Tag key={tag} variantColor="cyan" size="sm" mt={1}>
              {tag}
            </Tag>
          ))}
        </Stack>
      </Flex>
    </Box>
  );
};

export default BlogContent;
