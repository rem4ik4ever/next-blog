"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getS3Instance_1 = __importDefault(require("./getS3Instance"));
const s3UploadFile = (buffer, key) => {
    return new Promise((resolve, reject) => {
        const S3 = getS3Instance_1.default();
        const params = {
            Bucket: process.env.S3_BUCKET,
            Key: key,
            Body: buffer,
            ACL: "public-read",
        };
        S3.upload(params, (err, data) => {
            if (err) {
                console.error("AWS upload error: ", err);
                reject(err);
            }
            else {
                console.log("AWS upload data: ", data);
                resolve(data);
            }
        });
    });
};
exports.default = s3UploadFile;
//# sourceMappingURL=s3UploadFile.js.map