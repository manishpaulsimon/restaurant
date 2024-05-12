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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: roboto;\r\n  background: linear-gradient(to bottom, #2a6fca, #3b82f6 20%, #89b4ff 80%);\r\n  /* Pastel background color */\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 100px;\r\n  background: linear-gradient(to bottom, #2a6fca, #3b82f6);\r\n  padding: 10px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  width: 100%;\r\n  z-index: 1000; /* Keep it above other content */\r\n}\r\nnav {\r\n  display: flex;\r\n  gap: 10px;  /* Ensure this is here if nav is the direct parent of buttons */\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.inner-container {\r\n  padding-top: 100px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.logo {\r\n  width: 500px;   /* Desired logo width */\r\n  height: 500px;  /* Desired logo height */\r\n  overflow: hidden;  /* Hides parts of the image outside this container */\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.logo img {\r\n  position: absolute;\r\n  top: 50%;    /* Adjust these values to focus on the correct part of the image */\r\n  left: 50%;\r\n  width: auto;  /* Adjust width if needed */\r\n  height: 300%;  /* Zooms into the image */\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.image-grid {\r\n  display: grid;\r\n  justify-content: flex-start; /* Aligns items to the left */\r\n  width: 50%; /* Takes half of the container's width */\r\n  padding-left: 200px;\r\n  border-color: #89b4ff;\r\n}\r\n\r\n.image-grid img {\r\n  width: 100%; /* Each image will take the full width of its container */\r\n  max-width: 500px; /* Adjust the maximum width as needed */\r\n  margin: 10px; /* Adds some space around the images */\r\n  height: auto;\r\n /* Maintains aspect ratio */\r\n}\r\n\r\n.description {\r\n  width: 50%; /* Takes the other half of the container's width */\r\n  padding: 20px; /* Padding for some breathing room */\r\n  box-sizing: border-box; /* Includes padding in the width calculation */\r\n  padding-right: 200px;\r\n  font-weight: 400;\r\n  font-size: 18px;\r\n}\r\n\r\n.btn {\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  font-weight: 600;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n  background-color: #dbeafe;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  bottom: 0;\r\n  height: 100px;\r\n  background-color: #89b4ff;\r\n  width: 100vw;\r\n  position: fixed;\r\n}\r\n\r\nbutton {\r\n  padding: 10px;\r\n}\r\n\r\n/* Other Page */\r\n\r\n.menu-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr); /* Show two items per row */\r\n  gap: 20px;\r\n  padding: 20px;\r\n}\r\n\r\n.biryani-image {\r\n  width: 200px;  /* Make images responsive within grid */\r\n  height: auto; /* Maintain aspect ratio */\r\n  object-fit: cover;\r\n  padding-left: 300px;\r\n}\r\n\r\n\r\n.about-container {\r\n  max-width: 800px; /* Limiting width for readability */\r\n  margin: 20px auto; /* Centering container with auto margins */\r\n  padding: 20px;\r\n  background-color: #ffffff; /* Light background for the content */\r\n  box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* Soft shadow for depth */\r\n  border-radius: 8px; /* Slightly rounded corners for a modern look */\r\n}\r\n\r\n.about-container h1 {\r\n  color: #333; /* Dark grey for contrast */\r\n  font-size: 2em; /* Large font size for heading */\r\n}\r\n\r\n.about-container p {\r\n  font-size: 1.2em; /* Slightly larger text for readability */\r\n  color: #666; /* Medium grey for text */\r\n  line-height: 1.6; /* Good line height for reading */\r\n  margin-top: 10px; /* Spacing between paragraphs */\r\n}\r\n\r\n.about-container img {\r\n  max-width: 100%; /* Responsive image setup */\r\n  height: auto;\r\n  border-radius: 4px; /* Optional: slightly rounded corners for the image */\r\n}\r\n\r\n/* contact page */\r\n\r\n.contact-container {\r\n  max-width: 600px;\r\n  margin: 20px auto;\r\n  padding: 20px;\r\n  background-color: #ffffff;\r\n  box-shadow: 0 2px 5px rgba(0,0,0,0.1);\r\n  border-radius: 8px;\r\n  text-align: left;\r\n}\r\n\r\n.contact-container h1 {\r\n  color: #3b82f6;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.contact-container p {\r\n  color: #333;\r\n  line-height: 1.5;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.contact-container form {\r\n  margin-top: 20px;\r\n}\r\n\r\n.contact-container label {\r\n  display: block;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.contact-container input,\r\n.contact-container textarea {\r\n  width: 100%;\r\n  padding: 8px;\r\n  margin-bottom: 20px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\n\r\n.contact-container button {\r\n  background-color: #3b82f6;\r\n  color: white;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  text-transform: uppercase;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.contact-container button:hover {\r\n  background-color: #2a6fda;\r\n}\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/Description.js":
/*!***************************************!*\
  !*** ./src/components/Description.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Description() {\r\n    const container = document.createElement('div');\r\n    container.className = 'description';\r\n    const title = document.createElement('h1');\r\n    title.textContent = \"Mani's Dum Biryani\";\r\n    const paragraph = document.createElement('p');\r\n    paragraph.textContent = `As we set off from our home at Hebbal at 3:30 am, bleary-eyed and last night's meal barely digested, the question at the top of our minds was: \"Who has biryani so early in the morning?\" Thousands of Bengalurians, apparently! While the Instagram universe may seem to have just woken up to 4 am biryani, it has been around for a while.\\n\\nThe best place to understand this early morning biryani mania is Hoskote. We drove 30-odd km from Bengaluru towards Kolar and turned in towards Mani Dum Biryani. A long line of cars parked on either side of the road and every bylane greeted us. The moon was high and it was not yet five o'clock, but people were milling about like it was a village fair.`;\r\n\r\n  \r\n    container.appendChild(title);\r\n    container.appendChild(paragraph);\r\n  \r\n    return container;\r\n  }\r\n\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Description);\n\n//# sourceURL=webpack://restaurant/./src/components/Description.js?");

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Footer() {\r\n    const footer = document.createElement('footer');\r\n    footer.textContent = \"© 2024 Mani's Dum Biryani\";\r\n    return footer;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n//# sourceURL=webpack://restaurant/./src/components/Footer.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _pages_HomePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/HomePage.js */ \"./src/pages/HomePage.js\");\n/* harmony import */ var _pages_MenuPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/MenuPage.js */ \"./src/pages/MenuPage.js\");\n/* harmony import */ var _pages_AboutPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/AboutPage.js */ \"./src/pages/AboutPage.js\");\n/* harmony import */ var _pages_ContactPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/ContactPage.js */ \"./src/pages/ContactPage.js\");\n\r\n\r\n\r\n \r\n\r\n\r\n\r\nfunction Header() {\r\n    const newLogo = document.createElement('img');\r\n    const header = document.createElement('header');\r\n\r\n    newLogo.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    newLogo.classList.add('logo');\r\n\r\n    const nav = document.createElement('nav');\r\n\r\n    const buttons = ['Home','Menu','About','Contact'].map(text => {\r\n        const button = document.createElement('button');\r\n        button.textContent = text;\r\n        button.classList = `btn${text} btn`;\r\n        return button;\r\n    });\r\n\r\n    buttons.forEach(button => nav.appendChild(button));\r\n    buttons.forEach(button => {\r\n        button.addEventListener('click', () => {\r\n            const mainContent = document.getElementById('main-content');\r\n            switch (button.textContent) {\r\n                case 'Home':\r\n                    mainContent.innerHTML = '';  \r\n                    mainContent.appendChild((0,_pages_HomePage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n                    break;\r\n                case 'Menu':\r\n                    mainContent.innerHTML = '';\r\n                    mainContent.appendChild((0,_pages_MenuPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n                    break;\r\n                case 'About':\r\n                    mainContent.innerHTML = '';\r\n                    mainContent.appendChild((0,_pages_AboutPage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\n                    break;\r\n                case 'Contact':\r\n                    mainContent.innerHTML = '';\r\n                    mainContent.appendChild((0,_pages_ContactPage_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\r\n                    break;\r\n            }\r\n        });\r\n    });\r\n    \r\n    header.appendChild(newLogo);\r\n    header.appendChild(nav);\r\n\r\n    return header;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://restaurant/./src/components/Header.js?");

