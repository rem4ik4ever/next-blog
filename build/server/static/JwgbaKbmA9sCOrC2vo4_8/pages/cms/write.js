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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
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

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jZ0z");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Fr+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/core"
var core_ = __webpack_require__("WKWs");

// CONCATENATED MODULE: ./src/components/TagInput.tsx
var __jsx = external_react_default.a.createElement;



const TagInput = ({
  onAdd,
  label,
  description
}) => {
  const {
    0: tag,
    1: setState
  } = Object(external_react_["useState"])("");
  return __jsx(core_["FormControl"], null, __jsx(core_["FormLabel"], null, label), __jsx(core_["Flex"], null, __jsx(core_["Input"], {
    type: "text",
    id: "tag-input",
    value: tag,
    onChange: ev => setState(ev.target.value.trim()),
    onKeyDown: ev => {
      if (ev.keyCode === 13 || ev.keyCode === 32) {
        ev.preventDefault();

        if (tag && tag.length > 0) {
          onAdd(tag);
          setState("");
        }
      }
    }
  }), __jsx(core_["Button"], {
    variant: "solid",
    color: "teal.500",
    onClick: () => {
      if (tag && tag.length > 0) {
        onAdd(tag);
        setState("");
      }
    }
  }, "Add")), __jsx(core_["FormHelperText"], null, description));
};

/* harmony default export */ var components_TagInput = (TagInput);
// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__("id0+");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// EXTERNAL MODULE: ./src/components/Card.tsx
var Card = __webpack_require__("vzgc");

// EXTERNAL MODULE: external "chakra-ui-markdown-renderer"
var external_chakra_ui_markdown_renderer_ = __webpack_require__("h7O5");
var external_chakra_ui_markdown_renderer_default = /*#__PURE__*/__webpack_require__.n(external_chakra_ui_markdown_renderer_);

// EXTERNAL MODULE: ./src/enums/BlogStatus.ts
var BlogStatus = __webpack_require__("ayPp");

// CONCATENATED MODULE: ./src/cms/blogs/BlogForm.tsx
var BlogForm_jsx = external_react_default.a.createElement;








const StatusIcon = ({
  status
}) => {
  if (status === null || status === void 0 ? void 0 : status.success) {
    return BlogForm_jsx(core_["Icon"], {
      name: "check-circle",
      color: "green.400"
    });
  } else if (status === null || status === void 0 ? void 0 : status.error) {
    return BlogForm_jsx(core_["Icon"], {
      name: "close",
      color: "red.400"
    });
  }

  return null;
};

const StatusText = ({
  status
}) => {
  let text = null;

  if (status === null || status === void 0 ? void 0 : status.success) {
    text = BlogForm_jsx(core_["Text"], {
      color: "green.400"
    }, "Blog saved");
  } else if (status === null || status === void 0 ? void 0 : status.error) {
    text = BlogForm_jsx(core_["Text"], {
      color: "red.400"
    }, "Failed to save");
  }

  return BlogForm_jsx(core_["Flex"], {
    align: "center",
    mr: 5
  }, text);
};

const BlogForm = ({
  formik
}) => {
  const {
    0: showPreview,
    1: togglePreview
  } = Object(external_react_["useState"])(false);
  const {
    0: showToast,
    1: toggleToast
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    var _formik$status, _formik$status2;

    if (((_formik$status = formik.status) === null || _formik$status === void 0 ? void 0 : _formik$status.success) || ((_formik$status2 = formik.status) === null || _formik$status2 === void 0 ? void 0 : _formik$status2.error)) {
      toggleToast(true);
      setTimeout(() => {
        toggleToast(false);
      }, 2000);
    }
  }, [formik.status]);

  const addTag = tag => {
    formik.setFieldValue("tags", [...formik.values.tags, tag]);
  };

  const statuses = Object.keys(BlogStatus["a" /* BlogStatus */]);
  return BlogForm_jsx("form", {
    onSubmit: ev => {
      formik.handleSubmit(ev);
    }
  }, BlogForm_jsx(core_["Box"], {
    m: "5"
  }, BlogForm_jsx(core_["Heading"], {
    as: "h1",
    size: "xl",
    fontWeight: "normal",
    textAlign: "center"
  }, "Write a blog"), BlogForm_jsx(Card["a" /* default */], null, BlogForm_jsx(core_["Flex"], {
    direction: "column"
  }, BlogForm_jsx(core_["Flex"], {
    justify: "flex-end"
  }, showToast && BlogForm_jsx(StatusText, {
    status: formik.status
  }), BlogForm_jsx(core_["FormControl"], {
    mr: "2"
  }, BlogForm_jsx(core_["Select"], {
    value: formik.values.status,
    name: "status",
    onChange: formik.handleChange
  }, statuses.map(status => BlogForm_jsx("option", {
    key: status,
    value: status.toLowerCase()
  }, status.toUpperCase())))), BlogForm_jsx(core_["Button"], {
    type: "submit",
    variant: "solid",
    color: "green.400",
    isDisabled: formik.isSubmitting
  }, showToast ? BlogForm_jsx(StatusIcon, {
    status: formik.status
  }) : "Save")), BlogForm_jsx(core_["FormControl"], {
    w: "full"
  }, BlogForm_jsx(core_["FormLabel"], null, "Title"), BlogForm_jsx(core_["Input"], {
    type: "text",
    id: "blog-title",
    name: "title",
    value: formik.values.title,
    onChange: formik.handleChange
  }), BlogForm_jsx(core_["FormHelperText"], {
    id: "blog-title-helper-text"
  }, "Write something catchy!")), BlogForm_jsx(core_["FormControl"], {
    mt: "2"
  }, BlogForm_jsx(core_["FormLabel"], null, "TL;DR"), BlogForm_jsx(core_["Input"], {
    type: "text",
    id: "blog-tldr",
    name: "tldr",
    value: formik.values.tldr,
    onChange: formik.handleChange
  }), BlogForm_jsx(core_["FormHelperText"], null, "Describe your idea a sentence")), BlogForm_jsx(core_["FormControl"], {
    mt: "2"
  }, BlogForm_jsx(core_["FormLabel"], null, "Thumbnail URL"), BlogForm_jsx(core_["Input"], {
    type: "text",
    id: "blog-thumbnail",
    name: "thumbnailUrl",
    value: formik.values.thumbnailUrl,
    onChange: formik.handleChange
  }), BlogForm_jsx(core_["FormHelperText"], null, "Main blog image")), BlogForm_jsx(core_["Box"], {
    mt: "2"
  }, BlogForm_jsx(components_TagInput, {
    onAdd: tag => addTag(tag),
    label: "Blog tags",
    description: "Tags helps searching"
  }), BlogForm_jsx(core_["Stack"], {
    spacing: 4,
    isInline: true,
    mt: "4"
  }, formik.values.tags.map(tag => BlogForm_jsx(core_["Tag"], {
    size: "md",
    key: `tag-${tag}`,
    variantColor: "cyan"
  }, BlogForm_jsx(core_["TagIcon"], {
    icon: "add",
    size: "12px"
  }), BlogForm_jsx(core_["TagLabel"], null, tag))))), BlogForm_jsx(core_["FormControl"], {
    mt: "2"
  }, BlogForm_jsx(core_["FormLabel"], {
    htmlFor: "markdown-preview"
  }, "Preview ", showPreview ? "on" : "off"), BlogForm_jsx(core_["Switch"], {
    id: "markdown-preview",
    value: showPreview,
    onChange: () => togglePreview(!showPreview)
  })), showPreview ? BlogForm_jsx(core_["Box"], {
    borderTop: "1px solid black",
    minH: "420px",
    px: "4",
    py: "2"
  }, BlogForm_jsx(external_react_markdown_default.a, {
    renderers: external_chakra_ui_markdown_renderer_default()(),
    source: formik.values.content,
    escapeHtml: false
  })) : BlogForm_jsx(core_["FormControl"], null, BlogForm_jsx(core_["Textarea"], {
    minH: "420px",
    maxH: "1200px",
    name: "content",
    value: formik.values.content,
    onChange: formik.handleChange
  }))))));
};

