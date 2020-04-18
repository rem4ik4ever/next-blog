import fileSystem from "fs";
import { FILES_DATA_PATH } from "./constants";

export const allFiles = () => {
  const files = fileSystem.readdirSync(FILES_DATA_PATH);
  const parsedFiles = files.map(file => {
    return JSON.parse(
      fileSystem.readFileSync(`${FILES_DATA_PATH}/${file}`, "utf8")
    );
  });
  return parsedFiles.sort((a, b) => {
    const aDate = new Date(a.createdAt);
    const bDate = new Date(b.createdAt);
    if (aDate > bDate) return -1;
    if (aDate < bDate) return 1;
    return 0;
  });
};
