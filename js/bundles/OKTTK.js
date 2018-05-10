var pageComponent =
webpackJsonppageComponent([28],{

/***/ 270:
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

var _arithmeticSoy = __webpack_require__(271);

var _arithmeticSoy2 = _interopRequireDefault(_arithmeticSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OKTTK = function (_Component) {
  _inherits(OKTTK, _Component);

  function OKTTK() {
    _classCallCheck(this, OKTTK);

    return _possibleConstructorReturn(this, (OKTTK.__proto__ || Object.getPrototypeOf(OKTTK)).apply(this, arguments));
  }

  return OKTTK;
}(_metalComponent2.default);

;

_metalSoy2.default.register(OKTTK, _arithmeticSoy2.default);

exports.default = OKTTK;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.OKTTK = undefined;

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

  // This file was automatically generated from arithmetic.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace OKTTK.
   * @public
   */

  goog.module('OKTTK.incrementaldom');

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
    var param356 = function param356() {
      ie_open('h6');
      var dyn28 = opt_data.page.description;
      if (typeof dyn28 == 'function') dyn28();else if (dyn28 != null) itext(dyn28);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('add');
      ie_close('h2');
      ie_open('p');
      itext('Add two numbers.');
      ie_close('p');
      $templateAlias2({ code: 'R.add.run(1, 2)\n// 3', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('dec');
      ie_close('h2');
      ie_open('p');
      itext('Decrement the number.');
      ie_close('p');
      $templateAlias2({ code: 'R.dec.run(1)\n// 0', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('divide');
      ie_close('h2');
      ie_open('p');
      itext('Divide two numbers.');
      ie_close('p');
      $templateAlias2({ code: 'R.divide.run(1, 2)\n// 0.5', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('inc');
      ie_close('h2');
      ie_open('p');
      itext('Increment the number.');
      ie_close('p');
      $templateAlias2({ code: 'R.inc.run(1)\n// 2', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('mod');
      ie_close('h2');
      ie_open('p');
      itext('Calculate the modulo.');
      ie_close('p');
      $templateAlias2({ code: 'R.mod.run(1, 2)\n// 1', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('multiply');
      ie_close('h2');
      ie_open('p');
      itext('Multiply two numbers.');
      ie_close('p');
      $templateAlias2({ code: 'R.multiply.run(1, 2)\n// 2', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('negate');
      ie_close('h2');
      ie_open('p');
      itext('Negate the number.');
      ie_close('p');
      $templateAlias2({ code: 'R.negate.run(1)\n// -1', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '8');
      ie_open('h2');
      itext('product');
      ie_close('h2');
      ie_open('p');
      itext('Multiply all the numbers.');
      ie_close('p');
      $templateAlias2({ code: 'R.product.run(1, 2, 3)\n// 6', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '9');
      ie_open('h2');
      itext('subtract');
      ie_close('h2');
      ie_open('p');
      itext('Subtract one number from another.');
      ie_close('p');
      $templateAlias2({ code: 'R.subtract.run(1, 2)\n// -1', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param356 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'OKTTK.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var OKTTK = function (_Component) {
  _inherits(OKTTK, _Component);

  function OKTTK() {
    _classCallCheck(this, OKTTK);

    return _possibleConstructorReturn(this, (OKTTK.__proto__ || Object.getPrototypeOf(OKTTK)).apply(this, arguments));
  }

  return OKTTK;
}(_metalComponent2.default);

_metalSoy2.default.register(OKTTK, templates);
exports.OKTTK = OKTTK;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[270]);