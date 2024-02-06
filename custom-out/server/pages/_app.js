(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9493:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Sora_8e19c6', '__Sora_Fallback_8e19c6'","fontStyle":"normal"},
	"className": "__className_8e19c6",
	"variable": "__variable_8e19c6"
};


/***/ }),

/***/ 2132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"components\\Layout.js","import":"Sora","arguments":[{"subsets":["latin"],"variable":"--font-sora","weight":["100","200","300","400","500","600","700","800"]}],"variableName":"sora"}
var target_path_components_Layout_js_import_Sora_arguments_subsets_latin_variable_font_sora_weight_100_200_300_400_500_600_700_800_variableName_sora_ = __webpack_require__(9493);
var target_path_components_Layout_js_import_Sora_arguments_subsets_latin_variable_font_sora_weight_100_200_300_400_500_600_700_800_variableName_sora_default = /*#__PURE__*/__webpack_require__.n(target_path_components_Layout_js_import_Sora_arguments_subsets_latin_variable_font_sora_weight_100_200_300_400_500_600_700_800_variableName_sora_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "react-icons/fa6"
const fa6_namespaceObject = require("react-icons/fa6");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/main/Nav.js
// icons


// Import dependencies


// Navigation data containing name, path, and icon for each link
const navData = [
    {
        name: "home",
        path: "/",
        icon: /*#__PURE__*/ jsx_runtime.jsx(fa6_namespaceObject.FaHouseChimney, {})
    },
    {
        name: "about",
        path: "/about",
        icon: /*#__PURE__*/ jsx_runtime.jsx(fa6_namespaceObject.FaUser, {})
    },
    {
        name: "services",
        path: "/services",
        icon: /*#__PURE__*/ jsx_runtime.jsx(fa6_namespaceObject.FaMicrochip, {})
    },
    {
        name: "work",
        path: "/work",
        icon: /*#__PURE__*/ jsx_runtime.jsx(fa6_namespaceObject.FaBriefcase, {})
    },
    {
        name: "testimonials",
        path: "/testimonials",
        icon: /*#__PURE__*/ jsx_runtime.jsx(fa6_namespaceObject.FaCommentDots, {})
    },
    {
        name: "contact",
        path: "/contact",
        icon: /*#__PURE__*/ jsx_runtime.jsx(fa6_namespaceObject.FaHandshake, {})
    }
];
// Nav component
const Nav = ()=>{
    // Accessing the Next.js router
    const router = (0,router_.useRouter)();
    // Current pathname
    const pathname = router.pathname;
    return /*#__PURE__*/ jsx_runtime.jsx("nav", {
        className: "flex flex-col items-center xl:justify-center h-max bottom-0 gap-y-4  fixed mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex w-full xl:flex-col items-center justify-between xl:justify-center xl:gap-y-10 px-4 md:px-40 xl:px-0 xl:h-max py-8 bg-slate-700 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full custom-nav",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "w-[0px] h-[340px] bg-slate-800 rounded-l-[5px] absolute right-[63px] transition-all  duration-200 custom-drawer"
                }),
                navData.map((link, index)=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                        className: `${link.path === pathname && "text-orange"}
              relative flex items-center group hover:text-orange transition-all duration-300`,
                        href: link.path,
                        prefetch: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "absolute pr-14 right-[45px] rounded-[3px] w-[120px] hidden hover:bg-white/10  transition-all duration-300 custom-draw",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "relative flex text-white p-[10px] hover:text-orange custom-text  transition-all duration-300",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: `${link.path === pathname && "text-orange"} text-[12px] leading-none 
                  font-semibold capitalize`,
                                        children: link.name
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: `${link.path != pathname && "icon-wrapper-animate"}`,
                                children: link.icon
                            })
                        ]
                    }, index);
                })
            ]
        })
    });
};
/* harmony default export */ const main_Nav = (Nav);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react-type-animation"
var external_react_type_animation_ = __webpack_require__(4306);
;// CONCATENATED MODULE: ./components/main/NameAnimation.js
// Importing the TypeAnimation component from 'react-type-animation'


// NameAnimation component
const NameAnimation = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("p", {
        className: "flex items-center gap-x-5 text-lg mr-4 mb-4 max-lg:mr-0 max-lg:mb-0",
        children: /*#__PURE__*/ jsx_runtime.jsx(external_react_type_animation_.TypeAnimation, {
            sequence: [
                "Adrian Kmeto",
                2000,
                "as",
                1000,
                "Andrew Wesley King",
                2000
            ],
            speed: 70,
            className: "text-orange",
            wrapper: "span",
            repeat: 2
        })
    });
};
/* harmony default export */ const main_NameAnimation = (NameAnimation);

