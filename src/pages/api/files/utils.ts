import fs from "fs";
import { FILES_DATA_PATH } from "./constants";

export const allFiles = () => {
  const files = fs.readdirSync(FILES_DATA_PATH);
  const parsedFiles = files.map(file => {
    return {
      ...JSON.parse(
      fs.readFileSync(`${FILES_DATA_PATH}/${file}`, "utf8")
    )
    , filename: file

  }});
  return parsedFiles.sort((a, b) => {
    const aDate = new Date(a.createdAt);
    const bDate = new Date(b.createdAt);
    if (aDate > bDate) return -1;
    if (aDate < bDate) return 1;
    return 0;
  });
};
