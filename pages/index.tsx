import { NextPage } from "next";
import NextLink from "next/link";
import { Heading, Link, Flex } from "@chakra-ui/core";

const IndexPage: NextPage = () => {
  return (
    <Flex flexDirection="column" alignItems="center" m={4}>
      <Heading as="h1" size="2xl">
        Hello World
      </Heading>
      <NextLink href="/about" passHref>
        <Link>About page</Link>
      </NextLink>
    </Flex>
  );
};

export default IndexPage;
