import { Flex, Heading } from "@chakra-ui/core";
import { GetServerSideProps } from "next";
import fetch from "node-fetch";
import FileUpload from "src/components/FileUpload";
import FileCard from "src/pages/files/FileCard";
import ErrorPage from "next/error";

const FilesPage = ({ files }) => {
  if (process.env.NODE_ENV !== "development") {
    return <ErrorPage statusCode={404} />;
  }
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
      props: { files: await files.json() }
    };
  } catch (error) {
    return {
      props: { files: [] }
    };
  }
};

export default FilesPage;
