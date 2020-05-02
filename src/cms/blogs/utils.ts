import { BLOGS_DATA_PATH } from "./constants";
import fileSystem from "fs";
import { BlogInterface } from "src/interfaces/Blog";

const fs = fileSystem.promises;
const FILES_DATA_PATH = './data/assets';
export const allBlogs = () => {
  const files = fileSystem.readdirSync(BLOGS_DATA_PATH);
  return files.map((file) => {
    return JSON.parse(
      fileSystem.readFileSync(`${BLOGS_DATA_PATH}/${file}`, "utf8")
    );
  });
};

export const getSlug = (title: string) =>
  title
    .toLocaleLowerCase()
    .split(" ")
    .map((word) => word.replace(/[^0-9a-z]/gi, ""))
    .join("-");

export const generateFilename = (title: string, timestamp: number) =>
  `${timestamp}-${getSlug(title)}.json`;

export const saveBlogFile = async (
  filename: string,
  payload: BlogInterface
) => {
  try {
    await fs.writeFile(
      `${BLOGS_DATA_PATH}/${filename}`,
      JSON.stringify(payload, null, 2)
    );
  } catch (err) {
    console.error("Saving blog failed:", err.message);
    return false;
  }
  return true;
};

export const removeOldFile = (filename: string, dataType="blogs") => {
  const path = dataType === 'blogs' ? BLOGS_DATA_PATH : FILES_DATA_PATH;
  fileSystem.unlinkSync(`${path}/${filename}`);
};

export const updateBlogFile = async (payload: BlogInterface, id: string) => {
  try {
    const blogs = allBlogs();
    const originalBlog = blogs.find((blog) => String(blog.id) === String(id));
    const currentFilename = generateFilename(
      originalBlog.title,
      originalBlog.id
    );
    const filename = generateFilename(payload.title, originalBlog.id);
    const nameChanged = filename !== currentFilename;

    const result = await saveBlogFile(filename, payload);
    if (!result) throw new Error("Failed to save blog");

    if (nameChanged) removeOldFile(currentFilename);
  } catch (error) {
    console.error(error);
    return false;
  }
  return true;
};
