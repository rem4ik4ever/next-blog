import React from "react";
import { Box, Flex, Heading, Image, Text, Stack, Tag } from "@chakra-ui/core";
import { BlogInterface } from "src/interfaces/Blog";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

const BlogContent: React.FC<{ blog: BlogInterface }> = ({ blog }) => {
  return (
    <Box>
      <Flex flexDirection="column">
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          mb="0"
          fontWeight="light"
        >
          {blog.title}
        </Heading>
        <Stack spacing={1} isInline>
          {blog.tags.map(tag => (
            <Tag key={tag} variantColor="cyan" size="sm">
              {tag}
            </Tag>
          ))}
        </Stack>
        <Text mb="2" color="gray.500"></Text>
        <Box marginX="auto">
          <Image src={blog.thumbnailUrl} alt={blog.title} mb="3" width="md" />
        </Box>
        <Text>{blog.tldr}</Text>
        <ReactMarkdown
          renderers={ChakraUIRenderer()}
          source={blog.content}
          escapeHtml={false}
        />
      </Flex>
    </Box>
  );
};

export default BlogContent;
