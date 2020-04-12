import { NextApiHandler, NextApiResponse, NextApiRequest } from "next";
import { File } from "src/interfaces/File";
import { v4 } from "uuid";
import fileSystem from "fs";
import { FILES_DATA_PATH } from "pages/api/files/constants";
import { allFiles } from "pages/api/files/utils";
const fs = fileSystem.promises;

const uploadFile = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, filetype, size, url } = req.body;
    const id = v4();
    let file: File = {
      name,
      filetype,
      size,
      url,
      id,
      createdAt: new Date().toISOString(),
    };
    const filename = `${id}-${name.toLowerCase().split(" ").join("-")}.json`;
    await fs.writeFile(
      `${FILES_DATA_PATH}/${filename}`,
      JSON.stringify(file, null, 2)
    );
    res.statusCode = 200;
    res.end(JSON.stringify(file));
  } catch (error) {
    res.statusCode = 500;
    res.end();
  }
};

const listFiles = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const files = allFiles();
    res.statusCode = 200;
    res.end(JSON.stringify(files));
  } catch (error) {
    res.statusCode = 404;
    res.end();
  }
};

const files: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    await uploadFile(req, res);
  } else {
    await listFiles(req, res);
  }
};

export default files;
