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
import { SubscriptionForm } from "./SubscriptionForm";

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
       <Link href="https://www.flows.so?utm_source=remkim.com&utm_medium=banner&utm_campaign=banner_link&utm_id=rblg">
        <Flex mb="3">
          <Text fontSize="16px">
            Email automation for your business
          </Text>
          <Text color="yellow.400" ml="1" fontWeight="bold">Flows</Text>
        </Flex>
      </Link>
      <Link href="https://simple-pages.com">
        <Flex mb="3">
          <Text fontSize="16px">
            Build Website for free with
          </Text>
          <Text color="yellow.400" ml="1" fontWeight="bold">SimplePages</Text>
        </Flex>
      </Link>
      <Flex direction="column" w="100%" alignItems="center" textAlign="center">
        <SubscriptionForm />
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
