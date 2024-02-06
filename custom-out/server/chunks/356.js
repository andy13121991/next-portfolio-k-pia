"use strict";
exports.id = 356;
exports.ids = [356];
exports.modules = {

/***/ 6356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ji": () => (/* binding */ fadeIn),
/* harmony export */   "h9": () => (/* binding */ bounceIn),
/* harmony export */   "yu": () => (/* binding */ zoomInDown)
/* harmony export */ });
const fadeIn = (direction, delay)=>{
    return {
        hidden: {
            y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
            opacity: 0,
            x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
            transition: {
                type: "tween",
                duration: 1.5,
                delay: delay,
                ease: [
                    0.25,
                    0.6,
                    0.3,
                    0.8
                ]
            }
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: delay,
                ease: [
                    0.25,
                    0.25,
                    0.25,
                    0.75
                ]
            }
        }
    };
};
const bounceIn = (direction, delay)=>{
    return {
        hidden: {
            y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
            opacity: 0,
            x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                delay: delay,
                ease: [
                    0.25,
                    0.6,
                    0.3,
                    0.8
                ]
            }
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                delay: delay,
                ease: [
                    0.25,
                    0.25,
                    0.25,
                    0.75
                ]
            }
        }
    };
};
const zoomInDown = (delay)=>{
    return {
        hidden: {
            opacity: 0,
            scale: 0.5,
            y: -1000,
            transition: {
                type: "spring",
                delay: delay,
                ease: [
                    0.175,
                    0.885,
                    0.32,
                    1
                ]
            }
        },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                delay: delay,
                ease: [
                    0.175,
                    0.885,
                    0.32,
                    1
                ]
            }
        }
    };
};


/***/ })

};
;