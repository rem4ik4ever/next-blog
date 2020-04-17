import {
  Flex,
  Heading,
  Text,
  Image,
  Link,
  Box,
  IconButton,
  Tooltip,
} from "@chakra-ui/core";
import { GetStaticProps } from "next";
import fetch from "node-fetch";

const FilesPage = ({ files }) => {
  return (
    <Flex direction="column">
      <Heading as="h1" size="md">
        Files
      </Heading>
      <Flex direction="column">
        {files.map((file, idx) => (
          <Box
            key={`file-${idx}`}
            w="100"
            backgroundColor="white"
            borderRadius="8px"
            p="2"
            mb="2"
          >
            <Flex align="center">
              <Link href={file.url} mr="2">
                <Image src={file.url} alt={file.name} w="220px" />
              </Link>
              <Box>
                <Heading as="h2" size="sm">
                  {file.name}
                </Heading>
                <Text color="gray.500">Size: {file.size}</Text>
                <Text>
                  URL: <Link href={file.url}>{file.url}</Link>
                </Text>
              </Box>
              <Flex direction="column" justify="space-around" h="100%">
                <Tooltip
                  hasArrow
                  label="Copy URL"
                  placement="top"
                  aria-label="copy-tooltip"
                >
                  <IconButton
                    aria-label="delete"
                    icon="copy"
                    color="blue.400"
                    mb="4"
                  />
                </Tooltip>
                <Tooltip
                  hasArrow
                  label="Remove file"
                  placement="bottom"
                  aria-label="delete-tooltip"
                >
                  <IconButton
                    aria-label="delete"
                    icon="delete"
                    color="red.400"
                  />
                </Tooltip>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const files = await fetch(`${process.env.NOW_URL}/api/files`);
    return {
      props: { files: await files.json() },
    };
  } catch (error) {
    return {
      props: { files: [] },
    };
  }
};

export default FilesPage;
