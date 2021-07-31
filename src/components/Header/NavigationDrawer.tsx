import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerBody,
  Box,
  DrawerContent,
  Text,
  DrawerHeader,
  DrawerFooter,
  Flex,
  Button,
} from "@chakra-ui/core";
import urlMap from "./urlMap";
import Link from "next/link";
import SocialLinks from "../SocialLinks";
import styled from "@emotion/styled";
import MyLink from "src/utils/MyLink";

const NavItem = styled(Box)`
  &:hover {
    text-decoration: underline;
  }
`;

const CmsMenu = () => {
  if (process.env.NODE_ENV === "development") {
    return (
      <>
        <MyLink href="/cms">
          <NavItem padding="5" cursor="pointer">
            <Text fontSize="lg" fontWeight="light" color="cyan.600">
              CMS
            </Text>
          </NavItem>
        </MyLink>
        <MyLink href="/cms/write">
          <NavItem padding="5" cursor="pointer">
            <Text fontSize="lg" color="blue.600">
              POST
            </Text>
          </NavItem>
        </MyLink>
      </>
    );
  }
  return null;
};

const NavigationDrawer = ({ onClose, isOpen }) => {
  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <Flex justify="center">Menu</Flex>
        </DrawerHeader>
        <DrawerBody>
          {urlMap.map((nav) => (
            <MyLink
              href={nav.url}
              passHref
              key={`nav-${nav.name.trim().split(" ").join("-")}`}
            >
              <NavItem padding="5" cursor="pointer">
                <Text fontSize="lg" fontWeight="light">
                  {nav.name}
                </Text>
              </NavItem>
            </MyLink>
          ))}
        </DrawerBody>
        <Flex flexDir="column" flex="1" justifyContent="flex-end" p="5">
          <CmsMenu />
        </Flex>
        <DrawerFooter textAlign="center">
          <SocialLinks flexGrow="1" />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NavigationDrawer;
