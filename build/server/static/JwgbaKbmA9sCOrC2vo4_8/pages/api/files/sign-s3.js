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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ZsGS");


/***/ }),

/***/ "DaQf":
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "ZsGS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "aws-sdk"
var external_aws_sdk_ = __webpack_require__("DaQf");
var external_aws_sdk_default = /*#__PURE__*/__webpack_require__.n(external_aws_sdk_);

// CONCATENATED MODULE: ./src/utils/aws-helper/signS3Upload.ts


const signS3Upload = async ({
  filename,
  filetype
}) => {
  try {
    const s3 = new external_aws_sdk_default.a.S3({
      signatureVersion: "v4",
      region: "us-east-2",
      accessKeyId: "AKIA4UYNXYFFJYJXOSW2",
      secretAccessKey: "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"
    });
    const s3Parms = {
      Bucket: "rem-blog-bucket",
      Key: filename,
      Expires: 60,
      ContentType: filetype,
      ACL: "public-read"
    };
    const signedRequest = await s3.getSignedUrl("putObject", s3Parms);
    const url = `https://${"rem-blog-bucket"}.s3.amazonaws.com/${filename}`;
    return {
      signedRequest,
      url
    };
  } catch (error) {
    console.error("AWS ERR: ", error.message);
    return null;
  }
};

/* harmony default export */ var aws_helper_signS3Upload = (signS3Upload);
// CONCATENATED MODULE: ./pages/api/files/sign-s3.ts


const signS3 = async (req, res) => {
  if (true) {
    res.statusCode = 404;
    res.end();
    return;
  }

  try {
    const {
      filename,
      filetype
    } = req.body;
    const result = await aws_helper_signS3Upload({
      filename,
      filetype
    });
    res.statusCode = 200;
    res.end(JSON.stringify(result));
  } catch (error) {
    console.error("S3 upload error", error);
    res.statusCode = 500;
    res.end();
  }
};

/* harmony default export */ var sign_s3 = __webpack_exports__["default"] = (signS3);

/***/ })

/******/ });