import { NextApiHandler } from "next";
import devonlyMiddleware from "src/middlewares/devonly.middleware";
import utilities from "src/utilities";

const NOT_FOUND = "Not found";
const OK = "Ok";

const handler: NextApiHandler = async (req, res) => {
  const { s3DeleteFile } = utilities.AWS_S3;
  const { allFiles, writeJSONToFile } = utilities.Files;
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
    const file = files.find((fl) => fl.id === id);
    if (!file?.sizes || !Object.keys(file.sizes).includes(String(size))) {
      res.statusCode = 404;
      return res.end(NOT_FOUND);
    }
    const sizeObject = file.sizes[String(size)];
    await s3DeleteFile(sizeObject.key);
    delete file.sizes[String(size)];
    await writeJSONToFile("./data/assets", file);
    res.statusCode = 200;
    res.end(OK);
  } catch (err) {
    console.error(err);
    res.statusCode = 404;
    res.end(NOT_FOUND);
  }
};

export default handler;
