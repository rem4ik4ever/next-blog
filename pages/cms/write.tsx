import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Box,
  Heading,
  Stack,
  Tag,
  TagIcon,
  TagLabel,
  Button,
} from "@chakra-ui/core";
import Card from "src/components/Card";
import { useState, createRef } from "react";

const TagInput = ({ onAdd }) => {
  const [tag, setState] = useState("");
  return (
    <Flex>
      <Input
        type="text"
        id="tag-input"
        aria-describeby="tag-text-input"
        value={tag}
        onChange={(ev) => setState(ev.target.value.trim())}
        onKeyDown={(ev) => {
          if (ev.keyCode === 13 || ev.keyCode === 32) {
            if (tag && tag.length > 0) {
              onAdd(tag);
              setState("");
            }
          }
        }}
      />
      <Button
        variant="solid"
        color="teal.500"
        onClick={() => {
          if (tag && tag.length > 0) {
            onAdd(tag);
            setState("");
          }
        }}
      >
        Add
      </Button>
    </Flex>
  );
};

const WritePage = () => {
  const [tags, setTags] = useState([]);
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
          <FormControl w="sm" mt="2">
            <FormLabel>Blog tags</FormLabel>
            <Flex direction="column">
              <TagInput onAdd={(tag) => addTag(tag)} />
              <Stack spacing={4} isInline mt="4">
                {tags.map((tag) => (
                  <Tag size="md" key={`tag-${tag}`} variantColor="cyan">
                    <TagIcon icon="add" size="12px" />
                    <TagLabel>{tag}</TagLabel>
                  </Tag>
                ))}
              </Stack>
            </Flex>
          </FormControl>
        </Flex>
      </Card>
    </Box>
  );
};

export default WritePage;
