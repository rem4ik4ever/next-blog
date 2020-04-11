import { NextApiHandler } from "next";
import fileSystem from "fs";
import { BlogInterface } from "src/interfaces/Blog";
import { BlogStatus } from "src/enums/BlogStatus";
import { BLOGS_DATA_PATH } from "pages/api/blogs/constants";
import { allBlogs } from "pages/api/blogs/utils";

const fs = fileSystem.promises;

const saveBlogFile = async (filename: string, payload: BlogInterface) => {
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
const getSlug = (title: string) =>
  title.toLocaleLowerCase().split(" ").join("-");

const generateFilename = (title: string, timestamp: number) =>
  `${timestamp}-${getSlug(title)}.json`;

const saveToDraft = async (req, res) => {
  const timestamp = new Date().getTime();
  const payload = {
    ...req.body,
    author: "Rem Kim",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    slug: getSlug(req.body.title),
    status: BlogStatus.Draft,
    id: timestamp,
  };
  const filename = generateFilename(payload.title, timestamp);
  const result = await saveBlogFile(filename, payload);
  if (!result) {
    res.statusCode = 500;
    res.end();
  }
  res.statusCode = 200;
  res.end(JSON.stringify(payload, undefined, 2));
};

const listBlogs = (req, res) => {
  // const filters = req.body?.filters;
  try {
    const payload = allBlogs();
    res.statusCode = 200;
    res.end(JSON.stringify(payload));
  } catch (error) {
    console.error(error.message);
    res.statusCode = 500;
    res.end();
  }
};

const blog: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    saveToDraft(req, res);
  } else {
    listBlogs(req, res);
  }
};

export default blog;
