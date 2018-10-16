/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* REACT HOT LOADER */ if (false) {} try { (function () {\n\n'use-strict';\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n__webpack_require__(/*! ./styles/styles.scss */ \"./styles/styles.scss\");\n\nvar rotation = 0;\nvar downloadKeyCode = 18; //alt Key\n\nvar PDF_LINK = 'http://www.pixlboy.com./docs/rach8garg.pdf';\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App() {\n    _classCallCheck(this, App);\n  }\n\n  _createClass(App, [{\n    key: \"downloadPDF\",\n\n    /*\n    Responsible for saving PDF version of HTML file\n    */\n    value: function downloadPDF(event) {\n      window.open(PDF_LINK, \"_blank\");\n    }\n  }, {\n    key: \"setDates\",\n    value: function setDates(date) {\n      var dates = document.getElementsByClassName(\"date-time\");\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = dates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var item = _step.value;\n          item.innerHTML = date || 'n/a';\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return != null) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      ;\n    }\n  }]);\n\n  return App;\n}(); // document.addEventListener(\"click\", (event) => {\n//     if(event.target.className.includes('flip-back')){\n//         rotation = -180;\n//         document.querySelector(\".page-front\").className += \" hidden\";\n//     }\n//     if(event.target.className.includes('flip-front')){\n//         rotation = 0;\n//         document.querySelector(\".page-front\").className = \"page-front\";\n//     }\n//     document.querySelector(\".flipper\").style.transform = `rotateY(${rotation}deg)`;\n// });\n\n\ndocument.addEventListener(\"keyup\", function (event) {\n  if (event.which === downloadKeyCode) app.downloadPDF(event);\n});\nvar app = new App();\napp.setDates('12-10-2018');\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) {} }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanM/OWE3OCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlLXN0cmljdCc7XG5cbnJlcXVpcmUoXCIuL3N0eWxlcy9zdHlsZXMuc2Nzc1wiKTtcblxuICAgIGxldCByb3RhdGlvbiAgICAgICAgICAgID0gMDtcbiAgICBjb25zdCBkb3dubG9hZEtleUNvZGVcdD0gMTg7IC8vYWx0IEtleVxuICAgIGNvbnN0IFBERl9MSU5LICAgICAgICAgID0gJ2h0dHA6Ly93d3cucGl4bGJveS5jb20uL2RvY3MvcmFjaDhnYXJnLnBkZic7XG5cbiAgICBjbGFzcyBBcHAge1xuXG4gICAgICAgIC8qXG4gICAgXHRcdFJlc3BvbnNpYmxlIGZvciBzYXZpbmcgUERGIHZlcnNpb24gb2YgSFRNTCBmaWxlXG4gICAgXHQqL1xuICAgICAgICBkb3dubG9hZFBERihldmVudCl7XG4gICAgICAgICAgICB3aW5kb3cub3BlbihQREZfTElOSywgXCJfYmxhbmtcIik7XG4gICAgXHR9O1xuXG4gICAgICAgIHNldERhdGVzKGRhdGUpe1xuICAgICAgICAgICAgbGV0IGRhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRhdGUtdGltZVwiKTtcbiAgICAgICAgICAgIGZvcihsZXQgaXRlbSBvZiBkYXRlcyl7XG4gICAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBkYXRlIHx8ICduL2EnO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAvLyAgICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcygnZmxpcC1iYWNrJykpe1xuICAgIC8vICAgICAgICAgcm90YXRpb24gPSAtMTgwO1xuICAgIC8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWZyb250XCIpLmNsYXNzTmFtZSArPSBcIiBoaWRkZW5cIjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZihldmVudC50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKCdmbGlwLWZyb250Jykpe1xuICAgIC8vICAgICAgICAgcm90YXRpb24gPSAwO1xuICAgIC8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWZyb250XCIpLmNsYXNzTmFtZSA9IFwicGFnZS1mcm9udFwiO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmxpcHBlclwiKS5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWSgke3JvdGF0aW9ufWRlZylgO1xuICAgIC8vIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoIGV2ZW50LndoaWNoID09PSBkb3dubG9hZEtleUNvZGUpIGFwcC5kb3dubG9hZFBERihldmVudCk7XG4gICAgfSk7XG5cbiAgICBsZXQgYXBwID0gbmV3IEFwcCgpO1xuXG4gICAgYXBwLnNldERhdGVzKCcxMi0xMC0yMDE4Jyk7XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvc3R5bGVzLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvc3R5bGVzLnNjc3M/MTcyZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/styles.scss\n");

/***/ })

/******/ });