import { NextApiHandler } from "next";
import { File } from "src/interfaces/File";
import { v4 } from "uuid";
import fileSystem from "fs";
import { FILES_DATA_PATH } from "pages/api/files/constants";
const fs = fileSystem.promises;

const files: NextApiHandler = async (req, res) => {
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

export default files;
