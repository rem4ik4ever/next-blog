import fileSystem from "fs";
import { FILES_DATA_PATH } from "./constants";

export const allFiles = () => {
  const files = fileSystem.readdirSync(FILES_DATA_PATH);
  return files.map((file) => {
    return JSON.parse(
      fileSystem.readFileSync(`${FILES_DATA_PATH}/${file}`, "utf8")
    );
  });
};
