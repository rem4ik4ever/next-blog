import { NextPage } from "next";
import NextLink from "next/link";
import { Heading, Link, Flex } from "@chakra-ui/core";
import Intro from "src/pages/home/Intro";
import LinksSection from "src/pages/home/LinksSection";

const IndexPage: NextPage = () => {
  return (
    <Flex flexDirection="column" alignItems="center" m={4}>
      <Intro />
      <LinksSection mt="3" w="full" />
    </Flex>
  );
};

export default IndexPage;
