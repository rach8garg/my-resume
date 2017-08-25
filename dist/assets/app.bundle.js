/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0eWxlcy9zdHlsZXMuc2Nzcz83NTNlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zdHlsZXMvc3R5bGVzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require(\"C:\\\\Working\\\\CV\\\\node_modules\\\\react-hot-api\\\\modules\\\\index.js\"), RootInstanceProvider = require(\"C:\\\\Working\\\\CV\\\\node_modules\\\\react-hot-loader\\\\RootInstanceProvider.js\"), ReactMount = require(\"react/lib/ReactMount\"), React = require(\"react\"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n'use-strict';\n\nvar _styles = __webpack_require__(/*! ./styles/styles.scss */ 0);\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar rotation = 0;\nvar downloadKeyCode = 18; //Used to save the screenshot of template\nvar flipToBack = \"flipToBack\";\nvar flipToFront = \"flipToFront\";\n\nvar app = function app() {};\n\n/*\r\nResponsible for saving PDF version of HTML file\r\n*/\napp.downloadPDF = function (event) {\n    window.open(\"http://www.pixlboy.com.s3-website.ap-south-1.amazonaws.com/rach8garg.pdf\", \"_blank\");\n};\n\nvar dates = document.getElementsByClassName(\"date-time\");\ndates[1].innerHTML = dates[0].innerHTML = \"27-07-2017\";\n\ndocument.addEventListener(\"click\", function (event) {\n    if (event.target.id === flipToBack) {\n        rotation = 180;\n        document.querySelector(\".flipper\").style.transform = \"rotateY(\" + rotation + \"deg)\";\n        document.querySelector(\".page-front\").className += \" hidden\";\n    }\n    if (event.target.id === flipToFront) {\n        rotation = 0;\n        document.querySelector(\".flipper\").style.transform = \"rotateY(\" + rotation + \"deg)\";\n        document.querySelector(\".page-front\").className = \"page-front\";\n    }\n});\n\ndocument.addEventListener(\"keyup\", function (event) {\n    if (event.which === downloadKeyCode) app.downloadPDF(event);\n});\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require(\"C:\\\\Working\\\\CV\\\\node_modules\\\\react-hot-loader\\\\makeExportsHot.js\"); if (makeExportsHot(module, require(\"react\"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"app.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC5qcz9kOGVlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Utc3RyaWN0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL3N0eWxlcy5zY3NzXCI7XHJcblxyXG4gICAgbGV0IHJvdGF0aW9uICAgICAgICAgICAgPSAwO1xyXG4gICAgbGV0IGRvd25sb2FkS2V5Q29kZVx0XHQ9IDE4O1x0XHQvL1VzZWQgdG8gc2F2ZSB0aGUgc2NyZWVuc2hvdCBvZiB0ZW1wbGF0ZVxyXG4gICAgbGV0IGZsaXBUb0JhY2tcdCAgIFx0ICAgID0gXCJmbGlwVG9CYWNrXCI7XHJcbiAgICBsZXQgZmxpcFRvRnJvbnRcdCAgIFx0ICAgID0gXCJmbGlwVG9Gcm9udFwiO1xyXG5cclxuICAgIGxldCBhcHAgPSBmdW5jdGlvbigpe307XHJcblxyXG4gICAgLypcclxuXHRcdFJlc3BvbnNpYmxlIGZvciBzYXZpbmcgUERGIHZlcnNpb24gb2YgSFRNTCBmaWxlXHJcblx0Ki9cclxuXHRhcHAuZG93bmxvYWRQREYgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB3aW5kb3cub3BlbihcImh0dHA6Ly93d3cucGl4bGJveS5jb20uczMtd2Vic2l0ZS5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vcmFjaDhnYXJnLnBkZlwiLCBcIl9ibGFua1wiKTtcclxuXHR9O1xyXG5cclxuICAgIHZhciBkYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkYXRlLXRpbWVcIik7XHJcbiAgICBkYXRlc1sxXS5pbm5lckhUTUwgPSBkYXRlc1swXS5pbm5lckhUTUwgPSBcIjI3LTA3LTIwMTdcIjtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmlkID09PSBmbGlwVG9CYWNrKXtcclxuICAgICAgICAgICAgcm90YXRpb24gPSAxODA7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmxpcHBlclwiKS5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWSgke3JvdGF0aW9ufWRlZylgO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2UtZnJvbnRcIikuY2xhc3NOYW1lICs9IFwiIGhpZGRlblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihldmVudC50YXJnZXQuaWQgPT09IGZsaXBUb0Zyb250KXtcclxuICAgICAgICAgICAgcm90YXRpb24gPSAwO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsaXBwZXJcIikuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVkoJHtyb3RhdGlvbn1kZWcpYDtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWZyb250XCIpLmNsYXNzTmFtZSA9IFwicGFnZS1mcm9udFwiO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoIGV2ZW50LndoaWNoID09PSBkb3dubG9hZEtleUNvZGUpIGFwcC5kb3dubG9hZFBERihldmVudCk7XHJcbiAgICB9KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);