import React from "react";
import {
  Text,
  Flex,
  useTheme,
  Box,
  Link,
  Heading,
  Avatar,
} from "@chakra-ui/core";
import NextLink from "next/link";

const MenuItem = ({ children, to }) => {
  const theme = useTheme();
  return (
    <NextLink href={to} passHref>
      <Link>
        <Text color={theme.colors.white} ml={3} mr={3}>
          {children}
        </Text>
      </Link>
    </NextLink>
  );
};

const PageHeader = () => {
  const theme = useTheme();
  return (
    <Flex
      as="nav"
      width="full"
      color={theme.colors.white}
      justify="center"
      backgroundColor="teal.500"
      padding="5"
      shadow="lg"
    >
      <Flex
        direction="row"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={5}
        width={{ base: "full", md: "70%" }}
      >
        <NextLink href="/">
          <Flex align="center">
            <Avatar
              name="Rem Kim"
              src="imgs/rem-800.png"
              size="xl"
              border="3px solid white"
            />
            <Heading as="h1" size="lg" marginLeft="2">
              Rem Kim
            </Heading>
          </Flex>
        </NextLink>
        <Flex>
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="about">About Me</MenuItem>
          <MenuItem to="blog">Blog</MenuItem>
          <MenuItem to="/">Resume</MenuItem>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageHeader;
