"use strict";
exports.id = 303;
exports.ids = [303];
exports.modules = {

/***/ 7303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
// Importing necessary modules/components from React and Next.js



// Array of image sources for the avatar
const imageSources = [
    "/andy13.png",
    "/andysteam21.png",
    "/andysteam13.png"
];
// Avatar component
const Avatar = ()=>{
    // State variables for image source, image index, and transitioning state
    const [imageSource, setImageSource] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("/andy13.png");
    const [imageIndex, setImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [isTransitioning, setIsTransitioning] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // useEffect to handle the image transition and change at regular intervals
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Set up an interval to change the image every 5000 milliseconds (5 seconds)
        const intervalId = setInterval(()=>{
            // Set transitioning state to true
            setIsTransitioning(true);
            // After a small delay, set transitioning state to false and change the image index
            setTimeout(()=>{
                setIsTransitioning(false);
                setImageIndex((prevIndex)=>(prevIndex + 1) % imageSources.length);
            }, 500); // Transition duration + a small delay before changing the image
        }, 5000); // Change image every 5000 milliseconds (5 seconds)
        // Cleanup interval on component unmount
        return ()=>clearInterval(intervalId);
    });
    // Empty dependency array ensures the effect runs only once when the component mounts
    // useEffect to update the image source based on the image index and sources
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setImageSource(imageSources[imageIndex]);
    }, [
        imageIndex
    ]);
    // Render the Image component with dynamic styling based on transitioning state
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "hidden xl:flex xl:max-w-none",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: imageSource,
            width: 737,
            height: 678,
            alt: "",
            className: `translate-z-0 w-full h-full img-src ${isTransitioning ? "transitioning" : ""}`
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar);


/***/ })

};
;