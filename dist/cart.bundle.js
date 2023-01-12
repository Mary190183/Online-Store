/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/cart.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/cart.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-image: url(\"https://images.unsplash.com/photo-1561296180-e8100fd714e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1234&q=80\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  color: #f9f0da;\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1rem;\r\n  line-height: 140%;\r\n}\r\n.modal-content {\r\n  \r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1rem;\r\n  line-height: 140%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%,-50%);\r\n  width: 100%;\r\n  text-align: center;\r\n  background-color: #fff;\r\n  color: #093b0a;\r\n  padding: 15px;\r\n  border-radius: 10px;\r\n  z-index: 100;\r\n  max-width: 90%;\r\n  z-index: 0;\r\n}\r\n\r\n.modal {\r\n  \r\nposition: fixed;\r\ntop: 0;\r\nleft: 0;\r\nright: 0;\r\nbottom: 0;\r\nwidth: 100vw;\r\nheight: 100vh;\r\nbackground-color: rgba(0,0,0,.4);\r\nz-index: 99;\r\ncursor: pointer;\r\nz-index: 0;\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.model__close {\r\n  position:absolute;\r\n  top: 3%;\r\n  left: 95%;\r\n  z-index: 1;\r\n}\r\n\r\n.section-content {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.section-wrapper {\r\n  border-radius: 10px;\r\n  background-color: rgba(135, 130, 120, 0.657);\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin: 4vw 0;\r\n  border-radius: 10px;\r\n}\r\n\r\n.title-checkout {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: space-between;\r\n  margin: 10px 30px;\r\n}\r\n\r\n.title {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 2.5rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.checkout-total {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  border-radius: 10px;\r\n  background-color: rgba(199, 191, 182, 0.5);\r\n  padding: 15px 25px;\r\n  gap: 20px;\r\n}\r\n\r\n.total {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.8rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.total-price {\r\n  font-size: 2rem;\r\n}\r\n\r\n.checkout-button {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.8rem;\r\n  line-height: 140%;\r\n  color: aliceblue;\r\n  background-color: #093b0a;\r\n  border: solid 1px rgba(72, 104, 18, 0.72);\r\n  border-radius: 10px;\r\n}\r\n\r\n.checkout-button:hover {\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n  border: solid 1px #093b0a;\r\n}\r\n\r\n.section-end {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 20px 30px;\r\n  border-top: solid 1px #eee380;\r\n}\r\n\r\n.section-promo {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.promo {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 5px;\r\n}\r\n\r\n.promo-text {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.promo-activate {\r\n  box-sizing: border-box;\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n  padding: 3px 8px;\r\n  font-size: 1.1rem;\r\n  border-radius: 5px;\r\n  border: solid 1px #093b0a;\r\n  color: #f9f0da;\r\n  text-align: center;\r\n}\r\n\r\n.promo-activate:hover {\r\n  background-color: #093b0a;\r\n}\r\n\r\n.promo-test {\r\n  text-align: center;\r\n  font-size: 0.9rem;\r\n  padding-left: 15px;\r\n}\r\n\r\n.pages {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.limit {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-right: 10px;\r\n  gap: 5px;\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.3rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.limit-input {\r\n  text-align: center;\r\n  width: 40px;\r\n  height: 20px;\r\n}\r\n\r\n.pages-text {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.3rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.button-left {\r\n  border: 0;\r\n  background-color: rgba(135, 130, 120, 0.2);\r\n  padding: 0;\r\n}\r\n\r\n.button-left:hover {\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n}\r\n\r\n.pages-img-left {\r\n  transform: scaleX(-1);\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.button-right {\r\n  border: 0;\r\n  background-color: rgba(135, 130, 120, 0.2);\r\n  padding: 0;\r\n}\r\n\r\n.button-right:hover {\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n}\r\n\r\n.pages-img-right {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.cart-page {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.4rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.empty {\r\n  text-align: center;\r\n  border-top: solid 1px #eee380;\r\n  padding: 80px 0;\r\n  margin: 0;\r\n}\r\n\r\n@media screen and (min-width: 640px) and (max-width: 800px) {\r\n  .section-content {\r\n    width: 100%;\r\n  }\r\n\r\n  .checkout-total {\r\n    padding: 10px 15px;\r\n    gap: 5px;\r\n  }\r\n\r\n  .total-price {\r\n    font-size: 1.5rem;\r\n  }\r\n  .checkout-button {\r\n    font-size: 1.5rem;\r\n    height: 34px;\r\n  }\r\n\r\n  .section-end {\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .promo {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 320px) and (max-width: 639px) {\r\n  .section-content {\r\n    width: 100%;\r\n  }\r\n  .section-wrapper {\r\n    width: 90%;\r\n  }\r\n\r\n  .title-checkout {\r\n    margin: 10px 10px;\r\n  }\r\n\r\n  .checkout-total {\r\n    padding: 10px 5px;\r\n    gap: 5px;\r\n  }\r\n\r\n  .title {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .total-price {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .checkout-button {\r\n    font-size: 1.5rem;\r\n    height: 34px;\r\n  }\r\n\r\n  .section-end {\r\n    align-items: flex-start;\r\n    padding: 20px 10px;\r\n  }\r\n\r\n  .promo {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/cart.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n  background-image: url(\"https://images.unsplash.com/photo-1561296180-e8100fd714e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1234&q=80\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  color: #f9f0da;\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1rem;\r\n  line-height: 140%;\r\n}\r\n.modal-content {\r\n  \r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1rem;\r\n  line-height: 140%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%,-50%);\r\n  width: 100%;\r\n  text-align: center;\r\n  background-color: #fff;\r\n  color: #093b0a;\r\n  padding: 15px;\r\n  border-radius: 10px;\r\n  z-index: 100;\r\n  max-width: 90%;\r\n  z-index: 0;\r\n}\r\n\r\n.modal {\r\n  \r\nposition: fixed;\r\ntop: 0;\r\nleft: 0;\r\nright: 0;\r\nbottom: 0;\r\nwidth: 100vw;\r\nheight: 100vh;\r\nbackground-color: rgba(0,0,0,.4);\r\nz-index: 99;\r\ncursor: pointer;\r\nz-index: 0;\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.model__close {\r\n  position:absolute;\r\n  top: 3%;\r\n  left: 95%;\r\n  z-index: 1;\r\n}\r\n\r\n.section-content {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.section-wrapper {\r\n  border-radius: 10px;\r\n  background-color: rgba(135, 130, 120, 0.657);\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin: 4vw 0;\r\n  border-radius: 10px;\r\n}\r\n\r\n.title-checkout {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: space-between;\r\n  margin: 10px 30px;\r\n}\r\n\r\n.title {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 2.5rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.checkout-total {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  border-radius: 10px;\r\n  background-color: rgba(199, 191, 182, 0.5);\r\n  padding: 15px 25px;\r\n  gap: 20px;\r\n}\r\n\r\n.total {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.8rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.total-price {\r\n  font-size: 2rem;\r\n}\r\n\r\n.checkout-button {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.8rem;\r\n  line-height: 140%;\r\n  color: aliceblue;\r\n  background-color: #093b0a;\r\n  border: solid 1px rgba(72, 104, 18, 0.72);\r\n  border-radius: 10px;\r\n}\r\n\r\n.checkout-button:hover {\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n  border: solid 1px #093b0a;\r\n}\r\n\r\n.section-end {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 20px 30px;\r\n  border-top: solid 1px #eee380;\r\n}\r\n\r\n.section-promo {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.promo {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 5px;\r\n}\r\n\r\n.promo-text {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.promo-activate {\r\n  box-sizing: border-box;\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n  padding: 3px 8px;\r\n  font-size: 1.1rem;\r\n  border-radius: 5px;\r\n  border: solid 1px #093b0a;\r\n  color: #f9f0da;\r\n  text-align: center;\r\n}\r\n\r\n.promo-activate:hover {\r\n  background-color: #093b0a;\r\n}\r\n\r\n.promo-test {\r\n  text-align: center;\r\n  font-size: 0.9rem;\r\n  padding-left: 15px;\r\n}\r\n\r\n.pages {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.limit {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-right: 10px;\r\n  gap: 5px;\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.3rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.limit-input {\r\n  text-align: center;\r\n  width: 40px;\r\n  height: 20px;\r\n}\r\n\r\n.pages-text {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.3rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.button-left {\r\n  border: 0;\r\n  background-color: rgba(135, 130, 120, 0.2);\r\n  padding: 0;\r\n}\r\n\r\n.button-left:hover {\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n}\r\n\r\n.pages-img-left {\r\n  transform: scaleX(-1);\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.button-right {\r\n  border: 0;\r\n  background-color: rgba(135, 130, 120, 0.2);\r\n  padding: 0;\r\n}\r\n\r\n.button-right:hover {\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n}\r\n\r\n.pages-img-right {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.cart-page {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.4rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.empty {\r\n  text-align: center;\r\n  border-top: solid 1px #eee380;\r\n  padding: 80px 0;\r\n  margin: 0;\r\n}\r\n\r\n@media screen and (min-width: 640px) and (max-width: 800px) {\r\n  .section-content {\r\n    width: 100%;\r\n  }\r\n\r\n  .checkout-total {\r\n    padding: 10px 15px;\r\n    gap: 5px;\r\n  }\r\n\r\n  .total-price {\r\n    font-size: 1.5rem;\r\n  }\r\n  .checkout-button {\r\n    font-size: 1.5rem;\r\n    height: 34px;\r\n  }\r\n\r\n  .section-end {\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .promo {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 320px) and (max-width: 639px) {\r\n  .section-content {\r\n    width: 100%;\r\n  }\r\n  .section-wrapper {\r\n    width: 90%;\r\n  }\r\n\r\n  .title-checkout {\r\n    margin: 10px 10px;\r\n  }\r\n\r\n  .checkout-total {\r\n    padding: 10px 5px;\r\n    gap: 5px;\r\n  }\r\n\r\n  .title {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .total-price {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .checkout-button {\r\n    font-size: 1.5rem;\r\n    height: 34px;\r\n  }\r\n\r\n  .section-end {\r\n    align-items: flex-start;\r\n    padding: 20px 10px;\r\n  }\r\n\r\n  .promo {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/cart-item.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/cart-item.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cart-item__description {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  border-top: solid 1px #eee380;\r\n\r\n  padding: 20px 30px;\r\n}\r\n\r\n.cart-item__img-main {\r\n  width: 15vw;\r\n  height: 12vw;\r\n}\r\n\r\n.cart-item__sort {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.2rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.cart-item__country {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 2rem;\r\n  line-height: 140%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.cart-item__amount-stock {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 3px;\r\n}\r\n\r\n.cart-item__amount-form {\r\n  position: relative;\r\n}\r\n\r\n.cart-item__amount-input {\r\n  width: 80px;\r\n  height: 20px;\r\n  padding: 5px 5px 5px 30px;\r\n}\r\n\r\n.cart-item__static-value {\r\n  position: absolute;\r\n  left: 50px;\r\n  color: #444;\r\n  top: 4px;\r\n}\r\n\r\n.cart-item__stock {\r\n  align-self: flex-end;\r\n}\r\n\r\n.cart-item__text-price {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.2rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.cart-item__price {\r\n  width: 120px;\r\n  box-sizing: border-box;\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n  padding: 6px 12px;\r\n  font-size: 1.3rem;\r\n  border-radius: 10px;\r\n  border: solid 1px #093b0a;\r\n  color: #f9f0da;\r\n  text-align: center;\r\n}\r\n\r\n.cart-item__delete-button {\r\n  width: 40px;\r\n  height: 40px;\r\n  border: 0;\r\n  width: auto;\r\n  font-size: 30px;\r\n  background-color: rgba(135, 130, 120, 0.2);\r\n  color: #fcf1d6;\r\n}\r\n\r\n.cart-item__delete-button:hover {\r\n  color: red;\r\n}\r\n\r\n.cart-item__section-price-resp {\r\n  display: none;\r\n}\r\n\r\n@media screen and (min-width: 640px) and (max-width: 800px) {\r\n  .cart-item__section-price {\r\n    display: none;\r\n  }\r\n\r\n  .cart-item__section-price-resp {\r\n    display: block;\r\n    margin-top: 5px;\r\n  }\r\n\r\n  .cart-item__img-main {\r\n    width: 15vw;\r\n    height: 12vw;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 320px) and (max-width: 639px) {\r\n  .cart-item__description {\r\n    padding: 20px 10px;\r\n  }\r\n\r\n  .cart-item__country {\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  .cart-item__amount-stock {\r\n    flex-direction: column;\r\n    gap: 0;\r\n  }\r\n\r\n  .cart-item__stock {\r\n    align-self: flex-start;\r\n  }\r\n\r\n  .cart-item__amount-input {\r\n    width: 60px;\r\n  }\r\n\r\n  .cart-item__price {\r\n    width: 100px;\r\n  }\r\n\r\n  .cart-item__section-price-resp {\r\n    display: block;\r\n    margin-top: 5px;\r\n  }\r\n\r\n  .cart-item__section-price {\r\n    display: none;\r\n  }\r\n\r\n  .cart-item__img-main {\r\n    width: 20vw;\r\n    height: 18vw;\r\n  }\r\n\r\n  .cart-item__delete-button {\r\n    width: 20px;\r\n    height: 20px;\r\n    font-size: 20px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/cart-item.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,6BAA6B;;EAE7B,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,QAAQ;AACV;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,yCAAyC;EACzC,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,yBAAyB;EACzB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,WAAW;EACX,eAAe;EACf,0CAA0C;EAC1C,cAAc;AAChB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;IACE,cAAc;IACd,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,YAAY;EACd;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,sBAAsB;IACtB,MAAM;EACR;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,cAAc;IACd,eAAe;EACjB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,eAAe;EACjB;AACF","sourcesContent":[".cart-item__description {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  border-top: solid 1px #eee380;\r\n\r\n  padding: 20px 30px;\r\n}\r\n\r\n.cart-item__img-main {\r\n  width: 15vw;\r\n  height: 12vw;\r\n}\r\n\r\n.cart-item__sort {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.2rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.cart-item__country {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 2rem;\r\n  line-height: 140%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.cart-item__amount-stock {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 3px;\r\n}\r\n\r\n.cart-item__amount-form {\r\n  position: relative;\r\n}\r\n\r\n.cart-item__amount-input {\r\n  width: 80px;\r\n  height: 20px;\r\n  padding: 5px 5px 5px 30px;\r\n}\r\n\r\n.cart-item__static-value {\r\n  position: absolute;\r\n  left: 50px;\r\n  color: #444;\r\n  top: 4px;\r\n}\r\n\r\n.cart-item__stock {\r\n  align-self: flex-end;\r\n}\r\n\r\n.cart-item__text-price {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.2rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.cart-item__price {\r\n  width: 120px;\r\n  box-sizing: border-box;\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n  padding: 6px 12px;\r\n  font-size: 1.3rem;\r\n  border-radius: 10px;\r\n  border: solid 1px #093b0a;\r\n  color: #f9f0da;\r\n  text-align: center;\r\n}\r\n\r\n.cart-item__delete-button {\r\n  width: 40px;\r\n  height: 40px;\r\n  border: 0;\r\n  width: auto;\r\n  font-size: 30px;\r\n  background-color: rgba(135, 130, 120, 0.2);\r\n  color: #fcf1d6;\r\n}\r\n\r\n.cart-item__delete-button:hover {\r\n  color: red;\r\n}\r\n\r\n.cart-item__section-price-resp {\r\n  display: none;\r\n}\r\n\r\n@media screen and (min-width: 640px) and (max-width: 800px) {\r\n  .cart-item__section-price {\r\n    display: none;\r\n  }\r\n\r\n  .cart-item__section-price-resp {\r\n    display: block;\r\n    margin-top: 5px;\r\n  }\r\n\r\n  .cart-item__img-main {\r\n    width: 15vw;\r\n    height: 12vw;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 320px) and (max-width: 639px) {\r\n  .cart-item__description {\r\n    padding: 20px 10px;\r\n  }\r\n\r\n  .cart-item__country {\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  .cart-item__amount-stock {\r\n    flex-direction: column;\r\n    gap: 0;\r\n  }\r\n\r\n  .cart-item__stock {\r\n    align-self: flex-start;\r\n  }\r\n\r\n  .cart-item__amount-input {\r\n    width: 60px;\r\n  }\r\n\r\n  .cart-item__price {\r\n    width: 100px;\r\n  }\r\n\r\n  .cart-item__section-price-resp {\r\n    display: block;\r\n    margin-top: 5px;\r\n  }\r\n\r\n  .cart-item__section-price {\r\n    display: none;\r\n  }\r\n\r\n  .cart-item__img-main {\r\n    width: 20vw;\r\n    height: 18vw;\r\n  }\r\n\r\n  .cart-item__delete-button {\r\n    width: 20px;\r\n    height: 20px;\r\n    font-size: 20px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/footer.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/footer.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer {\r\n  width: 100%;\r\n  height: 10vh;\r\n  display: flex;\r\n  align-self: flex-end;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n}\r\n\r\n.footer__container {\r\n  width: 80%;\r\n}\r\n\r\n.footer__list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  list-style: none;\r\n  padding-left: 0;\r\n}\r\n\r\n.footer__item {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n\r\n.footer__link {\r\n  margin-left: 15px;\r\n  align-self: center;\r\n  color: aliceblue;\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/footer.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,yCAAyC;AAC3C;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,qBAAqB;EACrB,eAAe;AACjB","sourcesContent":[".footer {\r\n  width: 100%;\r\n  height: 10vh;\r\n  display: flex;\r\n  align-self: flex-end;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n}\r\n\r\n.footer__container {\r\n  width: 80%;\r\n}\r\n\r\n.footer__list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  list-style: none;\r\n  padding-left: 0;\r\n}\r\n\r\n.footer__item {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n\r\n.footer__link {\r\n  margin-left: 15px;\r\n  align-self: center;\r\n  color: aliceblue;\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/header.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/header.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/tea-cup.svg */ "./src/assets/svg/tea-cup.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/arrow-right.svg */ "./src/assets/svg/arrow-right.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/cart-header.svg */ "./src/assets/svg/cart-header.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header {\r\n  height: 100px;\r\n  width: 100vw;\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n}\r\n.header__nav {\r\n  width: 90%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  margin: auto;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.header__nav-link a {\r\n  text-decoration: none;\r\n  color: #f9f0da;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n.header__tea-time-logo {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n.header__tea-time-logo-h1 {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 2rem;\r\n  line-height: 140%;\r\n\r\n  margin-top: 40px;\r\n}\r\n\r\n.header__form {\r\n  position: relative;\r\n  width: 500px;\r\n  margin: 0 auto;\r\n}\r\n.header__search-input {\r\n  width: 100%;\r\n  height: 62px;\r\n  padding-left: 10px;\r\n  border: 2px solid #093b0a;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  /* background: #F9F0DA; */\r\n  background: #f9f0da;\r\n  color: #9e9c9c;\r\n}\r\n.header__submit-button {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0px;\r\n  width: 66px;\r\n  height: 62px;\r\n  border: none;\r\n  background: #093b0a;\r\n  border-radius: 0 5px 5px 0;\r\n  cursor: pointer;\r\n}\r\n.header__search-icon {\r\n  width: 54px;\r\n  height: 54px;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n.header__cart {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  z-index: 1;\r\n}\r\n.header__amount-buys {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 30px;\r\n  background-color: #093b0a;\r\n  text-align: center;\r\n  padding-top: 8px;\r\n  margin-left: -20px;\r\n  margin-top: -30px;\r\n  z-index: 2;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/components/header.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,YAAY;EACZ,yCAAyC;AAC3C;AACA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;EACZ,yDAAkD;AACpD;;AAEA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;;EAEjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,cAAc;AAChB;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,UAAU;EACV,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;EAC1B,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;EACZ,yDAAsD;AACxD;AACA;EACE,WAAW;EACX,YAAY;EACZ,yDAAsD;EACtD,UAAU;AACZ;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,UAAU;AACZ","sourcesContent":[".header {\r\n  height: 100px;\r\n  width: 100vw;\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n}\r\n.header__nav {\r\n  width: 90%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  margin: auto;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.header__nav-link a {\r\n  text-decoration: none;\r\n  color: #f9f0da;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n.header__tea-time-logo {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-image: url(\"../assets/svg/tea-cup.svg\");\r\n}\r\n\r\n.header__tea-time-logo-h1 {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 2rem;\r\n  line-height: 140%;\r\n\r\n  margin-top: 40px;\r\n}\r\n\r\n.header__form {\r\n  position: relative;\r\n  width: 500px;\r\n  margin: 0 auto;\r\n}\r\n.header__search-input {\r\n  width: 100%;\r\n  height: 62px;\r\n  padding-left: 10px;\r\n  border: 2px solid #093b0a;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  /* background: #F9F0DA; */\r\n  background: #f9f0da;\r\n  color: #9e9c9c;\r\n}\r\n.header__submit-button {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0px;\r\n  width: 66px;\r\n  height: 62px;\r\n  border: none;\r\n  background: #093b0a;\r\n  border-radius: 0 5px 5px 0;\r\n  cursor: pointer;\r\n}\r\n.header__search-icon {\r\n  width: 54px;\r\n  height: 54px;\r\n  background-image: url(\"../assets/svg/arrow-right.svg\");\r\n}\r\n.header__cart {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-image: url(\"../assets/svg/cart-header.svg\");\r\n  z-index: 1;\r\n}\r\n.header__amount-buys {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 30px;\r\n  background-color: #093b0a;\r\n  text-align: center;\r\n  padding-top: 8px;\r\n  margin-left: -20px;\r\n  margin-top: -30px;\r\n  z-index: 2;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/cart.css":
/*!**********************!*\
  !*** ./src/cart.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_cart_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./cart.css */ "./node_modules/css-loader/dist/cjs.js!./src/cart.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_cart_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_cart_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_cart_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_cart_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/cart-item.css":
/*!**************************************!*\
  !*** ./src/components/cart-item.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_cart_item_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./cart-item.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/cart-item.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_cart_item_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_cart_item_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_cart_item_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_cart_item_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/footer.css":
/*!***********************************!*\
  !*** ./src/components/footer.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/header.css":
/*!***********************************!*\
  !*** ./src/components/header.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/cart-item.ts":
/*!*************************************!*\
  !*** ./src/components/cart-item.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cart_item_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-item.css */ "./src/components/cart-item.css");

function renderCartItem(_a) {
    var image = _a.image, sort = _a.sort, province = _a.province, price = _a.price, id = _a.id, amount = _a.amount, stock = _a.stock;
    return "\n  <div class=\"cart-item__description\">\n  <img src=\"".concat(image, "\" alt=\"tea\" class=\"cart-item__img-main\" />\n  <div>\n    <div class=\"cart-item__sort\">").concat(sort, "</div>\n    <div class=\"cart-item__country\">").concat(province, "</div>\n    <div class=\"cart-item__amount-stock\">\n      <div class=\"cart-item__amount-form\">\n        <input type=\"number\" min=\"0\" max=\"").concat(stock, "\" step=\"1\" value=\"").concat(amount, "\" onchange=\"cartController.updateAmount(").concat(id, ", event)\" id=\"youridhere\" class=\"cart-item__amount-input\" />\n        <label for=\"youridhere\" class=\"cart-item__static-value\">pcs.</label>\n      </div>\n      <div class=\"cart-item__stock\">in stock: ").concat(stock, " pcs.</div>\n    </div>\n    <div class=\"cart-item__section-price-resp\">\n      <div class=\"cart-item__text-price\">Price:</div>\n      <div class=\"cart-item__price\">").concat(price, "</div>\n    </div>\n  </div>\n  <div class=\"cart-item__section-price\">\n    <div class=\"cart-item__text-price\">Price:</div>\n    <div class=\"cart-item__price\">").concat(price, " $</div>\n  </div>\n  <button type=\"button\" title=\"remove from cart\" class=\"cart-item__delete-button\" onclick=\"cartController.deleteCartItem(").concat(id, ")\">x</button>\n  </div>\n  ");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCartItem);


/***/ }),

/***/ "./src/components/footer.ts":
/*!**********************************!*\
  !*** ./src/components/footer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.css */ "./src/components/footer.css");

function renderFooter() {
    return "\n  <footer class=\"footer\">\n      <div class=\"footer__container\">\n        <ul class=\"footer__list\">\n          <li class=\"footer__item\">\n            <img src=\"assets/icon/github.svg\" class=\"footer__masha-github\" alt=\"github\" style=\"width: 30px\" />\n            <a class=\"footer__link\" href=\"https://github.com/Mary190183/\">Mary190183</a>\n          </li>\n          <li class=\"footer__item\">\n            <img src=\"assets/icon/github.svg\" class=\"footer__masha-github\" alt=\"github\" style=\"width: 30px\" />\n            <a class=\"footer__link\" href=\"https://github.com/balabanova-iu/\">balabanova-iu</a>\n          </li>\n          <li class=\"footer__item\">\n            <a href=\"https://rs.school/js/\"\n              ><img src=\"assets/icon/rsschool.svg\" class=\"footer__rsschool\" alt=\"rs_school\" style=\"width: 70px\"\n            /></a>\n          </li>\n        </ul>\n      </div>\n    </footer>\n  ";
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderFooter);


/***/ }),

