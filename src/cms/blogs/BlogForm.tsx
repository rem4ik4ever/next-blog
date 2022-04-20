import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Icon,
  Input,
  Select,
  Switch,
  Tag,
  TagCloseButton,
  TagIcon,
  TagLabel,
  Text,
  Textarea,
} from "@chakra-ui/core";
import React, { useEffect, useState } from "react";

import { BlogStatus } from "src/enums/BlogStatus";
import Card from "src/components/Card";
import ReactMarkdown from "react-markdown";
import TagInput from "src/components/TagInput";
import { markdownRenderer } from "src/markdownConfig";

const StatusIcon = ({ status }) => {
  if (status?.success) {
    return <Icon name="check-circle" color="green.400" />;
  } else if (status?.error) {
    return <Icon name="close" color="red.400" />;
  }
  return null;
};

const StatusText = ({ status }) => {
  let text = null
  if (status?.success) {
    text = <Text color="green.400">Blog saved</Text>;
  } else if (status?.error) {
    text = <Text color="red.400">Failed to save</Text>;
  }
  return <Flex align="center" mr={5}>{text}</Flex>;
};

const BlogForm = ({ formik }) => {
  const [showPreview, togglePreview] = useState(false);
  const [showToast, toggleToast] = useState(false);
  useEffect(() => {
    if (formik.status?.success || formik.status?.error) {
      toggleToast(true);
      setTimeout(() => {
        toggleToast(false);
      }, 2000);
    }
  }, [formik.status]);
  const addTag = (tag: String) => {
    formik.setFieldValue("tags", [...formik.values.tags, tag]);
  };
  const removeTag = (tag: String) => {
    formik.setFieldValue("tags", formik.values.tags.filter((t: String) => t !== tag));
  };

  const statuses = Object.keys(BlogStatus);
  return (
    <form
      onSubmit={ev => {
        formik.handleSubmit(ev);
      }}
    >
      <Box m="5">
        <Heading as="h1" size="xl" fontWeight="normal" textAlign="center">
          Write a blog
        </Heading>
        <Card>
          <Flex direction="column">
            <Flex justify="flex-end">
              {showToast && <StatusText status={formik.status} />}
              <FormControl mr="2">
                <Select
                  value={formik.values.status}
                  name="status"
                  onChange={formik.handleChange}
                >
                  {statuses.map(status => (
                    <option key={status} value={status.toLowerCase()}>
                      {status.toUpperCase()}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <Button
                type="submit"
                variant="solid"
                color="green.400"
                isDisabled={formik.isSubmitting}
              >
                {showToast ? <StatusIcon status={formik.status} /> : "Save"}
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
            <FormControl mt="2">
              <FormLabel>Thumbnail URL</FormLabel>
              <Input
                type="text"
                id="blog-thumbnail"
                name="thumbnailUrl"
                value={formik.values.thumbnailUrl}
                onChange={formik.handleChange}
              />
              <FormHelperText>Main blog image</FormHelperText>
            </FormControl>
            <Box mt="2">
              <TagInput
                onAdd={tag => addTag(tag)}
                label="Blog tags"
                description="Tags helps searching"
              />
              <Box mt="4" display="flex" flexWrap="wrap">
                {formik.values.tags.map(tag => (
                  <Box mr="2">
                    <Tag size="md" key={`tag-${tag}`} variantColor="cyan">
                      <TagLabel>{tag}</TagLabel>
                      <TagCloseButton onClick={() => removeTag(tag)} />
                    </Tag>
                  </Box>
                ))}
              </Box>
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
                  renderers={markdownRenderer}
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
