import S3UploadResponse from "./interfaces/S3UploadResponse.interface";
import {PutObjectRequest} from "aws-sdk/clients/s3";
import getS3Instance from "./getS3Instance";

const s3UploadFile = (
  buffer: Buffer,
  key: string
): Promise<S3UploadResponse> => {
  return new Promise((resolve, reject) => {
    const S3 = getS3Instance();
    const params:PutObjectRequest = {
      Bucket: process.env.S3_BUCKET!,
      Key: key,
      Body: buffer,
      ACL: "public-read",
    };
    S3.upload(params, (err: Error, data: S3UploadResponse) => {
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

export default s3UploadFile;