/***/ }),

/***/ "./src/components/ImageGrid.js":
/*!*************************************!*\
  !*** ./src/components/ImageGrid.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_kebab_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/kebab.png */ \"./src/assets/kebab.png\");\n\r\n\r\nfunction ImageGrid() {\r\n    const container = document.createElement('div');\r\n    container.className = 'image-grid';\r\n  \r\n    // Create an img element directly for the kebab image\r\n    const img = document.createElement('img');\r\n    img.src = _assets_kebab_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    container.appendChild(img);\r\n\r\n    return container;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageGrid);\r\n\n\n//# sourceURL=webpack://restaurant/./src/components/ImageGrid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/HomePage */ \"./src/pages/HomePage.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\r\n\r\n\r\n\r\n\r\nfunction initSite() {\r\n    const container = document.getElementById('container');\r\n\r\n    // Create header, main, and footer\r\n    const header = document.createElement('div');\r\n    header.id = 'header';\r\n\r\n    const main = document.createElement('div');\r\n    main.id = 'main-content';\r\n\r\n    const footer = document.createElement('div');\r\n    footer.id = 'footer';\r\n\r\n    // Append these to the container\r\n    container.appendChild(header);\r\n    container.appendChild(main);\r\n    container.appendChild(footer);\r\n\r\n    // Load initial content\r\n    header.appendChild((0,_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());  // Load the header component\r\n    main.appendChild((0,_pages_HomePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());  // Load the home page by default\r\n    footer.appendChild((0,_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());  // Load the footer component\r\n}\r\n\r\n// Ensure this is called once the DOM is fully loaded\r\ndocument.addEventListener('DOMContentLoaded', initSite);\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/pages/AboutPage.js":
