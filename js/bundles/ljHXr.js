var pageComponent =
webpackJsonppageComponent([21],{

/***/ 286:
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

var _logicSoy = __webpack_require__(287);

var _logicSoy2 = _interopRequireDefault(_logicSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ljHXr = function (_Component) {
  _inherits(ljHXr, _Component);

  function ljHXr() {
    _classCallCheck(this, ljHXr);

    return _possibleConstructorReturn(this, (ljHXr.__proto__ || Object.getPrototypeOf(ljHXr)).apply(this, arguments));
  }

  return ljHXr;
}(_metalComponent2.default);

;

_metalSoy2.default.register(ljHXr, _logicSoy2.default);

exports.default = ljHXr;

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.ljHXr = undefined;

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

  // This file was automatically generated from logic.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace ljHXr.
   * @public
   */

  goog.module('ljHXr.incrementaldom');

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
    var param1059 = function param1059() {
      ie_open('h6');
      var dyn36 = opt_data.page.description;
      if (typeof dyn36 == 'function') dyn36();else if (dyn36 != null) itext(dyn36);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('allPass');
      ie_close('h2');
      ie_open('p');
      itext('Create a function that combines all predicates with \'and\'.');
      ie_close('p');
      $templateAlias2({ code: 'Func f = (Func)R.allPass.run(\n    R.startsWith.apply(\'c\'),\n    R.endsWith.apply(\'t\')\n);\nsystem.debug(f.run(\'cat\'));\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('anyPass');
      ie_close('h2');
      ie_open('p');
      itext('Create a function that combines all predicates with \'or\'.');
      ie_close('p');
      $templateAlias2({ code: 'Func f = (Func)R.anyPass.run(\n    R.startsWith.apply(\'c\'),\n    R.endsWith.apply(\'t\')\n);\nsystem.debug(f.run(\'cc\'));\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('complement');
      ie_close('h2');
      ie_open('p');
      itext('Create a function that negate the predicate.');
      ie_close('p');
      $templateAlias2({ code: 'Func f = (Func)R.complement.run(R.equals.apply(\'cat\'));\nsystem.debug(f.run(\'cat\'));\n// false', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('doAnd');
      ie_close('h2');
      ie_open('p');
      itext('Test logic \'and\'.');
      ie_close('p');
      $templateAlias2({ code: 'R.doAnd.run(true, false)\n// false', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('doNot');
      ie_close('h2');
      ie_open('p');
      itext('Test logic \'not\'.');
      ie_close('p');
      $templateAlias2({ code: 'R.doNot.run(false)\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('doOr');
      ie_close('h2');
      ie_open('p');
      itext('Test logic \'or\'.');
      ie_close('p');
      $templateAlias2({ code: 'R.doOr.run(true, false)\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param1059 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'ljHXr.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var ljHXr = function (_Component) {
  _inherits(ljHXr, _Component);

  function ljHXr() {
    _classCallCheck(this, ljHXr);

    return _possibleConstructorReturn(this, (ljHXr.__proto__ || Object.getPrototypeOf(ljHXr)).apply(this, arguments));
  }

  return ljHXr;
}(_metalComponent2.default);

_metalSoy2.default.register(ljHXr, templates);
exports.ljHXr = ljHXr;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[286]);