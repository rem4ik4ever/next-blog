import fs from 'fs';
import { v4 } from 'uuid';
import S3UploadResponse from './aws-s3.utils/interfaces/S3UploadResponse.interface';
import { FILES_DATA_PATH } from './constants';

export const allFiles = () => {
  const files = fs.readdirSync(FILES_DATA_PATH);
  const parsedFiles = files.map(file => {
    return {
      ...JSON.parse(fs.readFileSync(`${FILES_DATA_PATH}/${file}`, 'utf8')),
      filename: file
    };
  });
  return parsedFiles.sort((a, b) => {
    const aDate = new Date(a.createdAt);
    const bDate = new Date(b.createdAt);
    if (aDate > bDate) return -1;
    if (aDate < bDate) return 1;
    return 0;
  });
};

export const formatFilename = (filename: string, uuid?: string) => {
  const randomString = uuid || v4();
  const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/, '-');
  const newFilename = `assets/${randomString}-${cleanFileName}`;
  return newFilename.substring(0, 60);
};

export const makeFilename = ({ id, name }) =>
  `${id}-${name
    .toLowerCase()
    .split(' ')
    .join('-')}.json`;

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
