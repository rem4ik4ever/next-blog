"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_utils_1 = require("./response.utils");
const files_utils_1 = require("./files.utils");
const images_utils_1 = require("./images.utils");
const getS3Instance_1 = __importDefault(require("./aws-s3.utils/getS3Instance"));
const s3DeleteFile_1 = __importDefault(require("./aws-s3.utils/s3DeleteFile"));
const s3UploadFile_1 = __importDefault(require("./aws-s3.utils/s3UploadFile"));
const Response = {
    allGood: response_utils_1.allGood,
    whoops: response_utils_1.whoops
};
const Files = {
    allFiles: files_utils_1.allFiles,
    formatFilename: files_utils_1.formatFilename,
    makeFilename: files_utils_1.makeFilename,
    writeJSONToFile: files_utils_1.writeJSONToFile,
    saveImageSizeToFile: files_utils_1.saveImageSizeToFile
};
const Images = {
    fetchAndTransformImageFromUrl: images_utils_1.fetchAndTransformImageFromUrl
};
const AWS_S3 = {
    getS3Instance: getS3Instance_1.default,
    s3DeleteFile: s3DeleteFile_1.default,
    s3UploadFile: s3UploadFile_1.default,
};
exports.default = {
    Response,
    Files,
    AWS_S3,
    Images
};
//# sourceMappingURL=index.js.map