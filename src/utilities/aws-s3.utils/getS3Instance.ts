import AWS from 'aws-sdk';

const getS3Instance = () => {
  return new AWS.S3({
    signatureVersion: 'v4',
    region: 'us-east-2',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  });
};

export default getS3Instance;
