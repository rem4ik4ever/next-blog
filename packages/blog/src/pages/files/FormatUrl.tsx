import React from "react";
import axios from "axios";
import {
  Flex,
  FormControl,
  InputGroup,
  Input,
  IconButton,
  useClipboard,
  InputLeftAddon
} from "@chakra-ui/core";

const FormatUrl = ({ file, size }) => {
  const { onCopy, hasCopied } = useClipboard(file.sizes[size].Location);
  const handleDelete = async (ev) => {
    ev.preventDefault();
    try {
      const result = await axios.delete(`/api/images/${file.id}/${size}`);
      console.log('delete size', result);
      location.reload();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Flex>
      <FormControl w="full">
        <InputGroup>
          <InputLeftAddon children={`${size}px`} />
          <Input
            type="text"
            isDisabled={true}
            value={file.sizes[size].Location}
            name={size}
          />
          <IconButton
            aria-label="copy"
            icon={hasCopied ? "check" : "copy"}
            color="blue.400"
            mb="4"
            onClick={onCopy}
          />
          <IconButton
            aria-label="delete"
            icon={"delete"}
            color="red.400"
            mb="4"
            onClick={handleDelete}
          />
        </InputGroup>
      </FormControl>
    </Flex>
  );
};

export default FormatUrl;
