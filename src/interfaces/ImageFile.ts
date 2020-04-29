import { File } from "./File";
import S3UploadResponse from "./S3UploadResponse";

export interface ImageFile extends File {
  name: string;
  filetype: string;
  size: number;
  url: string;
  id?: number;
  createdAt: string;
  // sizes?: Map<string, S3UploadResponse>;
}
