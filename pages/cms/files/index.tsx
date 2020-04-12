import { Flex, Heading } from "@chakra-ui/core";

const FilesPage = () => {
  return (
    <Flex direction="column">
      <Heading as="h1" size="md">
        Files
      </Heading>
      <Flex>List of files here</Flex>
    </Flex>
  );
};

export default FilesPage;
