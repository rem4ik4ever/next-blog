(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"+Qcy":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("mf32"),c=n("pboS"),a=n("YFqc"),u=n.n(a),s=o.a.createElement;t.a=function(e){var t=Object(i.b)().colorMode;return s(u.a,e,s(c.a,{color:{light:"teal.500",dark:"blue.500"}[t],textDecor:"underline"},e.children))}},"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var u,s=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&d())}function d(){if(!l){var e=a(p);l=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||l||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},BHJY:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n("o0o1"),o=n.n(r),i=n("vDqi"),c=n.n(i),a=n("q1tI"),u=n("LvDl"),s=n.n(u);function l(){return{handleUpdate:function(e,t){var n;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.awrap(c.a.put("/api/cms/blogs/".concat(e),t));case 2:return n=r.sent,r.abrupt("return",n);case 4:case"end":return r.stop()}}),null,null,null,Promise)}}}function f(e,t){var n=Object(a.useState)(e),r=n[0],o=n[1];Object(a.useEffect)((function(){i()}),[e,t]);var i=function(){var n=[],r=[],i=t.search.trim();if(n=t.status&&"all"!==t.status?s.a.filter(e,(function(e){return e.status===t.status})):e,i&&String(i).length>0){var c=s.a.filter(e,(function(e){var t=e.tags;return s.a.intersection(t,i.toLowerCase().split(" ")).length>0})),a=s.a.filter(e,(function(e){var t=e.title;return t.toLowerCase().includes(i.toLowerCase())||i.toLowerCase().includes(t.toLowerCase())}));r=c.length>0&&a.length>0?s.a.intersection(c,a):c.concat(a)}else r=e;o(s.a.intersection(r,n))};return{filteredBlogs:r}}},CoEt:function(e,t,n){"use strict";var r=n("8OQS"),o=n.n(r),i=n("pVnL"),c=n.n(i),a=n("qKvR"),u=n("q1tI"),s=n("FpzS"),l=n("mf32"),f=n("BMxC"),p=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginBottom","marginLeft","marginRight","marginY","marginX","flex","flexBasis","width","minWidth","maxWidth","maxW","minW","w","zIndex","top","right","bottom","left","position","pos"],d=function(e){var t={},n={};for(var r in e)p.includes(r)?t[r]=e[r]:n[r]=e[r];return[t,n]},h=n("w0db"),m=function(e){var t=e.icon,n=o()(e,["icon"]);return"string"===typeof t?Object(a.d)(h.a,c()({focusable:"false",name:t,color:"currentColor"},n)):Object(a.d)(f.a,c()({as:t,"data-custom-icon":!0,focusable:"false",color:"currentColor"},n))},v=Object(u.forwardRef)((function(e,t){return Object(a.d)(f.a,c()({ref:t,position:"absolute",display:"inline-flex",width:"1.5rem",height:"100%",alignItems:"center",justifyContent:"center",right:"0.5rem",top:"50%",pointerEvents:"none",zIndex:2,transform:"translateY(-50%)"},e))})),b=Object(u.forwardRef)((function(e,t){var n=e.placeholder,r=e.children,i=o()(e,["placeholder","children"]);return Object(a.d)(s.a,c()({as:"select",appearance:"none",ref:t,pr:"2rem",pb:"px",lineHeight:"normal"},i),n&&Object(a.d)("option",{value:""},n),r)})),g=Object(u.forwardRef)((function(e,t){var n=e.rootProps,r=e.icon,i=e.iconSize,u=void 0===i?5:i,s=o()(e,["rootProps","icon","iconSize"]),p="dark"===Object(l.b)().colorMode?"whiteAlpha.800":"inherit",h=s.isReadOnly||s.isDisabled?.5:null,g=d(s),w=g[0],y=g[1];return Object(a.d)(f.a,c()({position:"relative",width:"100%"},w,n),Object(a.d)(b,c()({ref:t,color:p},y)),Object(a.d)(v,{opacity:h,color:y.color||p},Object(a.d)(m,{focusable:"false","aria-hidden":"true",icon:r||"chevron-down",size:u})))}));g.displayName="Select";t.a=g},KDq3:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cms",function(){return n("xgXH")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},ayPp:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.draft="draft",e.released="released",e.archived="archived",e.deleted="deleted"}(r||(r={}))},cTJO:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("i2R6"),i=n("48fX"),c=n("tCBg"),a=n("T0f4");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var s=n("AroE"),l=n("7KCV");t.__esModule=!0,t.default=void 0;var f,p=l(n("q1tI")),d=n("QmWs"),h=n("g/15"),m=s(n("nOHt")),v=n("elyg");function b(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var g=new Map,w=window.IntersectionObserver,y={};function O(){return f||(w?f=new w((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var j=function(e){i(s,e);var t,n=(t=s,function(){var e,n=a(t);if(u()){var r=a(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return c(this,e)});function s(e){var t;return r(this,s),(t=n.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var c=e(o,i);return t=o,n=i,r=c,c}}((function(e,t){return{href:(0,v.addBasePath)(b(e)),as:t?(0,v.addBasePath)(b(t)):t}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=t.formatUrls(t.props.href,t.props.as),c=i.href,a=i.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(c)){var u=window.location.pathname;c=(0,d.resolve)(u,c),a=a?(0,d.resolve)(u,a):c,e.preventDefault();var s=t.props.scroll;null==s&&(s=a.indexOf("#")<0),m.default[t.props.replace?"replace":"push"](c,a,{shallow:t.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return o(s,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,d.resolve)(e,n);return[o,r?(0,d.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&w&&e&&e.tagName&&(this.cleanUpListeners(),y[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=O();return n?(n.observe(e),g.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),y[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),c={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(c.href=o||r),p.default.cloneElement(i,c)}}]),s}(p.Component);t.default=j},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},twnv:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return j}));var r=n("pVnL"),o=n.n(r),i=n("8OQS"),c=n.n(i),a=n("qKvR"),u=n("lSNA"),s=n.n(u),l=n("8hg0"),f=n("CjxU"),p=n("mf32");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var h=function(e){var t=e.variant,n=e.colorMode;switch(t){case"solid":return function(e){var t=e.theme.colors,n=e.color,r=t[n]&&t[n][500],o=Object(l.a)(r,.6);return{light:{bg:Object(l.d)(n,500),color:"white"},dark:{bg:o,color:"whiteAlpha.800"}}}(e)[n];case"subtle":return function(e){var t=e.theme.colors,n=e.color,r=t[n]&&t[n][200],o=Object(l.c)(r)[300];return{light:{bg:Object(l.d)(n,100),color:Object(l.d)(n,800)},dark:{bg:o,color:Object(l.d)(n,200)}}}(e)[n];case"outline":return function(e){var t=e.theme.colors,n=e.color,r=t[n]&&t[n][200],o=Object(l.a)(r,.8);return{light:{boxShadow:"inset 0 0 0px 1px "+(t[n]&&t[n][500]),color:Object(l.d)(n,500)},dark:{boxShadow:"inset 0 0 0px 1px "+o,color:o}}}(e)[n];default:return{}}},m=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{theme:Object(f.b)(),colorMode:Object(p.b)().colorMode});return h(t)},v=n("w0db"),b=n("BMxC"),g=n("+Cyc"),w=n("D7Da"),y={sm:{minH:6,minW:6,fontSize:"sm",px:2},md:{minH:"1.75rem",minW:"1.75rem",fontSize:"sm",px:2},lg:{minH:8,minW:8,px:3}},O=function(e){var t=e.icon,n=c()(e,["icon"]);return"string"===typeof t?Object(a.d)(v.a,o()({name:t,mx:"0.5rem",css:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}}},n)):Object(a.d)(b.a,o()({as:t,focusable:"false",color:"currentColor",mx:"0.5rem",css:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}}},n))},j=function(e){return Object(a.d)(b.a,o()({isTruncated:!0,lineHeight:"1.2",as:"span"},e))};t.c=function(e){var t=e.variant,n=void 0===t?"subtle":t,r=e.size,i=void 0===r?"lg":r,u=e.variantColor,s=void 0===u?"gray":u,l=c()(e,["variant","size","variantColor"]);Object(w.g)("Tag",s);var f=m({color:s,variant:n}),p=y[i];return Object(a.d)(g.a,o()({display:"inline-flex",alignItems:"center",minH:6,maxW:"100%",rounded:"md",fontWeight:"medium"},p,f,l))}},xgXH:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return u}));n("rePB");var r=n("q1tI"),o=n.n(r),i=n("eomm"),c=n.n(i);n("mf32"),n("Weur"),n("eJLp"),n("we/t"),n("dTpq"),n("FpzS"),n("KYQk"),n("w0db"),n("CoEt"),n("BMxC"),n("OQ2h"),n("YFqc"),n("+Qcy"),n("wx14"),n("zLVn");n("twnv"),o.a.createElement,n("BHJY"),n("ayPp");var a=o.a.createElement;var u=!0;t.default=function(e){e.blogs;return a(c.a,{statusCode:404})}},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))}},[["KDq3",1,0,12,2,3,4,5,7,8,15]]]);