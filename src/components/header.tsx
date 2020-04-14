import React from "react";
import {
  Text,
  Flex,
  useTheme,
  Heading,
  Link,
  Avatar,
  Button,
} from "@chakra-ui/core";
import NextLink from "next/link";
import { useRouter } from "next/dist/client/router";

const MenuItem = ({ children, to, isCompact = false }) => {
  const theme = useTheme();
  return (
    <NextLink href={to} passHref>
      <Link>
        <Text
          color={theme.colors.white}
          ml={3}
          mr={3}
          fontSize={isCompact ? "md" : "lg"}
        >
          {children}
        </Text>
      </Link>
    </NextLink>
  );
};

const CmsMenu = () => {
  if (process.env.NODE_ENV === "development") {
    return (
      <>
        <MenuItem to="/cms">CMS</MenuItem>
        <NextLink href="/cms/write" passHref>
          <Button variant="solid" backgroundColor="red.500">
            POST
          </Button>
        </NextLink>
      </>
    );
  }
  return null;
};

const PageHeader = () => {
  const isCompact = true; // router && router.route !== "/";
  const theme = useTheme();
  return (
    <Flex
      as="nav"
      width="full"
      color={theme.colors.white}
      justify="center"
      backgroundColor="teal.500"
      padding={isCompact ? 2 : 5}
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
              src="/imgs/rem-800.png"
              size={isCompact ? "md" : "xl"}
              border={isCompact ? "none" : "3px solid white"}
            />
            <Heading as="h1" size="lg" marginLeft="2">
              Rem Kim
            </Heading>
          </Flex>
        </NextLink>
        <Flex display={{ sm: "flex", xs: "none" }} align="center">
          <MenuItem isCompact={isCompact} to="/">
            Home
          </MenuItem>
          <MenuItem isCompact={isCompact} to="/about">
            About Me
          </MenuItem>
          <MenuItem isCompact={isCompact} to="/blog">
            Blog
          </MenuItem>
          <MenuItem isCompact={isCompact} to="/experience">
            Experience
          </MenuItem>
          <CmsMenu />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageHeader;
