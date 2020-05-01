"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getS3Instance_1 = __importDefault(require("./getS3Instance"));
const deleteRequest = (s3, params) => {
    return new Promise((resolve, reject) => {
        s3.deleteObject(params, (err, data) => {
            if (err) {
                console.error("S3 Delete Err: ", err);
                reject(err);
            }
            else {
                console.log("S3 Delete success", data);
                resolve(data);
            }
        });
    });
};
const s3DeleteFile = (filename) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = {
            Bucket: process.env.S3_BUCKET,
            Key: filename
        };
        const s3 = getS3Instance_1.default();
        const result = yield deleteRequest(s3, params);
        console.log("S3 Delete result: ", result);
    }
    catch (err) {
        return false;
    }
    return true;
});
exports.default = s3DeleteFile;
//# sourceMappingURL=s3DeleteFile.js.map