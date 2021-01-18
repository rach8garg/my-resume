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

eval("/* REACT HOT LOADER */ if (false) {} try { (function () {\n\n'use-strict';\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar rotation = 0;\nvar downloadKeyCode = 18; //alt Key\n\nvar PDF_LINK = 'http://www.pixlboy.com./docs/rachit-garg-ui.pdf';\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App() {\n    _classCallCheck(this, App);\n  }\n\n  _createClass(App, [{\n    key: \"downloadPDF\",\n\n    /*\r\n    Responsible for saving PDF version of HTML file\r\n    */\n    value: function downloadPDF(event) {\n      window.open(PDF_LINK, \"_blank\");\n    }\n  }, {\n    key: \"setDates\",\n    value: function setDates(date) {\n      var dates = document.getElementsByClassName(\"date-time\");\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = dates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var item = _step.value;\n          item.innerHTML = date || 'n/a';\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      ;\n    }\n  }]);\n\n  return App;\n}(); // document.addEventListener(\"click\", (event) => {\n//     if(event.target.className.includes('flip-back')){\n//         rotation = -180;\n//         document.querySelector(\".page-front\").className += \" hidden\";\n//     }\n//     if(event.target.className.includes('flip-front')){\n//         rotation = 0;\n//         document.querySelector(\".page-front\").className = \"page-front\";\n//     }\n//     document.querySelector(\".flipper\").style.transform = `rotateY(${rotation}deg)`;\n// });\n\n\nvar app = new App();\ndocument.addEventListener(\"keyup\", function (event) {\n  if (event.which === downloadKeyCode) app.downloadPDF(event);\n});\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) {} }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanM/OWE3OCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlLXN0cmljdCc7XHJcblxyXG4gICAgbGV0IHJvdGF0aW9uICAgICAgICAgICAgPSAwO1xyXG4gICAgY29uc3QgZG93bmxvYWRLZXlDb2RlXHQ9IDE4OyAvL2FsdCBLZXlcclxuICAgIGNvbnN0IFBERl9MSU5LICAgICAgICAgID0gJ2h0dHA6Ly93d3cucGl4bGJveS5jb20uL2RvY3MvcmFjaGl0LWdhcmctdWkucGRmJztcclxuXHJcbiAgICBjbGFzcyBBcHAge1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgXHRcdFJlc3BvbnNpYmxlIGZvciBzYXZpbmcgUERGIHZlcnNpb24gb2YgSFRNTCBmaWxlXHJcbiAgICBcdCovXHJcbiAgICAgICAgZG93bmxvYWRQREYoZXZlbnQpe1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbihQREZfTElOSywgXCJfYmxhbmtcIik7XHJcbiAgICBcdH07XHJcblxyXG4gICAgICAgIHNldERhdGVzKGRhdGUpe1xyXG4gICAgICAgICAgICBsZXQgZGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGF0ZS10aW1lXCIpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGl0ZW0gb2YgZGF0ZXMpe1xyXG4gICAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBkYXRlIHx8ICduL2EnO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAvLyAgICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcygnZmxpcC1iYWNrJykpe1xyXG4gICAgLy8gICAgICAgICByb3RhdGlvbiA9IC0xODA7XHJcbiAgICAvLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS1mcm9udFwiKS5jbGFzc05hbWUgKz0gXCIgaGlkZGVuXCI7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoJ2ZsaXAtZnJvbnQnKSl7XHJcbiAgICAvLyAgICAgICAgIHJvdGF0aW9uID0gMDtcclxuICAgIC8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWZyb250XCIpLmNsYXNzTmFtZSA9IFwicGFnZS1mcm9udFwiO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsaXBwZXJcIikuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVkoJHtyb3RhdGlvbn1kZWcpYDtcclxuICAgIC8vIH0pO1xyXG4gICAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKCBldmVudC53aGljaCA9PT0gZG93bmxvYWRLZXlDb2RlKSBhcHAuZG93bmxvYWRQREYoZXZlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ })

/******/ });