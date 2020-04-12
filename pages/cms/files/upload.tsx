import axios from "axios";
import { useState, createRef } from "react";
import { formatFilename } from "src/utils/files";
import { uploadToS3 } from "src/utils/aws-helper/s3Upload";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  useToast,
} from "@chakra-ui/core";

const saveToFilesystem = async (file, url) => {
  try {
    const result = await axios.post("/api/files", {
      name: file.name,
      filetype: file.filetype,
      size: file.size,
      url,
    });
    console.log("FS upload result:", result);
  } catch (error) {
    console.error("FS save error", error.message);
  }
};

const FilePage = () => {
  const [files, setFiles] = useState([]);
  const [isUploading, setUploading] = useState(false);
  const fileInputRef = createRef<HTMLInputElement>();
  const toast = useToast();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setUploading(true);
    try {
      const result = await axios.post("/api/files/sign-s3", {
        filename: formatFilename(files[0].name),
        filetype: files[0].type,
      });
      await uploadToS3(files[0], result.data.signedRequest);
      await saveToFilesystem(files[0], result.data.url);
      toast({
        title: "File saved",
        description: "All good!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error uploading image", error.message);
      toast({
        title: "Failed to save file",
        description: "Please try again later",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    setUploading(false);
  };
  const onChangeHandler = (event) => {
    setFiles(event.target.files);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl mb="4">
        <FormLabel>Select file</FormLabel>
        <Input
          type="file"
          name="file"
          id="file"
          onChange={onChangeHandler}
          isRequired={true}
        />
        <FormHelperText>Maximum size 10mb</FormHelperText>
      </FormControl>
      <Button
        type="submit"
        variant="solid"
        color="white"
        backgroundColor="red.500"
        isDisabled={isUploading}
      >
        Upload
      </Button>
    </form>
  );
};

export default FilePage;
