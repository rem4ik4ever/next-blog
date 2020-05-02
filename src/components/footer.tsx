import React from "react";
import {
  Grid,
  Flex,
  Text,
  Heading,
  List,
  ListItem,
  Link,
  useColorMode,
  Icon
} from "@chakra-ui/core";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Box } from "@chakra-ui/core";
import SocialLinks from "./SocialLinks";

const PageFooter = () => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "cyan.700",
    dark: "gray.700"
  };
  return (
    <Flex
      direction="column"
      align="center"
      p="5"
      w="full"
      color="white"
      backgroundColor={bgColor[colorMode]}
    >
      <Flex direction="column" w="100%">
        <SocialLinks />
      </Flex>
      <Flex p="5">
        <Text>
          © Rem Kim - Powered by <Link href="https://nextjs.org">Next.js</Link>
        </Text>
      </Flex>
    </Flex>
  );
};

export default PageFooter;
