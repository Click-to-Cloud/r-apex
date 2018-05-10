var pageComponent =
webpackJsonppageComponent([3],{

/***/ 314:
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

var _step_6Soy = __webpack_require__(315);

var _step_6Soy2 = _interopRequireDefault(_step_6Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mMKhV = function (_Component) {
  _inherits(mMKhV, _Component);

  function mMKhV() {
    _classCallCheck(this, mMKhV);

    return _possibleConstructorReturn(this, (mMKhV.__proto__ || Object.getPrototypeOf(mMKhV)).apply(this, arguments));
  }

  return mMKhV;
}(_metalComponent2.default);

;

_metalSoy2.default.register(mMKhV, _step_6Soy2.default);

exports.default = mMKhV;

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.mMKhV = undefined;

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

  // This file was automatically generated from step_6.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace mMKhV.
   * @public
   */

  goog.module('mMKhV.incrementaldom');

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
    var param2017 = function param2017() {
      ie_open('h2');
      var dyn49 = opt_data.page.title;
      if (typeof dyn49 == 'function') dyn49();else if (dyn49 != null) itext(dyn49);
      ie_close('h2');
      ie_open('p');
      itext('Hopefully you have got some understanding on how to write a custom function by now. But that\'s far not enough. Writing functions by extending Func is still somehow bloate with boilerplates and it is kind of tedious. Better ways ahead.');
      ie_close('p');
      ie_open('p');
      itext('The charm of functional programming lies not only in the fact of function currying and partial application, but also in the ability that they can compose. It is composition and decomposition that helps us to build a large application out of small bits and pieces in a functional world. And we adore the power.');
      ie_close('p');
      ie_open('p');
      itext('So it is not hard to understand that functional composition is strongly recommended in R.apex, to write clean and clear codes. Let\'s take a leap to check it out.');
      ie_close('p');
      $templateAlias2({ code: 'Func f = (Func)R.compose.run(\n    R.add.apply(1),\n    R.multiply.apply(2)\n);\nInteger result = (Integer)f.run(2);\n// 5', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Dive into this snippet, and we will make everything clear step by step. First, ');
      ie_open('code');
      itext('R.add.apply(1)');
      ie_close('code');
      itext(' creates a function ');
      ie_open('code');
      itext('f2');
      ie_close('code');
      itext(' that takes one number and adds 1 to it. ');
      ie_open('code');
      itext('R.multiply.apply(2)');
      ie_close('code');
      itext(' creates a function ');
      ie_open('code');
      itext('f1');
      ie_close('code');
      itext(' that takes one number and multiplies 2 to it. Then ');
      ie_open('code');
      itext('compose');
      ie_close('code');
      itext(' is the magic. It invokes ');
      ie_open('code');
      itext('f1');
      ie_close('code');
      itext(' with one argument(i.e, 2) and gets the intermediate result of 4. After that, it invokes ');
      ie_open('code');
      itext('f2');
      ie_close('code');
      itext(' with the intermediate result(i.e, 4) and gets the final result of 5. We can see that data flows from ');
      ie_open('code');
      itext('f1');
      ie_close('code');
      itext(' to ');
      ie_open('code');
      itext('f2');
      ie_close('code');
      itext(', namely, bottom-up, or right-to-left.');
      ie_close('p');
      ie_open('p');
      itext('And this is simply how functional composition works.');
      ie_close('p');
      ie_open('p');
      itext('If you are not quite comfortable with that, you can also try this:');
      ie_close('p');
      $templateAlias2({ code: 'Func f = (Func)R.pipe.run(\n    R.multiply.apply(2),\n    R.add.apply(1)\n);\nInteger result = (Integer)f.run(2);\n// 5', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('It is actually the same as the previous one, only different in the composition style, namely, top-bottom, or left-to-right.');
      ie_close('p');
      ie_open('p');
      itext('Getting familiar with functional composition is the approach to harness the power of functional programming. It takes time to sharpen the skill, and still there are more tools in functional composition in R.apex waiting to be discovered.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param2017 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'mMKhV.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var mMKhV = function (_Component) {
  _inherits(mMKhV, _Component);

  function mMKhV() {
    _classCallCheck(this, mMKhV);

    return _possibleConstructorReturn(this, (mMKhV.__proto__ || Object.getPrototypeOf(mMKhV)).apply(this, arguments));
  }

  return mMKhV;
}(_metalComponent2.default);

_metalSoy2.default.register(mMKhV, templates);
exports.mMKhV = mMKhV;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[314]);