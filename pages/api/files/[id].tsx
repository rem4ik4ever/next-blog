import { NextApiHandler } from "next";
import { allFiles } from "src/pages/api/files/utils";
import s3Delete from "src/utils/aws-helper/s3Delete";
import { formatFilename } from "src/utils/files";
import { removeOldFile } from "src/cms/blogs/utils";

const getFileKeyFromUrl = (url: string) => {
  try {
    const key = url.split("/assets/")[1];
    return `assets/${key}`;
  } catch (err) {
    return null;
  }
};
const handler: NextApiHandler = async (req, res) => {
  if (req.method === "DELETE") {
    const { id } = req.query;
    const files = allFiles();
    const file = files.find(fl => String(fl.id) === String(id));
    if (!file) {
      res.statusCode = 404;
      res.end();
    } else {
      const key = getFileKeyFromUrl(file.url);
      const deleted = await s3Delete(key);
      if (!deleted) {
        res.statusCode = 400;
        res.end("Failed to delete file");
      } else {
        removeOldFile(file.filename, 'assets');
        res.statusCode = 200;
        res.end("File was deleted");
      }
    }
  }
};

export default handler;
