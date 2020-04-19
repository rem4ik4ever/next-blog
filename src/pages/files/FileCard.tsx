import React from "react";
import {
  Box,
  Flex,
  Link,
  Image,
  Heading,
  Text,
  Tooltip,
  IconButton,
  useClipboard
} from "@chakra-ui/core";
import axios from "axios";

const FileCard = ({ file }) => {
  const { onCopy, hasCopied } = useClipboard(file.url);
  const onDelete = (ev) => {
    ev.preventDefault();
    axios
      .delete(`/api/files/${file.id}`)
      .then(res => {
        console.log("File deleted", res);
        location.reload();
      })
      .catch(err => {
        console.error("Error", err);
      });
  };
  return (
    <Box w="100" backgroundColor="white" borderRadius="8px" p="2" mb="2">
      <Flex align="center">
        <Link href={file.url} mr="2">
          <Image src={file.url} alt={file.name} w="220px" />
        </Link>
        <Box>
          <Heading as="h2" size="sm">
            {file.name}
          </Heading>
          <Text color="gray.500">Size: {file.size}</Text>
          <Text>
            URL: <Link href={file.url}>{file.url}</Link>
          </Text>
        </Box>
        <Flex direction="column" justify="space-around" h="100%">
          <Tooltip
            hasArrow
            label="Copy URL"
            placement="top"
            aria-label="copy-tooltip"
          >
            <IconButton
              aria-label="delete"
              icon={hasCopied ? "check" : "copy"}
              color="blue.400"
              mb="4"
              onClick={onCopy}
            />
          </Tooltip>
          <Tooltip
            hasArrow
            label="Remove file"
            placement="bottom"
            aria-label="delete-tooltip"
          >
            <IconButton
              aria-label="delete"
              icon="delete"
              color="red.400"
              onClick={onDelete}
            />
          </Tooltip>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FileCard;
