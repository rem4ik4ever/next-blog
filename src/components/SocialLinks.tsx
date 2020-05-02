import React from "react";
import {
  Box,
  Flex,
  Link
} from "@chakra-ui/core";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const SocialLinks = (props) => (
  <Flex justify="center" {...props}>
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
);

export default SocialLinks;
