import React from "react";
import { Box, Flex, Heading, Text, Stack, Tag } from "@chakra-ui/core";
import { BlogInterface } from "src/interfaces/Blog";
import ReactMarkdown from "react-markdown";
import spacetime from "spacetime";
import { markdownRenderer } from "src/markdownConfig";

const BlogContent: React.FC<{ blog: BlogInterface }> = ({ blog }) => {
  return (
    <Box className="max-w-xl mx-auto px-8 sm:px-0">
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
        <Box marginX="auto" className="mb-2">
          <img
            src={blog.thumbnailUrl}
            alt={blog.title}
          />
        </Box>
        <Text>{blog.tldr}</Text>
        <ReactMarkdown
          renderers={markdownRenderer}
          source={blog.content}
          escapeHtml={false}
        />

        <Stack spacing={1} isInline flexWrap="wrap" className="mb-2">
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
