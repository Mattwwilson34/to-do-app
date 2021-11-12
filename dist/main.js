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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Nunito-Regular.ttf */ \"./src/fonts/Nunito-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Nunito-Bold.ttf */ \"./src/fonts/Nunito-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'Nunito-Regular';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('ttf');\\n    font-family: 'Nunito-Bold';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('ttf');\\n}\\n\\n:root {\\n    --dark-blue: #5680e9;\\n    --green-blue: #84ceeb;\\n    --lighter-blue: #5ab9ea;\\n    --gray: #c1c8e4;\\n    --violet: #8860d0;\\n    --to-do-bg: #e0e4f6;\\n    --active-project: #a4a8bc;\\n    --success: #42ba96;\\n    --danger: #f05b5b;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n    box-sizing: border-box;\\n    font-family: 'Nunito-Regular';\\n}\\n\\nhtml,\\nbody {\\n    height: 100vh;\\n    background-color: var(--violet);\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n#app-container {\\n    height: 900px;\\n    width: 1000px;\\n    display: flex;\\n    background-color: var(--gray);\\n    border-radius: 10px;\\n}\\n\\n#project-container {\\n    height: 100%;\\n    width: 300px;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n#project-header-container {\\n    display: flex;\\n    justify-content: center;\\n    align-items: flex-end;\\n    height: 50px;\\n    width: 300px;\\n    border-bottom: 1px solid black;\\n    border-top-left-radius: 10px;\\n    background-color: var(--dark-blue);\\n}\\n\\n#new-project-btn-container {\\n    margin-top: auto;\\n}\\n\\n#to-do-section-container {\\n    width: 100%;\\n    height: 100%;\\n    border-left: 1px solid black;\\n}\\n\\n#project-title-container {\\n    display: flex;\\n    justify-content: center;\\n    align-items: flex-end;\\n    height: 50px;\\n    border-bottom: 1px solid black;\\n    border-top-right-radius: 10px;\\n    background-color: var(--dark-blue);\\n}\\n\\n#to-do-container {\\n    width: 100%;\\n}\\n\\n.project-header {\\n    margin: 0;\\n    text-align: center;\\n    font-family: 'Nunito-Bold';\\n    font-size: 28px;\\n}\\n.project-title {\\n    margin: 0;\\n    font-family: 'Nunito-Bold';\\n    font-size: 28px;\\n    text-align: center;\\n}\\n\\n.project {\\n    font-size: 28px;\\n    padding: 10px;\\n    border-radius: 5px;\\n}\\n\\n.active-project {\\n    background: var(--lighter-blue);\\n}\\n\\n.new-project-btn {\\n    height: 50px;\\n    width: 100%;\\n    border: none;\\n    outline: none;\\n    background-color: var(--success);\\n    opacity: 0.7;\\n}\\n\\n.new-project-btn:hover {\\n    opacity: 1;\\n}\\n\\n.to-do {\\n    width: 100%;\\n    height: 40px;\\n    font-size: 18px;\\n    display: flex;\\n    align-items: center;\\n    padding-left: 10px;\\n    background-color: var(--to-do-bg);\\n    border-bottom: 1px solid rgba(218, 217, 217, 0.7);\\n    list-style-type: none;\\n}\\n\\n.to-do:hover {\\n    background-color: var(--lighter-blue);\\n}\\n\\ninput.to-do-checkbox {\\n    margin: 0 15px;\\n    width: 20px;\\n    height: 20px;\\n}\\n\\n.to-do-delete-btn {\\n    height: 25px;\\n    width: 75px;\\n    margin-left: auto;\\n    margin-right: 10px;\\n    border: none;\\n    outline: none;\\n    color: white;\\n    background-color: var(--danger);\\n    border-radius: 5px;\\n    opacity: 0.75;\\n}\\n\\n.to-do-delete-btn:hover {\\n    opacity: 1;\\n}\\n/* *******OVERLAY********** */\\n\\n#overlay {\\n    position: fixed; /* Sit on top of the page content */\\n    /* display: none; Hidden by default */\\n    width: 100%; /* Full width (cover the whole page) */\\n    height: 100%; /* Full height (cover the whole page) */\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */\\n    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */\\n    cursor: pointer; /* Add a pointer on hover */\\n}\\n\\n#overlay-form-container {\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    height: 600px;\\n    width: 500px;\\n    background-color: var(--to-do-bg);\\n    border-radius: 10px;\\n    font-size: 50px;\\n    color: white;\\n    transform: translate(-50%, -50%);\\n    -ms-transform: translate(-50%, -50%);\\n}\\n\\n#overlay-form {\\n    height: 100%;\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-evenly;\\n    align-items: center;\\n}\\n\\n#title-input,\\n#due-date-input,\\n#priority-input {\\n    height: 50px;\\n    width: 450px;\\n    outline: none;\\n    border: none;\\n    border-radius: 5px;\\n    font-size: 24px;\\n}\\n\\n#description-input {\\n    height: 200px;\\n    width: 450px;\\n    outline: none;\\n    border: none;\\n    border-radius: 5px;\\n    font-size: 24px;\\n}\\n\\n#overlay-btn-container {\\n    width: 100%;\\n    display: flex;\\n    justify-content: space-evenly;\\n}\\n\\n#overlay-form-submit-btn,\\n#overlay-form-cancel-btn {\\n    height: 50px;\\n    width: 200px;\\n    outline: none;\\n    border: none;\\n    border-radius: 5px;\\n    font-size: 24px;\\n}\\n\\n#overlay-form-submit-btn {\\n    background-color: var(--success);\\n}\\n\\n#overlay-form-cancel-btn {\\n    background-color: var(--danger);\\n    opacity: 0.8;\\n}\\n\\n#overlay-form-cancel-btn:hover {\\n    opacity: 1;\\n}\\n\\n.overlay-form-submit-btn {\\n    height: 50;\\n    width: 100px;\\n    margin-top: auto;\\n    font-size: 24;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://to-do-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_demo_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/demo-project */ \"./src/modules/demo-project.js\");\n/* harmony import */ var _modules_project_dom_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project-dom-handler */ \"./src/modules/project-dom-handler.js\");\n\n\n\n\nconst App = {\n    todoUser: {\n        projects: [],\n    },\n\n    init: function () {\n        if (localStorage.getItem('todoUser')) {\n            console.log('todoUser found! Rendering projects');\n            this.todoUser.projects = this.getProjectsFromStorage();\n            this.renderProjects();\n            this.selectFirstProject();\n        } else {\n            this.builDemo();\n        }\n    },\n\n    builDemo: function () {\n        console.log('No todoUser! Building one and storing demo project.');\n        (0,_modules_demo_project__WEBPACK_IMPORTED_MODULE_1__.buildDemoProject)();\n        this.storeAllProjectsLocally();\n        setTimeout(() => {\n            console.log('Rendering demo project!');\n        }, 1500);\n        setTimeout(() => {\n            this.renderProjects();\n        }, 2500);\n    },\n\n    renderProjects: function () {\n        const projects = this.getProjectsFromStorage();\n        projects.forEach((project) => {\n            _modules_project_dom_handler__WEBPACK_IMPORTED_MODULE_2__.ProjectDomHandler.render(project);\n        });\n        _modules_project_dom_handler__WEBPACK_IMPORTED_MODULE_2__.ProjectDomHandler.bindEvents();\n    },\n\n    selectFirstProject: function () {\n        _modules_project_dom_handler__WEBPACK_IMPORTED_MODULE_2__.ProjectDomHandler.setFirstProjectActive();\n    },\n\n    saveProjectToUser: function (project) {\n        this.todoUser.projects.push(project);\n    },\n\n    getProjectsFromStorage: function () {\n        return JSON.parse(localStorage.getItem('todoUser'));\n    },\n\n    storeAllProjectsLocally: function () {\n        localStorage.setItem('todoUser', JSON.stringify(this.todoUser.projects));\n    },\n};\n\nApp.init();\n\n\n\n//todo Select project [should populate project todo's on selection]\n\n\n//# sourceURL=webpack://to-do-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/demo-project.js":
/*!*************************************!*\
  !*** ./src/modules/demo-project.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildDemoProject\": () => (/* binding */ buildDemoProject)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _project_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-class */ \"./src/modules/project-class.js\");\n/* harmony import */ var _to_do_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-do-class */ \"./src/modules/to-do-class.js\");\n\n\n\n\nconst buildDemoProject = () => {\n    //demo\n    const demoProject = new _project_class__WEBPACK_IMPORTED_MODULE_1__.Project('Demo', 'Demo project', '12/2/2021', 'low');\n    const todo1 = new _to_do_class__WEBPACK_IMPORTED_MODULE_2__.ToDo('Walk the dog', 'filler text', '12/2/2009', 'low');\n    const todo2 = new _to_do_class__WEBPACK_IMPORTED_MODULE_2__.ToDo('Walk the cat', 'filler text', '12/2/2009', 'low');\n    const todo3 = new _to_do_class__WEBPACK_IMPORTED_MODULE_2__.ToDo('Walk the donkey', 'filler text', '12/2/2009', 'low');\n    const todo4 = new _to_do_class__WEBPACK_IMPORTED_MODULE_2__.ToDo('Walk the horse', 'filler text', '12/2/2009', 'low');\n    const todoArray = [todo1, todo2, todo3, todo4];\n    todoArray.forEach((todo) => {\n        demoProject.todos.push(todo);\n    });\n    _index__WEBPACK_IMPORTED_MODULE_0__.App.saveProjectToUser(demoProject);\n\n    //seed\n    const seedProject = new _project_class__WEBPACK_IMPORTED_MODULE_1__.Project('Seed', 'Seed project', '11/10/2021', 'medium');\n    const todo5 = new _to_do_class__WEBPACK_IMPORTED_MODULE_2__.ToDo('Buy Milk', 'filler text', '12/2/2009', 'low');\n    const todo6 = new _to_do_class__WEBPACK_IMPORTED_MODULE_2__.ToDo('Go to the gym', 'filler text', '12/2/2009', 'low');\n    const todo7 = new _to_do_class__WEBPACK_IMPORTED_MODULE_2__.ToDo('Purchase flights to Denver', 'filler text', '12/2/2009', 'low');\n    const todo8 = new _to_do_class__WEBPACK_IMPORTED_MODULE_2__.ToDo('Meditate', 'filler text', '12/2/2009', 'low');\n    const todoArray2 = [todo5, todo6, todo7, todo8];\n    todoArray2.forEach((todo) => {\n        seedProject.todos.push(todo);\n    });\n    _index__WEBPACK_IMPORTED_MODULE_0__.App.saveProjectToUser(seedProject);\n};\n\n\n\n\n//# sourceURL=webpack://to-do-app/./src/modules/demo-project.js?");

