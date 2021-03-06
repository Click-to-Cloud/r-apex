var pageComponent =
webpackJsonppageComponent([19],{

/***/ 298:
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

var _relationSoy = __webpack_require__(299);

var _relationSoy2 = _interopRequireDefault(_relationSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TVXVY = function (_Component) {
  _inherits(TVXVY, _Component);

  function TVXVY() {
    _classCallCheck(this, TVXVY);

    return _possibleConstructorReturn(this, (TVXVY.__proto__ || Object.getPrototypeOf(TVXVY)).apply(this, arguments));
  }

  return TVXVY;
}(_metalComponent2.default);

;

_metalSoy2.default.register(TVXVY, _relationSoy2.default);

exports.default = TVXVY;

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.TVXVY = undefined;

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

  // This file was automatically generated from relation.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace TVXVY.
   * @public
   */

  goog.module('TVXVY.incrementaldom');

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

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param1785 = function param1785() {
      ie_open('h6');
      var dyn42 = opt_data.page.description;
      if (typeof dyn42 == 'function') dyn42();else if (dyn42 != null) itext(dyn42);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('equals');
      ie_close('h2');
      ie_open('p');
      itext('Check if two values are equal.');
      ie_close('p');
      $templateAlias2({ code: 'R.equals.run(1, 1)\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('gt');
      ie_close('h2');
      ie_open('p');
      itext('Check for \'greater than\'.');
      ie_close('p');
      $templateAlias2({ code: 'R.gt.run(3, 2)\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('gte');
      ie_close('h2');
      ie_open('p');
      itext('Check for \'greater than or equal\'.');
      ie_close('p');
      $templateAlias2({ code: 'R.gte.run(3, 2)\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('lt');
      ie_close('h2');
      ie_open('p');
      itext('Check for \'less than\'.');
      ie_close('p');
      $templateAlias2({ code: 'R.lt.run(1, 2)\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('lte');
      ie_close('h2');
      ie_open('p');
      itext('Check for \'less than or equal\'.');
      ie_close('p');
      $templateAlias2({ code: 'R.lte.run(1, 2)\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('max');
      ie_close('h2');
      ie_open('p');
      itext('Check for the max value between the two.');
      ie_close('p');
      $templateAlias2({ code: 'R.max.run(1, 2)\n// 2', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('min');
      ie_close('h2');
      ie_open('p');
      itext('Check for the min value between the two.');
      ie_close('p');
      $templateAlias2({ code: 'R.min.run(1, 2)\n// 1', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param1785 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'TVXVY.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var TVXVY = function (_Component) {
  _inherits(TVXVY, _Component);

  function TVXVY() {
    _classCallCheck(this, TVXVY);

    return _possibleConstructorReturn(this, (TVXVY.__proto__ || Object.getPrototypeOf(TVXVY)).apply(this, arguments));
  }

  return TVXVY;
}(_metalComponent2.default);

_metalSoy2.default.register(TVXVY, templates);
exports.TVXVY = TVXVY;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[298]);