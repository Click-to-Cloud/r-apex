var pageComponent =
webpackJsonppageComponent([1],{

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

var _step_8Soy = __webpack_require__(321);

var _step_8Soy2 = _interopRequireDefault(_step_8Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TLCFe = function (_Component) {
  _inherits(TLCFe, _Component);

  function TLCFe() {
    _classCallCheck(this, TLCFe);

    return _possibleConstructorReturn(this, (TLCFe.__proto__ || Object.getPrototypeOf(TLCFe)).apply(this, arguments));
  }

  return TLCFe;
}(_metalComponent2.default);

;

_metalSoy2.default.register(TLCFe, _step_8Soy2.default);

exports.default = TLCFe;

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.TLCFe = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from step_8.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace TLCFe.
   * @public
   */

  goog.module('TLCFe.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias1 = _metalSoy2.default.getTemplate('tutorial.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param2100 = function param2100() {
      ie_open('h2');
      var dyn52 = opt_data.page.title;
      if (typeof dyn52 == 'function') dyn52();else if (dyn52 != null) itext(dyn52);
      ie_close('h2');
      ie_open('p');
      itext('It is your personal preference to choose between functional composition and function chaining. And the key takeaway is to use whatever is suitable in your case.');
      ie_close('p');
      ie_open('p');
      itext('It is sad that the discovery of R.apex almost comes to an end. Realizing that the functions provided by R.apex is limited, you have to come up with your functions to tackle all the difficult business logic. The suggestion will be to encapsulate your core business logic in small custom functions and glue them together with the power of R.apex to build your own application. And this is the way you extend R.apex.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param2100 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'TLCFe.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var TLCFe = function (_Component) {
  _inherits(TLCFe, _Component);

  function TLCFe() {
    _classCallCheck(this, TLCFe);

    return _possibleConstructorReturn(this, (TLCFe.__proto__ || Object.getPrototypeOf(TLCFe)).apply(this, arguments));
  }

  return TLCFe;
}(_metalComponent2.default);

_metalSoy2.default.register(TLCFe, templates);
exports.TLCFe = TLCFe;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[320]);