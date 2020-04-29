import { File } from "./File";
import S3UploadResponse from "pages/api/_utils/aws-s3.utils/interfaces/S3UploadResponse.interface";

export interface ImageFile extends File {
  name: string;
  filetype: string;
  size: number;
  url: string;
  id?: string;
  createdAt: string;
  sizes?: Map<string, S3UploadResponse>;
}