/***/ }),

/***/ "./src/modules/project-class.js":
/*!**************************************!*\
  !*** ./src/modules/project-class.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\nclass Project {\n    constructor(title, description, dueDate, priority) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.todos = [];\n    }\n\n    get title() {\n        return this._title;\n    }\n\n    set title(value) {\n        this._title = value;\n    }\n    get description() {\n        return this._description;\n    }\n\n    set description(value) {\n        this._description = value;\n    }\n    get dueDate() {\n        return this._dueDate;\n    }\n\n    set dueDate(value) {\n        this._dueDate = value;\n    }\n    get priority() {\n        return this._priority;\n    }\n\n    set priority(value) {\n        this._priority = value;\n    }\n\n    store() {\n        _index__WEBPACK_IMPORTED_MODULE_0__.App.saveProjectToUser(this);\n        _index__WEBPACK_IMPORTED_MODULE_0__.App.storeAllProjectsLocally();\n    }\n\n    getFromStorage() {\n        localStorage.getItem(JSON.parse(this.title));\n    }\n\n    printInfo() {\n        console.log(this);\n    }\n}\n\n\n\n\n//# sourceURL=webpack://to-do-app/./src/modules/project-class.js?");

/***/ }),

/***/ "./src/modules/project-dom-handler.js":
/*!********************************************!*\
  !*** ./src/modules/project-dom-handler.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectDomHandler\": () => (/* binding */ ProjectDomHandler)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _project_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-class */ \"./src/modules/project-class.js\");\n/* harmony import */ var _todo_dom_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-dom-handler */ \"./src/modules/todo-dom-handler.js\");\n\n\n\n\nconst ProjectDomHandler = {\n    render: function (project) {\n        this.createElements();\n        this.addClasses();\n        this.addTitle(project._title);\n        this.appendProject();\n        this.storeAllProjectElements();\n    },\n\n    renderProjectTodos: function (projectTodos) {\n        projectTodos.forEach((todo) => {\n            _todo_dom_handler__WEBPACK_IMPORTED_MODULE_2__.TodoDomHandler.render(todo);\n        });\n    },\n\n    createElements: function () {\n        this.projectContainer = document.createElement('div');\n    },\n\n    addClasses: function () {\n        this.projectContainer.classList = 'project';\n    },\n\n    addTitle: function (title) {\n        this.projectContainer.textContent = title;\n    },\n\n    appendProject: function () {\n        const appProjectContainer = document.getElementById('project-container');\n        this.newProjectBtnContainer = document.getElementById('new-project-btn-container');\n        appProjectContainer.insertBefore(this.projectContainer, this.newProjectBtnContainer);\n    },\n\n    storeAllProjectElements: function () {\n        this.projectElements = document.querySelectorAll('.project');\n    },\n\n    bindEvents: function () {\n        this.newProjectBtnContainer.addEventListener('click', this.openNewProjectForm);\n        this.projectElements.forEach((element) => {\n            element.addEventListener('click', this.selectProject.bind(this));\n        });\n    },\n\n    clearProjectListeners: function () {\n        this.projectElements.forEach((element) => {\n            element.removeEventListener('click', selectProject);\n        });\n    },\n\n    updateSelectedProjectClases: function (e) {\n        this.projectElements.forEach((element) => {\n            element.classList.remove('active-project');\n        });\n        e.target.classList.toggle('active-project');\n    },\n\n    setFirstProjectActive: function () {\n        this.projectElements[0].classList.toggle('active-project');\n        this.renderProjectTodos(this.getProjectTodos(this.projectElements[0].textContent));\n    },\n\n    selectProject: function (e) {\n        const projectTitle = e.target.textContent;\n        const projectTodos = this.getProjectTodos(projectTitle);\n        _todo_dom_handler__WEBPACK_IMPORTED_MODULE_2__.TodoDomHandler.removeTodos();\n        this.renderProjectTodos(projectTodos);\n        this.updateSelectedProjectClases(e);\n    },\n\n    getProjectTodos: function (projectTitle) {\n        return _index__WEBPACK_IMPORTED_MODULE_0__.App.getProjectsFromStorage().filter((project) => project._title === projectTitle)[0].todos;\n    },\n\n    openNewProjectForm: function (e) {\n        ProjectOverlayDomHandler.render();\n    },\n};\n\nconst ProjectOverlayDomHandler = {\n    render: function () {\n        this.createOverlayElements();\n        this.addOverlayAttributes();\n        this.addOverlayInputPlaceholders();\n        this.addOverlayIds();\n        this.addOverlayText();\n        this.appendOverlayElements();\n        this.bindEvents();\n    },\n\n    createOverlayElements: function () {\n        this.overlay = document.createElement('div');\n        this.formContainer = document.createElement('div');\n        this.form = document.createElement('form');\n        this.titleInput = document.createElement('input');\n        this.dueDateInput = document.createElement('input');\n        this.priorityInput = document.createElement('input');\n        this.descriptionInput = document.createElement('textarea');\n        this.btnContainer = document.createElement('div');\n        this.submitBtn = document.createElement('button');\n        this.cancelBtn = document.createElement('button');\n    },\n\n    addOverlayAttributes: function () {\n        this.titleInput.setAttribute('type', 'text');\n        this.dueDateInput.setAttribute('type', 'date');\n        this.priorityInput.setAttribute('type', 'range');\n        this.priorityInput.setAttribute('name', 'priority');\n        this.priorityInput.setAttribute('min', '1');\n        this.priorityInput.setAttribute('max', '3');\n        this.submitBtn.setAttribute('type', 'button');\n        this.cancelBtn.setAttribute('type', 'button');\n    },\n\n    addOverlayInputPlaceholders: function () {\n        this.titleInput.placeholder = 'Project Title...';\n        this.descriptionInput.placeholder = 'Project Description...';\n    },\n\n    addOverlayIds: function () {\n        this.overlay.id = 'overlay';\n        this.formContainer.id = 'overlay-form-container';\n        this.form.id = 'overlay-form';\n        this.titleInput.id = 'title-input';\n        this.dueDateInput.id = 'due-date-input';\n        this.priorityInput.id = 'priority-input';\n        this.descriptionInput.id = 'description-input';\n        this.btnContainer.id = 'overlay-btn-container';\n        this.submitBtn.id = 'overlay-form-submit-btn';\n        this.cancelBtn.id = 'overlay-form-cancel-btn';\n    },\n\n    addOverlayText: function () {\n        this.submitBtn.textContent = 'Submit';\n        this.cancelBtn.textContent = 'Cancel';\n    },\n\n    appendOverlayElements: function () {\n        this.overlay.append(this.formContainer);\n        this.formContainer.append(this.form);\n        this.btnContainer.append(this.submitBtn, this.cancelBtn);\n        this.form.append(\n            this.titleInput,\n            this.dueDateInput,\n            this.priorityInput,\n            this.descriptionInput,\n            this.btnContainer\n        );\n        document.querySelector('body').append(this.overlay);\n    },\n\n    storeInputValues: function () {\n        this.newProjectInputValues = [\n            this.titleInput.value,\n            this.descriptionInput.value,\n            this.dueDateInput.value,\n            this.priorityInput.value,\n        ];\n    },\n\n    removeOverlay: function () {\n        this.overlay.remove();\n    },\n\n    buildNewProject: function () {\n        this.newProject = new _project_class__WEBPACK_IMPORTED_MODULE_1__.Project(...this.newProjectInputValues);\n        this.newProject.store();\n    },\n\n    renderNewProject: function () {\n        ProjectDomHandler.render(this.newProject);\n    },\n\n    submit: function () {\n        this.storeInputValues();\n        this.buildNewProject();\n        this.removeOverlay();\n        this.renderNewProject();\n        this.bindNewProjectEvent();\n    },\n\n    cancel: function () {\n        this.removeOverlay();\n    },\n\n    bindEvents: function () {\n        this.submitBtn.addEventListener('click', this.submit.bind(this));\n        this.cancelBtn.addEventListener('click', this.cancel.bind(this));\n    },\n\n    bindNewProjectEvent: function () {\n        ProjectDomHandler.projectContainer.addEventListener(\n            'click',\n            ProjectDomHandler.selectProject.bind(ProjectDomHandler)\n        );\n    },\n};\n\n\n\n\n//# sourceURL=webpack://to-do-app/./src/modules/project-dom-handler.js?");

