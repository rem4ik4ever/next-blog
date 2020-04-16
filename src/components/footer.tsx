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
  Icon,
} from "@chakra-ui/core";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Box } from "@chakra-ui/core";

const PageFooter = () => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "cyan.700",
    dark: "gray.700",
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
        <Flex justify="center">
          <Link href="https://github.com/rem4ik4ever" mx="2">
            <Box
              as={FaGithub}
              aria-label="github profile"
              color="gray.400"
              size="32px"
            />
          </Link>
          <Link href="https://twitter.com/TheRealRemKim" mx="2">
            <Box
              as={FaTwitter}
              aria-label="twitter profile"
              color="gray.400"
              size="32px"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/rem-kim-a8484379/" mx="2">
            <Box
              as={FaLinkedin}
              aria-label="linkedin profile"
              color="gray.400"
              size="32px"
            />
          </Link>
        </Flex>
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
