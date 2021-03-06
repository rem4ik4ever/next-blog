import { NextApiHandler } from "next";
import { removeOldFile } from "src/cms/blogs/utils";
import devonlyMiddleware from "src/middlewares/devonly.middleware";
import utilities from "src/utilities";

const getFileKeyFromUrl = (url: string) => {
  try {
    const key = url.split("/assets/")[1];
    return `assets/${key}`;
  } catch (err) {
    return null;
  }
};
const handler: NextApiHandler = async (req, res) => {
  try {
    const { allFiles } = utilities.Files;
    const { s3DeleteFile } = utilities.AWS_S3;
    await devonlyMiddleware(req, res);
    if (req.method === "DELETE") {
      const { id } = req.query;
      const files = allFiles();
      const file = files.find((fl) => String(fl.id) === String(id));
      if (!file) {
        res.statusCode = 404;
        res.end();
      } else {
        const key = getFileKeyFromUrl(file.url);
        const deleted = await s3DeleteFile(key);
        if (!deleted) {
          res.statusCode = 400;
          res.end("Failed to delete file");
        } else {
          removeOldFile(file.filename, "assets");
          res.statusCode = 200;
          res.end("File was deleted");
        }
      }
    }
  } catch (_) {
    res.statusCode = 404;
    res.end();
  }
};

export default handler;
