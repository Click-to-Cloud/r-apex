var pageComponent =
webpackJsonppageComponent([4],{

/***/ 312:
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

var _step_5Soy = __webpack_require__(313);

var _step_5Soy2 = _interopRequireDefault(_step_5Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CTAql = function (_Component) {
  _inherits(CTAql, _Component);

  function CTAql() {
    _classCallCheck(this, CTAql);

    return _possibleConstructorReturn(this, (CTAql.__proto__ || Object.getPrototypeOf(CTAql)).apply(this, arguments));
  }

  return CTAql;
}(_metalComponent2.default);

;

_metalSoy2.default.register(CTAql, _step_5Soy2.default);

exports.default = CTAql;

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.CTAql = undefined;

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

  // This file was automatically generated from step_5.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace CTAql.
   * @public
   */

  goog.module('CTAql.incrementaldom');

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
    var param1981 = function param1981() {
      ie_open('h2');
      var dyn48 = opt_data.page.title;
      if (typeof dyn48 == 'function') dyn48();else if (dyn48 != null) itext(dyn48);
      ie_close('h2');
      ie_open('p');
      itext('Well, all is good until we find something is missing. In functional programming, we can easily partially apply a function with arguments.');
      ie_close('p');
      ie_open('p');
      itext('Say, we have a function, ');
      ie_open('code');
      itext('f: (a, b, c) => a + b + c');
      ie_close('code');
      itext(', and we should fairly easily find out that:');
      ie_close('p');
      $templateAlias2({ code: 'var newFa = f(a);\nvar newFb = newFa(b);\nvar newFc = newFb(c);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Every time function ');
      ie_open('code');
      itext('f');
      ie_close('code');
      itext(' is applied part of the arguments it expects, it will save them and return a new function. This is great, as it guarrantees us the following:');
      ie_close('p');
      $templateAlias2({ code: 'f(a, b, c) ===\nf(a, b)(c) ===\nf(a)(b, c) ===\nf(a)(b)(c)', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Beautiful, yeah? We do hope that we can grant this magic to our function. Fortunately, R.apex has always been built with this idea in mind and implementing this is nothing but a piece of cake. See this:');
      ie_close('p');
      $templateAlias2({ code: 'Func f1 = add.apply(1);\nFunc f2 = f1.apply(2);\nInteger result = (Integer)f2.run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Here, we have formally introduced ');
      ie_open('code');
      itext('apply');
      ie_close('code');
      itext(', as a builtin method of Func. And also notice the biggest caveat in R.apex. ');
      ie_open('code');
      itext('Apply');
      ie_close('code');
      itext(' does ');
      ie_open('strong');
      itext('not');
      ie_close('strong');
      itext(' trigger function invocation, while ');
      ie_open('code');
      itext('run');
      ie_close('code');
      itext(' does. Even if the function has received enough arguments, it will not run until ');
      ie_open('code');
      itext('run');
      ie_close('code');
      itext(' is explicitly called. Naturally, we have partial application available here.');
      ie_close('p');
      $templateAlias2({ code: 'f.run(a, b, c) ===\nf.apply(a, b, c).run() ===\nf.apply(a, b).apply(c).run() ===\nf.apply(a).apply(b, c).run() ===\nf.apply(a).apply(b).apply(c).run()', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Another thing to notice is that in functional programming, we tend to put the data we are manipulating in the last position in the argument list. For example,');
      ie_close('p');
      $templateAlias2({ code: 'R.filter.run(R.isNotNull, myList);\n// NOT\n// R.filter.run(myList, R.isNotNull);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('This is for the convenience of functional composition, which we will cover in the next section.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param1981 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'CTAql.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var CTAql = function (_Component) {
  _inherits(CTAql, _Component);

  function CTAql() {
    _classCallCheck(this, CTAql);

    return _possibleConstructorReturn(this, (CTAql.__proto__ || Object.getPrototypeOf(CTAql)).apply(this, arguments));
  }

  return CTAql;
}(_metalComponent2.default);

_metalSoy2.default.register(CTAql, templates);
exports.CTAql = CTAql;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[312]);