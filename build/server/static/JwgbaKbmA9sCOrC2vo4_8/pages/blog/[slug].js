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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("rfmo");


/***/ }),

/***/ "37np":
/***/ (function(module, exports) {

module.exports = require("spacetime");

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

/***/ "L1GG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const defaultConfig = {
  titleTemplate: "Rem Kim | %s",
  title: "Personal Website",
  description: "Personal Blog",
  url: "https://remkim.com",
  twitter: {
    handle: '@TheRealRemKim',
    cardType: 'summary_large_image'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (defaultConfig);

/***/ }),

/***/ "Mmls":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__("lJcc");
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);

// CONCATENATED MODULE: ./src/utils/analytics/utils.ts

const initGA = () => {
  console.log('GA init');
  external_react_ga_default.a.initialize("UA-146475223-1");
};
const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  external_react_ga_default.a.set({
    page: window.location.pathname
  });
  external_react_ga_default.a.pageview(window.location.pathname);
};
const logEvent = (category = '', action = '') => {
  if (category && action) {
    external_react_ga_default.a.event({
      category,
      action
    });
  }
};
const logException = (description = '', fatal = false) => {
  if (description) {
    external_react_ga_default.a.exception({
      description,
      fatal
    });
  }
};
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__("efsx");

// CONCATENATED MODULE: ./src/components/PageSEO.tsx
var __jsx = external_react_default.a.createElement;




const PageSEO = ({
  pageInfo
}) => {
  Object(external_react_["useEffect"])(() => {
    if (!window["GA_INITIALIZED"]) {
      initGA();
      window["GA_INITIALIZED"] = true;
    }

    logPageView();
  }, []);
  return __jsx(external_next_seo_["NextSeo"], pageInfo);
};

/* harmony default export */ var components_PageSEO = __webpack_exports__["a"] = (PageSEO);

/***/ }),

/***/ "WKWs":
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/core");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "h7O5":
/***/ (function(module, exports) {

module.exports = require("chakra-ui-markdown-renderer");

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "lJcc":
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "rfmo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/core"
var core_ = __webpack_require__("WKWs");

// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__("id0+");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// EXTERNAL MODULE: external "chakra-ui-markdown-renderer"
var external_chakra_ui_markdown_renderer_ = __webpack_require__("h7O5");
var external_chakra_ui_markdown_renderer_default = /*#__PURE__*/__webpack_require__.n(external_chakra_ui_markdown_renderer_);

// EXTERNAL MODULE: external "spacetime"
var external_spacetime_ = __webpack_require__("37np");
var external_spacetime_default = /*#__PURE__*/__webpack_require__.n(external_spacetime_);

// CONCATENATED MODULE: ./src/pages/blog/BlogContent.tsx
var __jsx = external_react_default.a.createElement;






const BlogContent = ({
  blog
}) => {
  return __jsx(core_["Box"], null, __jsx(core_["Flex"], {
    flexDirection: "column"
  }, __jsx(core_["Text"], {
    color: "gray.400",
    fontSize: "md",
    textAlign: "center"
  }, blog.author, " - ", external_spacetime_default()(blog.createdAt).format('LL')), __jsx(core_["Heading"], {
    as: "h1",
    size: "2xl",
    textAlign: "center",
    mb: "0",
    fontWeight: "light"
  }, blog.title), __jsx(core_["Stack"], {
    spacing: 1,
    isInline: true
  }, blog.tags.map(tag => __jsx(core_["Tag"], {
    key: tag,
    variantColor: "cyan",
    size: "sm"
  }, tag))), __jsx(core_["Text"], {
    mb: "2",
    color: "gray.500"
  }), __jsx(core_["Box"], {
    marginX: "auto"
  }, __jsx(core_["Image"], {
    src: blog.thumbnailUrl,
    alt: blog.title,
    mb: "3",
    width: "md"
  })), __jsx(core_["Text"], null, blog.tldr), __jsx(external_react_markdown_default.a, {
    renderers: external_chakra_ui_markdown_renderer_default()(),
    source: blog.content,
    escapeHtml: false
  })));
};

/* harmony default export */ var blog_BlogContent = (BlogContent);
// EXTERNAL MODULE: ./src/cms/blogs/utils.ts + 1 modules
var utils = __webpack_require__("E7ox");

// EXTERNAL MODULE: ./src/components/PageSEO.tsx + 1 modules
var PageSEO = __webpack_require__("Mmls");

// EXTERNAL MODULE: ./src/utils/SEO/next-seo.config.ts
var next_seo_config = __webpack_require__("L1GG");

// CONCATENATED MODULE: ./pages/blog/[slug].tsx

var _slug_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const BlogPage = ({
  blog
}) => {
  const siteUrl = `https://remkim.com/blog/${blog.slug}`;

  const config = _objectSpread({}, next_seo_config["a" /* default */], {
    title: blog.title,
    description: blog.tldr,
    canonical: siteUrl,
    openGraph: {
      url: siteUrl,
      title: blog.title,
      description: blog.tldr,
      site_name: "Rem Kim",
      locale: 'en-US',
      images: [{
        url: blog.thumbnailUrl
      }]
    }
  });

  return _slug_jsx(external_react_default.a.Fragment, null, _slug_jsx(PageSEO["a" /* default */], {
    pageInfo: config
  }), _slug_jsx(blog_BlogContent, {
    blog: blog
  }));
};

const getStaticPaths = async () => {
  try {
    const blogs = Object(utils["a" /* allBlogs */])();
    const slugs = blogs.map(x => x.slug);
    const paths = slugs.map(slug => ({
      params: {
        slug
      }
    }));
    return {
      paths,
      fallback: false
    };
  } catch (error) {
    console.error("Static patch err:", error.message);
    return {
      paths: [],
      fallback: false
    };
  }
};
const getStaticProps = async ({
  params: {
    slug
  }
}) => {
  try {
    const payload = Object(utils["a" /* allBlogs */])();
    const blog = payload.find(bl => bl.slug === slug);
    return {
      props: {
        blog
      }
    };
  } catch (error) {
    console.error("Static prop err: ", error);
    return {
      props: {
        blog: null
      }
    };
  }
};
/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (BlogPage);

/***/ })

/******/ });