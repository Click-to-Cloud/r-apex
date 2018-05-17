var pageComponent =
webpackJsonppageComponent([16],{

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

var _conversionSoy = __webpack_require__(313);

var _conversionSoy2 = _interopRequireDefault(_conversionSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pGiHY = function (_Component) {
  _inherits(pGiHY, _Component);

  function pGiHY() {
    _classCallCheck(this, pGiHY);

    return _possibleConstructorReturn(this, (pGiHY.__proto__ || Object.getPrototypeOf(pGiHY)).apply(this, arguments));
  }

  return pGiHY;
}(_metalComponent2.default);

;

_metalSoy2.default.register(pGiHY, _conversionSoy2.default);

exports.default = pGiHY;

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.pGiHY = undefined;

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

  // This file was automatically generated from conversion.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace pGiHY.
   * @public
   */

  goog.module('pGiHY.incrementaldom');

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
      itext('Conversion Methods');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Type');
      ie_close('th');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('Object');
      ie_close('td');
      ie_open('td');
      itext('toObject');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('List<Object>');
      ie_close('td');
      ie_open('td');
      itext('toList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Set<String>');
      ie_close('td');
      ie_open('td');
      itext('toSet');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Map<String, Object>');
      ie_close('td');
      ie_open('td');
      itext('toMap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('SObject');
      ie_close('td');
      ie_open('td');
      itext('toSObject');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('List<SObject>');
      ie_close('td');
      ie_open('td');
      itext('toSObjectList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Map<String, SObject>');
      ie_close('td');
      ie_open('td');
      itext('toSObjectMap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Integer');
      ie_close('td');
      ie_open('td');
      itext('toInteger');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('List<Integer>');
      ie_close('td');
      ie_open('td');
      itext('toIntegerList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Map<String, Integer>');
      ie_close('td');
      ie_open('td');
      itext('toIntegerMap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Long');
      ie_close('td');
      ie_open('td');
      itext('toLong');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('List<Long>');
      ie_close('td');
      ie_open('td');
      itext('toLongList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Map<String, Long>');
      ie_close('td');
      ie_open('td');
      itext('toLongMap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Double');
      ie_close('td');
      ie_open('td');
      itext('toDouble');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('List<Double>');
      ie_close('td');
      ie_open('td');
      itext('toDoubleList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Map<String, Double>');
      ie_close('td');
      ie_open('td');
      itext('toDoubleMap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Decimal');
      ie_close('td');
      ie_open('td');
      itext('toDecimal');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('List<Decimal>');
      ie_close('td');
      ie_open('td');
      itext('toDecimalList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Map<String, Decimal>');
      ie_close('td');
      ie_open('td');
      itext('toDecimalMap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('String');
      ie_close('td');
      ie_open('td');
      itext('toString');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('List<String>');
      ie_close('td');
      ie_open('td');
      itext('toStringList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Map<String, String>');
      ie_close('td');
      ie_open('td');
      itext('toStringMap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Boolean');
      ie_close('td');
      ie_open('td');
      itext('toBoolean');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('List<Boolean>');
      ie_close('td');
      ie_open('td');
      itext('toBooleanList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Map<String, Boolean>');
      ie_close('td');
      ie_open('td');
      itext('toBooleanMap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Date');
      ie_close('td');
      ie_open('td');
      itext('toDate');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('List<Date>');
      ie_close('td');
      ie_open('td');
      itext('toDateList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Map<String, Date>');
      ie_close('td');
      ie_open('td');
      itext('toDateMap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Time');
      ie_close('td');
      ie_open('td');
      itext('toTime');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('List<Time>');
      ie_close('td');
      ie_open('td');
      itext('toTimeList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Map<String, Time>');
      ie_close('td');
      ie_open('td');
      itext('toTimeMap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Datetime');
      ie_close('td');
      ie_open('td');
      itext('toDatetime');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('List<Datetime>');
      ie_close('td');
      ie_open('td');
      itext('toDatetimeList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Map<String, Datetime>');
      ie_close('td');
      ie_open('td');
      itext('toDatetimeMap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Func');
      ie_close('td');
      ie_open('td');
      itext('toFunc');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('List<Func>');
      ie_close('td');
      ie_open('td');
      itext('toFuncList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Map<String, Func>');
      ie_close('td');
      ie_open('td');
      itext('toFuncMap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Pair');
      ie_close('td');
      ie_open('td');
      itext('toPair');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('List<Pair>');
      ie_close('td');
      ie_open('td');
      itext('toPairList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Map<String, Pair>');
      ie_close('td');
      ie_open('td');
      itext('toPairMap');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Type Checking Methods');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Type');
      ie_close('th');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('List<Object>');
      ie_close('td');
      ie_open('td');
      itext('isList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Set<String>');
      ie_close('td');
      ie_open('td');
      itext('isSet');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Map<String, Object>');
      ie_close('td');
      ie_open('td');
      itext('isMap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('String');
      ie_close('td');
      ie_open('td');
      itext('isString');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
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
    $render.soyTemplateName = 'pGiHY.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var pGiHY = function (_Component) {
  _inherits(pGiHY, _Component);

  function pGiHY() {
    _classCallCheck(this, pGiHY);

    return _possibleConstructorReturn(this, (pGiHY.__proto__ || Object.getPrototypeOf(pGiHY)).apply(this, arguments));
  }

  return pGiHY;
}(_metalComponent2.default);

_metalSoy2.default.register(pGiHY, templates);
exports.pGiHY = pGiHY;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[312]);