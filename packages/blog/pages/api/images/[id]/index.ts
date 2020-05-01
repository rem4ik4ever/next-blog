import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import devonlyMiddleware from 'src/middlewares/devonly.middleware';
import { v4 } from 'uuid';
import utilities from '@rem-blog/utilities';

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { whoops, allGood } = utilities.Response;
  const { s3UploadFile } = utilities.AWS_S3;
  const {
    fetchAndTransformImageFromUrl
  } = utilities.Images;
  const {saveImageSizeToFile} = utilities.Files;
  try {
    await devonlyMiddleware(req, res);
    const { id } = req.query;
    const file = utilities.Files.allFiles().find(
      fl => String(fl.id) === String(id)
    );
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
    const uploadResult = await s3UploadFile(
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