;// CONCATENATED MODULE: ./components/main/Header.js
// Importing necessary modules/components from Next.js



// Importing the custom NameAnimation component

// Header component
const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("header", {
        className: "z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] max-lg:px-0",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container mx-auto",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex justify-between lg:flex-row items-center gap-y-6 mt-8",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "xl:w-[82%] max-lg:w-[20%]",
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: "/smith3.png",
                                width: 100,
                                height: 48,
                                alt: "",
                                className: "max-lg:w-[70%]",
                                priority: true
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "xl:w-[22%] max-lg:w-[60%] flex flex-col justify-center",
                        children: /*#__PURE__*/ jsx_runtime.jsx(main_NameAnimation, {})
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const main_Header = (Header);

;// CONCATENATED MODULE: ./components/main/TopLeftImg.js


const TopLeftImg = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "absolute left-0 top-0 mix-blend-color-dodge z-10 w-[11%] xl:w-[21%] opacity-60",
        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
            src: "/steam2.jpg",
            width: 400,
            height: 400,
            alt: ""
        })
    });
};
/* harmony default export */ const main_TopLeftImg = (TopLeftImg);

;// CONCATENATED MODULE: ./components/main/WomanBg.js


const WomanBg = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "w-[11%] xl:w-[16%] absolute -right-0 -bottom-0 mix-blend-color-dodge animate-pulse duration-75 z-10",
        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
            src: "/steampunk-14.png",
            width: 260,
            height: 200,
            alt: "",
            className: "w-full h-full"
        })
    });
};
/* harmony default export */ const main_WomanBg = (WomanBg);

;// CONCATENATED MODULE: ./components/main/Bulb.js


const Bulb = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "absolute -left-30 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10  w-[11%] xl:w-[12%]",
        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
            src: "/bulb.png",
            width: 260,
            height: 200,
            className: "w-full h-full",
            alt: ""
        })
    });
};
/* harmony default export */ const main_Bulb = (Bulb);

;// CONCATENATED MODULE: ./components/Layout.js
// Import necessary modules and components



// Import main components used in the layout





// Functional component for the main layout structure
const Layout = ({ children  })=>{
    // Use the Next.js useRouter hook to get the current route
    const router = (0,router_.useRouter)();
    const { pathname  } = router;
    // Define routes to exclude certain components
    const routesToExclude = [
        "/",
        "/about"
    ];
    // Conditional rendering flags based on the current route
    const renderComponent = pathname !== "/";
    const notAboutRenderComponent = !routesToExclude.includes(pathname);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `page bg-site text-white bg-cover bg-no-repeat ${(target_path_components_Layout_js_import_Sora_arguments_subsets_latin_variable_font_sora_weight_100_200_300_400_500_600_700_800_variableName_sora_default()).variable} font-sora relative`,
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "bg-primary/60 h-full max-lg:h-auto",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "bg-gradient-to-r from-primary/10 via-black/30 to-black/20 h-full w-full  max-lg:h-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(main_TopLeftImg, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(main_Nav, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(main_Header, {}),
                    renderComponent && /*#__PURE__*/ jsx_runtime.jsx(main_WomanBg, {}),
                    notAboutRenderComponent && /*#__PURE__*/ jsx_runtime.jsx(main_Bulb, {}),
                    children
                ]
            })
        })
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ }),

/***/ 8010:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Import the motion module from framer-motion library


// Define animation variants for the transition effect
const transitionVariants = {
    // Initial position, not visible
    initial: {
        translateY: "0%"
    },
    // Animation position, sliding up to hide
    animate: {
        translateY: "-100%"
    },
    // Exit position, sliding down to reappear
    exit: {
        translateY: "0%"
    }
};
// Functional component for the transition effect
const Transition = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
            className: "w-screen h-screen absolute top-0 left-0 z-[100] bg-[#E5AA70]",
            variants: transitionVariants,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            transition: {
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.6
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transition);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2132);
/* harmony import */ var _components_Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8010);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Transition__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Transition__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Import global styles


// Import Layout and Transition components


// Import necessary modules from Next.js and framer-motion


// MyApp component function
function MyApp({ Component , pageProps  }) {
    // Initialize router
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    // Render the application layout
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
            mode: "wait",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                className: "h-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Transition__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                ]
            }, router.route)
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4306:
/***/ ((module) => {

"use strict";
module.exports = require("react-type-animation");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,893,675,664], () => (__webpack_exec__(6004)));
module.exports = __webpack_exports__;

})();