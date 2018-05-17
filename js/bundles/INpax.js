var pageComponent =
webpackJsonppageComponent([25],{

/***/ 276:
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

var _conversionSoy = __webpack_require__(277);

var _conversionSoy2 = _interopRequireDefault(_conversionSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var INpax = function (_Component) {
  _inherits(INpax, _Component);

  function INpax() {
    _classCallCheck(this, INpax);

    return _possibleConstructorReturn(this, (INpax.__proto__ || Object.getPrototypeOf(INpax)).apply(this, arguments));
  }

  return INpax;
}(_metalComponent2.default);

;

_metalSoy2.default.register(INpax, _conversionSoy2.default);

exports.default = INpax;

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.INpax = undefined;

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
   * @fileoverview Templates in namespace INpax.
   * @public
   */

  goog.module('INpax.incrementaldom');

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
    var param484 = function param484() {
      ie_open('h6');
      var dyn31 = opt_data.page.description;
      if (typeof dyn31 == 'function') dyn31();else if (dyn31 != null) itext(dyn31);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Single Value Conversion');
      ie_close('h2');
      ie_open('p');
      itext('Convert single values. Examples are like:');
      ie_close('p');
      $templateAlias2({ code: 'Object a = ...;\nString str = R.toString.run(a);', mode: 'javascript' }, null, opt_ijData);
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Type');
      ie_close('th');
      ie_open('th');
      itext('Func');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
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
      itext('Integer');
      ie_close('td');
      ie_open('td');
      itext('toInteger');
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
      itext('Double');
      ie_close('td');
      ie_open('td');
      itext('toDouble');
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
      itext('String');
      ie_close('td');
      ie_open('td');
      itext('toString');
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
      itext('Time');
      ie_close('td');
      ie_open('td');
      itext('toTime');
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
      itext('Func');
      ie_close('td');
      ie_open('td');
      itext('toFunc');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('List');
      ie_close('td');
      ie_open('td');
      itext('toList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Set');
      ie_close('td');
      ie_open('td');
      itext('toSet');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Map');
      ie_close('td');
      ie_open('td');
      itext('toMap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('R.Pair');
      ie_close('td');
      ie_open('td');
      itext('toPair');
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
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('List Value Conversion');
      ie_close('h2');
      ie_open('p');
      itext('Convert list values. Examples are like:');
      ie_close('p');
      $templateAlias2({ code: 'Object a = ...;\nList<String> strList = R.toStringList.run(a);', mode: 'javascript' }, null, opt_ijData);
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Type');
      ie_close('th');
      ie_open('th');
      itext('Func');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('Boolean');
      ie_close('td');
      ie_open('td');
      itext('toBooleanList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Integer');
      ie_close('td');
      ie_open('td');
      itext('toIntegerList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Long');
      ie_close('td');
      ie_open('td');
      itext('toLongList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Double');
      ie_close('td');
      ie_open('td');
      itext('toDoubleList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Decimal');
      ie_close('td');
      ie_open('td');
      itext('toDecimalList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('String');
      ie_close('td');
      ie_open('td');
      itext('toStringList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Date');
      ie_close('td');
      ie_open('td');
      itext('toDateList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Time');
      ie_close('td');
      ie_open('td');
      itext('toTimeList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Datetime');
      ie_close('td');
      ie_open('td');
      itext('toDatetimeList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Func');
      ie_close('td');
      ie_open('td');
      itext('toFuncList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('R.Pair');
      ie_close('td');
      ie_open('td');
      itext('toPairList');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('SObject');
      ie_close('td');
      ie_open('td');
      itext('toSObjectList');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Map Value Conversion');
      ie_close('h2');
      ie_open('p');
      itext('Convert map values. Examples are like:');
      ie_close('p');
      $templateAlias2({ code: 'Object a = ...;\nMap<String, String> strMap = R.toStringMap.run(a);', mode: 'javascript' }, null, opt_ijData);
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Type');
      ie_close('th');
      ie_open('th');
      itext('Func');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('Boolean');
      ie_close('td');
      ie_open('td');
      itext('toBooleanMap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Integer');
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
      itext('toLongMap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Double');
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
      itext('toDecimalMap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('String');
      ie_close('td');
      ie_open('td');
      itext('toStringMap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Date');
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
      itext('toTimeMap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Datetime');
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
      itext('toFuncMap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('R.Pair');
      ie_close('td');
      ie_open('td');
      itext('toPairMap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('SObject');
      ie_close('td');
      ie_open('td');
      itext('toSObjectMap');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Conversion Check');
      ie_close('h2');
      ie_open('p');
      itext('Check if conversions can be made. Examples are like:');
      ie_close('p');
      $templateAlias2({ code: 'Object a = ...;\nBoolean b = R.isStringLike.run(a);', mode: 'javascript' }, null, opt_ijData);
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Type');
      ie_close('th');
      ie_open('th');
      itext('Func');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('String');
      ie_close('td');
      ie_open('td');
      itext('isStringLike');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Func');
      ie_close('td');
      ie_open('td');
      itext('isFuncLike');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('List');
      ie_close('td');
      ie_open('td');
      itext('isListLike');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Set');
      ie_close('td');
      ie_open('td');
      itext('isSetLike');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Map');
      ie_close('td');
      ie_open('td');
      itext('isMapLike');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('R.Pair');
      ie_close('td');
      ie_open('td');
      itext('isPairLike');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('SObject');
      ie_close('td');
      ie_open('td');
      itext('isSObjectLike');
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
    $templateAlias1(soy.$$assignDefaults({ content: param484 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'INpax.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var INpax = function (_Component) {
  _inherits(INpax, _Component);

  function INpax() {
    _classCallCheck(this, INpax);

    return _possibleConstructorReturn(this, (INpax.__proto__ || Object.getPrototypeOf(INpax)).apply(this, arguments));
  }

  return INpax;
}(_metalComponent2.default);

_metalSoy2.default.register(INpax, templates);
exports.INpax = INpax;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[276]);