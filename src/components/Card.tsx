import React from "react";
import { Box } from "@chakra-ui/core";

const Card = (props) => (
  <Box
    {...props}
    borderRadius="8px"
    boxShadow={"md"}
    my="5"
    p="5"
    backgroundColor="white"
  >
    {props.children}
  </Box>
);

export default Card;
