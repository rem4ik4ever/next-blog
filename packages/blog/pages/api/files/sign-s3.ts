import { NextApiHandler } from "next";
import signS3Upload from "src/utils/aws-helper/signS3Upload";

const signS3: NextApiHandler = async (req, res) => {
  if (process.env.NODE_ENV !== "development") {
    res.statusCode = 404;
    res.end();
    return;
  }
  try {
    const { filename, filetype } = req.body;
    const result = await signS3Upload({ filename, filetype });
    res.statusCode = 200;
    res.end(JSON.stringify(result));
  } catch (error) {
    console.error("S3 upload error", error);
    res.statusCode = 500;
    res.end();
  }
};

export default signS3;