/***/ "./src/components/header.ts":
/*!**********************************!*\
  !*** ./src/components/header.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.css */ "./src/components/header.css");

function renderHeader(_a) {
    var totalAmount = _a.totalAmount, totalPrice = _a.totalPrice;
    return "\n  <header class=\"header\">\n  <nav class=\"header__nav\">\n    <li class=\"header__nav-link\">\n      <a href=\"https://online-store-tea-time.netlify.app/\">\n        <div class=\"header__tea-time-logo\"></div>\n        <h1 class=\"header__tea-time-logo-h1\">Tea-time</h1>\n      </a>\n    </li>\n    <li class=\"header__nav-link\">\n      <form action=\"\" method=\"get\" class=\"header__form\">\n        <input name=\"s\" placeholder=\"Search tea...\" type=\"search\" class=\"header__search-input\" />\n        <button type=\"submit\" class=\"header__submit-button\">\n          <div class=\"header__search-icon\"></div>\n        </button>\n      </form>\n    </li>\n    <li class=\"header__nav-link\">\n      <a href=\"item.html\">\n        <span>Total price: ".concat(totalPrice, "$</span>\n        <div class=\"header__cart\"></div>\n        <div class=\"header__amount-buys\">").concat(totalAmount, "</div>\n      </a>\n    </li>\n  </nav>\n</header>\n  ");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHeader);


/***/ }),

