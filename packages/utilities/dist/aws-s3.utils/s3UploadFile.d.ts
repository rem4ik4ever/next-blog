/// <reference types="node" />
import S3UploadResponse from "./interfaces/S3UploadResponse.interface";
declare const s3UploadFile: (buffer: Buffer, key: string) => Promise<S3UploadResponse>;
export default s3UploadFile;
