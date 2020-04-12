import { v4 } from "uuid";

export const formatFilename = (filename) => {
  const randomString = v4();
  const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, "-");
  const newFilename = `assets/${randomString}-${cleanFileName}`;
  return newFilename.substring(0, 60);
};