/***/ "./src/controllers/cart-controller.ts":
/*!********************************************!*\
  !*** ./src/controllers/cart-controller.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CartController = /** @class */ (function () {
    function CartController(renderView, model) {
        this._renderView = renderView;
        this._model = model;
        var searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has("limit")) {
            this._model.limitItems = Number(searchParams.get("limit"));
        }
        if (searchParams.has("page")) {
            this._model.page = Number(searchParams.get("page"));
        }
    }
    CartController.prototype.updateView = function () {
        document.body.innerHTML = this._renderView(this._model);
        var searchParams = new URLSearchParams(window.location.search);
        searchParams.set("limit", String(this._model.limitItems));
        searchParams.set("page", String(this._model.page));
        var newRelativePathQuery = window.location.pathname + "?" + searchParams.toString();
        history.pushState(null, "", newRelativePathQuery);
    };
    CartController.prototype.deleteCartItem = function (id) {
        this._model.deleteItemById(id);
        this.updateView();
    };
    CartController.prototype.updateAmount = function (id, event) {
        this._model.updateAmountById(id, Number(event.target.value));
        this.updateView();
    };
    CartController.prototype.updateLimitItems = function (event) {
        this._model.updateLimitItemsOnPage(Number(event.target.value));
        this.updateView();
    };
    CartController.prototype.onclickRight = function () {
        this._model.onclickRightPageNumber();
        this.updateView();
    };
    CartController.prototype.onclickLeft = function () {
        this._model.onclickLeftPageNumber();
        this.updateView();
    };
    CartController.prototype.updatePromo = function (event) {
        this._model.updatePromoById(event.target.value);
        this.updateView();
    };
    CartController.prototype.deletePromoItem = function () {
        this._model.deletePromoById();
        this.updateView();
    };
    CartController.prototype.openCheckout = function () {
        this._model.openCheckoutButton();
        this.updateView();
    };
    CartController.prototype.closeCheckout = function () {
        this._model.closeCheckoutButton();
        this.updateView();
    };
    return CartController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartController);


/***/ }),

/***/ "./src/list-buys.ts":
/*!**************************!*\
  !*** ./src/list-buys.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var listBuys = [
    {
        id: 1,
        name: 'Gyokuro And Ji',
        sort: 'Green tea',
        province: 'Taiwan',
        description: 'First grade Steamed',
        image1: "./assets/img/id1_1.jpg",
        image2: "./assets/img/id1_2.jpg",
        stock: 30,
        price: 2
    },
    {
        id: 2,
        name: 'Zhi Tiao Liu Mao Feng Sichuan',
        sort: 'Green tea',
        province: 'Taiwan',
        description: 'It has a thick velvety floral-fruity, honey aroma with notes of prunes',
        image1: "./assets/img/id2_1.jpg",
        image2: "./assets/img/id2_2.jpg",
        stock: 20,
        price: 1.5
    },
    {
        id: 3,
        name: 'Tang Ming Yuan',
        sort: 'Green tea',
        province: 'Huang Shan',
        description: 'Snow green tea 2021',
        image1: "./assets/img/id3_1.jpg",
        image2: "./assets/img/id3_2.jpg",
        stock: 50,
        price: 1
    },
    {
        id: 4,
        name: 'Lei Ming Nyao Zuei',
        sort: 'Green tea',
        province: 'Huang Shan',
        description: "(Petrel's Beak grade C1) 2021 Meng Ding Shan",
        image1: "./assets/img/id4_1.jpg",
        image2: "./assets/img/id4_2.jpg",
        stock: 40,
        price: 1
    },
    {
        id: 5,
        name: 'Tai Ping Hou Kui',
        sort: 'Green tea',
        province: 'Huang Shan',
        description: "Monkey King 2021 Bei Huang Shan Anhui Province",
        image1: "./assets/img/id5_1.jpg",
        image2: "./assets/img/id5_2.jpg",
        stock: 25,
        price: 0.5
    },
    {
        id: 6,
        name: 'Yun Wu Liu Cha',
        sort: 'Green tea',
        province: 'Taiwan',
        description: "Cloud green tea 2019",
        image1: "./assets/img/id6_1.jpg",
        image2: "./assets/img/id6_2.jpg",
        stock: 45,
        price: 0.5
    },
    {
        id: 7,
        name: 'Wishan Niulankeng Zhou Gui',
        sort: 'Oolong',
        province: 'Hong Pao',
        description: 'Da Hong Pao Province',
        image1: "./assets/img/id7_1.jpg",
        image2: "./assets/img/id7_2.jpg",
        stock: 40,
        price: 3
    },
    {
        id: 8,
        name: 'Qi Dan, Wuishan Oolong',
        sort: 'Oolong',
        province: 'Taiwan',
        description: 'Chocolate taste',
        image1: "./assets/img/id8_1.jpg",
        image2: "./assets/img/id8_2.jpg",
        stock: 25,
        price: 1
    },
    {
        id: 9,
        name: 'Oolong Dong Ding',
        sort: 'Oolong',
        province: 'Taiwan',
        description: 'Spring Taiwan',
        image1: "./assets/img/id9_1.jpg",
        image2: "./assets/img/id9_2.jpg",
        stock: 40,
        price: 1
    },
    {
        id: 10,
        name: 'Ginseng Oolong',
        sort: 'Oolong',
        province: 'Taiwan',
        description: "Taiwan 2021",
        image1: "./assets/img/id10_1.jpg",
        image2: "./assets/img/id10_2.jpg",
        image3: "./assets/img/id10_3.jpg",
        stock: 60,
        price: 2
    },
    {
        id: 11,
        name: 'Jin Xuan Milk Oolong',
        sort: 'Oolong',
        province: 'Taiwan',
        description: "Class AAAA",
        image1: "./assets/img/id11_1.jpg",
        image2: "./assets/img/id11_2.jpg",
        stock: 35,
        price: 1.5
    },
    {
        id: 12,
        name: 'Gaba Winter Jade Dong Ding',
        sort: 'Oolong',
        province: 'Taiwan',
        description: "The aroma is high, light, fruity and sweet.",
        image1: "./assets/img/id12_1.jpg",
        image2: "./assets/img/id12_2.jpg",
        stock: 40,
        price: 0.5
    },
    {
        id: 13,
        name: 'Shen Puer Bai Hao Yin Zhen',
        sort: 'Puer',
        province: 'Huang Shan',
        description: "White Yunnan Shen Pu'er 2022",
        image1: "./assets/img/id13_1.jpg",
        image2: "./assets/img/id13_2.jpg",
        stock: 30,
        price: 3.5
    },
    {
        id: 14,
        name: 'Shen Puer Lung Ji To Cha',
        sort: 'Puer',
        province: 'Huang Shan',
        description: 'Dragon Balls from Da Huang Shan Mountain 2018',
        image1: "./assets/img/id14_1.jpg",
        image2: "./assets/img/id14_2.jpg",
        stock: 35,
        price: 3
    },
    {
        id: 15,
        name: 'Shen Puer Myung Ku Da Hu Jai',
        sort: 'Puer',
        province: 'Myung Ku',
        description: 'Ancient trees Myung Ku place 2016',
        image1: "./assets/img/id15_1.jpg",
        image2: "./assets/img/id15_2.jpg",
        stock: 60,
        price: 6
    },
    {
        id: 16,
        name: 'Shen Puer Ban Tzu Chan',
        sort: 'Puer',
        province: 'Huang Shan',
        description: "Shen Puer Pigtail Tea Mountain Da Huang Shan",
        image1: "./assets/img/id16_1.jpg",
        image2: "./assets/img/id16_2.jpg",
        stock: 20,
        price: 1
    },
    {
        id: 17,
        name: 'Shen Puer Kun Que Shi',
        sort: 'Puer',
        province: 'Huang Shan',
        description: "Red Tongues purple buds Yes Huang Shan 2018",
        image2: "./assets/img/id17_1.jpg",
        image1: "./assets/img/id17_2.jpg",
        stock: 15,
        price: 3.5
    },
    {
        id: 18,
        name: 'Shen Puer Ye Shen Bai Ya Bao',
        sort: 'Puer',
        province: 'Huang Shan',
        description: "Wild white buds",
        image1: "./assets/img/id18_1.jpg",
        image2: "./assets/img/id18_2.jpg",
        stock: 20,
        price: 0.5
    },
    {
        id: 19,
        name: 'Dian Hong Hua Long Zhu',
        sort: 'Red tea',
        province: 'Taiwan',
        description: "With orange peel",
        image1: "./assets/img/id19_1.jpg",
        image2: "./assets/img/id19_2.jpg",
        stock: 20,
        price: 1
    },
    {
        id: 20,
        name: 'Dian Hong Hua Long Zhu',
        sort: 'Red tea',
        province: 'Taiwan',
        description: 'With osmanthus',
        image1: "./assets/img/id20_1.jpg",
        image2: "./assets/img/id20_2.jpg",
        stock: 25,
        price: 2
    },
    {
        id: 21,
        name: 'Dian Hong Hua Long Zhu',
        sort: 'Red tea',
        province: 'Taiwan',
        description: 'With jasmine',
        image1: "./assets/img/id21_1.jpg",
        image2: "./assets/img/id21_2.jpg",
        stock: 10,
        price: 3.5
    },
    {
        id: 22,
        name: 'Dian Hong Hua Long Zhu',
        sort: 'Red tea',
        province: 'Taiwan',
        description: "With red peony",
        image1: "./assets/img/id22_1.jpg",
        image2: "./assets/img/id22_2.jpg",
        stock: 60,
        price: 4.5
    },
    {
        id: 23,
        name: 'Dian Hong Hua Long Zhu',
        sort: 'Red tea',
        province: 'Taiwan',
        description: "With mountain carnation",
        image1: "./assets/img/id23_1.jpg",
        image2: "./assets/img/id23_2.jpg",
        stock: 55,
        price: 3
    },
    {
        id: 24,
        name: 'Dian Hong Hua Long Zhu',
        sort: 'Red tea',
        province: 'Taiwan',
        description: "With yellow chrysanthemum",
        image1: "./assets/img/id24_1.jpg",
        image2: "./assets/img/id24_2.jpg",
        stock: 10,
        price: 2.5
    },
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listBuys);


/***/ }),

/***/ "./src/models/cart-model.ts":
/*!**********************************!*\
  !*** ./src/models/cart-model.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _list_buys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../list-buys */ "./src/list-buys.ts");

var CartModel = /** @class */ (function () {
    function CartModel() {
        this._items = [];
        this.page = 1;
        this.limitItems = 2;
        this.promo = [];
        this.isOpen = false;
        if (localStorage.getItem("products") !== null) {
            this._items = JSON.parse(localStorage.getItem("products"));
        }
        else {
            this._items = [];
        }
    }
    Object.defineProperty(CartModel.prototype, "items", {
        get: function () {
            return this._items.slice((this.page - 1) * this.limitItems, this.page * this.limitItems);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CartModel.prototype, "totalPrice", {
        get: function () {
            var sum = 0;
            this._items.forEach(function (item) {
                var product = _list_buys__WEBPACK_IMPORTED_MODULE_0__["default"].find(function (prod) { return prod.id === item.productId; });
                if (product) {
                    sum += product.price * item.amount;
                }
                else {
                    sum += 0;
                }
            });
            return sum;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CartModel.prototype, "totalAmount", {
        get: function () {
            var sumAmount = 0;
            this._items.forEach(function (item) {
                sumAmount += item.amount;
            });
            return sumAmount;
        },
        enumerable: false,
        configurable: true
    });
    CartModel.prototype.deleteItemById = function (id) {
        this._items = this._items.filter(function (item) { return item.id !== id; });
        localStorage.setItem("products", JSON.stringify(this._items));
        if (this.items.length === 0 && this.page > 1) {
            this.page -= 1;
        }
    };
    CartModel.prototype.updateAmountById = function (id, amount) {
        if (amount === 0) {
            this.deleteItemById(id);
            return;
        }
        this._items.forEach(function (item) {
            if (item.id === id) {
                item.amount = amount;
            }
        });
        localStorage.setItem("products", JSON.stringify(this._items));
    };
    CartModel.prototype.updateLimitItemsOnPage = function (limitItems) {
        this.limitItems = limitItems;
        this.page = 1;
    };
    CartModel.prototype.onclickRightPageNumber = function () {
        if (this._items.length - 1 < this.page * this.limitItems) {
            this.page;
        }
        else {
            this.page = this.page + 1;
        }
    };
    CartModel.prototype.onclickLeftPageNumber = function () {
        if (this.page - 1 === 0) {
            this.page = 1;
        }
        else {
            this.page = this.page - 1;
        }
    };
    CartModel.prototype.updatePromoById = function (promo) {
        if (this.promo.includes(promo)) {
            this.promo;
        }
        else {
            if (promo === "RS" || promo === "EPM") {
                this.promo.push(promo);
            }
        }
    };
    CartModel.prototype.deletePromoById = function () {
        this.promo = this.promo.filter(function (item) { return item !== "RS"; });
    };
    CartModel.prototype.openCheckoutButton = function () {
        this.isOpen = true;
    };
    CartModel.prototype.closeCheckoutButton = function () {
        this.isOpen = false;
    };
    return CartModel;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartModel);


/***/ }),

/***/ "./src/assets/svg/arrow-right.svg":
/*!****************************************!*\
  !*** ./src/assets/svg/arrow-right.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e30bee413432862aff44.svg";

/***/ }),

/***/ "./src/assets/svg/cart-header.svg":
/*!****************************************!*\
  !*** ./src/assets/svg/cart-header.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe6595f59cac2edbb7d0.svg";

/***/ }),

/***/ "./src/assets/svg/tea-cup.svg":
/*!************************************!*\
  !*** ./src/assets/svg/tea-cup.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9870452bf65e1498edec.svg";

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
/******/ 			"cart": 0
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/cart.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cart_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.css */ "./src/cart.css");
/* harmony import */ var _list_buys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-buys */ "./src/list-buys.ts");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header */ "./src/components/header.ts");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer */ "./src/components/footer.ts");
/* harmony import */ var _components_cart_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cart-item */ "./src/components/cart-item.ts");
/* harmony import */ var _controllers_cart_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/cart-controller */ "./src/controllers/cart-controller.ts");
/* harmony import */ var _models_cart_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/cart-model */ "./src/models/cart-model.ts");







