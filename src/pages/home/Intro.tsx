import React from "react";
import { Text, Box, Avatar, Flex } from "@chakra-ui/core";

const Intro = () => {
  return (
    <Flex direction="column" borderRadius="8px" maxW="xl">
      <Box
        backgroundColor="blue.400"
        w="full"
        p="5"
        boxShadow="md"
        borderRadius="8px"
      >
        <Text fontSize="xl" fontWeight="light" color="white">
          Hello there 👋! My name is Rem. I'm a Software Engineer👨‍💻 with more
          than {new Date().getFullYear() - 2014} years of experience. With this
          blog I would like to share knowledge and hope you find something
          useful for you! Enjoy 🎉!
        </Text>
      </Box>
      {/* <Flex justify="flex-end" mt="2" align="center">
        <Avatar
          name="Rem Kim"
          src="/imgs/rem-800.png"
          size={"md"}
          border="1px solid white"
        />
      </Flex> */}
    </Flex>
  );
};

export default Intro;
