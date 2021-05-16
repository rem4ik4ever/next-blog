import React from "react";
import { Link, useColorMode } from "@chakra-ui/core";
import NextLink from "next/link";

const MyLink = (props) => {
  const { colorMode } = useColorMode();
  const color = {
    light: "teal.500",
    dark: "blue.500",
  };
  return (
    <NextLink {...props}>
      <Link color={color[colorMode]}>{props.children}</Link>
    </NextLink>
  );
};

export default MyLink;
