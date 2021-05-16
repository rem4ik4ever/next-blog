import React, { useState } from "react";
import {
  Flex,
  Heading,
  Avatar,
  useColorMode,
  IconButton,
} from "@chakra-ui/core";
import { FaBars } from "react-icons/fa";
import NavigationDrawer from "./NavigationDrawer";
const PageHeader = () => {
  const [showDrawer, toggleDrawer] = useState(false);
  const isCompact = true; // router && router.route !== "/";
  return (
    <Flex
      top={{ xs: "none", md: "0" }}
      position={{ base: "relative", md: "sticky" }}
      display="flex"
      justifyContent="space-between"
      flexDir="row"
      width="100%"
      p="16px 36px"
      paddingBottom="0px"
    >
      <Flex align="center">
        <Avatar
          name="Rem Kim"
          src="https://rem-blog-bucket.s3.us-east-2.amazonaws.com/assets/26417e22-9504-4747-9c27-79dfad9ac62f-50.png"
          size={isCompact ? "md" : "xl"}
          border={isCompact ? "none" : "3px solid white"}
        />
        <Heading as="h1" size="md" fontWeight="400" marginLeft="2">
          Rem Kim
        </Heading>
      </Flex>
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
  );
};

{
  /* <Flex
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
    {urlMap.map((nav) => (
      <MenuItem
        isCompact={isCompact}
        to={nav.url}
        key={`url-${nav.name.trim().split(" ").join("-")}`}
      >
        {nav.name}
      </MenuItem>
    ))}
    <CmsMenu />
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
</Flex> */
}

export default PageHeader;
