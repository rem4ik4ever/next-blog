import React, { useState } from "react";
import {
  Text,
  Flex,
  useTheme,
  Heading,
  Link,
  Avatar,
  Button,
  useColorMode,
  IconButton
} from "@chakra-ui/core";
import NextLink from "next/link";
import urlMap from "./urlMap";
import { FaBars } from "react-icons/fa";
import NavigationDrawer from "./NavigationDrawer";

const MenuItem = ({ children, to, isCompact = false }) => {
  const theme = useTheme();
  return (
    <NextLink href={to} passHref>
      <Link>
        <Text
          // color={theme.colors.white}
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
  const [showDrawer, toggleDrawer] = useState(false);
  const isCompact = true; // router && router.route !== "/";
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = {
    light: "cyan.700",
    dark: "gray.700"
  };
  return (
    <Flex
      as="nav"
      width="full"
      color="white"
      justify="center"
      backgroundColor={bgColor[colorMode]}
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
              src="https://rem-blog-bucket.s3.us-east-2.amazonaws.com/assets/26417e22-9504-4747-9c27-79dfad9ac62f-50.png"
              size={isCompact ? "md" : "xl"}
              border={isCompact ? "none" : "3px solid white"}
            />
            <Heading as="h1" size="lg" marginLeft="2">
              Rem Kim
            </Heading>
          </Flex>
        </NextLink>
        <Flex display={{ sm: "flex", xs: "none" }} align="center">
          {urlMap.map(nav => (
            <MenuItem
              isCompact={isCompact}
              to={nav.url}
              key={`url-${nav.name
                .trim()
                .split(" ")
                .join("-")}`}
            >
              {nav.name}
            </MenuItem>
          ))}
          <CmsMenu />
          <IconButton
            ml="2"
            aria-label="Color Mode"
            size="md"
            icon={colorMode === "light" ? "moon" : "sun"}
            onClick={e => toggleColorMode()}
            color="gray.50"
            backgroundColor="none"
          />
        </Flex>
        <Flex display={{ sm: "none", xs: "flex" }}>
          <IconButton
            icon={FaBars}
            backgroundColor="none"
            aria-label="toggle menu"
            onClick={() => toggleDrawer(true)}
          />
          <NavigationDrawer
            onClose={() => toggleDrawer(false)}
            isOpen={showDrawer}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageHeader;