/***/ }),

/***/ "./src/modules/to-do-class.js":
/*!************************************!*\
  !*** ./src/modules/to-do-class.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDo\": () => (/* binding */ ToDo)\n/* harmony export */ });\nclass ToDo {\n    constructor(title, description, dueDate, priority) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.toDos = [];\n    }\n\n    get title() {\n        return this._title;\n    }\n\n    set title(value) {\n        this._title = value;\n    }\n    get description() {\n        return this._description;\n    }\n\n    set description(value) {\n        this._description = value;\n    }\n    get dueDate() {\n        return this._dueDate;\n    }\n\n    set dueDate(value) {\n        this._dueDate = value;\n    }\n    get priority() {\n        return this._priority;\n    }\n\n    set priority(value) {\n        this._priority = value;\n    }\n}\n\n\n\n\n//# sourceURL=webpack://to-do-app/./src/modules/to-do-class.js?");

/***/ }),

/***/ "./src/modules/todo-dom-handler.js":
/*!*****************************************!*\
  !*** ./src/modules/todo-dom-handler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoDomHandler\": () => (/* binding */ TodoDomHandler)\n/* harmony export */ });\nconst TodoDomHandler = {\n    renderAllProjectTodos: function (project) {\n        project.todos.forEach((todo) => {\n            this.render(todo);\n        });\n    },\n\n    render: function (todo) {\n        this.createElements();\n        this.setAttributes();\n        this.addClasses();\n        this.addText(todo._title);\n        this.appendTodo();\n    },\n\n    createElements() {\n        this.todoContainer = document.createElement('div');\n        this.todo = document.createElement('li');\n        this.todoCheckbox = document.createElement('input');\n        this.todoDeleteBtn = document.createElement('button');\n    },\n\n    setAttributes: function () {\n        this.todoCheckbox.setAttribute('type', 'checkbox');\n    },\n\n    addClasses: function () {\n        this.todoContainer.classList = 'to-do';\n        this.todoCheckbox.classList = 'to-do-checkbox';\n        this.todoDeleteBtn.classList = 'to-do-delete-btn';\n    },\n\n    addText: function (title) {\n        this.todo.textContent = title;\n        this.todoDeleteBtn.textContent = 'delete';\n    },\n\n    appendTodo: function () {\n        const appToDoContainer = document.getElementById('to-do-container');\n        this.todoContainer.append(this.todoCheckbox, this.todo, this.todoDeleteBtn);\n        appToDoContainer.append(this.todoContainer);\n    },\n\n    removeTodos: function () {\n        const allTodos = document.querySelectorAll('.to-do');\n        allTodos.forEach((todo) => {\n            todo.remove();\n        });\n    },\n};\n\n\n\n\n//# sourceURL=webpack://to-do-app/./src/modules/todo-dom-handler.js?");

/***/ }),

/***/ "./src/fonts/Nunito-Bold.ttf":
/*!***********************************!*\
  !*** ./src/fonts/Nunito-Bold.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7ddd6722d49bf5270cf1.ttf\";\n\n//# sourceURL=webpack://to-do-app/./src/fonts/Nunito-Bold.ttf?");

/***/ }),

/***/ "./src/fonts/Nunito-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Nunito-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e4eb7682710458841b10.ttf\";\n\n//# sourceURL=webpack://to-do-app/./src/fonts/Nunito-Regular.ttf?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;