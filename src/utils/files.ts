import { v4 } from "uuid";

export const formatFilename = (filename, uuid=undefined) => {
  const randomString =uuid || v4();
  const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, "-");
  const newFilename = `assets/${randomString}-${cleanFileName}`;
  return newFilename.substring(0, 60);
};
