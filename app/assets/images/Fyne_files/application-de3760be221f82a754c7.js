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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************************************************!*\
  !*** ./app/javascript/packs/categories_dropdown.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

console.log('Hello World from categories');

var categoryField = document.getElementById('event_category');
var subcategoryField = document.getElementById('event_subcategory');

var subcats_hash = {};
subcats_hash["Art & Culture"] = ["Theatre", "Literature"];
subcats_hash["Music"] = ["Alternative", "Blues", "Classical", "Dance", "Electro", "Hip-hop/Rap", "Jazz", "Metal", "For children", "World music", "Pop", "Raggae", "Rock", "Other genre"];
subcats_hash["Films & Series"] = ["Action", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Musical", "Romance", "Sport", "War", "Western"];
subcats_hash["Sports"] = ["Football", "Rugby", "Tennis", "Formula 1", "Auto/moto", "Basket", "Handball", "Golf", "Cycle", "Winter sports", "Athletism", "Swimming", "Volley-ball", "Other sports"];
subcats_hash["Games"] = ["Games"];
subcats_hash["Wellness & Health"] = ["Dancing", "Fitness", "Health"];
subcats_hash["Spirituality"] = ["Spirituality"];
subcats_hash["Non-profit"] = ["Non-profit"];
subcats_hash["Tasting & Restauration"] = ["Food tasting", "Drink tasting"];
subcats_hash["Crafting"] = ["Crafting (General)", "Gardening", "Home"];
subcats_hash["Party"] = ["Party"];
subcats_hash["Business"] = ["Networking", "Shopping", "Conference"];
subcats_hash["Politics"] = ["Politics"];
subcats_hash["Other"] = ["Other"];

categoryField.addEventListener("change", function (event) {
  var categorySelected = categoryField.value;
  var subcategories_matching = subcats_hash[categorySelected];

  var subcat_options = subcategoryField.querySelectorAll("option");

  subcategoryField.innerHTML = "";

  subcategories_matching.forEach(function (subcategory) {
    subcategoryField.insertAdjacentHTML("beforeend", '<option value="' + subcategory + '">' + subcategory + '</option>');
  });
});

/***/ }),
/* 1 */
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categories_dropdown__ = __webpack_require__(/*! ./categories_dropdown */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categories_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__categories_dropdown__);
/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log('Hello World from Webpacker');


/***/ })
/******/ ]);
//# sourceMappingURL=application-de3760be221f82a754c7.js.map