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
import {  GetServerSideProps } from "next";
import fetch from "node-fetch";
import FileUpload from "src/components/FileUpload";
import FileCard from "src/pages/files/FileCard";

const FilesPage = ({ files }) => {
  return (
    <Flex direction="column">
      <Heading as="h1" size="md">
        Files
      </Heading>
      <FileUpload />
      <Flex direction="column">
        {files.map((file, idx) => (
          <FileCard file={file} key={`file-${idx}`} />
        ))}
      </Flex>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
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
