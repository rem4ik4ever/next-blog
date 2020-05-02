module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/a9y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps(_ref) {
  var {
    res,
    err
  } = _ref;
  var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


class Error extends _react.default.Component {
  render() {
    var {
      statusCode
    } = this.props;
    var title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return _react.default.createElement("div", {
      style: styles.error
    }, _react.default.createElement(_head.default, null, _react.default.createElement("title", null, statusCode, ": ", title)), _react.default.createElement("div", null, _react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? _react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, _react.default.createElement("div", {
      style: styles.desc
    }, _react.default.createElement("h2", {
      style: styles.h2
    }, title, "."))));
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
var styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("bMNa");


/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "WKWs":
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/core");

/***/ }),

/***/ "bMNa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/core"
var core_ = __webpack_require__("WKWs");

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__("4vsW");
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__("kNaX");

// CONCATENATED MODULE: ./src/utils/files.ts

const formatFilename = (filename, uuid = undefined) => {
  const randomString = uuid || Object(external_uuid_["v4"])();
  const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, "-");
  const newFilename = `assets/${randomString}-${cleanFileName}`;
  return newFilename.substring(0, 60);
};
// CONCATENATED MODULE: ./src/utils/aws-helper/s3Upload.ts

const uploadToS3 = async (file, signedRequest) => {
  var options = {
    headers: {
      "Content-Type": file.type
    }
  };
  return await external_axios_default.a.put(signedRequest, file, options);
};
// CONCATENATED MODULE: ./src/components/FileUpload.tsx
var __jsx = external_react_default.a.createElement;







const saveToFilesystem = async (file, url) => {
  try {
    await external_axios_default.a.post("/api/files", {
      name: file.name,
      filetype: file.filetype,
      size: file.size,
      url
    });
  } catch (error) {
    console.error("FS save error", error.message);
  }
};

