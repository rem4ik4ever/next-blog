import {
  allGood, whoops
} from './response.utils'
import {
  allFiles,
  formatFilename,
  makeFilename,
  writeJSONToFile,
  saveImageSizeToFile
} from './files.utils';
import {
  fetchAndTransformImageFromUrl
} from './images.utils'
import getS3Instance from "./aws-s3.utils/getS3Instance";
import s3DeleteFile from './aws-s3.utils/s3DeleteFile';
import s3UploadFile from './aws-s3.utils/s3UploadFile';



const Response = {
  allGood,
  whoops
}

const Files = {
  allFiles,
  formatFilename,
  makeFilename,
  writeJSONToFile,
  saveImageSizeToFile
}

const Images = {
  fetchAndTransformImageFromUrl
}

const AWS_S3 = {
  getS3Instance,
  s3DeleteFile,
  s3UploadFile,
}

export default {
  Response,
  Files,
  AWS_S3,
  Images
}
