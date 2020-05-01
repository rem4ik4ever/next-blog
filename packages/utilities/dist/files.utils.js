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
const fs_1 = __importDefault(require("fs"));
const uuid_1 = require("uuid");
const constants_1 = require("./constants");
exports.allFiles = () => {
    const files = fs_1.default.readdirSync(constants_1.FILES_DATA_PATH);
    const parsedFiles = files.map(file => {
        return Object.assign(Object.assign({}, JSON.parse(fs_1.default.readFileSync(`${constants_1.FILES_DATA_PATH}/${file}`, 'utf8'))), { filename: file });
    });
    return parsedFiles.sort((a, b) => {
        const aDate = new Date(a.createdAt);
        const bDate = new Date(b.createdAt);
        if (aDate > bDate)
            return -1;
        if (aDate < bDate)
            return 1;
        return 0;
    });
};
exports.formatFilename = (filename, uuid) => {
    const randomString = uuid || uuid_1.v4();
    const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/, '-');
    const newFilename = `assets/${randomString}-${cleanFileName}`;
    return newFilename.substring(0, 60);
};
exports.makeFilename = ({ id, name }) => `${id}-${name
    .toLowerCase()
    .split(' ')
    .join('-')}.json`;
exports.writeJSONToFile = (path, file) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = exports.makeFilename(file);
    yield fs_1.default.promises.writeFile(`${path}/${filename}`, JSON.stringify(file, null, 2));
});
exports.saveImageSizeToFile = (source, size, uploadPayload) => __awaiter(void 0, void 0, void 0, function* () {
    const files = exports.allFiles();
    const file = files.find(fl => fl.url === source);
    file.sizes = file.sizes || {};
    file.sizes[size] = uploadPayload;
    yield exports.writeJSONToFile(constants_1.FILES_DATA_PATH, file);
});
//# sourceMappingURL=files.utils.js.map