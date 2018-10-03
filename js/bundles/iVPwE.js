var pageComponent =
webpackJsonppageComponent([15],{

/***/ 272:
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

var _creationSoy = __webpack_require__(273);

var _creationSoy2 = _interopRequireDefault(_creationSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iVPwE = function (_Component) {
  _inherits(iVPwE, _Component);

  function iVPwE() {
    _classCallCheck(this, iVPwE);

    return _possibleConstructorReturn(this, (iVPwE.__proto__ || Object.getPrototypeOf(iVPwE)).apply(this, arguments));
  }

  return iVPwE;
}(_metalComponent2.default);

;

_metalSoy2.default.register(iVPwE, _creationSoy2.default);

exports.default = iVPwE;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.iVPwE = undefined;

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

  // This file was automatically generated from creation.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace iVPwE.
   * @public
   */

  goog.module('iVPwE.incrementaldom');

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
    var param326 = function param326() {
      ie_open('h6');
      var dyn28 = opt_data.page.description;
      if (typeof dyn28 == 'function') dyn28();else if (dyn28 != null) itext(dyn28);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('emptyList');
      ie_close('h2');
      ie_open('p');
      itext('Factory function to create instance of R(empty list).');
      ie_close('p');
      $templateAlias2({ code: 'R.emptyList().size().debug(); // 0', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('emptyMap');
      ie_close('h2');
      ie_open('p');
      itext('Factory function to create instance of R(empty set).');
      ie_close('p');
      $templateAlias2({ code: 'R.emptySet().size().debug(); // 0', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('emptySet');
      ie_close('h2');
      ie_open('p');
      itext('Factory function to create instance of R(empty set).');
      ie_close('p');
      $templateAlias2({ code: 'R.emptySet().size().debug(); // 0', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('emptyString');
      ie_close('h2');
      ie_open('p');
      itext('Factory function to create instance of R(empty string).');
      ie_close('p');
      $templateAlias2({ code: 'R.emptyString().size().debug(); // 0', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('of');
      ie_close('h2');
      ie_open('p');
      itext('Factory function to create instance of R.');
      ie_close('p');
      $templateAlias2({ code: 'R.of(\'message\').size().debug(); // 7', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('range');
      ie_close('h2');
      ie_open('p');
      itext('Factory function to create instance of R(list of decimals in range).');
      ie_close('p');
      $templateAlias2({ code: 'R.range(1, 3).debug(); // (1, 2)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('with');
      ie_close('h2');
      ie_open('p');
      itext('Factory function to create instance of R(List).');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1).size().debug(); // 1\nR.with(1, 2).size().debug(); // 2\nR.with(1, 2, 3).size().debug(); // 3', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '8');
      ie_open('h2');
      itext('withObj');
      ie_close('h2');
      ie_open('p');
      itext('Factory function to create instance of R(Map).');
      ie_close('p');
      $templateAlias2({ code: 'R.withObj(\'name\', \'test\').size().debug(); // 1', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param326 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'iVPwE.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var iVPwE = function (_Component) {
  _inherits(iVPwE, _Component);

  function iVPwE() {
    _classCallCheck(this, iVPwE);

    return _possibleConstructorReturn(this, (iVPwE.__proto__ || Object.getPrototypeOf(iVPwE)).apply(this, arguments));
  }

  return iVPwE;
}(_metalComponent2.default);

_metalSoy2.default.register(iVPwE, templates);
exports.iVPwE = iVPwE;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[272]);