import { getS3Instance } from "pages/api/_utils/aws-s3.utils/getS3Instance";

const deleteRequest = (s3, params) => {
  return new Promise((resolve, reject) => {
    s3.deleteObject(params, (err, data) => {
      if (err) {
        console.error("S3 Delete Err: ", err);
        reject(err);
      } else {
        console.log("S3 Delete success", data);
        resolve(data);
      }
    });
  });
};

const s3DeleteFile = async filename => {
  try {
    const params = {
      Bucket: process.env.S3_BUCKET,
      Key: filename
    };

    const s3 = getS3Instance();
    const result = await deleteRequest(s3, params);
    console.log("S3 Delete result: ", result);
  } catch (err) {
    return false;
  }
  return true;
};

export default s3DeleteFile;
