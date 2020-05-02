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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("BZJ2");


/***/ }),

/***/ "BZJ2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_cms_blogs_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("E7ox");
/* harmony import */ var src_enums_BlogStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ayPp");
/* harmony import */ var src_middlewares_devonly_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("naiQ");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const saveBlog = async (req, res) => {
  const timestamp = new Date().getTime();

  const payload = _objectSpread({}, req.body, {
    author: "Rem Kim",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    slug: Object(src_cms_blogs_utils__WEBPACK_IMPORTED_MODULE_0__[/* getSlug */ "c"])(req.body.title),
    status: src_enums_BlogStatus__WEBPACK_IMPORTED_MODULE_1__[/* BlogStatus */ "a"].draft,
    id: timestamp
  });

  const filename = Object(src_cms_blogs_utils__WEBPACK_IMPORTED_MODULE_0__[/* generateFilename */ "b"])(payload.title, timestamp);
  const result = await Object(src_cms_blogs_utils__WEBPACK_IMPORTED_MODULE_0__[/* saveBlogFile */ "e"])(filename, payload);

  if (!result) {
    res.statusCode = 500;
    res.end();
  }

  res.statusCode = 200;
  res.end(JSON.stringify(payload, undefined, 2));
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    await Object(src_middlewares_devonly_middleware__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(req, res);
    saveBlog(req, res);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "E7ox":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ allBlogs; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ getSlug; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ generateFilename; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ saveBlogFile; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ removeOldFile; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ updateBlogFile; });

// CONCATENATED MODULE: ./src/cms/blogs/constants.ts
const BLOGS_DATA_PATH = "./data/blogs";
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__("mw/K");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);

// CONCATENATED MODULE: ./src/cms/blogs/utils.ts


const fs = external_fs_default.a.promises;
const FILES_DATA_PATH = './data/assets';
const allBlogs = () => {
  const files = external_fs_default.a.readdirSync(BLOGS_DATA_PATH);
  return files.map(file => {
    return JSON.parse(external_fs_default.a.readFileSync(`${BLOGS_DATA_PATH}/${file}`, "utf8"));
  });
};
const getSlug = title => title.toLocaleLowerCase().split(" ").map(word => word.replace(/[^0-9a-z]/gi, "")).join("-");
const generateFilename = (title, timestamp) => `${timestamp}-${getSlug(title)}.json`;
const saveBlogFile = async (filename, payload) => {
  try {
    await fs.writeFile(`${BLOGS_DATA_PATH}/${filename}`, JSON.stringify(payload, null, 2));
  } catch (err) {
    console.error("Saving blog failed:", err.message);
    return false;
  }

  return true;
};
const removeOldFile = (filename, dataType = "blogs") => {
  const path = dataType === 'blogs' ? BLOGS_DATA_PATH : FILES_DATA_PATH;
  external_fs_default.a.unlinkSync(`${path}/${filename}`);
};
const updateBlogFile = async (payload, id) => {
  try {
    const blogs = allBlogs();
    const originalBlog = blogs.find(blog => String(blog.id) === String(id));
    const currentFilename = generateFilename(originalBlog.title, originalBlog.id);
    const filename = generateFilename(payload.title, originalBlog.id);
    const nameChanged = filename !== currentFilename;
    const result = await saveBlogFile(filename, payload);
    if (!result) throw new Error("Failed to save blog");
    if (nameChanged) removeOldFile(currentFilename);
  } catch (error) {
    console.error(error);
    return false;
  }

  return true;
};

/***/ }),

/***/ "ayPp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogStatus; });
let BlogStatus;

(function (BlogStatus) {
  BlogStatus["draft"] = "draft";
  BlogStatus["released"] = "released";
  BlogStatus["archived"] = "archived";
  BlogStatus["deleted"] = "deleted";
})(BlogStatus || (BlogStatus = {}));

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

/***/ })

/******/ });