/*!********************************!*\
  !*** ./src/pages/AboutPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.js\");\n\r\n\r\n\r\n\r\nfunction AboutPage() {\r\n    const container = document.getElementById('main-content');\r\n\r\n    const innerContainer = document.createElement('div');\r\n    innerContainer.classList.add('about-container');\r\n\r\n    const title = document.createElement('h1');\r\n    title.textContent = \"About Mani's Dum Biryani\";\r\n    innerContainer.appendChild(title);\r\n\r\n    const para1 = document.createElement('p');\r\n    para1.textContent = \"At Mani's Dum Biryani, we believe in serving authentic, mouth-watering biryani that captures the essence of traditional Indian cuisine.\";\r\n    innerContainer.appendChild(para1);\r\n\r\n    const para2 = document.createElement('p');\r\n    para2.textContent = \"Founded in 2020, our mission has been to provide our customers with a unique blend of spices and the highest quality ingredients sourced locally.\";\r\n    innerContainer.appendChild(para2);\r\n\r\n    const para3 = document.createElement('p');\r\n    para3.textContent = \"Join us to experience a culinary journey through the rich flavors and vibrant culture of India.\";\r\n    innerContainer.appendChild(para3);\r\n\r\n    // Optionally add an image\r\n    const image = document.createElement('img');\r\n    image.src = '../assets/biryani-1.png'; // Replace with path to an actual image\r\n    image.alt = 'Interior of Mani\\'s Dum Biryani restaurant';\r\n    image.style.width = '100%'; // Make image responsive\r\n    image.style.height = 'auto';\r\n    image.style.marginTop = '20px';\r\n    innerContainer.appendChild(image);\r\n\r\n\r\n    container.appendChild(innerContainer);\r\n    container.appendChild((0,_components_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n    container.classList.add('container');\r\n\r\n    return container;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);\n\n//# sourceURL=webpack://restaurant/./src/pages/AboutPage.js?");

/***/ }),

/***/ "./src/pages/ContactPage.js":
/*!**********************************!*\
  !*** ./src/pages/ContactPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.js\");\n\r\n\r\n\r\nfunction ContactPage() {\r\n    const container = document.getElementById('main-content');\r\n\r\n    const innerContainer = document.createElement('div');\r\n\r\n    innerContainer.classList.add('contact-container');\r\n\r\n    const title = document.createElement('h1');\r\n    title.textContent = \"Contact Us\";\r\n    innerContainer.appendChild(title);\r\n\r\n    const phoneNumber = document.createElement('p');\r\n    phoneNumber.textContent = \"Phone: +123 456 7890\";\r\n    innerContainer.appendChild(phoneNumber);\r\n\r\n    const address = document.createElement('p');\r\n    address.textContent = \"Address: 123 Biryani St, Flavor Town, IN 560001\";\r\n    innerContainer.appendChild(address);\r\n\r\n    // Creating a simple contact form\r\n    const form = document.createElement('form');\r\n    form.setAttribute('action', '#'); // Set the action URL to your server endpoint\r\n    form.setAttribute('method', 'POST');\r\n\r\n    const emailLabel = document.createElement('label');\r\n    emailLabel.setAttribute('for', 'email');\r\n    emailLabel.textContent = \"Your Email:\";\r\n    form.appendChild(emailLabel);\r\n\r\n    const emailInput = document.createElement('input');\r\n    emailInput.setAttribute('type', 'email');\r\n    emailInput.setAttribute('id', 'email');\r\n    emailInput.setAttribute('name', 'email');\r\n    emailInput.required = true;\r\n    form.appendChild(emailInput);\r\n\r\n    const messageLabel = document.createElement('label');\r\n    messageLabel.setAttribute('for', 'message');\r\n    messageLabel.textContent = \"Your Message:\";\r\n    form.appendChild(messageLabel);\r\n\r\n    const messageInput = document.createElement('textarea');\r\n    messageInput.setAttribute('id', 'message');\r\n    messageInput.setAttribute('name', 'message');\r\n    messageInput.required = true;\r\n    form.appendChild(messageInput);\r\n\r\n    const submitButton = document.createElement('button');\r\n    submitButton.type = 'submit';\r\n    submitButton.textContent = 'Send';\r\n    form.appendChild(submitButton);\r\n\r\n    innerContainer.appendChild(form);\r\n\r\n    container.appendChild(innerContainer);\r\n\r\n    container.appendChild((0,_components_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n\r\n    container.classList.add('container');\r\n\r\n\r\n    return container;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPage);\r\n\n\n//# sourceURL=webpack://restaurant/./src/pages/ContactPage.js?");

/***/ }),

