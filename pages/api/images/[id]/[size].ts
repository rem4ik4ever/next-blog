import { NextApiHandler } from "next";
import fs from 'fs';
import { allFiles } from "src/pages/api/files/utils";
import { ImageFile } from "src/interfaces/ImageFile";
import s3Delete from "src/utils/aws-helper/s3Delete";
import devonlyMiddleware from "src/middlewares/devonly.middleware";
import {FILES_DATA_PATH} from "src/pages/api/files/constants";

const NOT_FOUND = "Not found";
const OK = "Ok";

const handler: NextApiHandler = async (req, res) => {
  try {
    if (req.method !== "DELETE") {
      throw new Error("Invalid method");
    }
    await devonlyMiddleware(req, res);
    const { id, size } = req.query;

    if (!id || !size) {
      res.statusCode = 404;
      return res.end(NOT_FOUND);
    }
    const files = allFiles();
    const file = files.find(fl => fl.id === id);
    if (!file?.sizes || !Object.keys(file.sizes).includes(String(size))) {
      res.statusCode = 404;
      return res.end(NOT_FOUND);
    }
    const sizeObject = file.sizes[String(size)];
    await s3Delete(sizeObject.key);
    delete file.sizes[String(size)];
    const filename = `${file.id}-${file.name
      .toLowerCase()
      .split(" ")
      .join("-")}.json`;
    await fs.promises.writeFile(
      `${FILES_DATA_PATH}/${filename}`,
      JSON.stringify(file, null, 2)
    );

    res.statusCode = 200;
    res.end(OK);
  } catch (err) {
    console.error(err);
    res.statusCode = 404;
    res.end(NOT_FOUND);
  }
};

export default handler;
