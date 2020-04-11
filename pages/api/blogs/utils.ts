import fileSystem from "fs";
import { BLOGS_DATA_PATH } from "./constants";

export const allBlogs = () => {
  const files = fileSystem.readdirSync(BLOGS_DATA_PATH);
  return files.map((file) => {
    return JSON.parse(
      fileSystem.readFileSync(`${BLOGS_DATA_PATH}/${file}`, "utf8")
    );
  });
};
