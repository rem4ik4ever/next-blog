(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"+Qcy":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("mf32"),i=n("pboS"),s=n("YFqc"),c=n.n(s),l=o.a.createElement;t.a=function(e){var t=Object(a.b)().colorMode;return l(c.a,e,l(i.a,{color:{light:"teal.500",dark:"blue.500"}[t],textDecor:"underline"},e.children))}},AroE:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},PN1n:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("jXL8")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("i2R6"),a=n("48fX"),i=n("tCBg"),s=n("T0f4");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var l=n("AroE"),u=n("7KCV");t.__esModule=!0,t.default=void 0;var f,p=u(n("q1tI")),h=n("QmWs"),d=n("g/15"),m=l(n("nOHt")),b=n("elyg");function y(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var g=new Map,v=window.IntersectionObserver,w={};function k(){return f||(v?f=new v((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var O=function(e){a(l,e);var t,n=(t=l,function(){var e,n=s(t);if(c()){var r=s(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return i(this,e)});function l(e){var t;return r(this,l),(t=n.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:(0,b.addBasePath)(y(e)),as:t?(0,b.addBasePath)(y(t)):t}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=t.formatUrls(t.props.href,t.props.as),i=a.href,s=a.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=(0,h.resolve)(c,i),s=s?(0,h.resolve)(c,s):i,e.preventDefault();var l=t.props.scroll;null==l&&(l=s.indexOf("#")<0),m.default[t.props.replace?"replace":"push"](i,s,{shallow:t.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return o(l,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,h.resolve)(e,n);return[o,r?(0,h.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&v&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=k();return n?(n.observe(e),g.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var a=p.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),p.default.cloneElement(a,i)}}]),l}(p.Component);t.default=O},jXL8:function(e,t,n){"use strict";n.r(t);var r=n("rePB"),o=n("wx14"),a=n("q1tI"),i=n.n(a),s=n("BMxC"),c=n("sK1y"),l=n("mf32"),u=n("Weur"),f=n("qWyU"),p=n("pboS"),h=n("bQFp"),d=n("+Qcy"),m=n("EOkx"),b=n("Mmls"),y=n("L1GG"),g=i.a.createElement;function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var w=function(e){return g(s.a,Object(o.a)({mt:"4"},e),e.children)},k=function(e){return g(c.a,Object(o.a)({fontSize:"xl",lineHeight:"tall"},e),e.children)};t.default=function(){var e=Object(l.b)().colorMode,t=Object(m.a)("March 16th, 1993"),n=Object(m.a)(new Date),o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},y.a,{title:"About me",description:"A little bit about me!",url:"https://remkim.com/about"});return g(u.a,{direction:"column",p:"5",color:{light:"",dark:"white"}[e]},g(b.a,{pageInfo:o}),g(f.a,{as:"h1",size:"xl",fontWeight:"light"},"Hi there!"),g(w,null,g(k,null,"My name is Rem. I'm ",t.diff(n,"year")," years old and I'm a Software Engineer. I was born in Uzbekistan, but moved when I was 3 years old to"," ",g(p.a,{href:"https://goo.gl/maps/V5Ez4s6TaWCW3PFQ9"},"Kyrgyzstan")," ","and lived in a small, but very green city"," ",g(p.a,{href:"https://en.wikipedia.org/wiki/Bishkek"},"Bishkek"),".")),g(u.a,{direction:"column",align:"center",my:"5"},g(h.a,{src:"https://rem-blog-bucket.s3.us-east-2.amazonaws.com/assets/9ee9d79e-840a-4f31-b12b-452b332ccf43-450.png",alt:"Bishkek",w:"md"}),g(k,{fontSize:"sm",color:"gray.700"},"Bishkek")),g(w,null,g(k,null,"I got my bachelor degree from"," ",g(p.a,{href:"https://auca.kg/"},"American University of Central Asia (AUCA)"),", where I studied Software Engineering. I immediately fell in love with Programming. Solving problems and coding something useful. That is why I consider myself as a problem solver.")),g(w,null,g(k,null,"I started working from my senior year in university and since then never stopped. Worked my way to Internship in Canada and few years later migrated to Canada with my family.")),g(w,null,g(k,null,"Speaking of family, I'm a son, brother and a dad. I have a 2-year-old son and my family is everything for me."),g(u.a,{direction:"column",align:"center",my:"5"},g(h.a,{src:"https://rem-blog-bucket.s3.us-east-2.amazonaws.com/assets/15fe05d7-0e35-41ce-999c-ae2b8e0334d0-450.png",alt:"My Kid",w:"md"}))),g(w,null,g(k,null,"I like reading books, playing computer games and geeking out about new technologies and tech stacks also I used to skateboard when I was in school here is a cool pic of me!"),g(u.a,{direction:"column",align:"center",my:"5"},g(h.a,{src:"https://rem-blog-bucket.s3.us-east-2.amazonaws.com/assets/9a7bd470-7358-4041-aa3a-b98deab70a6d-450.png",alt:"Skateboard Pro",w:"md"}))),g(w,{my:"8"},g(f.a,{as:"h2",size:"lg",fontWeight:"normal"},"Thanks for reading! More in my"," ",g(d.a,{href:"/blog",passHref:!0},"blog"),"!")))}},pboS:function(e,t,n){"use strict";var r=n("pVnL"),o=n.n(r),a=n("8OQS"),i=n.n(a),s=n("qKvR"),c=n("+Cyc"),l=n("q1tI"),u={transition:"all 0.15s ease-out",cursor:"pointer",textDecoration:"none",outline:"none",_focus:{boxShadow:"outline"},_disabled:{opacity:"0.4",cursor:"not-allowed",textDecoration:"none"}},f=Object(l.forwardRef)((function(e,t){var n=e.isDisabled,r=e.isExternal,a=e.onClick,l=i()(e,["isDisabled","isExternal","onClick"]),f=r?{target:"_blank",rel:"noopener noreferrer"}:null;return Object(s.d)(c.a,o()({as:"a",ref:t,tabIndex:n?-1:void 0,"aria-disabled":n,onClick:n?function(e){return e.preventDefault()}:a,_hover:{textDecoration:"underline"}},f,u,l))}));f.displayName="Link",t.a=f},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[["PN1n",1,0,2,3,4,7,15]]]);