import ErrorPage from "next/error";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Box,
  Heading,
  Textarea,
  Switch,
  Button,
  Stack,
  Tag,
  TagIcon,
  TagLabel,
} from "@chakra-ui/core";
import Card from "src/components/Card";
import { useState } from "react";
import TagInput from "src/components/TagInput";
import ReactMardown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { useFormik } from "formik";
import { postData } from "src/utils/fetch";

const WritePage = () => {
  if (process.env.NODE_ENV !== "development") {
    return <ErrorPage statusCode={404} />;
  }
  const [showPreview, togglePreview] = useState(false);
  const addTag = (tag) => {
    formik.setFieldValue("tags", [...formik.values.tags, tag]);
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      tldr: "",
      tags: [],
      content: "",
      thumbnail: null,
    },
    onSubmit: async (values) => {
      const result = await postData("/api/blogs", values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box m="5">
        <Heading as="h1" size="xl" fontWeight="normal" textAlign="center">
          Write a blog
        </Heading>
        <Card>
          <Flex direction="column">
            <Flex justify="flex-end">
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
            <FormControl>
              <FormLabel>Thumbnail</FormLabel>
              <input
                type="file"
                id="blog-thumbnail"
                name="blog-thumbnail"
                value={formik.values.thumbnail}
                onChange={formik.handleChange}
                accept="image/*"
              />
              <FormHelperText>upload blog image</FormHelperText>
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
                <ReactMardown
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

export default WritePage;
