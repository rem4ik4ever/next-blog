import { Flex, Heading, Grid, Text, Image, Link, Box } from "@chakra-ui/core";
import { GetStaticProps } from "next";
import Card from "src/components/Card";
import fetch from "node-fetch";

const FilesPage = ({ files }) => {
  console.log("Files", files);
  return (
    <Flex direction="column">
      <Heading as="h1" size="md">
        Files
      </Heading>
      <Flex direction="column">
        {files.map((file, idx) => (
          <Card key={`file-${idx}`} w="100">
            <Flex>
              <Link href={file.url} mr="2">
                <Image src={file.url} alt={file.name} w="220px" />
              </Link>
              <Box>
                <Heading as="h2" size="sm">
                  {file.name}
                </Heading>
                <Text color="gray.500">Size: {file.size}</Text>
                <Text>
                  Url:<Link href={file.url}>{file.url}</Link>
                </Text>
              </Box>
            </Flex>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const files = await fetch(`${process.env.HOST_URL}/api/files`);
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
