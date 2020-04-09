import React from "react";
import { Text, Flex, useTheme, Link, Heading, Avatar } from "@chakra-ui/core";
import NextLink from "next/link";
import { useRouter } from "next/dist/client/router";

const MenuItem = ({ children, to, isCompact }) => {
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

const PageHeader = () => {
  const router = useRouter();
  const isCompact = router && router.route !== "/";
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
              src="imgs/rem-800.png"
              size={isCompact ? "md" : "xl"}
              border={isCompact ? "none" : "3px solid white"}
            />
            <Heading as="h1" size="lg" marginLeft="2">
              Rem Kim
            </Heading>
          </Flex>
        </NextLink>
        <Flex display={{ sm: "flex", xs: "none" }}>
          <MenuItem isCompact={isCompact} to="/">
            Home
          </MenuItem>
          <MenuItem isCompact={isCompact} to="about">
            About Me
          </MenuItem>
          <MenuItem isCompact={isCompact} to="blog">
            Blog
          </MenuItem>
          <MenuItem isCompact={isCompact} to="/experience">
            Experience
          </MenuItem>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageHeader;
