module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("N74B");


/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "DaQf":
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "N74B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_middlewares_devonly_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("naiQ");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("kNaX");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Ss4h");




const handler = async (req, res) => {
  const {
    whoops,
    allGood
  } = src_utilities__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].Response;
  const {
    s3UploadFile
  } = src_utilities__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].AWS_S3;
  const {
    fetchAndTransformImageFromUrl
  } = src_utilities__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].Images;
  const {
    saveImageSizeToFile
  } = src_utilities__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].Files;

  try {
    await Object(src_middlewares_devonly_middleware__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(req, res);
    const {
      id
    } = req.query;
    const file = src_utilities__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].Files.allFiles().find(fl => String(fl.id) === String(id));

    if (!file) {
      return whoops(res);
    }

    const {
      source,
      w
    } = req.body;

    if (!source) {
      whoops(res);
    }

    const transformedImage = await fetchAndTransformImageFromUrl(String(source), String(w));
    const uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
    const uploadResult = await s3UploadFile(transformedImage, `assets/${uuid}-${w}.png`);
    await saveImageSizeToFile(String(source), String(w), uploadResult);
    allGood(res);
  } catch (err) {
    console.error(err);
    whoops(res);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "Ss4h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/utilities/response.utils.ts
const OK = "Ok";
const NOT_FOUND = "Not Found";
const BAD_RESPONSE = "Bad Response";
const allGood = (res, payload = OK) => {
  res.statusCode = 200;
  res.end(payload);
};
const whoops = (res, payload = NOT_FOUND, code = 404) => {
  res.statusCode = code;
  res.end(payload);
};
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__("mw/K");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__("kNaX");

// CONCATENATED MODULE: ./src/utilities/constants.ts
const FILES_DATA_PATH = "./data/assets";
// CONCATENATED MODULE: ./src/utilities/files.utils.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const allFiles = () => {
  const files = external_fs_default.a.readdirSync(FILES_DATA_PATH);
  const parsedFiles = files.map(file => {
    return _objectSpread({}, JSON.parse(external_fs_default.a.readFileSync(`${FILES_DATA_PATH}/${file}`, 'utf8')), {
      filename: file
    });
  });
  return parsedFiles.sort((a, b) => {
    const aDate = new Date(a.createdAt);
    const bDate = new Date(b.createdAt);
    if (aDate > bDate) return -1;
    if (aDate < bDate) return 1;
    return 0;
  });
};
const formatFilename = (filename, uuid) => {
  const randomString = uuid || Object(external_uuid_["v4"])();
  const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/, '-');
  const newFilename = `assets/${randomString}-${cleanFileName}`;
  return newFilename.substring(0, 60);
};
const makeFilename = ({
  id,
  name
}) => `${id}-${name.toLowerCase().split(' ').join('-')}.json`;
const writeJSONToFile = async (path, file) => {
  const filename = makeFilename(file);
  await external_fs_default.a.promises.writeFile(`${path}/${filename}`, JSON.stringify(file, null, 2));
};
const saveImageSizeToFile = async (source, size, uploadPayload) => {
  const files = allFiles();
  const file = files.find(fl => fl.url === source);
  file.sizes = file.sizes || {};
  file.sizes[size] = uploadPayload;
  await writeJSONToFile(FILES_DATA_PATH, file);
};
// EXTERNAL MODULE: external "sharp"
var external_sharp_ = __webpack_require__("rR12");
var external_sharp_default = /*#__PURE__*/__webpack_require__.n(external_sharp_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__("4vsW");
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./src/utilities/images.utils.ts


const fetchAndTransformImageFromUrl = async (url, w) => {
  const payload = await external_node_fetch_default()(String(url));
  let transform = external_sharp_default()((await payload.buffer()));

  if (w) {
    transform = transform.resize(+w);
  }

  transform = transform.png();
  return await transform.toBuffer();
};
// EXTERNAL MODULE: external "aws-sdk"
var external_aws_sdk_ = __webpack_require__("DaQf");
var external_aws_sdk_default = /*#__PURE__*/__webpack_require__.n(external_aws_sdk_);

// CONCATENATED MODULE: ./src/utilities/aws-s3.utils/getS3Instance.ts


const getS3Instance = () => {
  return new external_aws_sdk_default.a.S3({
    signatureVersion: 'v4',
    region: 'us-east-2',
    accessKeyId: "AKIA4UYNXYFFJYJXOSW2",
    secretAccessKey: "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"
  });
};

/* harmony default export */ var aws_s3_utils_getS3Instance = (getS3Instance);
// CONCATENATED MODULE: ./src/utilities/aws-s3.utils/s3DeleteFile.ts


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
      Bucket: "rem-blog-bucket",
      Key: filename
    };
    const s3 = aws_s3_utils_getS3Instance();
    const result = await deleteRequest(s3, params);
    console.log("S3 Delete result: ", result);
  } catch (err) {
    return false;
  }

  return true;
};

/* harmony default export */ var aws_s3_utils_s3DeleteFile = (s3DeleteFile);
// CONCATENATED MODULE: ./src/utilities/aws-s3.utils/s3UploadFile.ts


const s3UploadFile = (buffer, key) => {
  return new Promise((resolve, reject) => {
    const S3 = aws_s3_utils_getS3Instance();
    const params = {
      Bucket: "rem-blog-bucket",
      Key: key,
      Body: buffer,
      ACL: "public-read"
    };
    S3.upload(params, (err, data) => {
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

/* harmony default export */ var aws_s3_utils_s3UploadFile = (s3UploadFile);
// CONCATENATED MODULE: ./src/utilities/index.ts






const Response = {
  allGood: allGood,
  whoops: whoops
};
const Files = {
  allFiles: allFiles,
  formatFilename: formatFilename,
  makeFilename: makeFilename,
  writeJSONToFile: writeJSONToFile,
  saveImageSizeToFile: saveImageSizeToFile
};
const Images = {
  fetchAndTransformImageFromUrl: fetchAndTransformImageFromUrl
};
const AWS_S3 = {
  getS3Instance: aws_s3_utils_getS3Instance,
  s3DeleteFile: aws_s3_utils_s3DeleteFile,
  s3UploadFile: aws_s3_utils_s3UploadFile
};
/* harmony default export */ var utilities = __webpack_exports__["a"] = ({
  Response,
  Files,
  AWS_S3,
  Images
});

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "naiQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
async function devonlyMiddleware(req, res) {
  return new Promise((resolve, reject) => {
    if (true) {
      res.statusCode = 404;
      res.end();
      reject("Dev Only Middleware");
    } else {}
  });
}

/* harmony default export */ __webpack_exports__["a"] = (devonlyMiddleware);

/***/ }),

/***/ "rR12":
/***/ (function(module, exports) {

module.exports = require("sharp");

/***/ })

/******/ });