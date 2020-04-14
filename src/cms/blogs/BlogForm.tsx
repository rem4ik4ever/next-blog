import React, { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Tag,
  TagIcon,
  Stack,
  TagLabel,
  Switch,
  Textarea,
  Select,
} from "@chakra-ui/core";
import TagInput from "src/components/TagInput";
import ReactMarkdown from "react-markdown";
import Card from "src/components/Card";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { BlogStatus } from "src/enums/BlogStatus";

const BlogForm = ({ formik }) => {
  const [showPreview, togglePreview] = useState(false);
  const addTag = (tag) => {
    formik.setFieldValue("tags", [...formik.values.tags, tag]);
  };
  const statuses = Object.keys(BlogStatus);
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box m="5">
        <Heading as="h1" size="xl" fontWeight="normal" textAlign="center">
          Write a blog
        </Heading>
        <Card>
          <Flex direction="column">
            <Flex justify="flex-end">
              <FormControl mr="2">
                <Select placeholder="Blog status" value={formik.values.status}>
                  {statuses.map((status) => (
                    <option value={status.toLowerCase()}>{status}</option>
                  ))}
                </Select>
              </FormControl>
              <Button type="submit" variant="solid" color="green.400">
                Save
              </Button>
            </Flex>
            <FormControl w="full">
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                id="blog-title"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
              <FormHelperText id="blog-title-helper-text">
                Write something catchy!
              </FormHelperText>
            </FormControl>
            <FormControl mt="2">
              <FormLabel>TL;DR</FormLabel>
              <Input
                type="text"
                id="blog-tldr"
                name="tldr"
                value={formik.values.tldr}
                onChange={formik.handleChange}
              />
              <FormHelperText>Describe your idea a sentence</FormHelperText>
            </FormControl>
            <Box mt="2">
              <TagInput
                onAdd={(tag) => addTag(tag)}
                label="Blog tags"
                description="Tags helps searching"
              />
              <Stack spacing={4} isInline mt="4">
                {formik.values.tags.map((tag) => (
                  <Tag size="md" key={`tag-${tag}`} variantColor="cyan">
                    <TagIcon icon="add" size="12px" />
                    <TagLabel>{tag}</TagLabel>
                  </Tag>
                ))}
              </Stack>
            </Box>
            <FormControl mt="2">
              <FormLabel htmlFor="markdown-preview">
                Preview {showPreview ? "on" : "off"}
              </FormLabel>
              <Switch
                id="markdown-preview"
                value={showPreview}
                onChange={() => togglePreview(!showPreview)}
              />
            </FormControl>
            {showPreview ? (
              <Box borderTop="1px solid black" minH="420px" px="4" py="2">
                <ReactMarkdown
                  renderers={ChakraUIRenderer()}
                  source={formik.values.content}
                  escapeHtml={false}
                />
              </Box>
            ) : (
              <FormControl>
                <Textarea
                  minH="420px"
                  maxH="1200px"
                  name="content"
                  value={formik.values.content}
                  onChange={formik.handleChange}
                />
              </FormControl>
            )}
          </Flex>
        </Card>
      </Box>
    </form>
  );
};

export default BlogForm;
