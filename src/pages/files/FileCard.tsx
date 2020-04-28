import React, { useState } from "react";
import {
  Box,
  Flex,
  Link,
  Image,
  Heading,
  Text,
  Tooltip,
  IconButton,
  useClipboard,
  Input,
  InputGroup,
  InputRightAddon,
  List,
  ListItem,
  FormControl,
  FormLabel
} from "@chakra-ui/core";
import axios from "axios";
import { getImageURL } from "src/images/utils";
import FormatUrl from "./FormatUrl";

const FileCard = ({ file }) => {
  const [size, setSize] = useState(200);
  const { onCopy, hasCopied } = useClipboard(getImageURL(file.url, size));
  const onDelete = ev => {
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
  const formatImage = async ev => {
    ev.preventDefault();
    await axios.get(
      `/api/images?source=${encodeURIComponent(file.url)}&w=${size}`
    );
    location.reload();
  };
  return (
    <Box w="100" backgroundColor="white" borderRadius="8px" p="2" mb="2">
      <Flex align="center">
        <Link href={getImageURL(file.url, 220)} mr="2">
          <Image src={getImageURL(file.url, 220)} alt={file.name} w="220px" />
        </Link>
        <Flex
          direction="column"
          alignSelf="stretch"
          justifyContent="space-between"
          flex="1"
        >
          <Box>
            <Heading as="h2" size="sm">
              {file.name}
            </Heading>
            <Text color="gray.500">Size: {file.size}</Text>
            {file.sizes && (
              <List>
                {Object.keys(file.sizes).map(size => (
                  <ListItem key={file.sizes[size].key}>
                    <FormatUrl file={file} size={size} />{" "}
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
          <Flex justifyContent="space-around">
            <Flex>
              <InputGroup>
                <Input
                  type="number"
                  name="size"
                  maxW="100px"
                  textAlign="right"
                  value={size}
                  onChange={ev => setSize(+ev.target.value)}
                />
                <InputRightAddon children="px" />
              </InputGroup>
              <Tooltip
                hasArrow
                label="Format Image"
                placement="top"
                aria-label="format-image"
              >
                <IconButton
                  aria-label="edit image"
                  icon={"edit"}
                  color="blue.400"
                  mb="4"
                  onClick={formatImage}
                />
              </Tooltip>
            </Flex>
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
      </Flex>
    </Box>
  );
};

export default FileCard;
