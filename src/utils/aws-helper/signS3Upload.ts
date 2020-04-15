import { SignS3 } from "src/interfaces/SignS3";
import AWS from "aws-sdk";

const signS3Upload = async ({ filename, filetype }: SignS3) => {
  try {
    const s3 = new AWS.S3({
      signatureVersion: "v4",
      region: "us-east-2",
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });

    const s3Parms = {
      Bucket: process.env.S3_BUCKET,
      Key: filename,
      Expires: 60,
      ContentType: filetype,
      ACL: "public-read",
    };

    const signedRequest = await s3.getSignedUrl("putObject", s3Parms);
    const url = `https://${S3_BUCKET}.s3.amazonaws.com/${filename}`;

    return {
      signedRequest,
      url,
    };
  } catch (error) {
    console.error("AWS ERR: ", error.message);
    return null;
  }
};
export default signS3Upload;
