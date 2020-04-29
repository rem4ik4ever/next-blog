import fs from "fs";
import { v4 } from "uuid";
import { allFiles } from "src/pages/api/files/utils";
import { FILES_DATA_PATH } from "src/pages/api/files/constants";
import S3UploadResponse from "./aws-s3.utils/interfaces/S3UploadResponse.interface";

export const formatFilename = (filename: string, uuid: string = undefined) => {
  const randomString = uuid || v4();
  const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, "-");
  const newFilename = `assets/${randomString}-${cleanFileName}`;
  return newFilename.substring(0, 60);
};

export const makeFilename = ({ id, name }) =>
  `${id}-${name
    .toLowerCase()
    .split(" ")
    .join("-")}.json`;

export const writeJSONToFile = async (path: string, file) => {
  const filename = makeFilename(file);
  await fs.promises.writeFile(
    `${path}/${filename}`,
    JSON.stringify(file, null, 2)
  );
};

export const saveImageSizeToFile = async (
  source: string,
  size: string,
  uploadPayload: S3UploadResponse
) => {
  const files = allFiles();
  const file = files.find(fl => fl.url === source);
  file.sizes = file.sizes || {};
  file.sizes[size] = uploadPayload;
  await writeJSONToFile(FILES_DATA_PATH, file);
};
