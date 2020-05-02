module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Srcm");


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

/***/ "Srcm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/core"
var core_ = __webpack_require__("WKWs");

// CONCATENATED MODULE: ./src/pages/experience/experience.ts
/* harmony default export */ var experience_experience = ([{
  name: "Wonolo: In-Demand Staffing Solutions for Businesses",
  position: "Full Stack Software Engineer",
  from: "Jan. 2020",
  to: "Present",
  logo: "/imgs/wonolo.webp",
  relevant: true,
  achievements: ["implemented data synchronization with Salesforce Integration", "Migrated Rails pages to React.js App", "Improved global Search performance from 24s per query to 400ms"]
}, {
  name: "JEWLR: Personalized Jewelry",
  position: "Full Stack Software Engineer",
  from: "Oct. 2018",
  to: "Jan. 2020",
  logo: "/imgs/jewlr.svg",
  relevant: true,
  achievements: ["Implemented server-to-server communication API reducing number of calls by 50%", "Implemented single checkout API to process multiple types of payments", "Developed Tax API to fetch tax rates depending on location", "Created React.js modal component, replacing all JQuery modals in the application"]
}, {
  name: "EventIQ inc. (Currently RightLabs inc.)",
  position: "Full Stack Software Engineer",
  from: "Oct. 2014",
  to: "Sep. 2018",
  logo: "/imgs/eventiq.png",
  relevant: true,
  achievements: ["Designed application Architecture and UI design", "Payment gateways integration", "Developing Front and Back end functionality of application", "Providing testing of server and client side"]
}, {
  name: "LogiSense Ltd. - Information Technology & Services",
  position: "Web Developer",
  from: "Feb. 2014",
  to: "Sep. 2018",
  logo: "/imgs/logisense.png",
  relevant: false,
  achievements: ["Maintained specific parts of application", "Worked on code optimization and refactoring", "Participated in international meetings with parent company and chief developers", "Contributed to a angular-ui-grid repository as a part of a job"]
}, {
  name: "Inkubasia ",
  position: "Web Developer",
  from: "May. 2013",
  to: "Sep. 2013",
  logo: "/imgs/inkubasia.png",
  relevant: false,
  achievements: ["WordPress and Joomla template customizations", "Design templates and plugins", "Installing and customizing plugins", "Managing content", "Developing applications from design prototypes and documentation"]
}]);
// EXTERNAL MODULE: ./src/components/Card.tsx
var Card = __webpack_require__("vzgc");

// CONCATENATED MODULE: ./src/pages/experience/ExperienceCard.tsx
var __jsx = external_react_default.a.createElement;




const ExperienceCard = ({
  experience
}) => {
  return __jsx(Card["a" /* default */], null, __jsx(core_["Flex"], {
    align: "center"
  }, __jsx(core_["Image"], {
    src: experience.logo,
    alt: "wonolo inc.",
    pr: "2",
    w: "12"
  }), __jsx(core_["Heading"], {
    as: "h2",
    size: "md",
    fontWeight: "light"
  }, experience.name)), __jsx(core_["Box"], {
    pl: "12"
  }, __jsx(core_["Text"], {
    fontWeight: "light"
  }, experience.position), __jsx(core_["List"], {
    mt: "2"
  }, experience.achievements.map((ach, idx) => __jsx(core_["ListItem"], {
    key: `experience-${idx}`
  }, __jsx(core_["ListIcon"], {
    icon: "check-circle",
    color: "green.500"
  }), ach)))));
};

/* harmony default export */ var experience_ExperienceCard = (ExperienceCard);
// CONCATENATED MODULE: ./src/pages/experience/ExperienceContent.tsx
var ExperienceContent_jsx = external_react_default.a.createElement;





const ExperienceContent = () => {
  const {
    0: showPrevious,
    1: toggle
  } = Object(external_react_["useState"])(false);
  return ExperienceContent_jsx(core_["Flex"], {
    direction: "column",
    p: "5"
  }, ExperienceContent_jsx(core_["Heading"], {
    as: "h1",
    size: "lg",
    fontWeight: "light"
  }, "Experience"), experience_experience.filter(exp => exp.relevant).map((exp, index) => ExperienceContent_jsx(experience_ExperienceCard, {
    experience: exp,
    key: `exp-${index}`
  })), ExperienceContent_jsx(core_["Box"], {
    textAlign: "center"
  }, ExperienceContent_jsx(core_["Link"], {
    onClick: e => {
      e.preventDefault();
      toggle(!showPrevious);
    }
  }, showPrevious ? "Hide" : "Show", " earlier experience")), ExperienceContent_jsx(core_["Collapse"], {
    isOpen: showPrevious
  }, experience_experience.filter(exp => !exp.relevant).map((exp, index) => ExperienceContent_jsx(experience_ExperienceCard, {
    experience: exp,
    key: `exp-${index}`
  }))));
};

/* harmony default export */ var experience_ExperienceContent = (ExperienceContent);
// EXTERNAL MODULE: ./src/components/PageSEO.tsx + 1 modules
var PageSEO = __webpack_require__("Mmls");

// EXTERNAL MODULE: ./src/utils/SEO/next-seo.config.ts
var next_seo_config = __webpack_require__("L1GG");

// CONCATENATED MODULE: ./pages/experience/index.tsx

var experience_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const ExperiencePage = () => {
  const config = _objectSpread({}, next_seo_config["a" /* default */], {
    title: "Experience",
    description: "My work experience"
  });

  return experience_jsx(external_react_default.a.Fragment, null, experience_jsx(PageSEO["a" /* default */], {
    pageInfo: config
  }), experience_jsx(experience_ExperienceContent, null), ";");
};

/* harmony default export */ var pages_experience = __webpack_exports__["default"] = (ExperiencePage);

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

/***/ "lJcc":
/***/ (function(module, exports) {

module.exports = require("react-ga");

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