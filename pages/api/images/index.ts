import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import AWS from "aws-sdk";
import { getS3Instance } from "src/utils/aws-helper/getS3Instance";
import devonlyMiddleware from "src/middlewares/devonly.middleware";
import { allFiles } from "src/pages/api/files/utils";
import { FILES_DATA_PATH } from "src/pages/api/files/constants";
import fileSystem from "fs";
import { v4 } from "uuid";

const fs = fileSystem.promises;
const sharp = require("sharp");

const uploadToS3 = (buffer: Buffer, key) => {
  return new Promise((resolve, reject) => {
    const S3 = getS3Instance();
    const params = {
      Bucket: process.env.S3_BUCKET,
      Key: key,
      Body: buffer,
      ACL: "public-read"
    };
    S3.upload(params, (err, data) => {
      if (err) {
        console.error("AWS upload error: ", err);
        reject(err);
      } else {
        console.log("AWS upload data: ", data);
        resolve(data);
      }
    });
  });
};

const transformImageFromUrl = async (source, w) => {
  const payload = await fetch(String(source));
  let transform = sharp(await payload.buffer());
  if (w) {
    transform = transform.resize(+w);
  }
  transform = transform.webp({ loseless: true });
  return await transform.toBuffer();
};

const saveFile = async (source, size, formattedParams) => {
  const files = allFiles();
  const file = files.find(fl => fl.url === source);
  file.sizes = file.sizes || {};
  file.sizes[size] = formattedParams;
  const filename = `${file.id}-${file.name
    .toLowerCase()
    .split(" ")
    .join("-")}.json`;
  await fs.writeFile(
    `${FILES_DATA_PATH}/${filename}`,
    JSON.stringify(file, null, 2)
  );
};

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    await devonlyMiddleware(req, res);
    const { source, w } = req.query;
    if (!source) {
      res.statusCode = 404;
      res.end("Missing URL");
    }
    const transformedImage = await transformImageFromUrl(source, w);
    const uuid = v4();
    const uploadResult = await uploadToS3(
      transformedImage,
      `assets/${uuid}-${w}.webp`
    );
    await saveFile(source, w, uploadResult);

    res.statusCode = 200;
    res.end("Success");
  } catch (err) {
    console.error(err);
    res.statusCode = 404;
    res.end();
  }
};

export default handler;