const FileUpload = () => {
  const {
    0: files,
    1: setFiles
  } = Object(external_react_["useState"])([]);
  const {
    0: isUploading,
    1: setUploading
  } = Object(external_react_["useState"])(false);
  const fileInputRef = Object(external_react_["createRef"])();
  const toast = Object(core_["useToast"])();

  const handleSubmit = async event => {
    event.preventDefault();
    setUploading(true);

    try {
      const result = await external_axios_default.a.post("/api/files/sign-s3", {
        filename: formatFilename(files[0].name),
        filetype: files[0].type
      });
      await uploadToS3(files[0], result.data.signedRequest);
      await saveToFilesystem(files[0], result.data.url);
      toast({
        title: "File saved",
        description: "All good!",
        status: "success",
        duration: 2000,
        isClosable: true
      });
      setTimeout(() => {
        location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error uploading image", error.message);
      toast({
        title: "Failed to save file",
        description: "Please try again later",
        status: "error",
        duration: 2000,
        isClosable: true
      });
    }
  };

  const onChangeHandler = event => {
    if (event.target.files[0].size < 20000000) {
      setFiles(event.target.files);
    } else {
      toast({
        title: "File too big",
        description: "Maximum size 10mb",
        status: "error",
        duration: 2000,
        isClosable: true
      });
    }
  };

  return __jsx("form", {
    onSubmit: handleSubmit
  }, __jsx(core_["FormControl"], {
    mb: "4"
  }, __jsx(core_["FormLabel"], null, "Select file"), __jsx(core_["Input"], {
    type: "file",
    name: "file",
    id: "file",
    onChange: onChangeHandler,
    isRequired: true,
    ref: fileInputRef
  }), __jsx(core_["FormHelperText"], null, "Maximum size 10mb")), __jsx(core_["Button"], {
    type: "submit",
    variant: "solid",
    color: "white",
    backgroundColor: "red.500",
    isDisabled: isUploading
  }, "Upload"));
};

/* harmony default export */ var components_FileUpload = (FileUpload);
// CONCATENATED MODULE: ./src/images/utils.ts
const getImageURL = (url, width) => {
  return url;
};
// CONCATENATED MODULE: ./src/pages/files/FormatUrl.tsx
var FormatUrl_jsx = external_react_default.a.createElement;




const FormatUrl = ({
  file,
  size
}) => {
  const {
    onCopy,
    hasCopied
  } = Object(core_["useClipboard"])(file.sizes[size].Location);

  const handleDelete = async ev => {
    ev.preventDefault();

    try {
      const result = await external_axios_default.a.delete(`/api/images/${file.id}/${size}`);
      console.log('delete size', result);
      location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return FormatUrl_jsx(core_["Flex"], null, FormatUrl_jsx(core_["FormControl"], {
    w: "full"
  }, FormatUrl_jsx(core_["InputGroup"], null, FormatUrl_jsx(core_["InputLeftAddon"], {
    children: `${size}px`
  }), FormatUrl_jsx(core_["Input"], {
    type: "text",
    isDisabled: true,
    value: file.sizes[size].Location,
    name: size
  }), FormatUrl_jsx(core_["IconButton"], {
    "aria-label": "copy",
    icon: hasCopied ? "check" : "copy",
    color: "blue.400",
    mb: "4",
    onClick: onCopy
  }), FormatUrl_jsx(core_["IconButton"], {
    "aria-label": "delete",
    icon: "delete",
    color: "red.400",
    mb: "4",
    onClick: handleDelete
  }))));
};

/* harmony default export */ var files_FormatUrl = (FormatUrl);
// CONCATENATED MODULE: ./src/pages/files/FileCard.tsx
var FileCard_jsx = external_react_default.a.createElement;






const FileCard = ({
  file
}) => {
  const {
    0: size,
    1: setSize
  } = Object(external_react_["useState"])(200);
  const {
    onCopy,
    hasCopied
  } = Object(core_["useClipboard"])(getImageURL(file.url, size));

  const onDelete = ev => {
    ev.preventDefault();
    external_axios_default.a.delete(`/api/files/${file.id}`).then(res => {
      console.log("File deleted", res);
      location.reload();
    }).catch(err => {
      console.error("Error", err);
    });
  };

  const formatImage = async ev => {
    ev.preventDefault();
    await external_axios_default.a.post(`/api/images/${file.id}`, {
      source: file.url,
      w: size
    });
    location.reload();
  };

  return FileCard_jsx(core_["Box"], {
    w: "100",
    backgroundColor: "white",
    borderRadius: "8px",
    p: "2",
    mb: "2"
  }, FileCard_jsx(core_["Flex"], {
    align: "center"
  }, FileCard_jsx(core_["Link"], {
    href: getImageURL(file.url, 220),
    mr: "2"
  }, FileCard_jsx(core_["Image"], {
    src: getImageURL(file.url, 220),
    alt: file.name,
    w: "220px"
  })), FileCard_jsx(core_["Flex"], {
    direction: "column",
    alignSelf: "stretch",
    justifyContent: "space-between",
    flex: "1"
  }, FileCard_jsx(core_["Box"], null, FileCard_jsx(core_["Heading"], {
    as: "h2",
    size: "sm"
  }, file.name), FileCard_jsx(core_["Text"], {
    color: "gray.500"
  }, "Size: ", file.size), file.sizes && FileCard_jsx(core_["List"], null, Object.keys(file.sizes).map(size => FileCard_jsx(core_["ListItem"], {
    key: file.sizes[size].key
  }, FileCard_jsx(files_FormatUrl, {
    file: file,
    size: size
  }), " ")))), FileCard_jsx(core_["Flex"], {
    justifyContent: "space-around"
  }, FileCard_jsx(core_["Flex"], null, FileCard_jsx(core_["InputGroup"], null, FileCard_jsx(core_["Input"], {
    type: "number",
    name: "size",
    maxW: "100px",
    textAlign: "right",
    value: size,
    onChange: ev => setSize(+ev.target.value)
  }), FileCard_jsx(core_["InputRightAddon"], {
    children: "px"
  })), FileCard_jsx(core_["Tooltip"], {
    hasArrow: true,
    label: "Format Image",
    placement: "top",
    "aria-label": "format-image"
  }, FileCard_jsx(core_["IconButton"], {
    "aria-label": "edit image",
    icon: "edit",
    color: "blue.400",
    mb: "4",
    onClick: formatImage
  }))), FileCard_jsx(core_["Tooltip"], {
    hasArrow: true,
    label: "Remove file",
    placement: "bottom",
    "aria-label": "delete-tooltip"
  }, FileCard_jsx(core_["IconButton"], {
    "aria-label": "delete",
    icon: "delete",
    color: "red.400",
    onClick: onDelete
  }))))));
};

/* harmony default export */ var files_FileCard = (FileCard);
// EXTERNAL MODULE: ./node_modules/next/error.js
var error = __webpack_require__("eomm");
var error_default = /*#__PURE__*/__webpack_require__.n(error);

// CONCATENATED MODULE: ./pages/cms/files/index.tsx

var files_jsx = external_react_default.a.createElement;






const FilesPage = ({
  files
}) => {
  if (true) {
    return files_jsx(error_default.a, {
      statusCode: 404
    });
  }

  return files_jsx(core_["Flex"], {
    direction: "column"
  }, files_jsx(core_["Heading"], {
    as: "h1",
    size: "md"
  }, "Files"), files_jsx(components_FileUpload, null), files_jsx(core_["Flex"], {
    direction: "column"
  }, files.map((file, idx) => files_jsx(files_FileCard, {
    file: file,
    key: `file-${idx}`
  }))));
};

const getServerSideProps = async () => {
  try {
    const files = await external_node_fetch_default()(`${"http://localhost:3000"}/api/files`);
    return {
      props: {
        files: await files.json()
      }
    };
  } catch (error) {
    return {
      props: {
        files: []
      }
    };
  }
};
/* harmony default export */ var cms_files = __webpack_exports__["default"] = (FilesPage);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eomm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/a9y")


/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });