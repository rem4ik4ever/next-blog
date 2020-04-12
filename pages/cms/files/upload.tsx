import axios from "axios";
import { useState } from "react";
import { formatFilename } from "src/utils/files";
import { uploadToS3 } from "src/utils/aws-helper/s3Upload";

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
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post("/api/files/sign-s3", {
        filename: formatFilename(files[0].name),
        filetype: files[0].type,
      });
      await uploadToS3(files[0], result.data.signedRequest);
      await saveToFilesystem(files[0], result.data.url);
    } catch (error) {
      console.error("Error uploading image", error.message);
    }
  };
  const onChangeHandler = (event) => {
    setFiles(event.target.files);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="file" id="file" onChange={onChangeHandler} />
      <input type="submit" />
    </form>
  );
};

export default FilePage;
