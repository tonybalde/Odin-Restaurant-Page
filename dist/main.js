/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\r\n\r\n    const contentDiv = document.querySelector(\"#content\");\r\n\r\n    // Remove\r\n    contentDiv.replaceChildren();\r\n\r\n    // DOM for heading\r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent = \"Welcome to Tony's Pizza Restaurant\";\r\n    heading.classList.add(\"landing-title\");\r\n    contentDiv.appendChild(heading);\r\n\r\n    // DOM for phoneImage\r\n    const phoneImage = document.createElement(\"img\");\r\n    phoneImage.classList.add(\"image\");\r\n    phoneImage.src = \"/images/phone.png\";\r\n    phoneImage.alt = \"Image of phone\";\r\n    contentDiv.appendChild(phoneImage);\r\n\r\n    // DOM for P tag for phoneImage\r\n    const para1PhoneImage = document.createElement(\"p\");\r\n    para1PhoneImage.classList.add(\"contact-copy\");\r\n    para1PhoneImage.textContent = \"Call us!\";\r\n    contentDiv.appendChild(para1PhoneImage);\r\n\r\n    // DOM for emailImage\r\n    const emailImage = document.createElement(\"img\");\r\n    emailImage.classList.add(\"image\");\r\n    emailImage.src = \"/images/email.png\";\r\n    emailImage.alt = \"Image of email\";\r\n    appendChild(emailImage);\r\n\r\n    // DOM for P tag for emailImage\r\n    const para1EmailImage = document.createElement(\"p\");\r\n    para1EmailImage.classList.add(\"contact-copy\");\r\n    para1EmailImage.textContent = \"Email us at something@mail.com\";\r\n    contentDiv.appendChild(para1EmailImage);\r\n\r\n    // DOM for addressImage\r\n    const topImage = document.createElement(\"img\");\r\n    topImage.classList.add(\"image\");\r\n    topImage.src = \"/images/mail.png\";\r\n    topImage.alt = \"Image of mailing address\";\r\n    appendChild(topImage);\r\n\r\n    // DOM for P tag for emailImage\r\n    const para3AddressImage = document.createElement(\"p\");\r\n    para3AddressImage.classList.add(\"contact-copy\");\r\n    para3AddressImage.textContent = \"Our address is 4321 Fake Street, Some Town, Some Country\";\r\n    contentDiv.appendChild(para3AddressImage);\r\n\r\n\r\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage */ \"./src/loadPage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n(0,_loadPage__WEBPACK_IMPORTED_MODULE_0__.initialLoad)();\r\n\r\n// Tab switching module\r\n\r\nlet tabSwitchingModule = (function(){\r\n\r\n    const homeTab = document.querySelector(\".home\");\r\n    homeTab.addEventListener(\"click\", _loadPage__WEBPACK_IMPORTED_MODULE_0__.initialLoad);\r\n\r\n    const menuTab = document.querySelector(\".menu\");\r\n    menuTab.addEventListener(\"click\", _menu__WEBPACK_IMPORTED_MODULE_1__.menu);\r\n\r\n    const contactTab = document.querySelector(\".contact\");\r\n    contactTab.addEventListener(\"click\", _contact__WEBPACK_IMPORTED_MODULE_2__.contact);\r\n\r\n})();\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialLoad\": () => (/* binding */ initialLoad)\n/* harmony export */ });\n\r\nfunction initialLoad(){\r\n  \r\n    const contentDiv = document.querySelector(\"#content\");\r\n\r\n    // Remove any existing DOM children\r\n    contentDiv.replaceChildren();\r\n\r\n    // Create the H1\r\n    const h1Title = document.createElement(\"h1\");\r\n    h1Title.textContent = \"Tony's Pizza\"\r\n    h1Title.classList.add(\"title\");\r\n    contentDiv.appendChild(h1Title);\r\n    \r\n    // Create the image\r\n    const topImage = document.createElement(\"img\");\r\n    topImage.classList.add(\"home-img\");\r\n    topImage.src = \"../images/pizza.jpg\";\r\n    topImage.alt = \"Restaurant Image\";\r\n    contentDiv.appendChild(topImage);\r\n\r\n    // Create the Paragraph\r\n    const para = document.createElement(\"p\");\r\n    para.textContent = \"Serving the best pizza in town since 1956!\";\r\n    para.classList.add(\"para-home\");\r\n    contentDiv.appendChild(para);\r\n\r\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/loadPage.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n\r\nfunction menu() {\r\n\r\n    const contentDiv = document.querySelector(\"#content\");\r\n\r\n    // Remove any existing DOM children if present\r\n    contentDiv.replaceChildren();\r\n\r\n    // DOM for heading\r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent = \"Im the HEADING\";\r\n    heading.classList.add(\"landing-title\");\r\n    contentDiv.appendChild(heading);\r\n\r\n    // DOM for greenBeanCass\r\n    const greenBeasCass = document.createElement(\"img\");\r\n    greenBeasCass.classList.add(\"image\");\r\n    greenBeasCass.src = \"/images/muzzarella.jpg\";\r\n    greenBeasCass.alt = \"Image of Muzzarella Pizza\";\r\n    contentDiv.appendChild(greenBeasCass);\r\n\r\n    // DOM for p tag greenBeanCass\r\n    const para1GreenBeanCass = document.createElement(\"p\");\r\n    para1GreenBeanCass.classList.add(\"menu-copy\");\r\n    para1GreenBeanCass.textContent = \"An amazing and tasty Muzzarella Pizza\";\r\n    contentDiv.appendChild(para1GreenBeanCass);\r\n\r\n    // DOM for macnCheese\r\n    const macnCheese = document.createElement(\"img\");\r\n    macnCheese.classList.add(\"image\");\r\n    macnCheese.src = \"/images/pepperoni.jpg\"\r\n    macnCheese.alt = \"Image of a Pepperoni Pizza\";\r\n    contentDiv.appendChild(macnCheese);\r\n\r\n    // DOM for p tag macnCheese\r\n    const para1macnCheese = document.createElement(\"p\");\r\n    para1macnCheese.classList.add(\"menu-copy\");\r\n    para1macnCheese.textContent = \"Great Pepperoni Pizza\";\r\n    contentDiv.appendChild(para1macnCheese);    \r\n\r\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;