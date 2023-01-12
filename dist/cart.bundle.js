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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Red_Hat_Text/RedHatText-Light.ttf */ "./src/assets/fonts/Red_Hat_Text/RedHatText-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Red_Hat_Text/RedHatText-Medium.ttf */ "./src/assets/fonts/Red_Hat_Text/RedHatText-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n}\r\n@font-face {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1rem;\r\n  line-height: 140%;\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n@font-face {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 1rem;\r\n  line-height: 140%;\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\nbody {\r\n  background-image: url(\"https://images.unsplash.com/photo-1561296180-e8100fd714e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1234&q=80\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  color: #f9f0da;\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1rem;\r\n  line-height: 140%;\r\n}\r\n.modal-content {\r\n  \r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1rem;\r\n  line-height: 140%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%,-50%);\r\n  width: 100%;\r\n  text-align: center;\r\n  background-color: rgba(72, 104, 18);\r\n  color: #F9F0DA;\r\n  padding: 15px;\r\n  border-radius: 10px;\r\n  z-index: 100;\r\n  max-width: 50%;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.modal {\r\n \r\nposition: fixed;\r\ntop: 0;\r\nleft: 0;\r\nright: 0;\r\nbottom: 0;\r\nwidth: 100vw;\r\nheight: 100vh;\r\nbackground-color: #F9F0DA;\r\n\r\nz-index: 99;\r\ncursor: pointer;\r\n\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n.modal__submit {\r\n  background-color: #093b0a;\r\n  color: #F9F0DA;\r\n  width: 150px;\r\n  height: 70px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  font-size: 1.5rem;\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  margin-top: 10px;\r\n}\r\n.modal__submit:hover {\r\n  background-color: rgb(174, 231, 17);\r\n  color: #093b0a;\r\n}\r\n.model__close {\r\n  position:absolute;\r\n  top: 3%;\r\n  left: 95%;\r\n \r\n}\r\ninput[type=\"tel\"]:nth-child(3), input[type=\"tel\"]:nth-child(4) {\r\n  width: 100px;\r\n}\r\ninput[type=\"tel\"]:valid, .email:valid {\r\n  background-color: #F9F0DA;\r\n}\r\ninput[type=\"tel\"]:invalid, .email:invalid {\r\n  \r\n  background-color: rgb(174, 231, 17);\r\n  \r\n  }\r\n  input[type=\"text\"]:valid, .email:valid {\r\n    background-color: #F9F0DA;\r\n    }\r\n    input[type=\"text\"]:invalid, .email:invalid {\r\n      background-color: rgb(174, 231, 17);\r\n      }\r\n.section-content {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  box-sizing: border-box;\r\n  \r\n}\r\ninput, input::placeholder {\r\n  width: 200px;\r\n  height: 30px;\r\n  text-align: center;\r\n  margin: 5px;\r\n  border-radius: 5px;\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  color: rgba(72, 104, 18);\r\n  font-size: 1rem;\r\n}\r\n.modal__card-block {\r\n  width: 400px;\r\n  height: 150px;\r\n  background-color: #ee9105;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  margin: auto;\r\n}\r\n.section-wrapper {\r\n  border-radius: 10px;\r\n  background-color: rgba(135, 130, 120, 0.657);\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin: 4vw 0;\r\n  border-radius: 10px;\r\n}\r\n\r\n.title-checkout {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: space-between;\r\n  margin: 10px 30px;\r\n}\r\n\r\n.title {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 2.5rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.checkout-total {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  border-radius: 10px;\r\n  background-color: rgba(199, 191, 182, 0.5);\r\n  padding: 15px 25px;\r\n  gap: 20px;\r\n}\r\n\r\n.total {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.8rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.total-price {\r\n  font-size: 2rem;\r\n}\r\n\r\n.checkout-button {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.8rem;\r\n  line-height: 140%;\r\n  color: aliceblue;\r\n  background-color: #093b0a;\r\n  border: solid 1px rgba(72, 104, 18, 0.72);\r\n  border-radius: 10px;\r\n}\r\n\r\n.checkout-button:hover {\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n  border: solid 1px #093b0a;\r\n}\r\n\r\n.section-end {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 20px 30px;\r\n  border-top: solid 1px #eee380;\r\n}\r\n\r\n.section-promo {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.promo {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 5px;\r\n}\r\n\r\n.promo-text {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.promo-activate {\r\n  box-sizing: border-box;\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n  padding: 3px 8px;\r\n  font-size: 1.1rem;\r\n  border-radius: 5px;\r\n  border: solid 1px #093b0a;\r\n  color: #f9f0da;\r\n  text-align: center;\r\n}\r\n\r\n.promo-activate:hover {\r\n  background-color: #093b0a;\r\n}\r\n\r\n.promo-test {\r\n  text-align: center;\r\n  font-size: 0.9rem;\r\n  padding-left: 15px;\r\n}\r\n\r\n.pages {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.limit {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-right: 10px;\r\n  gap: 5px;\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.3rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.limit-input {\r\n  text-align: center;\r\n  width: 40px;\r\n  height: 20px;\r\n}\r\n\r\n.pages-text {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.3rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.button-left {\r\n  border: 0;\r\n  background-color: rgba(135, 130, 120, 0.2);\r\n  padding: 0;\r\n}\r\n\r\n.button-left:hover {\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n}\r\n\r\n.pages-img-left {\r\n  transform: scaleX(-1);\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.button-right {\r\n  border: 0;\r\n  background-color: rgba(135, 130, 120, 0.2);\r\n  padding: 0;\r\n}\r\n\r\n.button-right:hover {\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n}\r\n\r\n.pages-img-right {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.cart-page {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.4rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.empty {\r\n  text-align: center;\r\n  border-top: solid 1px #eee380;\r\n  padding: 80px 0;\r\n  margin: 0;\r\n}\r\n\r\n@media screen and (min-width: 640px) and (max-width: 800px) {\r\n  .section-content {\r\n    width: 100%;\r\n  }\r\n\r\n  .checkout-total {\r\n    padding: 10px 15px;\r\n    gap: 5px;\r\n  }\r\n\r\n  .total-price {\r\n    font-size: 1.5rem;\r\n  }\r\n  .checkout-button {\r\n    font-size: 1.5rem;\r\n    height: 34px;\r\n  }\r\n\r\n  .section-end {\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .promo {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 320px) and (max-width: 639px) {\r\n  .section-content {\r\n    width: 100%;\r\n  }\r\n  .section-wrapper {\r\n    width: 90%;\r\n  }\r\n\r\n  .title-checkout {\r\n    margin: 10px 10px;\r\n  }\r\n\r\n  .checkout-total {\r\n    padding: 10px 5px;\r\n    gap: 5px;\r\n  }\r\n\r\n  .title {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .total-price {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .checkout-button {\r\n    font-size: 1.5rem;\r\n    height: 34px;\r\n  }\r\n\r\n  .section-end {\r\n    align-items: flex-start;\r\n    padding: 20px 10px;\r\n  }\r\n\r\n  .promo {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/cart.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n}\r\n@font-face {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1rem;\r\n  line-height: 140%;\r\n  src: url(\"./assets/fonts/Red_Hat_Text/RedHatText-Light.ttf\");\r\n}\r\n@font-face {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 1rem;\r\n  line-height: 140%;\r\n  src: url(\"./assets/fonts/Red_Hat_Text/RedHatText-Medium.ttf\");\r\n}\r\nbody {\r\n  background-image: url(\"https://images.unsplash.com/photo-1561296180-e8100fd714e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1234&q=80\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  color: #f9f0da;\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1rem;\r\n  line-height: 140%;\r\n}\r\n.modal-content {\r\n  \r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1rem;\r\n  line-height: 140%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%,-50%);\r\n  width: 100%;\r\n  text-align: center;\r\n  background-color: rgba(72, 104, 18);\r\n  color: #F9F0DA;\r\n  padding: 15px;\r\n  border-radius: 10px;\r\n  z-index: 100;\r\n  max-width: 50%;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.modal {\r\n \r\nposition: fixed;\r\ntop: 0;\r\nleft: 0;\r\nright: 0;\r\nbottom: 0;\r\nwidth: 100vw;\r\nheight: 100vh;\r\nbackground-color: #F9F0DA;\r\n\r\nz-index: 99;\r\ncursor: pointer;\r\n\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n.modal__submit {\r\n  background-color: #093b0a;\r\n  color: #F9F0DA;\r\n  width: 150px;\r\n  height: 70px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  font-size: 1.5rem;\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  margin-top: 10px;\r\n}\r\n.modal__submit:hover {\r\n  background-color: rgb(174, 231, 17);\r\n  color: #093b0a;\r\n}\r\n.model__close {\r\n  position:absolute;\r\n  top: 3%;\r\n  left: 95%;\r\n \r\n}\r\ninput[type=\"tel\"]:nth-child(3), input[type=\"tel\"]:nth-child(4) {\r\n  width: 100px;\r\n}\r\ninput[type=\"tel\"]:valid, .email:valid {\r\n  background-color: #F9F0DA;\r\n}\r\ninput[type=\"tel\"]:invalid, .email:invalid {\r\n  \r\n  background-color: rgb(174, 231, 17);\r\n  \r\n  }\r\n  input[type=\"text\"]:valid, .email:valid {\r\n    background-color: #F9F0DA;\r\n    }\r\n    input[type=\"text\"]:invalid, .email:invalid {\r\n      background-color: rgb(174, 231, 17);\r\n      }\r\n.section-content {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  box-sizing: border-box;\r\n  \r\n}\r\ninput, input::placeholder {\r\n  width: 200px;\r\n  height: 30px;\r\n  text-align: center;\r\n  margin: 5px;\r\n  border-radius: 5px;\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  color: rgba(72, 104, 18);\r\n  font-size: 1rem;\r\n}\r\n.modal__card-block {\r\n  width: 400px;\r\n  height: 150px;\r\n  background-color: #ee9105;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  margin: auto;\r\n}\r\n.section-wrapper {\r\n  border-radius: 10px;\r\n  background-color: rgba(135, 130, 120, 0.657);\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin: 4vw 0;\r\n  border-radius: 10px;\r\n}\r\n\r\n.title-checkout {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: space-between;\r\n  margin: 10px 30px;\r\n}\r\n\r\n.title {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 2.5rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.checkout-total {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  border-radius: 10px;\r\n  background-color: rgba(199, 191, 182, 0.5);\r\n  padding: 15px 25px;\r\n  gap: 20px;\r\n}\r\n\r\n.total {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.8rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.total-price {\r\n  font-size: 2rem;\r\n}\r\n\r\n.checkout-button {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.8rem;\r\n  line-height: 140%;\r\n  color: aliceblue;\r\n  background-color: #093b0a;\r\n  border: solid 1px rgba(72, 104, 18, 0.72);\r\n  border-radius: 10px;\r\n}\r\n\r\n.checkout-button:hover {\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n  border: solid 1px #093b0a;\r\n}\r\n\r\n.section-end {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 20px 30px;\r\n  border-top: solid 1px #eee380;\r\n}\r\n\r\n.section-promo {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.promo {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 5px;\r\n}\r\n\r\n.promo-text {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.promo-activate {\r\n  box-sizing: border-box;\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n  padding: 3px 8px;\r\n  font-size: 1.1rem;\r\n  border-radius: 5px;\r\n  border: solid 1px #093b0a;\r\n  color: #f9f0da;\r\n  text-align: center;\r\n}\r\n\r\n.promo-activate:hover {\r\n  background-color: #093b0a;\r\n}\r\n\r\n.promo-test {\r\n  text-align: center;\r\n  font-size: 0.9rem;\r\n  padding-left: 15px;\r\n}\r\n\r\n.pages {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.limit {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-right: 10px;\r\n  gap: 5px;\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.3rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.limit-input {\r\n  text-align: center;\r\n  width: 40px;\r\n  height: 20px;\r\n}\r\n\r\n.pages-text {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.3rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.button-left {\r\n  border: 0;\r\n  background-color: rgba(135, 130, 120, 0.2);\r\n  padding: 0;\r\n}\r\n\r\n.button-left:hover {\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n}\r\n\r\n.pages-img-left {\r\n  transform: scaleX(-1);\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.button-right {\r\n  border: 0;\r\n  background-color: rgba(135, 130, 120, 0.2);\r\n  padding: 0;\r\n}\r\n\r\n.button-right:hover {\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n}\r\n\r\n.pages-img-right {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.cart-page {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 1.4rem;\r\n  line-height: 140%;\r\n}\r\n\r\n.empty {\r\n  text-align: center;\r\n  border-top: solid 1px #eee380;\r\n  padding: 80px 0;\r\n  margin: 0;\r\n}\r\n\r\n@media screen and (min-width: 640px) and (max-width: 800px) {\r\n  .section-content {\r\n    width: 100%;\r\n  }\r\n\r\n  .checkout-total {\r\n    padding: 10px 15px;\r\n    gap: 5px;\r\n  }\r\n\r\n  .total-price {\r\n    font-size: 1.5rem;\r\n  }\r\n  .checkout-button {\r\n    font-size: 1.5rem;\r\n    height: 34px;\r\n  }\r\n\r\n  .section-end {\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .promo {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 320px) and (max-width: 639px) {\r\n  .section-content {\r\n    width: 100%;\r\n  }\r\n  .section-wrapper {\r\n    width: 90%;\r\n  }\r\n\r\n  .title-checkout {\r\n    margin: 10px 10px;\r\n  }\r\n\r\n  .checkout-total {\r\n    padding: 10px 5px;\r\n    gap: 5px;\r\n  }\r\n\r\n  .title {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .total-price {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .checkout-button {\r\n    font-size: 1.5rem;\r\n    height: 34px;\r\n  }\r\n\r\n  .section-end {\r\n    align-items: flex-start;\r\n    padding: 20px 10px;\r\n  }\r\n\r\n  .promo {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".header {\r\n  height: 100px;\r\n  width: 100vw;\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n}\r\n.header__nav {\r\n  width: 90%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  margin: auto;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.header__nav-link a {\r\n  text-decoration: none;\r\n  color: #f9f0da;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n.header__tea-time-logo {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n.header__tea-time-logo-h1 {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 2rem;\r\n  line-height: 140%;\r\n\r\n  margin-top: 40px;\r\n}\r\n\r\n.header__form {\r\n  position: relative;\r\n  width: 500px;\r\n  margin: 0 auto;\r\n}\r\n.header__search-input {\r\n  width: 100%;\r\n  height: 62px;\r\n  padding-left: 10px;\r\n  border: 2px solid #093b0a;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  font-size: 1.5rem;\r\n  /* background: #F9F0DA; */\r\n  background: #F9F0DA;\r\n  color: #9E9C9C;\r\n  padding: 0;\r\n}\r\n.header__submit-button {\r\n  position: absolute; \r\n  top: 0;\r\n  right: 0px;\r\n  width: 66px;\r\n  height: 62px;\r\n  border: 2px solid #093b0a;\r\n  background: #093b0a;\r\n  border-radius: 0 5px 5px 0;\r\n  cursor: pointer;\r\n  \r\n}\r\n.header__search-icon {\r\n  width: 54px;\r\n  height: 54px;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n.header__cart {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  z-index: 1;\r\n}\r\n.header__amount-buys {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 30px;\r\n  background-color: #093b0a;\r\n  text-align: center;\r\n  padding-top: 8px;\r\n  margin-left: -20px;\r\n  margin-top: -30px;\r\n  z-index: 2;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/components/header.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,YAAY;EACZ,yCAAyC;AAC3C;AACA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;EACZ,yDAAkD;AACpD;;AAEA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;;EAEjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,cAAc;AAChB;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,iBAAiB;EACjB,yBAAyB;EACzB,mBAAmB;EACnB,cAAc;EACd,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,UAAU;EACV,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;EACnB,0BAA0B;EAC1B,eAAe;;AAEjB;AACA;EACE,WAAW;EACX,YAAY;EACZ,yDAAsD;AACxD;AACA;EACE,WAAW;EACX,YAAY;EACZ,yDAAsD;EACtD,UAAU;AACZ;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,UAAU;AACZ","sourcesContent":[".header {\r\n  height: 100px;\r\n  width: 100vw;\r\n  background-color: rgba(72, 104, 18, 0.72);\r\n}\r\n.header__nav {\r\n  width: 90%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  margin: auto;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.header__nav-link a {\r\n  text-decoration: none;\r\n  color: #f9f0da;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n.header__tea-time-logo {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-image: url(\"../assets/svg/tea-cup.svg\");\r\n}\r\n\r\n.header__tea-time-logo-h1 {\r\n  font-family: \"Red-Hat-Text\";\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 2rem;\r\n  line-height: 140%;\r\n\r\n  margin-top: 40px;\r\n}\r\n\r\n.header__form {\r\n  position: relative;\r\n  width: 500px;\r\n  margin: 0 auto;\r\n}\r\n.header__search-input {\r\n  width: 100%;\r\n  height: 62px;\r\n  padding-left: 10px;\r\n  border: 2px solid #093b0a;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  font-size: 1.5rem;\r\n  /* background: #F9F0DA; */\r\n  background: #F9F0DA;\r\n  color: #9E9C9C;\r\n  padding: 0;\r\n}\r\n.header__submit-button {\r\n  position: absolute; \r\n  top: 0;\r\n  right: 0px;\r\n  width: 66px;\r\n  height: 62px;\r\n  border: 2px solid #093b0a;\r\n  background: #093b0a;\r\n  border-radius: 0 5px 5px 0;\r\n  cursor: pointer;\r\n  \r\n}\r\n.header__search-icon {\r\n  width: 54px;\r\n  height: 54px;\r\n  background-image: url(\"../assets/svg/arrow-right.svg\");\r\n}\r\n.header__cart {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-image: url(\"../assets/svg/cart-header.svg\");\r\n  z-index: 1;\r\n}\r\n.header__amount-buys {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 30px;\r\n  background-color: #093b0a;\r\n  text-align: center;\r\n  padding-top: 8px;\r\n  margin-left: -20px;\r\n  margin-top: -30px;\r\n  z-index: 2;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/fonts/Red_Hat_Text/RedHatText-Light.ttf":
/*!************************************************************!*\
  !*** ./src/assets/fonts/Red_Hat_Text/RedHatText-Light.ttf ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbf57488ae901c5902c0.ttf";

/***/ }),

/***/ "./src/assets/fonts/Red_Hat_Text/RedHatText-Medium.ttf":
/*!*************************************************************!*\
  !*** ./src/assets/fonts/Red_Hat_Text/RedHatText-Medium.ttf ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "360898be6c76dc97adb2.ttf";

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
        "<div class=\"modal\" onclick=\"cartController.closeCheckout()\"></div>\n            <div class=\"modal-content\">\n            <p class=\"modal__title\">Personal Data</p>\n            <form action=\"#\">\n              <div class=\"modal__name\">\n                <input class=\"modal__input\" type=\"text\" placeholder=\"Name: Ivan Ivanov\" type=\u201Dpassword\u201D>\n                <p class=\"modal__comment\"> Please enter your first and last name</p>\n              </div>\n              <div class=\"modal__phone no-arrows\">\n                <input class=\"modal__input tel\" type=\"tel\" pattern=\"[6789][0-9]{10}\" required  placeholder=\"Phone: 79211234567\" />\n                <p class=\"modal__comment\"> Please enter your phone number </p>\n              </div>\n              <div class=\"modal__address\">\n                <input class=\"modal__input\" type=\"text\" placeholder=\"Delivery address\">\n                <p class=\"modal__comment\"> Please enter your address</p>\n              </div>\n              <div class=\"modal__email\">\n                <input class=\"modal__input email\" type=\"email\" placeholder=\"E-mail: ivanov@gmail.com\" required/>\n                <p class=\"modal__comment\">Please enter your e-mail</p>\n              </div>\n              <p class=\"modal__card-title\">Credit card Data</p>\n              <div class=\"modal__card-block\">\n                <div class=\"modal__card-top no-arrows\">\n                <div class=\"modal__card-logo\"></div>\n                  <input class=\"modal__card-number\" type=\"tel\" pattern=\"[0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}\" maxLength = \"19\" required placeholder=\"0000 0000 0000 0000\"/>\n                </div>\n              <div class=\"modal__card-bottom\">\n                <div class=\"modal__card-data no-arrows\">\n                  <label for=\"validThru\">Valid thru:</label>\n                  <input id=\"validThru\" type=\"tel\" pattern=\"[0-9]{2}[/][0-9]{2}\" maxLength = \"5\" required placeholder=\"12/23\">\n                </div>\n                <div class=\"modal__card-cvv no-arrows\">\n                  <label for=\"cvv\">CVV:</label>\n                  <input id=\"cvv\" type=\"tel\" pattern=\"[0-9]{3}\" maxLength = \"3\" required placeholder=\"000\">\n                </div>\n              </div>\n            </div>\n            <button class=\"modal__submit\" type='submit'>Submit</button>\n          </form>\n        \n        </div>" : "", "\n        </div>\n        </div>\n        ").concat(items.length > 0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxhQUFhLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxP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SixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NhcnQuY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2NhcnQtaXRlbS5jc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmNzcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY2FydC5jc3M/MWZiZiIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9jYXJ0LWl0ZW0uY3NzPzZkOTUiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmNzcz83YzRmIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5jc3M/ZWFmYiIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2NhcnQtaXRlbS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb250cm9sbGVycy9jYXJ0LWNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2xpc3QtYnV5cy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvbW9kZWxzL2NhcnQtbW9kZWwudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY2FydC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvUmVkX0hhdF9UZXh0L1JlZEhhdFRleHQtTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvUmVkX0hhdF9UZXh0L1JlZEhhdFRleHQtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQtSGF0LVRleHRcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTQwJTtcXHJcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTYxMjk2MTgwLWU4MTAwZmQ3MTRlMj9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTIzNCZxPTgwXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGNvbG9yOiAjZjlmMGRhO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQtSGF0LVRleHRcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcbn1cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICBcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTQwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MiwgMTA0LCAxOCk7XFxyXFxuICBjb2xvcjogI0Y5RjBEQTtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgbWF4LXdpZHRoOiA1MCU7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gXFxyXFxucG9zaXRpb246IGZpeGVkO1xcclxcbnRvcDogMDtcXHJcXG5sZWZ0OiAwO1xcclxcbnJpZ2h0OiAwO1xcclxcbmJvdHRvbTogMDtcXHJcXG53aWR0aDogMTAwdnc7XFxyXFxuaGVpZ2h0OiAxMDB2aDtcXHJcXG5iYWNrZ3JvdW5kLWNvbG9yOiAjRjlGMERBO1xcclxcblxcclxcbnotaW5kZXg6IDk5O1xcclxcbmN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4ubW9kYWxfX3N1Ym1pdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkzYjBhO1xcclxcbiAgY29sb3I6ICNGOUYwREE7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG4ubW9kYWxfX3N1Ym1pdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc0LCAyMzEsIDE3KTtcXHJcXG4gIGNvbG9yOiAjMDkzYjBhO1xcclxcbn1cXHJcXG4ubW9kZWxfX2Nsb3NlIHtcXHJcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgdG9wOiAzJTtcXHJcXG4gIGxlZnQ6IDk1JTtcXHJcXG4gXFxyXFxufVxcclxcbmlucHV0W3R5cGU9XFxcInRlbFxcXCJdOm50aC1jaGlsZCgzKSwgaW5wdXRbdHlwZT1cXFwidGVsXFxcIl06bnRoLWNoaWxkKDQpIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwidGVsXFxcIl06dmFsaWQsIC5lbWFpbDp2YWxpZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGMERBO1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZWxcXFwiXTppbnZhbGlkLCAuZW1haWw6aW52YWxpZCB7XFxyXFxuICBcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzQsIDIzMSwgMTcpO1xcclxcbiAgXFxyXFxuICB9XFxyXFxuICBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06dmFsaWQsIC5lbWFpbDp2YWxpZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUYwREE7XFxyXFxuICAgIH1cXHJcXG4gICAgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmludmFsaWQsIC5lbWFpbDppbnZhbGlkIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc0LCAyMzEsIDE3KTtcXHJcXG4gICAgICB9XFxyXFxuLnNlY3Rpb24tY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgXFxyXFxufVxcclxcbmlucHV0LCBpbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZC1IYXQtVGV4dFxcXCI7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgY29sb3I6IHJnYmEoNzIsIDEwNCwgMTgpO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG4ubW9kYWxfX2NhcmQtYmxvY2sge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTkxMDU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuLnNlY3Rpb24td3JhcHBlciB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzUsIDEzMCwgMTIwLCAwLjY1Nyk7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogNHZ3IDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtY2hlY2tvdXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMTBweCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQtSGF0LVRleHRcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja291dC10b3RhbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk5LCAxOTEsIDE4MiwgMC41KTtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMjVweDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvdGFsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQtSGF0LVRleHRcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxyXFxufVxcclxcblxcclxcbi50b3RhbC1wcmljZSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jaGVja291dC1idXR0b24ge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQtSGF0LVRleHRcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxyXFxuICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5M2IwYTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoNzIsIDEwNCwgMTgsIDAuNzIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrb3V0LWJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcyLCAxMDQsIDE4LCAwLjcyKTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICMwOTNiMGE7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWVuZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxyXFxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2VlZTM4MDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tcHJvbW8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5wcm9tbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvbW8tdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb21vLWFjdGl2YXRlIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcyLCAxMDQsIDE4LCAwLjcyKTtcXHJcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICMwOTNiMGE7XFxyXFxuICBjb2xvcjogI2Y5ZjBkYTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb21vLWFjdGl2YXRlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTNiMGE7XFxyXFxufVxcclxcblxcclxcbi5wcm9tby10ZXN0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5saW1pdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQtSGF0LVRleHRcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxyXFxufVxcclxcblxcclxcbi5saW1pdC1pbnB1dCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2VzLXRleHQge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQtSGF0LVRleHRcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tbGVmdCB7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNSwgMTMwLCAxMjAsIDAuMik7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWxlZnQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MiwgMTA0LCAxOCwgMC43Mik7XFxyXFxufVxcclxcblxcclxcbi5wYWdlcy1pbWctbGVmdCB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1yaWdodCB7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNSwgMTMwLCAxMjAsIDAuMik7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLXJpZ2h0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzIsIDEwNCwgMTgsIDAuNzIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZXMtaW1nLXJpZ2h0IHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1wYWdlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZW1wdHkge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNlZWUzODA7XFxyXFxuICBwYWRkaW5nOiA4MHB4IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gIC5zZWN0aW9uLWNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jaGVja291dC10b3RhbCB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG90YWwtcHJpY2Uge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIC5jaGVja291dC1idXR0b24ge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlY3Rpb24tZW5kIHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJvbW8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XFxyXFxuICAuc2VjdGlvbi1jb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAuc2VjdGlvbi13cmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aXRsZS1jaGVja291dCB7XFxyXFxuICAgIG1hcmdpbjogMTBweCAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNoZWNrb3V0LXRvdGFsIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvdGFsLXByaWNlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2hlY2tvdXQtYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGhlaWdodDogMzRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWN0aW9uLWVuZCB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJvbW8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY2FydC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNENBQTREO0FBQzlEO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDRDQUE2RDtBQUMvRDtBQUNBO0VBQ0Usb0xBQW9MO0VBQ3BMLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFNBQVM7RUFDVCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7O0VBRUUsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNS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SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQtSGF0LVRleHRcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2ZvbnRzL1JlZF9IYXRfVGV4dC9SZWRIYXRUZXh0LUxpZ2h0LnR0ZlxcXCIpO1xcclxcbn1cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTQwJTtcXHJcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9SZWRfSGF0X1RleHQvUmVkSGF0VGV4dC1NZWRpdW0udHRmXFxcIik7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU2MTI5NjE4MC1lODEwMGZkNzE0ZTI/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEyMzQmcT04MFxcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBjb2xvcjogI2Y5ZjBkYTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTQwJTtcXHJcXG59XFxyXFxuLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgXFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZC1IYXQtVGV4dFxcXCI7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzIsIDEwNCwgMTgpO1xcclxcbiAgY29sb3I6ICNGOUYwREE7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIG1heC13aWR0aDogNTAlO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuIFxcclxcbnBvc2l0aW9uOiBmaXhlZDtcXHJcXG50b3A6IDA7XFxyXFxubGVmdDogMDtcXHJcXG5yaWdodDogMDtcXHJcXG5ib3R0b206IDA7XFxyXFxud2lkdGg6IDEwMHZ3O1xcclxcbmhlaWdodDogMTAwdmg7XFxyXFxuYmFja2dyb3VuZC1jb2xvcjogI0Y5RjBEQTtcXHJcXG5cXHJcXG56LWluZGV4OiA5OTtcXHJcXG5jdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxufVxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLm1vZGFsX19zdWJtaXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5M2IwYTtcXHJcXG4gIGNvbG9yOiAjRjlGMERBO1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZC1IYXQtVGV4dFxcXCI7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuLm1vZGFsX19zdWJtaXQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NCwgMjMxLCAxNyk7XFxyXFxuICBjb2xvcjogIzA5M2IwYTtcXHJcXG59XFxyXFxuLm1vZGVsX19jbG9zZSB7XFxyXFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gIHRvcDogMyU7XFxyXFxuICBsZWZ0OiA5NSU7XFxyXFxuIFxcclxcbn1cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZWxcXFwiXTpudGgtY2hpbGQoMyksIGlucHV0W3R5cGU9XFxcInRlbFxcXCJdOm50aC1jaGlsZCg0KSB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcbmlucHV0W3R5cGU9XFxcInRlbFxcXCJdOnZhbGlkLCAuZW1haWw6dmFsaWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjBEQTtcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwidGVsXFxcIl06aW52YWxpZCwgLmVtYWlsOmludmFsaWQge1xcclxcbiAgXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc0LCAyMzEsIDE3KTtcXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOnZhbGlkLCAuZW1haWw6dmFsaWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGMERBO1xcclxcbiAgICB9XFxyXFxuICAgIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTppbnZhbGlkLCAuZW1haWw6aW52YWxpZCB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NCwgMjMxLCAxNyk7XFxyXFxuICAgICAgfVxcclxcbi5zZWN0aW9uLWNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIFxcclxcbn1cXHJcXG5pbnB1dCwgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQtSGF0LVRleHRcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGNvbG9yOiByZ2JhKDcyLCAxMDQsIDE4KTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuLm1vZGFsX19jYXJkLWJsb2NrIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogMTUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU5MTA1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcbi5zZWN0aW9uLXdyYXBwZXIge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM1LCAxMzAsIDEyMCwgMC42NTcpO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDR2dyAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWNoZWNrb3V0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW46IDEwcHggMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tvdXQtdG90YWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5OSwgMTkxLCAxODIsIDAuNSk7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDI1cHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50b3RhbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG90YWwtcHJpY2Uge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tvdXQtYnV0dG9uIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTNiMGE7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDcyLCAxMDQsIDE4LCAwLjcyKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jaGVja291dC1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MiwgMTA0LCAxOCwgMC43Mik7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjMDkzYjBhO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1lbmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNlZWUzODA7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLXByb21vIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvbW8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb21vLXRleHQge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9tby1hY3RpdmF0ZSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MiwgMTA0LCAxOCwgMC43Mik7XFxyXFxuICBwYWRkaW5nOiAzcHggOHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjMDkzYjBhO1xcclxcbiAgY29sb3I6ICNmOWYwZGE7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9tby1hY3RpdmF0ZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkzYjBhO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvbW8tdGVzdCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4ubGltaXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGltaXQtaW5wdXQge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlcy10ZXh0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWxlZnQge1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzUsIDEzMCwgMTIwLCAwLjIpO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1sZWZ0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzIsIDEwNCwgMTgsIDAuNzIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZXMtaW1nLWxlZnQge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tcmlnaHQge1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzUsIDEzMCwgMTIwLCAwLjIpO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1yaWdodDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcyLCAxMDQsIDE4LCAwLjcyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2VzLWltZy1yaWdodCB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtcGFnZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZC1IYXQtVGV4dFxcXCI7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmVtcHR5IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZWVlMzgwO1xcclxcbiAgcGFkZGluZzogODBweCAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAuc2VjdGlvbi1jb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2hlY2tvdXQtdG90YWwge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvdGFsLXByaWNlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxuICAuY2hlY2tvdXQtYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGhlaWdodDogMzRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWN0aW9uLWVuZCB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByb21vIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xcclxcbiAgLnNlY3Rpb24tY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLnNlY3Rpb24td3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGl0bGUtY2hlY2tvdXQge1xcclxcbiAgICBtYXJnaW46IDEwcHggMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jaGVja291dC10b3RhbCB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b3RhbC1wcmljZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNoZWNrb3V0LWJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBoZWlnaHQ6IDM0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VjdGlvbi1lbmQge1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByb21vIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhcnQtaXRlbV9fZGVzY3JpcHRpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2VlZTM4MDtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtaXRlbV9faW1nLW1haW4ge1xcclxcbiAgd2lkdGg6IDE1dnc7XFxyXFxuICBoZWlnaHQ6IDEydnc7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWl0ZW1fX3NvcnQge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQtSGF0LVRleHRcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWl0ZW1fX2NvdW50cnkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQtSGF0LVRleHRcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtaXRlbV9fYW1vdW50LXN0b2NrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWl0ZW1fX2Ftb3VudC1mb3JtIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtaXRlbV9fYW1vdW50LWlucHV0IHtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDVweCA1cHggMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtaXRlbV9fc3RhdGljLXZhbHVlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDUwcHg7XFxyXFxuICBjb2xvcjogIzQ0NDtcXHJcXG4gIHRvcDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pdGVtX19zdG9jayB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtaXRlbV9fdGV4dC1wcmljZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZC1IYXQtVGV4dFxcXCI7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtaXRlbV9fcHJpY2Uge1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzIsIDEwNCwgMTgsIDAuNzIpO1xcclxcbiAgcGFkZGluZzogNnB4IDEycHg7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjMDkzYjBhO1xcclxcbiAgY29sb3I6ICNmOWYwZGE7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWl0ZW1fX2RlbGV0ZS1idXR0b24ge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM1LCAxMzAsIDEyMCwgMC4yKTtcXHJcXG4gIGNvbG9yOiAjZmNmMWQ2O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pdGVtX19kZWxldGUtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWl0ZW1fX3NlY3Rpb24tcHJpY2UtcmVzcCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAuY2FydC1pdGVtX19zZWN0aW9uLXByaWNlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0LWl0ZW1fX3NlY3Rpb24tcHJpY2UtcmVzcCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FydC1pdGVtX19pbWctbWFpbiB7XFxyXFxuICAgIHdpZHRoOiAxNXZ3O1xcclxcbiAgICBoZWlnaHQ6IDEydnc7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcXHJcXG4gIC5jYXJ0LWl0ZW1fX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcnQtaXRlbV9fY291bnRyeSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcnQtaXRlbV9fYW1vdW50LXN0b2NrIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcnQtaXRlbV9fc3RvY2sge1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcnQtaXRlbV9fYW1vdW50LWlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FydC1pdGVtX19wcmljZSB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0LWl0ZW1fX3NlY3Rpb24tcHJpY2UtcmVzcCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FydC1pdGVtX19zZWN0aW9uLXByaWNlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0LWl0ZW1fX2ltZy1tYWluIHtcXHJcXG4gICAgd2lkdGg6IDIwdnc7XFxyXFxuICAgIGhlaWdodDogMTh2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0LWl0ZW1fX2RlbGV0ZS1idXR0b24ge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2NhcnQtaXRlbS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qiw2QkFBNkI7O0VBRTdCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsUUFBUTtBQUNWOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIseUNBQXlDO0VBQ3pDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZiwwQ0FBMEM7RUFDMUMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixNQUFNO0VBQ1I7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2FydC1pdGVtX19kZXNjcmlwdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZWVlMzgwO1xcclxcblxcclxcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pdGVtX19pbWctbWFpbiB7XFxyXFxuICB3aWR0aDogMTV2dztcXHJcXG4gIGhlaWdodDogMTJ2dztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtaXRlbV9fc29ydCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZC1IYXQtVGV4dFxcXCI7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtaXRlbV9fY291bnRyeSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZC1IYXQtVGV4dFxcXCI7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pdGVtX19hbW91bnQtc3RvY2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBnYXA6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtaXRlbV9fYW1vdW50LWZvcm0ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pdGVtX19hbW91bnQtaW5wdXQge1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHggNXB4IDVweCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pdGVtX19zdGF0aWMtdmFsdWUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogNTBweDtcXHJcXG4gIGNvbG9yOiAjNDQ0O1xcclxcbiAgdG9wOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWl0ZW1fX3N0b2NrIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pdGVtX190ZXh0LXByaWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkLUhhdC1UZXh0XFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pdGVtX19wcmljZSB7XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MiwgMTA0LCAxOCwgMC43Mik7XFxyXFxuICBwYWRkaW5nOiA2cHggMTJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICMwOTNiMGE7XFxyXFxuICBjb2xvcjogI2Y5ZjBkYTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtaXRlbV9fZGVsZXRlLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzUsIDEzMCwgMTIwLCAwLjIpO1xcclxcbiAgY29sb3I6ICNmY2YxZDY7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWl0ZW1fX2RlbGV0ZS1idXR0b246aG92ZXIge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtaXRlbV9fc2VjdGlvbi1wcmljZS1yZXNwIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gIC5jYXJ0LWl0ZW1fX3NlY3Rpb24tcHJpY2Uge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcnQtaXRlbV9fc2VjdGlvbi1wcmljZS1yZXNwIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0LWl0ZW1fX2ltZy1tYWluIHtcXHJcXG4gICAgd2lkdGg6IDE1dnc7XFxyXFxuICAgIGhlaWdodDogMTJ2dztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xcclxcbiAgLmNhcnQtaXRlbV9fZGVzY3JpcHRpb24ge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FydC1pdGVtX19jb3VudHJ5IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FydC1pdGVtX19hbW91bnQtc3RvY2sge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FydC1pdGVtX19zdG9jayB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FydC1pdGVtX19hbW91bnQtaW5wdXQge1xcclxcbiAgICB3aWR0aDogNjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0LWl0ZW1fX3ByaWNlIHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcnQtaXRlbV9fc2VjdGlvbi1wcmljZS1yZXNwIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0LWl0ZW1fX3NlY3Rpb24tcHJpY2Uge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcnQtaXRlbV9faW1nLW1haW4ge1xcclxcbiAgICB3aWR0aDogMjB2dztcXHJcXG4gICAgaGVpZ2h0OiAxOHZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcnQtaXRlbV9fZGVsZXRlLWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzIsIDEwNCwgMTgsIDAuNzIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX19jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9fbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfX2l0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX19saW5rIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZm9vdGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MiwgMTA0LCAxOCwgMC43Mik7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfX2NvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX19saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9faXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfX2xpbmsge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9zdmcvdGVhLWN1cC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvc3ZnL2Fycm93LXJpZ2h0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9zdmcvY2FydC1oZWFkZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGVhZGVyIHtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcyLCAxMDQsIDE4LCAwLjcyKTtcXHJcXG59XFxyXFxuLmhlYWRlcl9fbmF2IHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uaGVhZGVyX19uYXYtbGluayBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZjlmMGRhO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uaGVhZGVyX190ZWEtdGltZS1sb2dvIHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fdGVhLXRpbWUtbG9nby1oMSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZC1IYXQtVGV4dFxcXCI7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxyXFxuXFxyXFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19mb3JtIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG4uaGVhZGVyX19zZWFyY2gtaW5wdXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDYycHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDkzYjBhO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgLyogYmFja2dyb3VuZDogI0Y5RjBEQTsgKi9cXHJcXG4gIGJhY2tncm91bmQ6ICNGOUYwREE7XFxyXFxuICBjb2xvcjogIzlFOUM5QztcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbi5oZWFkZXJfX3N1Ym1pdC1idXR0b24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlOyBcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwcHg7XFxyXFxuICB3aWR0aDogNjZweDtcXHJcXG4gIGhlaWdodDogNjJweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwOTNiMGE7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDkzYjBhO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBcXHJcXG59XFxyXFxuLmhlYWRlcl9fc2VhcmNoLWljb24ge1xcclxcbiAgd2lkdGg6IDU0cHg7XFxyXFxuICBoZWlnaHQ6IDU0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbn1cXHJcXG4uaGVhZGVyX19jYXJ0IHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcbi5oZWFkZXJfX2Ftb3VudC1idXlzIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTNiMGE7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogOHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogLTMwcHg7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseURBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjs7RUFFakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGVBQWU7O0FBRWpCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlEQUFzRDtBQUN4RDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5REFBc0Q7RUFDdEQsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcyLCAxMDQsIDE4LCAwLjcyKTtcXHJcXG59XFxyXFxuLmhlYWRlcl9fbmF2IHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uaGVhZGVyX19uYXYtbGluayBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZjlmMGRhO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uaGVhZGVyX190ZWEtdGltZS1sb2dvIHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvc3ZnL3RlYS1jdXAuc3ZnXFxcIik7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX3RlYS10aW1lLWxvZ28taDEge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQtSGF0LVRleHRcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcclxcblxcclxcbiAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fZm9ybSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuLmhlYWRlcl9fc2VhcmNoLWlucHV0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MnB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzA5M2IwYTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIC8qIGJhY2tncm91bmQ6ICNGOUYwREE7ICovXFxyXFxuICBiYWNrZ3JvdW5kOiAjRjlGMERBO1xcclxcbiAgY29sb3I6ICM5RTlDOUM7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG4uaGVhZGVyX19zdWJtaXQtYnV0dG9uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMHB4O1xcclxcbiAgd2lkdGg6IDY2cHg7XFxyXFxuICBoZWlnaHQ6IDYycHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDkzYjBhO1xcclxcbiAgYmFja2dyb3VuZDogIzA5M2IwYTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgXFxyXFxufVxcclxcbi5oZWFkZXJfX3NlYXJjaC1pY29uIHtcXHJcXG4gIHdpZHRoOiA1NHB4O1xcclxcbiAgaGVpZ2h0OiA1NHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvc3ZnL2Fycm93LXJpZ2h0LnN2Z1xcXCIpO1xcclxcbn1cXHJcXG4uaGVhZGVyX19jYXJ0IHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvc3ZnL2NhcnQtaGVhZGVyLnN2Z1xcXCIpO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuLmhlYWRlcl9fYW1vdW50LWJ1eXMge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5M2IwYTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogLTIwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAtMzBweDtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJ0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FydC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FydC1pdGVtLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FydC1pdGVtLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9jYXJ0LWl0ZW0uY3NzXCI7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDYXJ0SXRlbSh7IGltYWdlLCBzb3J0LCBwcm92aW5jZSwgcHJpY2UsIGlkLCBhbW91bnQsIHN0b2NrIH06IENhcnRJdGVtUHJvcHMpIHtcclxuICByZXR1cm4gYFxyXG4gIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW1fX2Rlc2NyaXB0aW9uXCI+XHJcbiAgPGltZyBzcmM9XCIke2ltYWdlfVwiIGFsdD1cInRlYVwiIGNsYXNzPVwiY2FydC1pdGVtX19pbWctbWFpblwiIC8+XHJcbiAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW1fX3NvcnRcIj4ke3NvcnR9PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtX19jb3VudHJ5XCI+JHtwcm92aW5jZX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW1fX2Ftb3VudC1zdG9ja1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtX19hbW91bnQtZm9ybVwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIG1heD1cIiR7c3RvY2t9XCIgc3RlcD1cIjFcIiB2YWx1ZT1cIiR7YW1vdW50fVwiIG9uY2hhbmdlPVwiY2FydENvbnRyb2xsZXIudXBkYXRlQW1vdW50KCR7aWR9LCBldmVudClcIiBpZD1cInlvdXJpZGhlcmVcIiBjbGFzcz1cImNhcnQtaXRlbV9fYW1vdW50LWlucHV0XCIgLz5cclxuICAgICAgICA8bGFiZWwgZm9yPVwieW91cmlkaGVyZVwiIGNsYXNzPVwiY2FydC1pdGVtX19zdGF0aWMtdmFsdWVcIj5wY3MuPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW1fX3N0b2NrXCI+aW4gc3RvY2s6ICR7c3RvY2t9IHBjcy48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbV9fc2VjdGlvbi1wcmljZS1yZXNwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW1fX3RleHQtcHJpY2VcIj5QcmljZTo8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbV9fcHJpY2VcIj4ke3ByaWNlfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbV9fc2VjdGlvbi1wcmljZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbV9fdGV4dC1wcmljZVwiPlByaWNlOjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbV9fcHJpY2VcIj4ke3ByaWNlfSAkPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJyZW1vdmUgZnJvbSBjYXJ0XCIgY2xhc3M9XCJjYXJ0LWl0ZW1fX2RlbGV0ZS1idXR0b25cIiBvbmNsaWNrPVwiY2FydENvbnRyb2xsZXIuZGVsZXRlQ2FydEl0ZW0oJHtpZH0pXCI+eDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNhcnRJdGVtO1xyXG4iLCJpbXBvcnQgXCIuL2Zvb3Rlci5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckZvb3RlcigpIHtcclxuICByZXR1cm4gYFxyXG4gIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwiZm9vdGVyX19saXN0XCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJmb290ZXJfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbi9naXRodWIuc3ZnXCIgY2xhc3M9XCJmb290ZXJfX21hc2hhLWdpdGh1YlwiIGFsdD1cImdpdGh1YlwiIHN0eWxlPVwid2lkdGg6IDMwcHhcIiAvPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImZvb3Rlcl9fbGlua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTWFyeTE5MDE4My9cIj5NYXJ5MTkwMTgzPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzcz1cImZvb3Rlcl9faXRlbVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29uL2dpdGh1Yi5zdmdcIiBjbGFzcz1cImZvb3Rlcl9fbWFzaGEtZ2l0aHViXCIgYWx0PVwiZ2l0aHViXCIgc3R5bGU9XCJ3aWR0aDogMzBweFwiIC8+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZm9vdGVyX19saW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9iYWxhYmFub3ZhLWl1L1wiPmJhbGFiYW5vdmEtaXU8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzPVwiZm9vdGVyX19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JzLnNjaG9vbC9qcy9cIlxyXG4gICAgICAgICAgICAgID48aW1nIHNyYz1cImFzc2V0cy9pY29uL3Jzc2Nob29sLnN2Z1wiIGNsYXNzPVwiZm9vdGVyX19yc3NjaG9vbFwiIGFsdD1cInJzX3NjaG9vbFwiIHN0eWxlPVwid2lkdGg6IDcwcHhcIlxyXG4gICAgICAgICAgICAvPjwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICBgO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJGb290ZXI7XHJcbiIsImltcG9ydCBcIi4vaGVhZGVyLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVySGVhZGVyKHsgdG90YWxBbW91bnQsIHRvdGFsUHJpY2UgfTogSGVhZGVyUHJvcHMpIHtcclxuICByZXR1cm4gYFxyXG4gIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cclxuICA8bmF2IGNsYXNzPVwiaGVhZGVyX19uYXZcIj5cclxuICAgIDxsaSBjbGFzcz1cImhlYWRlcl9fbmF2LWxpbmtcIj5cclxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vb25saW5lLXN0b3JlLXRlYS10aW1lLm5ldGxpZnkuYXBwL1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX3RlYS10aW1lLWxvZ29cIj48L2Rpdj5cclxuICAgICAgICA8aDEgY2xhc3M9XCJoZWFkZXJfX3RlYS10aW1lLWxvZ28taDFcIj5UZWEtdGltZTwvaDE+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvbGk+XHJcbiAgICA8bGkgY2xhc3M9XCJoZWFkZXJfX25hdi1saW5rXCI+XHJcbiAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIG1ldGhvZD1cImdldFwiIGNsYXNzPVwiaGVhZGVyX19mb3JtXCI+XHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJzXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggdGVhLi4uXCIgdHlwZT1cInNlYXJjaFwiIGNsYXNzPVwiaGVhZGVyX19zZWFyY2gtaW5wdXRcIiAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiaGVhZGVyX19zdWJtaXQtYnV0dG9uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19zZWFyY2gtaWNvblwiPjwvZGl2PlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGNsYXNzPVwiaGVhZGVyX19uYXYtbGlua1wiPlxyXG4gICAgICA8YSBocmVmPVwiaXRlbS5odG1sXCI+XHJcbiAgICAgICAgPHNwYW4+VG90YWwgcHJpY2U6ICR7dG90YWxQcmljZX0kPC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2NhcnRcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19hbW91bnQtYnV5c1wiPiR7dG90YWxBbW91bnR9PC9kaXY+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvbGk+XHJcbiAgPC9uYXY+XHJcbjwvaGVhZGVyPlxyXG4gIGA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhlYWRlcjtcclxuIiwiaW1wb3J0IENhcnRNb2RlbCBmcm9tIFwiLi4vbW9kZWxzL2NhcnQtbW9kZWxcIjtcclxuXHJcbmNsYXNzIENhcnRDb250cm9sbGVyIHtcclxuICBwcml2YXRlIF9yZW5kZXJWaWV3OiBSZW5kZXJWaWV3PENhcnRNb2RlbD47XHJcbiAgcHJpdmF0ZSBfbW9kZWw6IENhcnRNb2RlbDtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHJlbmRlclZpZXc6IFJlbmRlclZpZXc8Q2FydE1vZGVsPiwgbW9kZWw6IENhcnRNb2RlbCkge1xyXG4gICAgdGhpcy5fcmVuZGVyVmlldyA9IHJlbmRlclZpZXc7XHJcbiAgICB0aGlzLl9tb2RlbCA9IG1vZGVsO1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICBpZiAoc2VhcmNoUGFyYW1zLmhhcyhcImxpbWl0XCIpKSB7XHJcbiAgICAgIHRoaXMuX21vZGVsLmxpbWl0SXRlbXMgPSBOdW1iZXIoc2VhcmNoUGFyYW1zLmdldChcImxpbWl0XCIpKTtcclxuICAgIH1cclxuICAgIGlmIChzZWFyY2hQYXJhbXMuaGFzKFwicGFnZVwiKSkge1xyXG4gICAgICB0aGlzLl9tb2RlbC5wYWdlID0gTnVtYmVyKHNlYXJjaFBhcmFtcy5nZXQoXCJwYWdlXCIpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVWaWV3KCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSB0aGlzLl9yZW5kZXJWaWV3KHRoaXMuX21vZGVsKTtcclxuXHJcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgc2VhcmNoUGFyYW1zLnNldChcImxpbWl0XCIsIFN0cmluZyh0aGlzLl9tb2RlbC5saW1pdEl0ZW1zKSk7XHJcbiAgICBzZWFyY2hQYXJhbXMuc2V0KFwicGFnZVwiLCBTdHJpbmcodGhpcy5fbW9kZWwucGFnZSkpO1xyXG4gICAgY29uc3QgbmV3UmVsYXRpdmVQYXRoUXVlcnkgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyBcIj9cIiArIHNlYXJjaFBhcmFtcy50b1N0cmluZygpO1xyXG4gICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgXCJcIiwgbmV3UmVsYXRpdmVQYXRoUXVlcnkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlbGV0ZUNhcnRJdGVtKGlkOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX21vZGVsLmRlbGV0ZUl0ZW1CeUlkKGlkKTtcclxuICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZUFtb3VudChpZDogbnVtYmVyLCBldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMuX21vZGVsLnVwZGF0ZUFtb3VudEJ5SWQoaWQsIE51bWJlcigoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKSk7XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVMaW1pdEl0ZW1zKGV2ZW50OiBFdmVudCkge1xyXG4gICAgdGhpcy5fbW9kZWwudXBkYXRlTGltaXRJdGVtc09uUGFnZShOdW1iZXIoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSkpO1xyXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25jbGlja1JpZ2h0KCkge1xyXG4gICAgdGhpcy5fbW9kZWwub25jbGlja1JpZ2h0UGFnZU51bWJlcigpO1xyXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25jbGlja0xlZnQoKSB7XHJcbiAgICB0aGlzLl9tb2RlbC5vbmNsaWNrTGVmdFBhZ2VOdW1iZXIoKTtcclxuICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVByb21vKGV2ZW50OiBFdmVudCkge1xyXG4gICAgdGhpcy5fbW9kZWwudXBkYXRlUHJvbW9CeUlkKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVsZXRlUHJvbW9JdGVtKCkge1xyXG4gICAgdGhpcy5fbW9kZWwuZGVsZXRlUHJvbW9CeUlkKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuQ2hlY2tvdXQoKSB7XHJcbiAgICB0aGlzLl9tb2RlbC5vcGVuQ2hlY2tvdXRCdXR0b24oKTtcclxuICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlQ2hlY2tvdXQoKSB7XHJcbiAgICB0aGlzLl9tb2RlbC5jbG9zZUNoZWNrb3V0QnV0dG9uKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICB9XHJcbn1cclxuXHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQ2FydENvbnRyb2xsZXI7XHJcbiIsImNvbnN0IGxpc3RCdXlzID0gWyAgICAgXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBuYW1lOiAnR3lva3VybyBBbmQgSmknLFxyXG4gICAgICBzb3J0OiAnR3JlZW4gdGVhJyxcclxuICAgICAgcHJvdmluY2U6ICdUYWl3YW4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZpcnN0IGdyYWRlIFN0ZWFtZWQnLFxyXG4gICAgICBpbWFnZTE6IGAuL2Fzc2V0cy9pbWcvaWQxXzEuanBnYCxcclxuICAgICAgaW1hZ2UyOiBgLi9hc3NldHMvaW1nL2lkMV8yLmpwZ2AsXHJcbiAgICAgIHN0b2NrOiAzMCxcclxuICAgICAgcHJpY2U6IDJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiAnWmhpIFRpYW8gTGl1IE1hbyBGZW5nIFNpY2h1YW4nLFxyXG4gICAgICBzb3J0OiAnR3JlZW4gdGVhJyxcclxuICAgICAgcHJvdmluY2U6ICdUYWl3YW4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0l0IGhhcyBhIHRoaWNrIHZlbHZldHkgZmxvcmFsLWZydWl0eSwgaG9uZXkgYXJvbWEgd2l0aCBub3RlcyBvZiBwcnVuZXMnLFxyXG4gICAgICBpbWFnZTE6IGAuL2Fzc2V0cy9pbWcvaWQyXzEuanBnYCxcclxuICAgICAgaW1hZ2UyOiBgLi9hc3NldHMvaW1nL2lkMl8yLmpwZ2AsXHJcbiAgICAgIHN0b2NrOiAyMCxcclxuICAgICAgcHJpY2U6IDEuNSBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICBuYW1lOiAnVGFuZyBNaW5nIFl1YW4nLFxyXG4gICAgICBzb3J0OiAnR3JlZW4gdGVhJyxcclxuICAgICAgcHJvdmluY2U6ICdIdWFuZyBTaGFuJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdTbm93IGdyZWVuIHRlYSAyMDIxJyxcclxuICAgICAgaW1hZ2UxOiBgLi9hc3NldHMvaW1nL2lkM18xLmpwZ2AsXHJcbiAgICAgIGltYWdlMjogYC4vYXNzZXRzL2ltZy9pZDNfMi5qcGdgLFxyXG4gICAgICBzdG9jazogNTAsXHJcbiAgICAgIHByaWNlOiAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNCxcclxuICAgICAgbmFtZTogJ0xlaSBNaW5nIE55YW8gWnVlaScsXHJcbiAgICAgIHNvcnQ6ICdHcmVlbiB0ZWEnLFxyXG4gICAgICBwcm92aW5jZTogJ0h1YW5nIFNoYW4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCIoUGV0cmVsJ3MgQmVhayBncmFkZSBDMSkgMjAyMSBNZW5nIERpbmcgU2hhblwiLFxyXG4gICAgICBpbWFnZTE6IGAuL2Fzc2V0cy9pbWcvaWQ0XzEuanBnYCxcclxuICAgICAgaW1hZ2UyOiBgLi9hc3NldHMvaW1nL2lkNF8yLmpwZ2AsXHJcbiAgICAgIHN0b2NrOiA0MCxcclxuICAgICAgcHJpY2U6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA1LFxyXG4gICAgICBuYW1lOiAnVGFpIFBpbmcgSG91IEt1aScsXHJcbiAgICAgIHNvcnQ6ICdHcmVlbiB0ZWEnLFxyXG4gICAgICBwcm92aW5jZTogJ0h1YW5nIFNoYW4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJNb25rZXkgS2luZyAyMDIxIEJlaSBIdWFuZyBTaGFuIEFuaHVpIFByb3ZpbmNlXCIsXHJcbiAgICAgIGltYWdlMTogYC4vYXNzZXRzL2ltZy9pZDVfMS5qcGdgLFxyXG4gICAgICBpbWFnZTI6IGAuL2Fzc2V0cy9pbWcvaWQ1XzIuanBnYCxcclxuICAgICAgc3RvY2s6IDI1LFxyXG4gICAgICBwcmljZTogMC41XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNixcclxuICAgICAgbmFtZTogJ1l1biBXdSBMaXUgQ2hhJyxcclxuICAgICAgc29ydDogJ0dyZWVuIHRlYScsXHJcbiAgICAgIHByb3ZpbmNlOiAnVGFpd2FuJyxcclxuICAgICAgZGVzY3JpcHRpb246IFwiQ2xvdWQgZ3JlZW4gdGVhIDIwMTlcIixcclxuICAgICAgaW1hZ2UxOiBgLi9hc3NldHMvaW1nL2lkNl8xLmpwZ2AsXHJcbiAgICAgIGltYWdlMjogYC4vYXNzZXRzL2ltZy9pZDZfMi5qcGdgLFxyXG4gICAgICBzdG9jazogNDUsXHJcbiAgICAgIHByaWNlOiAwLjVcclxuICAgIH0sICAgICAgXHJcbiAgICB7XHJcbiAgICAgIGlkOiA3LFxyXG4gICAgICBuYW1lOiAnV2lzaGFuIE5pdWxhbmtlbmcgWmhvdSBHdWknLFxyXG4gICAgICBzb3J0OiAnT29sb25nJyxcclxuICAgICAgcHJvdmluY2U6ICdIb25nIFBhbycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGEgSG9uZyBQYW8gUHJvdmluY2UnLFxyXG4gICAgICBpbWFnZTE6IGAuL2Fzc2V0cy9pbWcvaWQ3XzEuanBnYCxcclxuICAgICAgaW1hZ2UyOiBgLi9hc3NldHMvaW1nL2lkN18yLmpwZ2AsXHJcbiAgICAgIHN0b2NrOiA0MCxcclxuICAgICAgcHJpY2U6IDNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA4LFxyXG4gICAgICBuYW1lOiAnUWkgRGFuLCBXdWlzaGFuIE9vbG9uZycsXHJcbiAgICAgIHNvcnQ6ICdPb2xvbmcnLFxyXG4gICAgICBwcm92aW5jZTogJ1RhaXdhbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ2hvY29sYXRlIHRhc3RlJyxcclxuICAgICAgaW1hZ2UxOiBgLi9hc3NldHMvaW1nL2lkOF8xLmpwZ2AsXHJcbiAgICAgIGltYWdlMjogYC4vYXNzZXRzL2ltZy9pZDhfMi5qcGdgLFxyXG4gICAgICBzdG9jazogMjUsXHJcbiAgICAgIHByaWNlOiAxIFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDksXHJcbiAgICAgIG5hbWU6ICdPb2xvbmcgRG9uZyBEaW5nJyxcclxuICAgICAgc29ydDogJ09vbG9uZycsXHJcbiAgICAgIHByb3ZpbmNlOiAnVGFpd2FuJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdTcHJpbmcgVGFpd2FuJyxcclxuICAgICAgaW1hZ2UxOiBgLi9hc3NldHMvaW1nL2lkOV8xLmpwZ2AsXHJcbiAgICAgIGltYWdlMjogYC4vYXNzZXRzL2ltZy9pZDlfMi5qcGdgLFxyXG4gICAgICBzdG9jazogNDAsXHJcbiAgICAgIHByaWNlOiAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTAsXHJcbiAgICAgIG5hbWU6ICdHaW5zZW5nIE9vbG9uZycsXHJcbiAgICAgIHNvcnQ6ICdPb2xvbmcnLFxyXG4gICAgICBwcm92aW5jZTogJ1RhaXdhbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRhaXdhbiAyMDIxXCIsXHJcbiAgICAgIGltYWdlMTogYC4vYXNzZXRzL2ltZy9pZDEwXzEuanBnYCxcclxuICAgICAgaW1hZ2UyOiBgLi9hc3NldHMvaW1nL2lkMTBfMi5qcGdgLFxyXG4gICAgICBpbWFnZTM6IGAuL2Fzc2V0cy9pbWcvaWQxMF8zLmpwZ2AsXHJcbiAgICAgIHN0b2NrOiA2MCxcclxuICAgICAgcHJpY2U6IDJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxMSxcclxuICAgICAgbmFtZTogJ0ppbiBYdWFuIE1pbGsgT29sb25nJyxcclxuICAgICAgc29ydDogJ09vbG9uZycsXHJcbiAgICAgIHByb3ZpbmNlOiAnVGFpd2FuJyxcclxuICAgICAgZGVzY3JpcHRpb246IFwiQ2xhc3MgQUFBQVwiLFxyXG4gICAgICBpbWFnZTE6IGAuL2Fzc2V0cy9pbWcvaWQxMV8xLmpwZ2AsXHJcbiAgICAgIGltYWdlMjogYC4vYXNzZXRzL2ltZy9pZDExXzIuanBnYCxcclxuICAgICAgc3RvY2s6IDM1LFxyXG4gICAgICBwcmljZTogMS41XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTIsXHJcbiAgICAgIG5hbWU6ICdHYWJhIFdpbnRlciBKYWRlIERvbmcgRGluZycsXHJcbiAgICAgIHNvcnQ6ICdPb2xvbmcnLFxyXG4gICAgICBwcm92aW5jZTogJ1RhaXdhbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBhcm9tYSBpcyBoaWdoLCBsaWdodCwgZnJ1aXR5IGFuZCBzd2VldC5cIixcclxuICAgICAgaW1hZ2UxOiBgLi9hc3NldHMvaW1nL2lkMTJfMS5qcGdgLFxyXG4gICAgICBpbWFnZTI6IGAuL2Fzc2V0cy9pbWcvaWQxMl8yLmpwZ2AsXHJcbiAgICAgIHN0b2NrOiA0MCxcclxuICAgICAgcHJpY2U6IDAuNVxyXG4gICAgfSwgICAgICBcclxuICAgIHtcclxuICAgICAgaWQ6IDEzLFxyXG4gICAgICBuYW1lOiAnU2hlbiBQdWVyIEJhaSBIYW8gWWluIFpoZW4nLFxyXG4gICAgICBzb3J0OiAnUHVlcicsXHJcbiAgICAgIHByb3ZpbmNlOiAnSHVhbmcgU2hhbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIldoaXRlIFl1bm5hbiBTaGVuIFB1J2VyIDIwMjJcIixcclxuICAgICAgaW1hZ2UxOiBgLi9hc3NldHMvaW1nL2lkMTNfMS5qcGdgLFxyXG4gICAgICBpbWFnZTI6IGAuL2Fzc2V0cy9pbWcvaWQxM18yLmpwZ2AsXHJcbiAgICAgIHN0b2NrOiAzMCxcclxuICAgICAgcHJpY2U6IDMuNVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDE0LFxyXG4gICAgICBuYW1lOiAnU2hlbiBQdWVyIEx1bmcgSmkgVG8gQ2hhJyxcclxuICAgICAgc29ydDogJ1B1ZXInLFxyXG4gICAgICBwcm92aW5jZTogJ0h1YW5nIFNoYW4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0RyYWdvbiBCYWxscyBmcm9tIERhIEh1YW5nIFNoYW4gTW91bnRhaW4gMjAxOCcsXHJcbiAgICAgIGltYWdlMTogYC4vYXNzZXRzL2ltZy9pZDE0XzEuanBnYCxcclxuICAgICAgaW1hZ2UyOiBgLi9hc3NldHMvaW1nL2lkMTRfMi5qcGdgLFxyXG4gICAgICBzdG9jazogMzUsXHJcbiAgICAgIHByaWNlOiAzIFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDE1LFxyXG4gICAgICBuYW1lOiAnU2hlbiBQdWVyIE15dW5nIEt1IERhIEh1IEphaScsXHJcbiAgICAgIHNvcnQ6ICdQdWVyJyxcclxuICAgICAgcHJvdmluY2U6ICdNeXVuZyBLdScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnQW5jaWVudCB0cmVlcyBNeXVuZyBLdSBwbGFjZSAyMDE2JyxcclxuICAgICAgaW1hZ2UxOiBgLi9hc3NldHMvaW1nL2lkMTVfMS5qcGdgLFxyXG4gICAgICBpbWFnZTI6IGAuL2Fzc2V0cy9pbWcvaWQxNV8yLmpwZ2AsXHJcbiAgICAgIHN0b2NrOiA2MCxcclxuICAgICAgcHJpY2U6IDZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxNixcclxuICAgICAgbmFtZTogJ1NoZW4gUHVlciBCYW4gVHp1IENoYW4nLFxyXG4gICAgICBzb3J0OiAnUHVlcicsXHJcbiAgICAgIHByb3ZpbmNlOiAnSHVhbmcgU2hhbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlNoZW4gUHVlciBQaWd0YWlsIFRlYSBNb3VudGFpbiBEYSBIdWFuZyBTaGFuXCIsXHJcbiAgICAgIGltYWdlMTogYC4vYXNzZXRzL2ltZy9pZDE2XzEuanBnYCxcclxuICAgICAgaW1hZ2UyOiBgLi9hc3NldHMvaW1nL2lkMTZfMi5qcGdgLFxyXG4gICAgICBzdG9jazogMjAsXHJcbiAgICAgIHByaWNlOiAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTcsXHJcbiAgICAgIG5hbWU6ICdTaGVuIFB1ZXIgS3VuIFF1ZSBTaGknLFxyXG4gICAgICBzb3J0OiAnUHVlcicsXHJcbiAgICAgIHByb3ZpbmNlOiAnSHVhbmcgU2hhbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlJlZCBUb25ndWVzIHB1cnBsZSBidWRzIFllcyBIdWFuZyBTaGFuIDIwMThcIixcclxuICAgICAgaW1hZ2UyOiBgLi9hc3NldHMvaW1nL2lkMTdfMS5qcGdgLFxyXG4gICAgICBpbWFnZTE6IGAuL2Fzc2V0cy9pbWcvaWQxN18yLmpwZ2AsXHJcbiAgICAgIHN0b2NrOiAxNSxcclxuICAgICAgcHJpY2U6IDMuNVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDE4LFxyXG4gICAgICBuYW1lOiAnU2hlbiBQdWVyIFllIFNoZW4gQmFpIFlhIEJhbycsXHJcbiAgICAgIHNvcnQ6ICdQdWVyJyxcclxuICAgICAgcHJvdmluY2U6ICdIdWFuZyBTaGFuJyxcclxuICAgICAgZGVzY3JpcHRpb246IFwiV2lsZCB3aGl0ZSBidWRzXCIsXHJcbiAgICAgIGltYWdlMTogYC4vYXNzZXRzL2ltZy9pZDE4XzEuanBnYCxcclxuICAgICAgaW1hZ2UyOiBgLi9hc3NldHMvaW1nL2lkMThfMi5qcGdgLFxyXG4gICAgICBzdG9jazogMjAsXHJcbiAgICAgIHByaWNlOiAwLjVcclxuICAgIH0sICAgICAgXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxOSxcclxuICAgICAgbmFtZTogJ0RpYW4gSG9uZyBIdWEgTG9uZyBaaHUnLFxyXG4gICAgICBzb3J0OiAnUmVkIHRlYScsXHJcbiAgICAgIHByb3ZpbmNlOiAnVGFpd2FuJyxcclxuICAgICAgZGVzY3JpcHRpb246IFwiV2l0aCBvcmFuZ2UgcGVlbFwiLFxyXG4gICAgICBpbWFnZTE6IGAuL2Fzc2V0cy9pbWcvaWQxOV8xLmpwZ2AsXHJcbiAgICAgIGltYWdlMjogYC4vYXNzZXRzL2ltZy9pZDE5XzIuanBnYCxcclxuICAgICAgc3RvY2s6IDIwLFxyXG4gICAgICBwcmljZTogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIwLFxyXG4gICAgICBuYW1lOiAnRGlhbiBIb25nIEh1YSBMb25nIFpodScsXHJcbiAgICAgIHNvcnQ6ICdSZWQgdGVhJyxcclxuICAgICAgcHJvdmluY2U6ICdUYWl3YW4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1dpdGggb3NtYW50aHVzJyxcclxuICAgICAgaW1hZ2UxOiBgLi9hc3NldHMvaW1nL2lkMjBfMS5qcGdgLFxyXG4gICAgICBpbWFnZTI6IGAuL2Fzc2V0cy9pbWcvaWQyMF8yLmpwZ2AsXHJcbiAgICAgIHN0b2NrOiAyNSxcclxuICAgICAgcHJpY2U6IDIgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMjEsXHJcbiAgICAgIG5hbWU6ICdEaWFuIEhvbmcgSHVhIExvbmcgWmh1JyxcclxuICAgICAgc29ydDogJ1JlZCB0ZWEnLFxyXG4gICAgICBwcm92aW5jZTogJ1RhaXdhbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnV2l0aCBqYXNtaW5lJyxcclxuICAgICAgaW1hZ2UxOiBgLi9hc3NldHMvaW1nL2lkMjFfMS5qcGdgLFxyXG4gICAgICBpbWFnZTI6IGAuL2Fzc2V0cy9pbWcvaWQyMV8yLmpwZ2AsXHJcbiAgICAgIHN0b2NrOiAxMCxcclxuICAgICAgcHJpY2U6IDMuNVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIyLFxyXG4gICAgICBuYW1lOiAnRGlhbiBIb25nIEh1YSBMb25nIFpodScsXHJcbiAgICAgIHNvcnQ6ICdSZWQgdGVhJyxcclxuICAgICAgcHJvdmluY2U6ICdUYWl3YW4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJXaXRoIHJlZCBwZW9ueVwiLFxyXG4gICAgICBpbWFnZTE6IGAuL2Fzc2V0cy9pbWcvaWQyMl8xLmpwZ2AsXHJcbiAgICAgIGltYWdlMjogYC4vYXNzZXRzL2ltZy9pZDIyXzIuanBnYCxcclxuICAgICAgc3RvY2s6IDYwLFxyXG4gICAgICBwcmljZTogNC41XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMjMsXHJcbiAgICAgIG5hbWU6ICdEaWFuIEhvbmcgSHVhIExvbmcgWmh1JyxcclxuICAgICAgc29ydDogJ1JlZCB0ZWEnLFxyXG4gICAgICBwcm92aW5jZTogJ1RhaXdhbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIldpdGggbW91bnRhaW4gY2FybmF0aW9uXCIsXHJcbiAgICAgIGltYWdlMTogYC4vYXNzZXRzL2ltZy9pZDIzXzEuanBnYCxcclxuICAgICAgaW1hZ2UyOiBgLi9hc3NldHMvaW1nL2lkMjNfMi5qcGdgLFxyXG4gICAgICBzdG9jazogNTUsXHJcbiAgICAgIHByaWNlOiAzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMjQsXHJcbiAgICAgIG5hbWU6ICdEaWFuIEhvbmcgSHVhIExvbmcgWmh1JyxcclxuICAgICAgc29ydDogJ1JlZCB0ZWEnLFxyXG4gICAgICBwcm92aW5jZTogJ1RhaXdhbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIldpdGggeWVsbG93IGNocnlzYW50aGVtdW1cIixcclxuICAgICAgaW1hZ2UxOiBgLi9hc3NldHMvaW1nL2lkMjRfMS5qcGdgLFxyXG4gICAgICBpbWFnZTI6IGAuL2Fzc2V0cy9pbWcvaWQyNF8yLmpwZ2AsXHJcbiAgICAgIHN0b2NrOiAxMCxcclxuICAgICAgcHJpY2U6IDIuNVxyXG4gICAgfSxcclxuXSBhcyBQcm9kdWN0W107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsaXN0QnV5cztcclxuIiwiaW1wb3J0IGxpc3RCdXlzIGZyb20gXCIuLi9saXN0LWJ1eXNcIjtcclxuXHJcbmNsYXNzIENhcnRNb2RlbCB7XHJcbiAgcHJpdmF0ZSBfaXRlbXM6IENhcnRJdGVtW107XHJcbiAgcHVibGljIHBhZ2U6IG51bWJlcjtcclxuICBwdWJsaWMgbGltaXRJdGVtczogbnVtYmVyO1xyXG4gIHB1YmxpYyBwcm9tbzogc3RyaW5nW107XHJcbiAgcHVibGljIGlzT3BlbjogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5faXRlbXMgPSBbXTtcclxuICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICB0aGlzLmxpbWl0SXRlbXMgPSAyO1xyXG4gICAgdGhpcy5wcm9tbyA9IFtdO1xyXG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9kdWN0c1wiKSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLl9pdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9kdWN0c1wiKSBhcyBzdHJpbmcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faXRlbXMgPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXRlbXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbXMuc2xpY2UoKHRoaXMucGFnZSAtIDEpICogdGhpcy5saW1pdEl0ZW1zLCB0aGlzLnBhZ2UgKiB0aGlzLmxpbWl0SXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB0b3RhbFByaWNlKCkge1xyXG4gICAgbGV0IHN1bSA9IDA7XHJcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBsaXN0QnV5cy5maW5kKChwcm9kKSA9PiBwcm9kLmlkID09PSBpdGVtLnByb2R1Y3RJZCk7XHJcbiAgICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgICAgc3VtICs9IHByb2R1Y3QucHJpY2UgKiBpdGVtLmFtb3VudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdW0gKz0gMDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc3VtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB0b3RhbEFtb3VudCgpIHtcclxuICAgIGxldCBzdW1BbW91bnQgPSAwO1xyXG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBzdW1BbW91bnQgKz0gaXRlbS5hbW91bnQ7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzdW1BbW91bnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVsZXRlSXRlbUJ5SWQoaWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5faXRlbXMgPSB0aGlzLl9pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGlkKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvZHVjdHNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5faXRlbXMpKVxyXG4gICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwICYmIHRoaXMucGFnZSA+IDEpIHtcclxuICAgICAgdGhpcy5wYWdlIC09IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlQW1vdW50QnlJZChpZDogbnVtYmVyLCBhbW91bnQ6IG51bWJlcikge1xyXG4gICAgaWYgKGFtb3VudCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmRlbGV0ZUl0ZW1CeUlkKGlkKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5pZCA9PT0gaWQpIHtcclxuICAgICAgICBpdGVtLmFtb3VudCA9IGFtb3VudDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2R1Y3RzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuX2l0ZW1zKSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVMaW1pdEl0ZW1zT25QYWdlKGxpbWl0SXRlbXM6IG51bWJlcikge1xyXG4gICAgdGhpcy5saW1pdEl0ZW1zID0gbGltaXRJdGVtcztcclxuICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25jbGlja1JpZ2h0UGFnZU51bWJlcigpIHtcclxuICAgIGlmICh0aGlzLl9pdGVtcy5sZW5ndGggLSAxIDwgdGhpcy5wYWdlICogdGhpcy5saW1pdEl0ZW1zKSB7XHJcbiAgICAgIHRoaXMucGFnZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZSArIDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25jbGlja0xlZnRQYWdlTnVtYmVyKCkge1xyXG4gICAgaWYgKHRoaXMucGFnZSAtIDEgPT09IDApIHtcclxuICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZSAtIDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyB1cGRhdGVQcm9tb0J5SWQocHJvbW86IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMucHJvbW8uaW5jbHVkZXMocHJvbW8pKSB7XHJcbiAgICAgIHRoaXMucHJvbW87XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAocHJvbW8gPT09IFwiUlNcIiB8fCBwcm9tbyA9PT0gXCJFUE1cIikge1xyXG4gICAgICAgIHRoaXMucHJvbW8ucHVzaChwcm9tbyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZWxldGVQcm9tb0J5SWQoKSB7XHJcbiAgICB0aGlzLnByb21vID0gdGhpcy5wcm9tby5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IFwiUlNcIik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3BlbkNoZWNrb3V0QnV0dG9uKCkge1xyXG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlQ2hlY2tvdXRCdXR0b24oKSB7XHJcbiAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxufVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0TW9kZWw7XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImNhcnRcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9jYXJ0LmNzc1wiO1xyXG5pbXBvcnQgbGlzdEJ1eXMgZnJvbSBcIi4vbGlzdC1idXlzXCI7XHJcbmltcG9ydCByZW5kZXJIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IHJlbmRlckZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5pbXBvcnQgcmVuZGVyQ2FydEl0ZW0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJ0LWl0ZW1cIjtcclxuXHJcbmltcG9ydCBDYXJ0Q29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVycy9jYXJ0LWNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IENhcnRNb2RlbCBmcm9tIFwiLi9tb2RlbHMvY2FydC1tb2RlbFwiO1xyXG5cclxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IFdpbmRvdyAmIHsgY2FydENvbnRyb2xsZXI6IENhcnRDb250cm9sbGVyOyBjYXJ0TW9kZWw6IENhcnRNb2RlbCB9O1xyXG5cclxud2luZG93LmNhcnRNb2RlbCA9IG5ldyBDYXJ0TW9kZWwoKTtcclxud2luZG93LmNhcnRDb250cm9sbGVyID0gbmV3IENhcnRDb250cm9sbGVyKHJlbmRlciwgd2luZG93LmNhcnRNb2RlbCk7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIHdpbmRvdy5jYXJ0Q29udHJvbGxlci51cGRhdGVWaWV3KCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZW5kZXIoeyBpdGVtcywgdG90YWxQcmljZSwgdG90YWxBbW91bnQsIHBhZ2UsIGxpbWl0SXRlbXMsIHByb21vLCBpc09wZW4gfTogQ2FydE1vZGVsKSB7XHJcbiAgcmV0dXJuIGBcclxuICAke3JlbmRlckhlYWRlcih7IHRvdGFsQW1vdW50LCB0b3RhbFByaWNlIH0pfSBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGUtY2hlY2tvdXRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPkNhcnQ8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja291dC10b3RhbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG90YWxcIj5cclxuICAgICAgICAgICAgICAke1xyXG4gICAgICAgICAgICAgICAgcHJvbW8ubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICAgID8gYDxkaXYgY2xhc3M9XCJ0b3RhbC1wcmljZVwiPlRvdGFsOiAke3RvdGFsUHJpY2V9JDwvZGl2PmBcclxuICAgICAgICAgICAgICAgICAgOiBwcm9tby5sZW5ndGggPT09IDFcclxuICAgICAgICAgICAgICAgICAgPyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIuc2VjdGlvbi1wcm9tb1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsLXByaWNlXCIgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoOyBmb250LXNpemU6IDEuNnJlbVwiPlRvdGFsOiAke3RvdGFsUHJpY2V9JDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG90YWwtcHJpY2VcIj5Ub3RhbDogJHsodG90YWxQcmljZSAqIDAuOSkudG9GaXhlZCgyKX0kPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgICAgICAgOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIuc2VjdGlvbi1wcm9tb1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsLXByaWNlXCIgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoOyBmb250LXNpemU6IDEuNnJlbVwiID5Ub3RhbDogJHt0b3RhbFByaWNlfSQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsLXByaWNlXCI+VG90YWw6ICR7KHRvdGFsUHJpY2UgKiAwLjgpLnRvRml4ZWQoMil9JDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoZWNrb3V0LWJ1dHRvblwiIG9uY2xpY2s9XCJjYXJ0Q29udHJvbGxlci5vcGVuQ2hlY2tvdXQoKVwiPkNoZWNrb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICR7aXNPcGVuID09PSB0cnVlID8gXHJcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cIm1vZGFsXCIgb25jbGljaz1cImNhcnRDb250cm9sbGVyLmNsb3NlQ2hlY2tvdXQoKVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cIm1vZGFsX190aXRsZVwiPlBlcnNvbmFsIERhdGE8L3A+XHJcbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX25hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cIm1vZGFsX19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lOiBJdmFuIEl2YW5vdlwiIHR5cGU94oCdcGFzc3dvcmTigJ0+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1vZGFsX19jb21tZW50XCI+IFBsZWFzZSBlbnRlciB5b3VyIGZpcnN0IGFuZCBsYXN0IG5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19waG9uZSBuby1hcnJvd3NcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cIm1vZGFsX19pbnB1dCB0ZWxcIiB0eXBlPVwidGVsXCIgcGF0dGVybj1cIls2Nzg5XVswLTldezEwfVwiIHJlcXVpcmVkICBwbGFjZWhvbGRlcj1cIlBob25lOiA3OTIxMTIzNDU2N1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1vZGFsX19jb21tZW50XCI+IFBsZWFzZSBlbnRlciB5b3VyIHBob25lIG51bWJlciA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19hZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJtb2RhbF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGVsaXZlcnkgYWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtb2RhbF9fY29tbWVudFwiPiBQbGVhc2UgZW50ZXIgeW91ciBhZGRyZXNzPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fZW1haWxcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cIm1vZGFsX19pbnB1dCBlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRS1tYWlsOiBpdmFub3ZAZ21haWwuY29tXCIgcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtb2RhbF9fY29tbWVudFwiPlBsZWFzZSBlbnRlciB5b3VyIGUtbWFpbDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1vZGFsX19jYXJkLXRpdGxlXCI+Q3JlZGl0IGNhcmQgRGF0YTwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2NhcmQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fY2FyZC10b3Agbm8tYXJyb3dzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2NhcmQtbG9nb1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJtb2RhbF9fY2FyZC1udW1iZXJcIiB0eXBlPVwidGVsXCIgcGF0dGVybj1cIlswLTldezR9WyBdWzAtOV17NH1bIF1bMC05XXs0fVsgXVswLTldezR9XCIgbWF4TGVuZ3RoID0gXCIxOVwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiMDAwMCAwMDAwIDAwMDAgMDAwMFwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fY2FyZC1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fY2FyZC1kYXRhIG5vLWFycm93c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidmFsaWRUaHJ1XCI+VmFsaWQgdGhydTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ2YWxpZFRocnVcIiB0eXBlPVwidGVsXCIgcGF0dGVybj1cIlswLTldezJ9Wy9dWzAtOV17Mn1cIiBtYXhMZW5ndGggPSBcIjVcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIjEyLzIzXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fY2FyZC1jdnYgbm8tYXJyb3dzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjdnZcIj5DVlY6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY3Z2XCIgdHlwZT1cInRlbFwiIHBhdHRlcm49XCJbMC05XXszfVwiIG1heExlbmd0aCA9IFwiM1wiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiMDAwXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fc3VibWl0XCIgdHlwZT0nc3VibWl0Jz5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5gIDogXCJcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICR7XHJcbiAgICAgICAgICBpdGVtcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgID8gaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gbGlzdEJ1eXMuZmluZCgocHJvZCkgPT4gcHJvZC5pZCA9PT0gaXRlbS5wcm9kdWN0SWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJDYXJ0SXRlbSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHByb2R1Y3QuaW1hZ2UxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IHByb2R1Y3Quc29ydCxcclxuICAgICAgICAgICAgICAgICAgICBwcm92aW5jZTogcHJvZHVjdC5wcm92aW5jZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTogcHJvZHVjdC5wcmljZSAqIGl0ZW0uYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogaXRlbS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvY2s6IHByb2R1Y3Quc3RvY2ssXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgOiBgPGgyIGNsYXNzPVwiZW1wdHlcIj5FbXB0eTwvaDI+YFxyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1lbmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1wcm9tb1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb21vXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9tby10ZXh0XCI+UHJvbW8gY29kZTwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIG9uY2hhbmdlPVwiY2FydENvbnRyb2xsZXIudXBkYXRlUHJvbW8oZXZlbnQpXCIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwcm9tby1hY3RpdmF0ZVwiPkFjdGl2YXRlPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9tby10ZXN0XCI+UHJvbW8gZm9yIHRlc3Q6IFJTLCBFUE08L2Rpdj5cclxuICAgICAgICAgICR7cHJvbW9cclxuICAgICAgICAgICAgLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChpdGVtID09PSBcIlJTXCIgfHwgaXRlbSA9PT0gXCJFUE1cIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PlxyXG4gICAgICAgICAgICAgICR7aXRlbSA9PT0gXCJSU1wiID8gYDxzcGFpbj5SUyAtIDEwJTwvc3BhaW4+YCA6IGA8c3BhaW4+RVBNIC0gMTAlPC9zcGFpbj5gfVxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uY2xpY2s9XCJjYXJ0Q29udHJvbGxlci5kZWxldGVQcm9tb0l0ZW0oKVwiPkRST1A8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYGA7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmpvaW4oXCJcIil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbWl0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5MaW1pdDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMVwiIG1heD1cIjEwXCIgc3RlcD1cIjFcIiB2YWx1ZT1cIiR7bGltaXRJdGVtc31cIiBvbmlucHV0PVwiY2FydENvbnRyb2xsZXIudXBkYXRlTGltaXRJdGVtcyhldmVudClcIiBjbGFzcz1cImxpbWl0LWlucHV0XCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VzLXRleHRcIj5QYWdlPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24tbGVmdFwiIG9uY2xpY2s9XCJjYXJ0Q29udHJvbGxlci5vbmNsaWNrTGVmdCgpXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9zdmcvYXJyb3ctcmlnaHQuc3ZnXCIgYWx0PVwiYXJyb3ctbGVmdFwiIGNsYXNzPVwicGFnZXMtaW1nLWxlZnRcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtcGFnZVwiPiR7cGFnZX08L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbi1yaWdodFwiIG9uY2xpY2s9XCJjYXJ0Q29udHJvbGxlci5vbmNsaWNrUmlnaHQoKVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvc3ZnL2Fycm93LXJpZ2h0LnN2Z1wiIGFsdD1cImFycm93LXJpZ2h0XCIgY2xhc3M9XCJwYWdlcy1pbWctcmlnaHRcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgICR7cmVuZGVyRm9vdGVyKCl9XHJcbiAgYDtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=