import React from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  Tooltip,
  IconButton,
  useClipboard,
  InputLeftAddon
} from "@chakra-ui/core";

const FormatUrl = ({ file, size }) => {
  const { onCopy, hasCopied } = useClipboard(file.sizes[size].Location);
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
        </InputGroup>
      </FormControl>
    </Flex>
  );
};

export default FormatUrl;
