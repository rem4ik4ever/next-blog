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
} from "@chakra-ui/core";
import Card from "src/components/Card";
import { useState, createRef } from "react";
import TagInput from "pages/cms/TagInput";
import ReactMardown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

const WritePage = () => {
  const [tags, setTags] = useState([]);
  const [markdown, setMarkdown] = useState("");
  const [showPreview, togglePreview] = useState(false);
  const addTag = (tag) => {
    setTags([...tags, tag]);
  };
  return (
    <Box m="5">
      <Heading as="h1" size="xl" fontWeight="normal" textAlign="center">
        Write a blog
      </Heading>
      <Card>
        <Flex direction="column">
          <FormControl w="full">
            <FormLabel>Title</FormLabel>
            <Input type="text" id="blog-title" aria-describeby="title-text" />
            <FormHelperText id="blog-title-helper-text">
              Write something catchy!
            </FormHelperText>
          </FormControl>
          <FormControl mt="2">
            <FormLabel>TL;DR</FormLabel>
            <Input
              type="text"
              id="blog-tldr"
              aria-describeby="blog-tldr-sentence"
            />
            <FormHelperText>Describe your idea a sentence</FormHelperText>
          </FormControl>
          <Box mt="2">
            <TagInput
              onAdd={(tag) => addTag(tag)}
              label="Blog tags"
              description="Tags helps searching"
            />
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
                source={markdown}
                escapeHtml={false}
              />
            </Box>
          ) : (
            <FormControl>
              <Textarea
                minH="420px"
                maxH="1200px"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
              />
            </FormControl>
          )}
        </Flex>
      </Card>
    </Box>
  );
};

export default WritePage;
