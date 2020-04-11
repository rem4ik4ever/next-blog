import React, { useState } from "react";
import {
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/core";

interface TagInputProps {
  onAdd: Function;
  label: string;
  description: string;
}

const TagInput = ({ onAdd, label, description }: TagInputProps) => {
  const [tag, setState] = useState("");
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Flex>
        <Input
          type="text"
          id="tag-input"
          value={tag}
          onChange={(ev) => setState(ev.target.value.trim())}
          onKeyDown={(ev) => {
            if (ev.keyCode === 13 || ev.keyCode === 32) {
              ev.preventDefault();
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
      <FormHelperText>{description}</FormHelperText>
    </FormControl>
  );
};

export default TagInput;
