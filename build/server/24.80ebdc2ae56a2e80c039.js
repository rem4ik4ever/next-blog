exports.ids = [24];
exports.modules = {

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

/***/ "BHJY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useBlogUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useBlogsFilter; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



function useBlogUpdate() {
  const handleUpdate = async (id, payload) => {
    const result = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`/api/cms/blogs/${id}`, payload);
    return result;
  };

  return {
    handleUpdate
  };
}
function useBlogsFilter(data, filters) {
  // filter by title
  // filter by status
  const {
    0: filteredBlogs,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(data);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    filterBlogs();
  }, [data, filters]);

  const filterBlogs = () => {
    let blogsByStatus = [];
    let blogsBySearch = [];
    const searchFilter = filters.search.trim();

    if (filters.status && filters.status !== "all") {
      blogsByStatus = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.filter(data, ({
        status
      }) => status === filters.status);
    } else {
      blogsByStatus = data;
    }

    if (searchFilter && String(searchFilter).length > 0) {
      const tagsMatch = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.filter(data, ({
        tags
      }) => lodash__WEBPACK_IMPORTED_MODULE_2___default.a.intersection(tags, searchFilter.toLowerCase().split(" ")).length > 0);

      const titleMatch = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.filter(data, ({
        title
      }) => title.toLowerCase().includes(searchFilter.toLowerCase()) || searchFilter.toLowerCase().includes(title.toLowerCase()));

      if (tagsMatch.length > 0 && titleMatch.length > 0) {
        blogsBySearch = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.intersection(tagsMatch, titleMatch);
      } else {
        blogsBySearch = tagsMatch.concat(titleMatch);
      }
    } else {
      blogsBySearch = data;
    }

    setState(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.intersection(blogsBySearch, blogsByStatus));
  };

  return {
    filteredBlogs
  };
}

/***/ }),

/***/ "OVC6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_cms_blogs_BlogForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5Fr+");
/* harmony import */ var src_cms_blogs_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BHJY");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("aYjl");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const fetcher = async url => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Something is wrong");
  }

  return await res.json();
};

const DataLoader = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const {
    id
  } = router.query;
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_4___default()(`/api/cms/blogs/${id}`, fetcher);

  if (error) {
    return __jsx("div", null, "Something is wrong");
  }

  if (!data) {
    return __jsx("div", null, "Loading...");
  }

  return __jsx(BlogFormik, {
    blog: data
  });
};

const BlogFormik = ({
  blog
}) => {
  const {
    handleUpdate
  } = Object(src_cms_blogs_hooks__WEBPACK_IMPORTED_MODULE_3__[/* useBlogUpdate */ "a"])();
  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormik"])({
    initialValues: blog,
    onSubmit: async (values, {
      setStatus,
      setSubmitting
    }) => {
      try {
        setSubmitting(true);
        await handleUpdate(blog.id, values);
        setStatus({
          success: true
        });
      } catch (error) {
        setStatus({
          error: true
        });
      }
    }
  });
  return __jsx(src_cms_blogs_BlogForm__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    formik: formik
  });
};

const BlogEdit = () => {
  return __jsx(DataLoader, null);
};

/* harmony default export */ __webpack_exports__["default"] = (BlogEdit);

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

};;