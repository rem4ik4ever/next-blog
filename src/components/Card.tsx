import React from "react";
import { Box, useColorMode } from "@chakra-ui/core";

const Card = (props) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "white",
    dark: "gray.800",
  };
  // const textColor = {
  //   light: "",
  //   dark: "white",
  // };
  return (
    <Box
      {...props}
      borderRadius="8px"
      boxShadow={"md"}
      my="5"
      p="5"
      // color={textColor[colorMode]}
      backgroundColor={bgColor[colorMode]}
    >
      {props.children}
    </Box>
  );
};

export default Card;
