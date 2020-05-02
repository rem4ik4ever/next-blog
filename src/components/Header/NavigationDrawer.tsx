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
  Flex
} from "@chakra-ui/core";
import urlMap from "./urlMap";
import Link from "next/link";
import SocialLinks from "../SocialLinks";

const NavigationDrawer = ({ onClose, isOpen }) => {
  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <Flex justify="center">Menu</Flex>
        </DrawerHeader>
        <DrawerBody>
          {urlMap.map(nav => (
            <Link
              href={nav.url}
              passHref
              key={`nav-${nav.name
                .trim()
                .split(" ")
                .join("-")}`}
            >
              <Box padding="5">
                <Text fontSize="lg" fontWeight="light">
                  {nav.name}
                </Text>
              </Box>
            </Link>
          ))}
        </DrawerBody>
        <DrawerFooter textAlign="center">
            <SocialLinks flexGrow="1" />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NavigationDrawer;
