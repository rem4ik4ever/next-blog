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
} from "@chakra-ui/core";

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
      <Grid templateColumns="repeat(2, 1fr)">
        <Flex direction="column" w="100%">
          <Heading as="h1" size="md">
            Social
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/rem4ik4ever">GitHub</Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/TheRealRemKim">Twitter</Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/rem-kim-a8484379/">
                LinkedIn
              </Link>
            </ListItem>
          </List>
        </Flex>
        <Flex direction="column" w="100%">
          <Heading as="h1" size="md">
            Contacts
          </Heading>
          <List>
            <ListItem>
              <Link href="mailto:kim.rmi.93@gmail.com">
                kim.rmi.93@gmail.com
              </Link>
            </ListItem>
          </List>
        </Flex>
      </Grid>
      <Flex p="5">
        <Text>
          © Rem Kim - Powered by <Link href="https://nextjs.org">Next.js</Link>
        </Text>
      </Flex>
    </Flex>
  );
};

export default PageFooter;
