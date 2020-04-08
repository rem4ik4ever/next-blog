import React from "react";
import { Link } from "@chakra-ui/core";
import NextLink from "next/link";

const MyLink = (props) => {
  return (
    <NextLink {...props}>
      <Link color="teal.500">{props.children}</Link>
    </NextLink>
  );
};

export default MyLink;