/***/ "./src/pages/HomePage.js":
/*!*******************************!*\
  !*** ./src/pages/HomePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var _components_ImageGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ImageGrid */ \"./src/components/ImageGrid.js\");\n/* harmony import */ var _components_Description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Description */ \"./src/components/Description.js\");\n\r\n\r\n\r\n\r\nfunction HomePage() {\r\n\r\n    const container = document.getElementById('main-content');\r\n\r\n    const innerContainer = document.createElement('div');\r\n    innerContainer.appendChild((0,_components_ImageGrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n    innerContainer.appendChild((0,_components_Description__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n    innerContainer.classList.add('inner-container');\r\n\r\n    container.appendChild(innerContainer);\r\n    container.appendChild((0,_components_Footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n\r\n    return container;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/pages/HomePage.js?");

/***/ }),

/***/ "./src/pages/MenuPage.js":
/*!*******************************!*\
  !*** ./src/pages/MenuPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_biryani_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/biryani-1.png */ \"./src/assets/biryani-1.png\");\n/* harmony import */ var _assets_biryani_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/biryani-2.png */ \"./src/assets/biryani-2.png\");\n/* harmony import */ var _assets_biryani_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/biryani-3.png */ \"./src/assets/biryani-3.png\");\n/* harmony import */ var _assets_biryani_4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/biryani-4.png */ \"./src/assets/biryani-4.png\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst biryani = [\r\n    { name: _assets_biryani_1_png__WEBPACK_IMPORTED_MODULE_0__, description: 'Mutton Biryani' },\r\n    { name: _assets_biryani_2_png__WEBPACK_IMPORTED_MODULE_1__, description: 'Chicken Biryani' },\r\n    { name: _assets_biryani_3_png__WEBPACK_IMPORTED_MODULE_2__, description: 'Kebab' },\r\n    { name: _assets_biryani_4_png__WEBPACK_IMPORTED_MODULE_3__, description: 'Mixed Biryani' }\r\n];\r\n\r\nfunction MenuPage() {\r\n    const container = document.createElement('div');\r\n\r\n    const innerContaier = document.createElement('div');\r\n\r\n    innerContaier.classList.add('menu-container');\r\n\r\n    biryani.forEach(b => {\r\n        const img = document.createElement('img');\r\n        img.src = b.name;\r\n        img.classList.add('biryani-image');\r\n        const text = document.createElement('p');\r\n        text.textContent = b.description;\r\n        innerContaier.appendChild(img);\r\n        innerContaier.appendChild(text);\r\n    });\r\n    container.appendChild(innerContaier);\r\n\r\n    container.appendChild((0,_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\r\n\r\n    container.classList.add('container');\r\n\r\n\r\n\r\n    return container;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuPage);\r\n\n\n//# sourceURL=webpack://restaurant/./src/pages/MenuPage.js?");

/***/ }),

/***/ "./src/assets/biryani-1.png":
/*!**********************************!*\
  !*** ./src/assets/biryani-1.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1bdb0cd55d654dda9306.png\";\n\n//# sourceURL=webpack://restaurant/./src/assets/biryani-1.png?");

/***/ }),

/***/ "./src/assets/biryani-2.png":
/*!**********************************!*\
  !*** ./src/assets/biryani-2.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5ba3436311064904d2dd.png\";\n\n//# sourceURL=webpack://restaurant/./src/assets/biryani-2.png?");

/***/ }),

/***/ "./src/assets/biryani-3.png":
/*!**********************************!*\
  !*** ./src/assets/biryani-3.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"35e68357d13dc4c5e0aa.png\";\n\n//# sourceURL=webpack://restaurant/./src/assets/biryani-3.png?");

/***/ }),

/***/ "./src/assets/biryani-4.png":
/*!**********************************!*\
  !*** ./src/assets/biryani-4.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3b7494d4b092792b52dd.png\";\n\n//# sourceURL=webpack://restaurant/./src/assets/biryani-4.png?");

/***/ }),

/***/ "./src/assets/kebab.png":
/*!******************************!*\
  !*** ./src/assets/kebab.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"26d8c1f59edb35f1d269.png\";\n\n//# sourceURL=webpack://restaurant/./src/assets/kebab.png?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b6e928cddf3467f6d220.png\";\n\n//# sourceURL=webpack://restaurant/./src/assets/logo.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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