/* harmony default export */ var blogs_BlogForm = __webpack_exports__["a"] = (BlogForm);

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

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "WKWs":
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/core");

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eomm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/a9y")


/***/ }),

/***/ "h7O5":
/***/ (function(module, exports) {

module.exports = require("chakra-ui-markdown-renderer");

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "jZ0z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/error.js
var error = __webpack_require__("eomm");
var error_default = /*#__PURE__*/__webpack_require__.n(error);

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// CONCATENATED MODULE: ./src/utils/fetch/index.ts
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST",
    // *GET, POST, PUT, DELETE, etc.
    mode: "cors",
    // no-cors, *cors, same-origin
    cache: "no-cache",
    // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin",
    // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json" // 'Content-Type': 'application/x-www-form-urlencoded',

    },
    redirect: "follow",
    // manual, *follow, error
    referrerPolicy: "no-referrer",
    // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header

  });
  return response.json(); // parses JSON response into native JavaScript objects
}
// EXTERNAL MODULE: ./src/cms/blogs/BlogForm.tsx + 1 modules
var BlogForm = __webpack_require__("5Fr+");

// EXTERNAL MODULE: ./src/enums/BlogStatus.ts
var BlogStatus = __webpack_require__("ayPp");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./src/pages/blog/BlogWrite.tsx
var __jsx = external_react_default.a.createElement;







const BlogWrite = () => {
  const formik = Object(external_formik_["useFormik"])({
    initialValues: {
      title: "",
      tldr: "",
      tags: [],
      content: "",
      thumbnail: null,
      status: BlogStatus["a" /* BlogStatus */].draft
    },
    onSubmit: async (values, {
      setStatus,
      setSubmitting,
      setErrors
    }) => {
      setSubmitting(true);

      try {
        const result = await postData("/api/cms/blogs", values);
        setStatus({
          success: true
        });
        router_default.a.push(`/cms/write/${result.id}`);
      } catch (error) {
        setStatus({
          error: true
        });
        setSubmitting(false);
      }
    }
  });
  return __jsx(BlogForm["a" /* default */], {
    formik: formik
  });
};

/* harmony default export */ var blog_BlogWrite = (BlogWrite);
// CONCATENATED MODULE: ./pages/cms/write/index.tsx

var write_jsx = external_react_default.a.createElement;



const WritePage = () => {
  if (true) {
    return write_jsx(error_default.a, {
      statusCode: 404
    });
  }

  return write_jsx(blog_BlogWrite, null);
};

/* harmony default export */ var write = __webpack_exports__["default"] = (WritePage);

/***/ }),

/***/ "vzgc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WKWs");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const Card = props => {
  const {
    colorMode
  } = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["useColorMode"])();
  const bgColor = {
    light: "white",
    dark: "gray.800"
  }; // const textColor = {
  //   light: "",
  //   dark: "white",
  // };

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
    borderRadius: "8px",
    boxShadow: "md",
    my: "5",
    p: "5" // color={textColor[colorMode]}
    ,
    backgroundColor: bgColor[colorMode]
  }, props), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ })

/******/ });