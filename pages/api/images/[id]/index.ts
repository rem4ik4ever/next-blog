import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import devonlyMiddleware from "src/middlewares/devonly.middleware";
import { v4 } from "uuid";
import { fetchAndTransformImageFromUrl } from "pages/api/_utils/images.utils";
import s3UploadFile from "pages/api/_utils/aws-s3.utils/s3UploadFile";
import S3UploadResponse from "pages/api/_utils/aws-s3.utils/interfaces/S3UploadResponse.interface";
import { saveImageSizeToFile } from "pages/api/_utils/files.utils";
import { allFiles } from "src/pages/api/files/utils";
import { whoops, allGood } from "pages/api/_utils/response.utils";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    await devonlyMiddleware(req, res);
    const { id } = req.query;
    const file = allFiles().find(fl => String(fl.id) === String(id));
    if (!file) {
      return whoops(res);
    }
    const { source, w } = req.body;
    if (!source) {
      whoops(res);
    }
    const transformedImage = await fetchAndTransformImageFromUrl(
      String(source),
      String(w)
    );
    const uuid = v4();
    const uploadResult: S3UploadResponse = await s3UploadFile(
      transformedImage,
      `assets/${uuid}-${w}.png`
    );
    await saveImageSizeToFile(String(source), String(w), uploadResult);

    allGood(res);
  } catch (err) {
    console.error(err);
    whoops(res);
  }
};

export default handler;
