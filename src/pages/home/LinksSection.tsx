import React from "react";
import { Flex, Heading, Box, SimpleGrid } from "@chakra-ui/core";
import Link from "next/link";
import styled from "@emotion/styled";

const LinkBox = styled(Box)`
  cursor: pointer;
  border-radius: 8px;
  transition: box-shadow ease-in-out 200ms;
  &:hover {
    box-shadow: 0 0 4px black;
  }
`;

const LinksSection = (props) => {
  return (
    <SimpleGrid columns={[1, 2]} spacing="2" w="full" {...props}>
      <Link href="/about">
        <LinkBox backgroundColor="red.300" p="3">
          <Heading as="h1" size="md" color="white">
            🤗 About me
          </Heading>
        </LinkBox>
      </Link>
      <Link href="/experience">
        <LinkBox backgroundColor="orange.300" p="3">
          <Heading as="h1" size="md" color="white">
            🚀 My experience
          </Heading>
        </LinkBox>
      </Link>
    </SimpleGrid>
  );
};

export default LinksSection;