window.cartModel = new _models_cart_model__WEBPACK_IMPORTED_MODULE_6__["default"]();
window.cartController = new _controllers_cart_controller__WEBPACK_IMPORTED_MODULE_5__["default"](render, window.cartModel);
window.onload = function () {
    window.cartController.updateView();
};
function render(_a) {
    var items = _a.items, totalPrice = _a.totalPrice, totalAmount = _a.totalAmount, page = _a.page, limitItems = _a.limitItems, promo = _a.promo, isOpen = _a.isOpen;
    return "\n  ".concat((0,_components_header__WEBPACK_IMPORTED_MODULE_2__["default"])({ totalAmount: totalAmount, totalPrice: totalPrice }), " \n    <section class=\"section-content\">\n      <div class=\"section-wrapper\">\n        <div class=\"title-checkout\">\n          <div class=\"title\">Cart</div>\n          <div class=\"checkout-total\">\n            <div class=\"total\">\n              ").concat(promo.length === 0
        ? "<div class=\"total-price\">Total: ".concat(totalPrice, "$</div>")
        : promo.length === 1
            ? "\n                        <div class=\".section-promo\" >\n                        <div class=\"total-price\" style=\"text-decoration:line-through; font-size: 1.6rem\">Total: ".concat(totalPrice, "$</div>\n                        <div class=\"total-price\">Total: ").concat((totalPrice * 0.9).toFixed(2), "$</div>\n                        </div>")
            : "\n                        <div class=\".section-promo\" >\n                        <div class=\"total-price\" style=\"text-decoration:line-through; font-size: 1.6rem\" >Total: ".concat(totalPrice, "$</div>\n                        <div class=\"total-price\">Total: ").concat((totalPrice * 0.8).toFixed(2), "$</div>\n                        </div>"), "\n            </div>\n            <button class=\"checkout-button\" onclick=\"cartController.openCheckout()\">Checkout</button>\n            ").concat(isOpen === true ?
        "<div class=\"modal\" onclick=\"cartController.closeCheckout()\"></div>\n            <div class=\"modal-content\">\n            <p class=\"modal__title\">Personal details</p>\n            <button class=\"model__close\" onclick=\"cartController.closeCheckout()\">X</button>\n            <form action=\"#\">\n              <div class=\"modal__name\">\n                <input class=\"modal__input\" type=\"text\" placeholder=\"Name: Ivan Ivanov\">\n                <p class=\"is-invalid\"> Please enter your first and last name . First letters should be a capital </p>\n              </div>\n              <div class=\"modal__phone no-arrows\">\n                <input class=\"modal__input\" type=\"text\" placeholder=\"Phone: +375290000\">\n                <p class=\"is-invalid\"> Number must contain at least 9 digits and starts with + </p>\n              </div>\n              <div class=\"modal__address\">\n                <input class=\"modal__input\" type=\"text\" placeholder=\"Delivery address\">\n                <p class=\"is-invalid\"> Address cannot contain less than 3 words. Every word must contain at least 5 symbols </p>\n              </div>\n              <div class=\"modal__email\">\n                <input class=\"modal__input\" type=\"text\" placeholder=\"E-mail: ivanov@gmail.com\">\n                <p class=\"is-invalid\">Please enter correct e-mail</p>\n              </div>\n              <p class=\"modal__card-title\">Credit card details</p>\n              <div class=\"modal__card-block\">\n                <div class=\"modal__card-top no-arrows\">\n                  <div class=\"modal__card-logo\"></div>\n                  <input class=\"modal__card-number\" type=\"text\" placeholder=\"0000 0000 0000 0000\">\n                </div>\n              <div class=\"modal__card-bottom\">\n                <div class=\"modal__card-data no-arrows\">\n                  <label for=\"validThru\">Valid:</label>\n                  <input id=\"validThru\" type=\"text\" placeholder=\"12 23\">\n                </div>\n                <div class=\"modal__card-cvv no-arrows\">\n                  <label for=\"cvv\">CVV:</label>\n                  <input id=\"cvv\" type=\"text\" placeholder=\"000\">\n                </div>\n              </div>\n              <p class=\"is-invalid\">Card invalid</p>\n            </div>\n            <button class=\"modal__submit\">Confirm</button>\n          </form>\n        \n        </div>" : "", "\n        </div>\n        </div>\n        ").concat(items.length > 0
        ? items.map(function (item) {
            var product = _list_buys__WEBPACK_IMPORTED_MODULE_1__["default"].find(function (prod) { return prod.id === item.productId; });
            if (product) {
                return (0,_components_cart_item__WEBPACK_IMPORTED_MODULE_4__["default"])({
                    image: product.image1,
                    sort: product.sort,
                    province: product.province,
                    price: product.price * item.amount,
                    id: item.id,
                    amount: item.amount,
                    stock: product.stock,
                });
            }
            else {
                return "";
            }
        })
        : "<h2 class=\"empty\">Empty</h2>", "\n        <div class=\"section-end\">\n        <div class=\"section-promo\">\n          <div class=\"promo\">\n            <div class=\"promo-text\">Promo code</div>\n            <input type=\"text\" value=\"\" onchange=\"cartController.updatePromo(event)\" />\n            <button type=\"button\" class=\"promo-activate\">Activate</button>\n          </div>\n          <div class=\"promo-test\">Promo for test: RS, EPM</div>\n          ").concat(promo
        .map(function (item) {
        if (item === "RS" || item === "EPM") {
            return "<div>\n              ".concat(item === "RS" ? "<spain>RS - 10%</spain>" : "<spain>EPM - 10%</spain>", "\n              <button type=\"button\" onclick=\"cartController.deletePromoItem()\">DROP</button>\n              </div>");
        }
        else {
            return "";
        }
    })
        .join(""), "\n        </div>\n          <div class=\"pages\">\n            <div class=\"limit\">\n              <div>Limit</div>\n              <input type=\"number\" min=\"1\" max=\"10\" step=\"1\" value=\"").concat(limitItems, "\" oninput=\"cartController.updateLimitItems(event)\" class=\"limit-input\"/>\n            </div>\n            <div class=\"pages-text\">Page</div>\n            <button class=\"button-left\" onclick=\"cartController.onclickLeft()\">\n              <img src=\"./assets/svg/arrow-right.svg\" alt=\"arrow-left\" class=\"pages-img-left\" />\n            </button>\n            <div class=\"cart-page\">").concat(page, "</div>\n            <button class=\"button-right\" onclick=\"cartController.onclickRight()\">\n              <img src=\"./assets/svg/arrow-right.svg\" alt=\"arrow-right\" class=\"pages-img-right\" />\n            </button>\n          </div>\n        </div>\n      </div>\n    </section>\n    ").concat((0,_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"])(), "\n  ");
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDO2FBQ1g7UUFDSCxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsZ0NBQThCLGtjQVVoQyxLQUFLO1NBQ0osR0FBRyxDQUFDLFVBQUMsSUFBSTtRQUNSLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFO1lBQ25DLE9BQU8sK0JBQ1AsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLDBCQUEwQiw2SEFFakUsQ0FBQztTQUNQO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBRUgsQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnTkFLaUQsVUFBVSwyWkFNM0MsSUFBSSxpVEFRbkMsOERBQVksRUFBRSxTQUNqQixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jYXJ0LmNzcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9jYXJ0LWl0ZW0uY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NhcnQuY3NzPzFmYmYiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvY2FydC1pdGVtLmNzcz82ZDk1Iiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5jc3M/N2M0ZiIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuY3NzP2VhZmIiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9jYXJ0LWl0ZW0udHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29udHJvbGxlcnMvY2FydC1jb250cm9sbGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9saXN0LWJ1eXMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL21vZGVscy9jYXJ0LW1vZGVsLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NhcnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NjEyOTYxODAtZTgxMDBmZDcxNGUyP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMjM0JnE9ODBcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgY29sb3I6ICNmOWYwZGE7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZC1IYXQtVGV4dFxcXCI7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxyXFxufVxcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gIFxcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQtSGF0LVRleHRcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgY29sb3I6ICMwOTNiMGE7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIG1heC13aWR0aDogOTAlO1xcclxcbiAgei1pbmRleDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIFxcclxcbnBvc2l0aW9uOiBmaXhlZDtcXHJcXG50b3A6IDA7XFxyXFxubGVmdDogMDtcXHJcXG5yaWdodDogMDtcXHJcXG5ib3R0b206IDA7XFxyXFxud2lkdGg6IDEwMHZ3O1xcclxcbmhlaWdodDogMTAwdmg7XFxyXFxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNCk7XFxyXFxuei1pbmRleDogOTk7XFxyXFxuY3Vyc29yOiBwb2ludGVyO1xcclxcbnotaW5kZXg6IDA7XFxyXFxufVxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGVsX19jbG9zZSB7XFxyXFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gIHRvcDogMyU7XFxyXFxuICBsZWZ0OiA5NSU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLXdyYXBwZXIge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM1LCAxMzAsIDEyMCwgMC42NTcpO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDR2dyAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWNoZWNrb3V0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW46IDEwcHggMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tvdXQtdG90YWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5OSwgMTkxLCAxODIsIDAuNSk7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDI1cHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50b3RhbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG90YWwtcHJpY2Uge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tvdXQtYnV0dG9uIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTNiMGE7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDcyLCAxMDQsIDE4LCAwLjcyKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jaGVja291dC1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MiwgMTA0LCAxOCwgMC43Mik7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjMDkzYjBhO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1lbmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNlZWUzODA7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLXByb21vIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvbW8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb21vLXRleHQge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9tby1hY3RpdmF0ZSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MiwgMTA0LCAxOCwgMC43Mik7XFxyXFxuICBwYWRkaW5nOiAzcHggOHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjMDkzYjBhO1xcclxcbiAgY29sb3I6ICNmOWYwZGE7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9tby1hY3RpdmF0ZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkzYjBhO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvbW8tdGVzdCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4ubGltaXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGltaXQtaW5wdXQge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlcy10ZXh0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWxlZnQge1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzUsIDEzMCwgMTIwLCAwLjIpO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1sZWZ0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzIsIDEwNCwgMTgsIDAuNzIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZXMtaW1nLWxlZnQge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tcmlnaHQge1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzUsIDEzMCwgMTIwLCAwLjIpO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1yaWdodDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcyLCAxMDQsIDE4LCAwLjcyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2VzLWltZy1yaWdodCB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtcGFnZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZC1IYXQtVGV4dFxcXCI7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmVtcHR5IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZWVlMzgwO1xcclxcbiAgcGFkZGluZzogODBweCAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAuc2VjdGlvbi1jb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2hlY2tvdXQtdG90YWwge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvdGFsLXByaWNlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxuICAuY2hlY2tvdXQtYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGhlaWdodDogMzRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWN0aW9uLWVuZCB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByb21vIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xcclxcbiAgLnNlY3Rpb24tY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLnNlY3Rpb24td3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGl0bGUtY2hlY2tvdXQge1xcclxcbiAgICBtYXJnaW46IDEwcHggMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jaGVja291dC10b3RhbCB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b3RhbC1wcmljZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNoZWNrb3V0LWJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBoZWlnaHQ6IDM0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VjdGlvbi1lbmQge1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByb21vIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NhcnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0xBQW9MO0VBQ3BMLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFNBQVM7RUFDVCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7O0VBRUUsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7O0FBRUEsZUFBZTtBQUNmLE1BQU07QUFDTixPQUFPO0FBQ1AsUUFBUTtBQUNSLFNBQVM7QUFDVCxZQUFZO0FBQ1osYUFBYTtBQUNiLGdDQUFnQztBQUNoQyxXQUFXO0FBQ1gsZUFBZTtBQUNmLFVBQVU7QUFDVjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBNEM7RUFDNUMsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7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RUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsUUFBUTtFQUNWOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU2MTI5NjE4MC1lODEwMGZkNzE0ZTI/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEyMzQmcT04MFxcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBjb2xvcjogI2Y5ZjBkYTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTQwJTtcXHJcXG59XFxyXFxuLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgXFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZC1IYXQtVGV4dFxcXCI7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogIzA5M2IwYTtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgbWF4LXdpZHRoOiA5MCU7XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgXFxyXFxucG9zaXRpb246IGZpeGVkO1xcclxcbnRvcDogMDtcXHJcXG5sZWZ0OiAwO1xcclxcbnJpZ2h0OiAwO1xcclxcbmJvdHRvbTogMDtcXHJcXG53aWR0aDogMTAwdnc7XFxyXFxuaGVpZ2h0OiAxMDB2aDtcXHJcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC40KTtcXHJcXG56LWluZGV4OiA5OTtcXHJcXG5jdXJzb3I6IHBvaW50ZXI7XFxyXFxuei1pbmRleDogMDtcXHJcXG59XFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kZWxfX2Nsb3NlIHtcXHJcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgdG9wOiAzJTtcXHJcXG4gIGxlZnQ6IDk1JTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24td3JhcHBlciB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzUsIDEzMCwgMTIwLCAwLjY1Nyk7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogNHZ3IDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtY2hlY2tvdXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMTBweCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQtSGF0LVRleHRcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja291dC10b3RhbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk5LCAxOTEsIDE4MiwgMC41KTtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMjVweDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvdGFsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQtSGF0LVRleHRcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxyXFxufVxcclxcblxcclxcbi50b3RhbC1wcmljZSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jaGVja291dC1idXR0b24ge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQtSGF0LVRleHRcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxyXFxuICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5M2IwYTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoNzIsIDEwNCwgMTgsIDAuNzIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrb3V0LWJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcyLCAxMDQsIDE4LCAwLjcyKTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICMwOTNiMGE7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWVuZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxyXFxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2VlZTM4MDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tcHJvbW8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5wcm9tbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvbW8tdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb21vLWFjdGl2YXRlIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcyLCAxMDQsIDE4LCAwLjcyKTtcXHJcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICMwOTNiMGE7XFxyXFxuICBjb2xvcjogI2Y5ZjBkYTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb21vLWFjdGl2YXRlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTNiMGE7XFxyXFxufVxcclxcblxcclxcbi5wcm9tby10ZXN0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5saW1pdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQtSGF0LVRleHRcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxyXFxufVxcclxcblxcclxcbi5saW1pdC1pbnB1dCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2VzLXRleHQge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQtSGF0LVRleHRcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tbGVmdCB7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNSwgMTMwLCAxMjAsIDAuMik7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWxlZnQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MiwgMTA0LCAxOCwgMC43Mik7XFxyXFxufVxcclxcblxcclxcbi5wYWdlcy1pbWctbGVmdCB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1yaWdodCB7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNSwgMTMwLCAxMjAsIDAuMik7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLXJpZ2h0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzIsIDEwNCwgMTgsIDAuNzIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZXMtaW1nLXJpZ2h0IHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1wYWdlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZW1wdHkge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNlZWUzODA7XFxyXFxuICBwYWRkaW5nOiA4MHB4IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gIC5zZWN0aW9uLWNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jaGVja291dC10b3RhbCB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG90YWwtcHJpY2Uge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIC5jaGVja291dC1idXR0b24ge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlY3Rpb24tZW5kIHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJvbW8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XFxyXFxuICAuc2VjdGlvbi1jb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAuc2VjdGlvbi13cmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aXRsZS1jaGVja291dCB7XFxyXFxuICAgIG1hcmdpbjogMTBweCAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNoZWNrb3V0LXRvdGFsIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvdGFsLXByaWNlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2hlY2tvdXQtYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGhlaWdodDogMzRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWN0aW9uLWVuZCB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJvbW8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY2FydC1pdGVtX19kZXNjcmlwdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZWVlMzgwO1xcclxcblxcclxcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pdGVtX19pbWctbWFpbiB7XFxyXFxuICB3aWR0aDogMTV2dztcXHJcXG4gIGhlaWdodDogMTJ2dztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtaXRlbV9fc29ydCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZC1IYXQtVGV4dFxcXCI7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtaXRlbV9fY291bnRyeSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZC1IYXQtVGV4dFxcXCI7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pdGVtX19hbW91bnQtc3RvY2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBnYXA6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtaXRlbV9fYW1vdW50LWZvcm0ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pdGVtX19hbW91bnQtaW5wdXQge1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHggNXB4IDVweCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pdGVtX19zdGF0aWMtdmFsdWUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogNTBweDtcXHJcXG4gIGNvbG9yOiAjNDQ0O1xcclxcbiAgdG9wOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWl0ZW1fX3N0b2NrIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pdGVtX190ZXh0LXByaWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pdGVtX19wcmljZSB7XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MiwgMTA0LCAxOCwgMC43Mik7XFxyXFxuICBwYWRkaW5nOiA2cHggMTJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICMwOTNiMGE7XFxyXFxuICBjb2xvcjogI2Y5ZjBkYTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtaXRlbV9fZGVsZXRlLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzUsIDEzMCwgMTIwLCAwLjIpO1xcclxcbiAgY29sb3I6ICNmY2YxZDY7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWl0ZW1fX2RlbGV0ZS1idXR0b246aG92ZXIge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtaXRlbV9fc2VjdGlvbi1wcmljZS1yZXNwIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gIC5jYXJ0LWl0ZW1fX3NlY3Rpb24tcHJpY2Uge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcnQtaXRlbV9fc2VjdGlvbi1wcmljZS1yZXNwIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0LWl0ZW1fX2ltZy1tYWluIHtcXHJcXG4gICAgd2lkdGg6IDE1dnc7XFxyXFxuICAgIGhlaWdodDogMTJ2dztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xcclxcbiAgLmNhcnQtaXRlbV9fZGVzY3JpcHRpb24ge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FydC1pdGVtX19jb3VudHJ5IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FydC1pdGVtX19hbW91bnQtc3RvY2sge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FydC1pdGVtX19zdG9jayB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FydC1pdGVtX19hbW91bnQtaW5wdXQge1xcclxcbiAgICB3aWR0aDogNjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0LWl0ZW1fX3ByaWNlIHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcnQtaXRlbV9fc2VjdGlvbi1wcmljZS1yZXNwIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0LWl0ZW1fX3NlY3Rpb24tcHJpY2Uge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcnQtaXRlbV9faW1nLW1haW4ge1xcclxcbiAgICB3aWR0aDogMjB2dztcXHJcXG4gICAgaGVpZ2h0OiAxOHZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcnQtaXRlbV9fZGVsZXRlLWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvY2FydC1pdGVtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLDZCQUE2Qjs7RUFFN0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix5Q0FBeUM7RUFDekMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLDBDQUEwQztFQUMxQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLE1BQU07RUFDUjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jYXJ0LWl0ZW1fX2Rlc2NyaXB0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNlZWUzODA7XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWl0ZW1fX2ltZy1tYWluIHtcXHJcXG4gIHdpZHRoOiAxNXZ3O1xcclxcbiAgaGVpZ2h0OiAxMnZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pdGVtX19zb3J0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pdGVtX19jb3VudHJ5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTQwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWl0ZW1fX2Ftb3VudC1zdG9jayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pdGVtX19hbW91bnQtZm9ybSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWl0ZW1fX2Ftb3VudC1pbnB1dCB7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWl0ZW1fX3N0YXRpYy12YWx1ZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiA1MHB4O1xcclxcbiAgY29sb3I6ICM0NDQ7XFxyXFxuICB0b3A6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtaXRlbV9fc3RvY2sge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWl0ZW1fX3RleHQtcHJpY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQtSGF0LVRleHRcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWl0ZW1fX3ByaWNlIHtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcyLCAxMDQsIDE4LCAwLjcyKTtcXHJcXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzA5M2IwYTtcXHJcXG4gIGNvbG9yOiAjZjlmMGRhO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pdGVtX19kZWxldGUtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNSwgMTMwLCAxMjAsIDAuMik7XFxyXFxuICBjb2xvcjogI2ZjZjFkNjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtaXRlbV9fZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pdGVtX19zZWN0aW9uLXByaWNlLXJlc3Age1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgLmNhcnQtaXRlbV9fc2VjdGlvbi1wcmljZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FydC1pdGVtX19zZWN0aW9uLXByaWNlLXJlc3Age1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcnQtaXRlbV9faW1nLW1haW4ge1xcclxcbiAgICB3aWR0aDogMTV2dztcXHJcXG4gICAgaGVpZ2h0OiAxMnZ3O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XFxyXFxuICAuY2FydC1pdGVtX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0LWl0ZW1fX2NvdW50cnkge1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0LWl0ZW1fX2Ftb3VudC1zdG9jayB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0LWl0ZW1fX3N0b2NrIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0LWl0ZW1fX2Ftb3VudC1pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcnQtaXRlbV9fcHJpY2Uge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FydC1pdGVtX19zZWN0aW9uLXByaWNlLXJlc3Age1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcnQtaXRlbV9fc2VjdGlvbi1wcmljZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FydC1pdGVtX19pbWctbWFpbiB7XFxyXFxuICAgIHdpZHRoOiAyMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDE4dnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FydC1pdGVtX19kZWxldGUtYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZm9vdGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MiwgMTA0LCAxOCwgMC43Mik7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfX2NvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX19saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9faXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfX2xpbmsge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb290ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcyLCAxMDQsIDE4LCAwLjcyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9fY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfX2xpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX19pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9fbGluayB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3N2Zy90ZWEtY3VwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9zdmcvYXJyb3ctcmlnaHQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3N2Zy9jYXJ0LWhlYWRlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZWFkZXIge1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzIsIDEwNCwgMTgsIDAuNzIpO1xcclxcbn1cXHJcXG4uaGVhZGVyX19uYXYge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5oZWFkZXJfX25hdi1saW5rIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICNmOWYwZGE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5oZWFkZXJfX3RlYS10aW1lLWxvZ28ge1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX190ZWEtdGltZS1sb2dvLWgxIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTQwJTtcXHJcXG5cXHJcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX2Zvcm0ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcbi5oZWFkZXJfX3NlYXJjaC1pbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjJweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwOTNiMGE7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgLyogYmFja2dyb3VuZDogI0Y5RjBEQTsgKi9cXHJcXG4gIGJhY2tncm91bmQ6ICNmOWYwZGE7XFxyXFxuICBjb2xvcjogIzllOWM5YztcXHJcXG59XFxyXFxuLmhlYWRlcl9fc3VibWl0LWJ1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMHB4O1xcclxcbiAgd2lkdGg6IDY2cHg7XFxyXFxuICBoZWlnaHQ6IDYycHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDkzYjBhO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5oZWFkZXJfX3NlYXJjaC1pY29uIHtcXHJcXG4gIHdpZHRoOiA1NHB4O1xcclxcbiAgaGVpZ2h0OiA1NHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG59XFxyXFxuLmhlYWRlcl9fY2FydCB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG4uaGVhZGVyX19hbW91bnQtYnV5cyB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkzYjBhO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDhweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcXHJcXG4gIG1hcmdpbi10b3A6IC0zMHB4O1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7O0VBRWpCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseURBQXNEO0FBQ3hEO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlEQUFzRDtFQUN0RCxVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXIge1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzIsIDEwNCwgMTgsIDAuNzIpO1xcclxcbn1cXHJcXG4uaGVhZGVyX19uYXYge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5oZWFkZXJfX25hdi1saW5rIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICNmOWYwZGE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5oZWFkZXJfX3RlYS10aW1lLWxvZ28ge1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9zdmcvdGVhLWN1cC5zdmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fdGVhLXRpbWUtbG9nby1oMSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZC1IYXQtVGV4dFxcXCI7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxyXFxuXFxyXFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19mb3JtIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG4uaGVhZGVyX19zZWFyY2gtaW5wdXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDYycHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDkzYjBhO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIC8qIGJhY2tncm91bmQ6ICNGOUYwREE7ICovXFxyXFxuICBiYWNrZ3JvdW5kOiAjZjlmMGRhO1xcclxcbiAgY29sb3I6ICM5ZTljOWM7XFxyXFxufVxcclxcbi5oZWFkZXJfX3N1Ym1pdC1idXR0b24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDBweDtcXHJcXG4gIHdpZHRoOiA2NnB4O1xcclxcbiAgaGVpZ2h0OiA2MnB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogIzA5M2IwYTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uaGVhZGVyX19zZWFyY2gtaWNvbiB7XFxyXFxuICB3aWR0aDogNTRweDtcXHJcXG4gIGhlaWdodDogNTRweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL3N2Zy9hcnJvdy1yaWdodC5zdmdcXFwiKTtcXHJcXG59XFxyXFxuLmhlYWRlcl9fY2FydCB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL3N2Zy9jYXJ0LWhlYWRlci5zdmdcXFwiKTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcbi5oZWFkZXJfX2Ftb3VudC1idXlzIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTNiMGE7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogOHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogLTMwcHg7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FydC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcnQtaXRlbS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcnQtaXRlbS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vY2FydC1pdGVtLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ2FydEl0ZW0oeyBpbWFnZSwgc29ydCwgcHJvdmluY2UsIHByaWNlLCBpZCwgYW1vdW50LCBzdG9jayB9OiBDYXJ0SXRlbVByb3BzKSB7XHJcbiAgcmV0dXJuIGBcclxuICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtX19kZXNjcmlwdGlvblwiPlxyXG4gIDxpbWcgc3JjPVwiJHtpbWFnZX1cIiBhbHQ9XCJ0ZWFcIiBjbGFzcz1cImNhcnQtaXRlbV9faW1nLW1haW5cIiAvPlxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtX19zb3J0XCI+JHtzb3J0fTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbV9fY291bnRyeVwiPiR7cHJvdmluY2V9PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtX19hbW91bnQtc3RvY2tcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbV9fYW1vdW50LWZvcm1cIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBtYXg9XCIke3N0b2NrfVwiIHN0ZXA9XCIxXCIgdmFsdWU9XCIke2Ftb3VudH1cIiBvbmNoYW5nZT1cImNhcnRDb250cm9sbGVyLnVwZGF0ZUFtb3VudCgke2lkfSwgZXZlbnQpXCIgaWQ9XCJ5b3VyaWRoZXJlXCIgY2xhc3M9XCJjYXJ0LWl0ZW1fX2Ftb3VudC1pbnB1dFwiIC8+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInlvdXJpZGhlcmVcIiBjbGFzcz1cImNhcnQtaXRlbV9fc3RhdGljLXZhbHVlXCI+cGNzLjwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtX19zdG9ja1wiPmluIHN0b2NrOiAke3N0b2NrfSBwY3MuPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW1fX3NlY3Rpb24tcHJpY2UtcmVzcFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtX190ZXh0LXByaWNlXCI+UHJpY2U6PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW1fX3ByaWNlXCI+JHtwcmljZX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW1fX3NlY3Rpb24tcHJpY2VcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW1fX3RleHQtcHJpY2VcIj5QcmljZTo8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW1fX3ByaWNlXCI+JHtwcmljZX0gJDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwicmVtb3ZlIGZyb20gY2FydFwiIGNsYXNzPVwiY2FydC1pdGVtX19kZWxldGUtYnV0dG9uXCIgb25jbGljaz1cImNhcnRDb250cm9sbGVyLmRlbGV0ZUNhcnRJdGVtKCR7aWR9KVwiPng8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuICBgO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDYXJ0SXRlbTtcclxuIiwiaW1wb3J0IFwiLi9mb290ZXIuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJGb290ZXIoKSB7XHJcbiAgcmV0dXJuIGBcclxuICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImZvb3Rlcl9fbGlzdFwiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzPVwiZm9vdGVyX19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb24vZ2l0aHViLnN2Z1wiIGNsYXNzPVwiZm9vdGVyX19tYXNoYS1naXRodWJcIiBhbHQ9XCJnaXRodWJcIiBzdHlsZT1cIndpZHRoOiAzMHB4XCIgLz5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJmb290ZXJfX2xpbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL01hcnkxOTAxODMvXCI+TWFyeTE5MDE4MzwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJmb290ZXJfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbi9naXRodWIuc3ZnXCIgY2xhc3M9XCJmb290ZXJfX21hc2hhLWdpdGh1YlwiIGFsdD1cImdpdGh1YlwiIHN0eWxlPVwid2lkdGg6IDMwcHhcIiAvPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImZvb3Rlcl9fbGlua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYmFsYWJhbm92YS1pdS9cIj5iYWxhYmFub3ZhLWl1PC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzcz1cImZvb3Rlcl9faXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvanMvXCJcclxuICAgICAgICAgICAgICA+PGltZyBzcmM9XCJhc3NldHMvaWNvbi9yc3NjaG9vbC5zdmdcIiBjbGFzcz1cImZvb3Rlcl9fcnNzY2hvb2xcIiBhbHQ9XCJyc19zY2hvb2xcIiBzdHlsZT1cIndpZHRoOiA3MHB4XCJcclxuICAgICAgICAgICAgLz48L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgYDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyRm9vdGVyO1xyXG4iLCJpbXBvcnQgXCIuL2hlYWRlci5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckhlYWRlcih7IHRvdGFsQW1vdW50LCB0b3RhbFByaWNlIH06IEhlYWRlclByb3BzKSB7XHJcbiAgcmV0dXJuIGBcclxuICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgPG5hdiBjbGFzcz1cImhlYWRlcl9fbmF2XCI+XHJcbiAgICA8bGkgY2xhc3M9XCJoZWFkZXJfX25hdi1saW5rXCI+XHJcbiAgICAgIDxhIGhyZWY9XCJodHRwczovL29ubGluZS1zdG9yZS10ZWEtdGltZS5uZXRsaWZ5LmFwcC9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX190ZWEtdGltZS1sb2dvXCI+PC9kaXY+XHJcbiAgICAgICAgPGgxIGNsYXNzPVwiaGVhZGVyX190ZWEtdGltZS1sb2dvLWgxXCI+VGVhLXRpbWU8L2gxPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGNsYXNzPVwiaGVhZGVyX19uYXYtbGlua1wiPlxyXG4gICAgICA8Zm9ybSBhY3Rpb249XCJcIiBtZXRob2Q9XCJnZXRcIiBjbGFzcz1cImhlYWRlcl9fZm9ybVwiPlxyXG4gICAgICAgIDxpbnB1dCBuYW1lPVwic1wiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHRlYS4uLlwiIHR5cGU9XCJzZWFyY2hcIiBjbGFzcz1cImhlYWRlcl9fc2VhcmNoLWlucHV0XCIgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImhlYWRlcl9fc3VibWl0LWJ1dHRvblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fc2VhcmNoLWljb25cIj48L2Rpdj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBjbGFzcz1cImhlYWRlcl9fbmF2LWxpbmtcIj5cclxuICAgICAgPGEgaHJlZj1cIml0ZW0uaHRtbFwiPlxyXG4gICAgICAgIDxzcGFuPlRvdGFsIHByaWNlOiAke3RvdGFsUHJpY2V9JDwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19jYXJ0XCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fYW1vdW50LWJ1eXNcIj4ke3RvdGFsQW1vdW50fTwvZGl2PlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2xpPlxyXG4gIDwvbmF2PlxyXG48L2hlYWRlcj5cclxuICBgO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIZWFkZXI7XHJcbiIsImltcG9ydCBDYXJ0TW9kZWwgZnJvbSBcIi4uL21vZGVscy9jYXJ0LW1vZGVsXCI7XHJcblxyXG5jbGFzcyBDYXJ0Q29udHJvbGxlciB7XHJcbiAgcHJpdmF0ZSBfcmVuZGVyVmlldzogUmVuZGVyVmlldzxDYXJ0TW9kZWw+O1xyXG4gIHByaXZhdGUgX21vZGVsOiBDYXJ0TW9kZWw7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihyZW5kZXJWaWV3OiBSZW5kZXJWaWV3PENhcnRNb2RlbD4sIG1vZGVsOiBDYXJ0TW9kZWwpIHtcclxuICAgIHRoaXMuX3JlbmRlclZpZXcgPSByZW5kZXJWaWV3O1xyXG4gICAgdGhpcy5fbW9kZWwgPSBtb2RlbDtcclxuXHJcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgaWYgKHNlYXJjaFBhcmFtcy5oYXMoXCJsaW1pdFwiKSkge1xyXG4gICAgICB0aGlzLl9tb2RlbC5saW1pdEl0ZW1zID0gTnVtYmVyKHNlYXJjaFBhcmFtcy5nZXQoXCJsaW1pdFwiKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VhcmNoUGFyYW1zLmhhcyhcInBhZ2VcIikpIHtcclxuICAgICAgdGhpcy5fbW9kZWwucGFnZSA9IE51bWJlcihzZWFyY2hQYXJhbXMuZ2V0KFwicGFnZVwiKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlVmlldygpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gdGhpcy5fcmVuZGVyVmlldyh0aGlzLl9tb2RlbCk7XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgIHNlYXJjaFBhcmFtcy5zZXQoXCJsaW1pdFwiLCBTdHJpbmcodGhpcy5fbW9kZWwubGltaXRJdGVtcykpO1xyXG4gICAgc2VhcmNoUGFyYW1zLnNldChcInBhZ2VcIiwgU3RyaW5nKHRoaXMuX21vZGVsLnBhZ2UpKTtcclxuICAgIGNvbnN0IG5ld1JlbGF0aXZlUGF0aFF1ZXJ5ID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgXCI/XCIgKyBzZWFyY2hQYXJhbXMudG9TdHJpbmcoKTtcclxuICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIFwiXCIsIG5ld1JlbGF0aXZlUGF0aFF1ZXJ5KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZWxldGVDYXJ0SXRlbShpZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9tb2RlbC5kZWxldGVJdGVtQnlJZChpZCk7XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVBbW91bnQoaWQ6IG51bWJlciwgZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICB0aGlzLl9tb2RlbC51cGRhdGVBbW91bnRCeUlkKGlkLCBOdW1iZXIoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSkpO1xyXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlTGltaXRJdGVtcyhldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMuX21vZGVsLnVwZGF0ZUxpbWl0SXRlbXNPblBhZ2UoTnVtYmVyKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpKTtcclxuICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uY2xpY2tSaWdodCgpIHtcclxuICAgIHRoaXMuX21vZGVsLm9uY2xpY2tSaWdodFBhZ2VOdW1iZXIoKTtcclxuICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uY2xpY2tMZWZ0KCkge1xyXG4gICAgdGhpcy5fbW9kZWwub25jbGlja0xlZnRQYWdlTnVtYmVyKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVQcm9tbyhldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMuX21vZGVsLnVwZGF0ZVByb21vQnlJZCgoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcclxuICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlbGV0ZVByb21vSXRlbSgpIHtcclxuICAgIHRoaXMuX21vZGVsLmRlbGV0ZVByb21vQnlJZCgpO1xyXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3BlbkNoZWNrb3V0KCkge1xyXG4gICAgdGhpcy5fbW9kZWwub3BlbkNoZWNrb3V0QnV0dG9uKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZUNoZWNrb3V0KCkge1xyXG4gICAgdGhpcy5fbW9kZWwuY2xvc2VDaGVja291dEJ1dHRvbigpO1xyXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0Q29udHJvbGxlcjtcclxuIiwiY29uc3QgbGlzdEJ1eXMgPSBbICAgICBcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIG5hbWU6ICdHeW9rdXJvIEFuZCBKaScsXHJcbiAgICAgIHNvcnQ6ICdHcmVlbiB0ZWEnLFxyXG4gICAgICBwcm92aW5jZTogJ1RhaXdhbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnRmlyc3QgZ3JhZGUgU3RlYW1lZCcsXHJcbiAgICAgIGltYWdlMTogYC4vYXNzZXRzL2ltZy9pZDFfMS5qcGdgLFxyXG4gICAgICBpbWFnZTI6IGAuL2Fzc2V0cy9pbWcvaWQxXzIuanBnYCxcclxuICAgICAgc3RvY2s6IDMwLFxyXG4gICAgICBwcmljZTogMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6ICdaaGkgVGlhbyBMaXUgTWFvIEZlbmcgU2ljaHVhbicsXHJcbiAgICAgIHNvcnQ6ICdHcmVlbiB0ZWEnLFxyXG4gICAgICBwcm92aW5jZTogJ1RhaXdhbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnSXQgaGFzIGEgdGhpY2sgdmVsdmV0eSBmbG9yYWwtZnJ1aXR5LCBob25leSBhcm9tYSB3aXRoIG5vdGVzIG9mIHBydW5lcycsXHJcbiAgICAgIGltYWdlMTogYC4vYXNzZXRzL2ltZy9pZDJfMS5qcGdgLFxyXG4gICAgICBpbWFnZTI6IGAuL2Fzc2V0cy9pbWcvaWQyXzIuanBnYCxcclxuICAgICAgc3RvY2s6IDIwLFxyXG4gICAgICBwcmljZTogMS41IFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIG5hbWU6ICdUYW5nIE1pbmcgWXVhbicsXHJcbiAgICAgIHNvcnQ6ICdHcmVlbiB0ZWEnLFxyXG4gICAgICBwcm92aW5jZTogJ0h1YW5nIFNoYW4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1Nub3cgZ3JlZW4gdGVhIDIwMjEnLFxyXG4gICAgICBpbWFnZTE6IGAuL2Fzc2V0cy9pbWcvaWQzXzEuanBnYCxcclxuICAgICAgaW1hZ2UyOiBgLi9hc3NldHMvaW1nL2lkM18yLmpwZ2AsXHJcbiAgICAgIHN0b2NrOiA1MCxcclxuICAgICAgcHJpY2U6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA0LFxyXG4gICAgICBuYW1lOiAnTGVpIE1pbmcgTnlhbyBadWVpJyxcclxuICAgICAgc29ydDogJ0dyZWVuIHRlYScsXHJcbiAgICAgIHByb3ZpbmNlOiAnSHVhbmcgU2hhbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIihQZXRyZWwncyBCZWFrIGdyYWRlIEMxKSAyMDIxIE1lbmcgRGluZyBTaGFuXCIsXHJcbiAgICAgIGltYWdlMTogYC4vYXNzZXRzL2ltZy9pZDRfMS5qcGdgLFxyXG4gICAgICBpbWFnZTI6IGAuL2Fzc2V0cy9pbWcvaWQ0XzIuanBnYCxcclxuICAgICAgc3RvY2s6IDQwLFxyXG4gICAgICBwcmljZTogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDUsXHJcbiAgICAgIG5hbWU6ICdUYWkgUGluZyBIb3UgS3VpJyxcclxuICAgICAgc29ydDogJ0dyZWVuIHRlYScsXHJcbiAgICAgIHByb3ZpbmNlOiAnSHVhbmcgU2hhbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk1vbmtleSBLaW5nIDIwMjEgQmVpIEh1YW5nIFNoYW4gQW5odWkgUHJvdmluY2VcIixcclxuICAgICAgaW1hZ2UxOiBgLi9hc3NldHMvaW1nL2lkNV8xLmpwZ2AsXHJcbiAgICAgIGltYWdlMjogYC4vYXNzZXRzL2ltZy9pZDVfMi5qcGdgLFxyXG4gICAgICBzdG9jazogMjUsXHJcbiAgICAgIHByaWNlOiAwLjVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA2LFxyXG4gICAgICBuYW1lOiAnWXVuIFd1IExpdSBDaGEnLFxyXG4gICAgICBzb3J0OiAnR3JlZW4gdGVhJyxcclxuICAgICAgcHJvdmluY2U6ICdUYWl3YW4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJDbG91ZCBncmVlbiB0ZWEgMjAxOVwiLFxyXG4gICAgICBpbWFnZTE6IGAuL2Fzc2V0cy9pbWcvaWQ2XzEuanBnYCxcclxuICAgICAgaW1hZ2UyOiBgLi9hc3NldHMvaW1nL2lkNl8yLmpwZ2AsXHJcbiAgICAgIHN0b2NrOiA0NSxcclxuICAgICAgcHJpY2U6IDAuNVxyXG4gICAgfSwgICAgICBcclxuICAgIHtcclxuICAgICAgaWQ6IDcsXHJcbiAgICAgIG5hbWU6ICdXaXNoYW4gTml1bGFua2VuZyBaaG91IEd1aScsXHJcbiAgICAgIHNvcnQ6ICdPb2xvbmcnLFxyXG4gICAgICBwcm92aW5jZTogJ0hvbmcgUGFvJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdEYSBIb25nIFBhbyBQcm92aW5jZScsXHJcbiAgICAgIGltYWdlMTogYC4vYXNzZXRzL2ltZy9pZDdfMS5qcGdgLFxyXG4gICAgICBpbWFnZTI6IGAuL2Fzc2V0cy9pbWcvaWQ3XzIuanBnYCxcclxuICAgICAgc3RvY2s6IDQwLFxyXG4gICAgICBwcmljZTogM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDgsXHJcbiAgICAgIG5hbWU6ICdRaSBEYW4sIFd1aXNoYW4gT29sb25nJyxcclxuICAgICAgc29ydDogJ09vbG9uZycsXHJcbiAgICAgIHByb3ZpbmNlOiAnVGFpd2FuJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdDaG9jb2xhdGUgdGFzdGUnLFxyXG4gICAgICBpbWFnZTE6IGAuL2Fzc2V0cy9pbWcvaWQ4XzEuanBnYCxcclxuICAgICAgaW1hZ2UyOiBgLi9hc3NldHMvaW1nL2lkOF8yLmpwZ2AsXHJcbiAgICAgIHN0b2NrOiAyNSxcclxuICAgICAgcHJpY2U6IDEgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogOSxcclxuICAgICAgbmFtZTogJ09vbG9uZyBEb25nIERpbmcnLFxyXG4gICAgICBzb3J0OiAnT29sb25nJyxcclxuICAgICAgcHJvdmluY2U6ICdUYWl3YW4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwcmluZyBUYWl3YW4nLFxyXG4gICAgICBpbWFnZTE6IGAuL2Fzc2V0cy9pbWcvaWQ5XzEuanBnYCxcclxuICAgICAgaW1hZ2UyOiBgLi9hc3NldHMvaW1nL2lkOV8yLmpwZ2AsXHJcbiAgICAgIHN0b2NrOiA0MCxcclxuICAgICAgcHJpY2U6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxMCxcclxuICAgICAgbmFtZTogJ0dpbnNlbmcgT29sb25nJyxcclxuICAgICAgc29ydDogJ09vbG9uZycsXHJcbiAgICAgIHByb3ZpbmNlOiAnVGFpd2FuJyxcclxuICAgICAgZGVzY3JpcHRpb246IFwiVGFpd2FuIDIwMjFcIixcclxuICAgICAgaW1hZ2UxOiBgLi9hc3NldHMvaW1nL2lkMTBfMS5qcGdgLFxyXG4gICAgICBpbWFnZTI6IGAuL2Fzc2V0cy9pbWcvaWQxMF8yLmpwZ2AsXHJcbiAgICAgIGltYWdlMzogYC4vYXNzZXRzL2ltZy9pZDEwXzMuanBnYCxcclxuICAgICAgc3RvY2s6IDYwLFxyXG4gICAgICBwcmljZTogMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDExLFxyXG4gICAgICBuYW1lOiAnSmluIFh1YW4gTWlsayBPb2xvbmcnLFxyXG4gICAgICBzb3J0OiAnT29sb25nJyxcclxuICAgICAgcHJvdmluY2U6ICdUYWl3YW4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJDbGFzcyBBQUFBXCIsXHJcbiAgICAgIGltYWdlMTogYC4vYXNzZXRzL2ltZy9pZDExXzEuanBnYCxcclxuICAgICAgaW1hZ2UyOiBgLi9hc3NldHMvaW1nL2lkMTFfMi5qcGdgLFxyXG4gICAgICBzdG9jazogMzUsXHJcbiAgICAgIHByaWNlOiAxLjVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxMixcclxuICAgICAgbmFtZTogJ0dhYmEgV2ludGVyIEphZGUgRG9uZyBEaW5nJyxcclxuICAgICAgc29ydDogJ09vbG9uZycsXHJcbiAgICAgIHByb3ZpbmNlOiAnVGFpd2FuJyxcclxuICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGFyb21hIGlzIGhpZ2gsIGxpZ2h0LCBmcnVpdHkgYW5kIHN3ZWV0LlwiLFxyXG4gICAgICBpbWFnZTE6IGAuL2Fzc2V0cy9pbWcvaWQxMl8xLmpwZ2AsXHJcbiAgICAgIGltYWdlMjogYC4vYXNzZXRzL2ltZy9pZDEyXzIuanBnYCxcclxuICAgICAgc3RvY2s6IDQwLFxyXG4gICAgICBwcmljZTogMC41XHJcbiAgICB9LCAgICAgIFxyXG4gICAge1xyXG4gICAgICBpZDogMTMsXHJcbiAgICAgIG5hbWU6ICdTaGVuIFB1ZXIgQmFpIEhhbyBZaW4gWmhlbicsXHJcbiAgICAgIHNvcnQ6ICdQdWVyJyxcclxuICAgICAgcHJvdmluY2U6ICdIdWFuZyBTaGFuJyxcclxuICAgICAgZGVzY3JpcHRpb246IFwiV2hpdGUgWXVubmFuIFNoZW4gUHUnZXIgMjAyMlwiLFxyXG4gICAgICBpbWFnZTE6IGAuL2Fzc2V0cy9pbWcvaWQxM18xLmpwZ2AsXHJcbiAgICAgIGltYWdlMjogYC4vYXNzZXRzL2ltZy9pZDEzXzIuanBnYCxcclxuICAgICAgc3RvY2s6IDMwLFxyXG4gICAgICBwcmljZTogMy41XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTQsXHJcbiAgICAgIG5hbWU6ICdTaGVuIFB1ZXIgTHVuZyBKaSBUbyBDaGEnLFxyXG4gICAgICBzb3J0OiAnUHVlcicsXHJcbiAgICAgIHByb3ZpbmNlOiAnSHVhbmcgU2hhbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnRHJhZ29uIEJhbGxzIGZyb20gRGEgSHVhbmcgU2hhbiBNb3VudGFpbiAyMDE4JyxcclxuICAgICAgaW1hZ2UxOiBgLi9hc3NldHMvaW1nL2lkMTRfMS5qcGdgLFxyXG4gICAgICBpbWFnZTI6IGAuL2Fzc2V0cy9pbWcvaWQxNF8yLmpwZ2AsXHJcbiAgICAgIHN0b2NrOiAzNSxcclxuICAgICAgcHJpY2U6IDMgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTUsXHJcbiAgICAgIG5hbWU6ICdTaGVuIFB1ZXIgTXl1bmcgS3UgRGEgSHUgSmFpJyxcclxuICAgICAgc29ydDogJ1B1ZXInLFxyXG4gICAgICBwcm92aW5jZTogJ015dW5nIEt1JyxcclxuICAgICAgZGVzY3JpcHRpb246ICdBbmNpZW50IHRyZWVzIE15dW5nIEt1IHBsYWNlIDIwMTYnLFxyXG4gICAgICBpbWFnZTE6IGAuL2Fzc2V0cy9pbWcvaWQxNV8xLmpwZ2AsXHJcbiAgICAgIGltYWdlMjogYC4vYXNzZXRzL2ltZy9pZDE1XzIuanBnYCxcclxuICAgICAgc3RvY2s6IDYwLFxyXG4gICAgICBwcmljZTogNlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDE2LFxyXG4gICAgICBuYW1lOiAnU2hlbiBQdWVyIEJhbiBUenUgQ2hhbicsXHJcbiAgICAgIHNvcnQ6ICdQdWVyJyxcclxuICAgICAgcHJvdmluY2U6ICdIdWFuZyBTaGFuJyxcclxuICAgICAgZGVzY3JpcHRpb246IFwiU2hlbiBQdWVyIFBpZ3RhaWwgVGVhIE1vdW50YWluIERhIEh1YW5nIFNoYW5cIixcclxuICAgICAgaW1hZ2UxOiBgLi9hc3NldHMvaW1nL2lkMTZfMS5qcGdgLFxyXG4gICAgICBpbWFnZTI6IGAuL2Fzc2V0cy9pbWcvaWQxNl8yLmpwZ2AsXHJcbiAgICAgIHN0b2NrOiAyMCxcclxuICAgICAgcHJpY2U6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxNyxcclxuICAgICAgbmFtZTogJ1NoZW4gUHVlciBLdW4gUXVlIFNoaScsXHJcbiAgICAgIHNvcnQ6ICdQdWVyJyxcclxuICAgICAgcHJvdmluY2U6ICdIdWFuZyBTaGFuJyxcclxuICAgICAgZGVzY3JpcHRpb246IFwiUmVkIFRvbmd1ZXMgcHVycGxlIGJ1ZHMgWWVzIEh1YW5nIFNoYW4gMjAxOFwiLFxyXG4gICAgICBpbWFnZTI6IGAuL2Fzc2V0cy9pbWcvaWQxN18xLmpwZ2AsXHJcbiAgICAgIGltYWdlMTogYC4vYXNzZXRzL2ltZy9pZDE3XzIuanBnYCxcclxuICAgICAgc3RvY2s6IDE1LFxyXG4gICAgICBwcmljZTogMy41XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTgsXHJcbiAgICAgIG5hbWU6ICdTaGVuIFB1ZXIgWWUgU2hlbiBCYWkgWWEgQmFvJyxcclxuICAgICAgc29ydDogJ1B1ZXInLFxyXG4gICAgICBwcm92aW5jZTogJ0h1YW5nIFNoYW4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJXaWxkIHdoaXRlIGJ1ZHNcIixcclxuICAgICAgaW1hZ2UxOiBgLi9hc3NldHMvaW1nL2lkMThfMS5qcGdgLFxyXG4gICAgICBpbWFnZTI6IGAuL2Fzc2V0cy9pbWcvaWQxOF8yLmpwZ2AsXHJcbiAgICAgIHN0b2NrOiAyMCxcclxuICAgICAgcHJpY2U6IDAuNVxyXG4gICAgfSwgICAgICBcclxuICAgIHtcclxuICAgICAgaWQ6IDE5LFxyXG4gICAgICBuYW1lOiAnRGlhbiBIb25nIEh1YSBMb25nIFpodScsXHJcbiAgICAgIHNvcnQ6ICdSZWQgdGVhJyxcclxuICAgICAgcHJvdmluY2U6ICdUYWl3YW4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJXaXRoIG9yYW5nZSBwZWVsXCIsXHJcbiAgICAgIGltYWdlMTogYC4vYXNzZXRzL2ltZy9pZDE5XzEuanBnYCxcclxuICAgICAgaW1hZ2UyOiBgLi9hc3NldHMvaW1nL2lkMTlfMi5qcGdgLFxyXG4gICAgICBzdG9jazogMjAsXHJcbiAgICAgIHByaWNlOiAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMjAsXHJcbiAgICAgIG5hbWU6ICdEaWFuIEhvbmcgSHVhIExvbmcgWmh1JyxcclxuICAgICAgc29ydDogJ1JlZCB0ZWEnLFxyXG4gICAgICBwcm92aW5jZTogJ1RhaXdhbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnV2l0aCBvc21hbnRodXMnLFxyXG4gICAgICBpbWFnZTE6IGAuL2Fzc2V0cy9pbWcvaWQyMF8xLmpwZ2AsXHJcbiAgICAgIGltYWdlMjogYC4vYXNzZXRzL2ltZy9pZDIwXzIuanBnYCxcclxuICAgICAgc3RvY2s6IDI1LFxyXG4gICAgICBwcmljZTogMiBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyMSxcclxuICAgICAgbmFtZTogJ0RpYW4gSG9uZyBIdWEgTG9uZyBaaHUnLFxyXG4gICAgICBzb3J0OiAnUmVkIHRlYScsXHJcbiAgICAgIHByb3ZpbmNlOiAnVGFpd2FuJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdXaXRoIGphc21pbmUnLFxyXG4gICAgICBpbWFnZTE6IGAuL2Fzc2V0cy9pbWcvaWQyMV8xLmpwZ2AsXHJcbiAgICAgIGltYWdlMjogYC4vYXNzZXRzL2ltZy9pZDIxXzIuanBnYCxcclxuICAgICAgc3RvY2s6IDEwLFxyXG4gICAgICBwcmljZTogMy41XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMjIsXHJcbiAgICAgIG5hbWU6ICdEaWFuIEhvbmcgSHVhIExvbmcgWmh1JyxcclxuICAgICAgc29ydDogJ1JlZCB0ZWEnLFxyXG4gICAgICBwcm92aW5jZTogJ1RhaXdhbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIldpdGggcmVkIHBlb255XCIsXHJcbiAgICAgIGltYWdlMTogYC4vYXNzZXRzL2ltZy9pZDIyXzEuanBnYCxcclxuICAgICAgaW1hZ2UyOiBgLi9hc3NldHMvaW1nL2lkMjJfMi5qcGdgLFxyXG4gICAgICBzdG9jazogNjAsXHJcbiAgICAgIHByaWNlOiA0LjVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyMyxcclxuICAgICAgbmFtZTogJ0RpYW4gSG9uZyBIdWEgTG9uZyBaaHUnLFxyXG4gICAgICBzb3J0OiAnUmVkIHRlYScsXHJcbiAgICAgIHByb3ZpbmNlOiAnVGFpd2FuJyxcclxuICAgICAgZGVzY3JpcHRpb246IFwiV2l0aCBtb3VudGFpbiBjYXJuYXRpb25cIixcclxuICAgICAgaW1hZ2UxOiBgLi9hc3NldHMvaW1nL2lkMjNfMS5qcGdgLFxyXG4gICAgICBpbWFnZTI6IGAuL2Fzc2V0cy9pbWcvaWQyM18yLmpwZ2AsXHJcbiAgICAgIHN0b2NrOiA1NSxcclxuICAgICAgcHJpY2U6IDNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyNCxcclxuICAgICAgbmFtZTogJ0RpYW4gSG9uZyBIdWEgTG9uZyBaaHUnLFxyXG4gICAgICBzb3J0OiAnUmVkIHRlYScsXHJcbiAgICAgIHByb3ZpbmNlOiAnVGFpd2FuJyxcclxuICAgICAgZGVzY3JpcHRpb246IFwiV2l0aCB5ZWxsb3cgY2hyeXNhbnRoZW11bVwiLFxyXG4gICAgICBpbWFnZTE6IGAuL2Fzc2V0cy9pbWcvaWQyNF8xLmpwZ2AsXHJcbiAgICAgIGltYWdlMjogYC4vYXNzZXRzL2ltZy9pZDI0XzIuanBnYCxcclxuICAgICAgc3RvY2s6IDEwLFxyXG4gICAgICBwcmljZTogMi41XHJcbiAgICB9LFxyXG5dIGFzIFByb2R1Y3RbXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxpc3RCdXlzO1xyXG4iLCJpbXBvcnQgbGlzdEJ1eXMgZnJvbSBcIi4uL2xpc3QtYnV5c1wiO1xyXG5cclxuY2xhc3MgQ2FydE1vZGVsIHtcclxuICBwcml2YXRlIF9pdGVtczogQ2FydEl0ZW1bXTtcclxuICBwdWJsaWMgcGFnZTogbnVtYmVyO1xyXG4gIHB1YmxpYyBsaW1pdEl0ZW1zOiBudW1iZXI7XHJcbiAgcHVibGljIHByb21vOiBzdHJpbmdbXTtcclxuICBwdWJsaWMgaXNPcGVuOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9pdGVtcyA9IFtdO1xyXG4gICAgdGhpcy5wYWdlID0gMTtcclxuICAgIHRoaXMubGltaXRJdGVtcyA9IDI7XHJcbiAgICB0aGlzLnByb21vID0gW107XHJcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2R1Y3RzXCIpICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuX2l0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2R1Y3RzXCIpIGFzIHN0cmluZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9pdGVtcyA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpdGVtcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9pdGVtcy5zbGljZSgodGhpcy5wYWdlIC0gMSkgKiB0aGlzLmxpbWl0SXRlbXMsIHRoaXMucGFnZSAqIHRoaXMubGltaXRJdGVtcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHRvdGFsUHJpY2UoKSB7XHJcbiAgICBsZXQgc3VtID0gMDtcclxuICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgcHJvZHVjdCA9IGxpc3RCdXlzLmZpbmQoKHByb2QpID0+IHByb2QuaWQgPT09IGl0ZW0ucHJvZHVjdElkKTtcclxuICAgICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgICBzdW0gKz0gcHJvZHVjdC5wcmljZSAqIGl0ZW0uYW1vdW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN1bSArPSAwO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzdW07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHRvdGFsQW1vdW50KCkge1xyXG4gICAgbGV0IHN1bUFtb3VudCA9IDA7XHJcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIHN1bUFtb3VudCArPSBpdGVtLmFtb3VudDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHN1bUFtb3VudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZWxldGVJdGVtQnlJZChpZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9pdGVtcyA9IHRoaXMuX2l0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaWQpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9kdWN0c1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLl9pdGVtcykpXHJcbiAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPT09IDAgJiYgdGhpcy5wYWdlID4gMSkge1xyXG4gICAgICB0aGlzLnBhZ2UgLT0gMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVBbW91bnRCeUlkKGlkOiBudW1iZXIsIGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICBpZiAoYW1vdW50ID09PSAwKSB7XHJcbiAgICAgIHRoaXMuZGVsZXRlSXRlbUJ5SWQoaWQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xyXG4gICAgICAgIGl0ZW0uYW1vdW50ID0gYW1vdW50O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvZHVjdHNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5faXRlbXMpKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZUxpbWl0SXRlbXNPblBhZ2UobGltaXRJdGVtczogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmxpbWl0SXRlbXMgPSBsaW1pdEl0ZW1zO1xyXG4gICAgdGhpcy5wYWdlID0gMTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbmNsaWNrUmlnaHRQYWdlTnVtYmVyKCkge1xyXG4gICAgaWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDEgPCB0aGlzLnBhZ2UgKiB0aGlzLmxpbWl0SXRlbXMpIHtcclxuICAgICAgdGhpcy5wYWdlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlICsgMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbmNsaWNrTGVmdFBhZ2VOdW1iZXIoKSB7XHJcbiAgICBpZiAodGhpcy5wYWdlIC0gMSA9PT0gMCkge1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlIC0gMTtcclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIHVwZGF0ZVByb21vQnlJZChwcm9tbzogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5wcm9tby5pbmNsdWRlcyhwcm9tbykpIHtcclxuICAgICAgdGhpcy5wcm9tbztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChwcm9tbyA9PT0gXCJSU1wiIHx8IHByb21vID09PSBcIkVQTVwiKSB7XHJcbiAgICAgICAgdGhpcy5wcm9tby5wdXNoKHByb21vKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlbGV0ZVByb21vQnlJZCgpIHtcclxuICAgIHRoaXMucHJvbW8gPSB0aGlzLnByb21vLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gXCJSU1wiKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuQ2hlY2tvdXRCdXR0b24oKSB7XHJcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvc2VDaGVja291dEJ1dHRvbigpIHtcclxuICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG59XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRNb2RlbDtcclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiY2FydFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2NhcnQuY3NzXCI7XHJcbmltcG9ydCBsaXN0QnV5cyBmcm9tIFwiLi9saXN0LWJ1eXNcIjtcclxuXHJcbmltcG9ydCByZW5kZXJIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IHJlbmRlckZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5pbXBvcnQgcmVuZGVyQ2FydEl0ZW0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJ0LWl0ZW1cIjtcclxuXHJcbmltcG9ydCBDYXJ0Q29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVycy9jYXJ0LWNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IENhcnRNb2RlbCBmcm9tIFwiLi9tb2RlbHMvY2FydC1tb2RlbFwiO1xyXG5cclxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IFdpbmRvdyAmIHsgY2FydENvbnRyb2xsZXI6IENhcnRDb250cm9sbGVyOyBjYXJ0TW9kZWw6IENhcnRNb2RlbCB9O1xyXG5cclxud2luZG93LmNhcnRNb2RlbCA9IG5ldyBDYXJ0TW9kZWwoKTtcclxud2luZG93LmNhcnRDb250cm9sbGVyID0gbmV3IENhcnRDb250cm9sbGVyKHJlbmRlciwgd2luZG93LmNhcnRNb2RlbCk7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIHdpbmRvdy5jYXJ0Q29udHJvbGxlci51cGRhdGVWaWV3KCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZW5kZXIoeyBpdGVtcywgdG90YWxQcmljZSwgdG90YWxBbW91bnQsIHBhZ2UsIGxpbWl0SXRlbXMsIHByb21vLCBpc09wZW4gfTogQ2FydE1vZGVsKSB7XHJcbiAgcmV0dXJuIGBcclxuICAke3JlbmRlckhlYWRlcih7IHRvdGFsQW1vdW50LCB0b3RhbFByaWNlIH0pfSBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGUtY2hlY2tvdXRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPkNhcnQ8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja291dC10b3RhbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG90YWxcIj5cclxuICAgICAgICAgICAgICAke1xyXG4gICAgICAgICAgICAgICAgcHJvbW8ubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICAgID8gYDxkaXYgY2xhc3M9XCJ0b3RhbC1wcmljZVwiPlRvdGFsOiAke3RvdGFsUHJpY2V9JDwvZGl2PmBcclxuICAgICAgICAgICAgICAgICAgOiBwcm9tby5sZW5ndGggPT09IDFcclxuICAgICAgICAgICAgICAgICAgPyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIuc2VjdGlvbi1wcm9tb1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsLXByaWNlXCIgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoOyBmb250LXNpemU6IDEuNnJlbVwiPlRvdGFsOiAke3RvdGFsUHJpY2V9JDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG90YWwtcHJpY2VcIj5Ub3RhbDogJHsodG90YWxQcmljZSAqIDAuOSkudG9GaXhlZCgyKX0kPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgICAgICAgOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIuc2VjdGlvbi1wcm9tb1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsLXByaWNlXCIgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoOyBmb250LXNpemU6IDEuNnJlbVwiID5Ub3RhbDogJHt0b3RhbFByaWNlfSQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsLXByaWNlXCI+VG90YWw6ICR7KHRvdGFsUHJpY2UgKiAwLjgpLnRvRml4ZWQoMil9JDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoZWNrb3V0LWJ1dHRvblwiIG9uY2xpY2s9XCJjYXJ0Q29udHJvbGxlci5vcGVuQ2hlY2tvdXQoKVwiPkNoZWNrb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICR7aXNPcGVuID09PSB0cnVlID8gXHJcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cIm1vZGFsXCIgb25jbGljaz1cImNhcnRDb250cm9sbGVyLmNsb3NlQ2hlY2tvdXQoKVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cIm1vZGFsX190aXRsZVwiPlBlcnNvbmFsIGRldGFpbHM8L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RlbF9fY2xvc2VcIiBvbmNsaWNrPVwiY2FydENvbnRyb2xsZXIuY2xvc2VDaGVja291dCgpXCI+WDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJtb2RhbF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZTogSXZhbiBJdmFub3ZcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaXMtaW52YWxpZFwiPiBQbGVhc2UgZW50ZXIgeW91ciBmaXJzdCBhbmQgbGFzdCBuYW1lIC4gRmlyc3QgbGV0dGVycyBzaG91bGQgYmUgYSBjYXBpdGFsIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX3Bob25lIG5vLWFycm93c1wiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibW9kYWxfX2lucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlBob25lOiArMzc1MjkwMDAwXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImlzLWludmFsaWRcIj4gTnVtYmVyIG11c3QgY29udGFpbiBhdCBsZWFzdCA5IGRpZ2l0cyBhbmQgc3RhcnRzIHdpdGggKyA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19hZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJtb2RhbF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGVsaXZlcnkgYWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpcy1pbnZhbGlkXCI+IEFkZHJlc3MgY2Fubm90IGNvbnRhaW4gbGVzcyB0aGFuIDMgd29yZHMuIEV2ZXJ5IHdvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IDUgc3ltYm9scyA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19lbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibW9kYWxfX2lucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkUtbWFpbDogaXZhbm92QGdtYWlsLmNvbVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpcy1pbnZhbGlkXCI+UGxlYXNlIGVudGVyIGNvcnJlY3QgZS1tYWlsPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwibW9kYWxfX2NhcmQtdGl0bGVcIj5DcmVkaXQgY2FyZCBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fY2FyZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19jYXJkLXRvcCBuby1hcnJvd3NcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19jYXJkLWxvZ29cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibW9kYWxfX2NhcmQtbnVtYmVyXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIjAwMDAgMDAwMCAwMDAwIDAwMDBcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fY2FyZC1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fY2FyZC1kYXRhIG5vLWFycm93c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidmFsaWRUaHJ1XCI+VmFsaWQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidmFsaWRUaHJ1XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIjEyIDIzXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fY2FyZC1jdnYgbm8tYXJyb3dzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjdnZcIj5DVlY6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY3Z2XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIjAwMFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpcy1pbnZhbGlkXCI+Q2FyZCBpbnZhbGlkPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19zdWJtaXRcIj5Db25maXJtPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+YCA6IFwiXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAke1xyXG4gICAgICAgICAgaXRlbXMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICA/IGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IGxpc3RCdXlzLmZpbmQoKHByb2QpID0+IHByb2QuaWQgPT09IGl0ZW0ucHJvZHVjdElkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyQ2FydEl0ZW0oe1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBwcm9kdWN0LmltYWdlMSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0OiBwcm9kdWN0LnNvcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmluY2U6IHByb2R1Y3QucHJvdmluY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHByb2R1Y3QucHJpY2UgKiBpdGVtLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGl0ZW0uYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0b2NrOiBwcm9kdWN0LnN0b2NrLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIDogYDxoMiBjbGFzcz1cImVtcHR5XCI+RW1wdHk8L2gyPmBcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tZW5kXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tcHJvbW9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9tb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvbW8tdGV4dFwiPlByb21vIGNvZGU8L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiBvbmNoYW5nZT1cImNhcnRDb250cm9sbGVyLnVwZGF0ZVByb21vKGV2ZW50KVwiIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicHJvbW8tYWN0aXZhdGVcIj5BY3RpdmF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvbW8tdGVzdFwiPlByb21vIGZvciB0ZXN0OiBSUywgRVBNPC9kaXY+XHJcbiAgICAgICAgICAke3Byb21vXHJcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBpZiAoaXRlbSA9PT0gXCJSU1wiIHx8IGl0ZW0gPT09IFwiRVBNXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdj5cclxuICAgICAgICAgICAgICAke2l0ZW0gPT09IFwiUlNcIiA/IGA8c3BhaW4+UlMgLSAxMCU8L3NwYWluPmAgOiBgPHNwYWluPkVQTSAtIDEwJTwvc3BhaW4+YH1cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbmNsaWNrPVwiY2FydENvbnRyb2xsZXIuZGVsZXRlUHJvbW9JdGVtKClcIj5EUk9QPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBgO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5qb2luKFwiXCIpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW1pdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+TGltaXQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjFcIiBtYXg9XCIxMFwiIHN0ZXA9XCIxXCIgdmFsdWU9XCIke2xpbWl0SXRlbXN9XCIgb25pbnB1dD1cImNhcnRDb250cm9sbGVyLnVwZGF0ZUxpbWl0SXRlbXMoZXZlbnQpXCIgY2xhc3M9XCJsaW1pdC1pbnB1dFwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlcy10ZXh0XCI+UGFnZTwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLWxlZnRcIiBvbmNsaWNrPVwiY2FydENvbnRyb2xsZXIub25jbGlja0xlZnQoKVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvc3ZnL2Fycm93LXJpZ2h0LnN2Z1wiIGFsdD1cImFycm93LWxlZnRcIiBjbGFzcz1cInBhZ2VzLWltZy1sZWZ0XCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LXBhZ2VcIj4ke3BhZ2V9PC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24tcmlnaHRcIiBvbmNsaWNrPVwiY2FydENvbnRyb2xsZXIub25jbGlja1JpZ2h0KClcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL3N2Zy9hcnJvdy1yaWdodC5zdmdcIiBhbHQ9XCJhcnJvdy1yaWdodFwiIGNsYXNzPVwicGFnZXMtaW1nLXJpZ2h0XCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICAke3JlbmRlckZvb3RlcigpfVxyXG4gIGA7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9