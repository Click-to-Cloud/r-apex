var pageComponent =
webpackJsonppageComponent([17],{

/***/ 310:
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

var _utilitySoy = __webpack_require__(311);

var _utilitySoy2 = _interopRequireDefault(_utilitySoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osFWo = function (_Component) {
  _inherits(osFWo, _Component);

  function osFWo() {
    _classCallCheck(this, osFWo);

    return _possibleConstructorReturn(this, (osFWo.__proto__ || Object.getPrototypeOf(osFWo)).apply(this, arguments));
  }

  return osFWo;
}(_metalComponent2.default);

;

_metalSoy2.default.register(osFWo, _utilitySoy2.default);

exports.default = osFWo;

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.osFWo = undefined;

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

  // This file was automatically generated from utility.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace osFWo.
   * @public
   */

  goog.module('osFWo.incrementaldom');

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
    var param1841 = function param1841() {
      ie_open('h6');
      var dyn43 = opt_data.page.description;
      if (typeof dyn43 == 'function') dyn43();else if (dyn43 != null) itext(dyn43);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('F');
      ie_close('h2');
      ie_open('p');
      itext('A function that always returns false.');
      ie_close('p');
      $templateAlias2({ code: 'R.F.run()\n// false', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('T');
      ie_close('h2');
      ie_open('p');
      itext('A function that always returns true.');
      ie_close('p');
      $templateAlias2({ code: 'R.T.run()\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('compact');
      ie_close('h2');
      ie_open('p');
      itext('Remove any null value from the elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.compact.run(R.with(1, null, 2))\n// (1, 2)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('debug');
      ie_close('h2');
      ie_open('p');
      itext('Print the debug log.');
      ie_close('p');
      $templateAlias2({ code: 'R.debug.run(1)\n// 1', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('defaultTo');
      ie_close('h2');
      ie_open('p');
      itext('Default to a value.');
      ie_close('p');
      $templateAlias2({ code: 'R.defaultTo.run(5, null)\n// 5', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('doClone');
      ie_close('h2');
      ie_open('p');
      itext('Get the clone.');
      ie_close('p');
      $templateAlias2({ code: 'R.doClone.run(new Account())\n// Account:{}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('isNil');
      ie_close('h2');
      ie_open('p');
      itext('Check if it is null.');
      ie_close('p');
      $templateAlias2({ code: 'R.isNil.run(null)\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '8');
      ie_open('h2');
      itext('isNotNil');
      ie_close('h2');
      ie_open('p');
      itext('Check if it is not null.');
      ie_close('p');
      $templateAlias2({ code: 'R.isNotNil.run(null)\n// false', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '9');
      ie_open('h2');
      itext('isNotNull');
      ie_close('h2');
      ie_open('p');
      itext('Same as ');
      ie_open('code');
      itext('isNotNil');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '10');
      ie_open('h2');
      itext('isNull');
      ie_close('h2');
      ie_open('p');
      itext('Same as ');
      ie_open('code');
      itext('isNil');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '11');
      ie_open('h2');
      itext('isNumber');
      ie_close('h2');
      ie_open('p');
      itext('Check if it is number.');
      ie_close('p');
      $templateAlias2({ code: 'R.isNumber.run(1)\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '12');
      ie_open('h2');
      itext('noop');
      ie_close('h2');
      ie_open('p');
      itext('No op function.');
      ie_close('p');
      $templateAlias2({ code: 'R.noop.run()\n// null', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param1841 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'osFWo.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var osFWo = function (_Component) {
  _inherits(osFWo, _Component);

  function osFWo() {
    _classCallCheck(this, osFWo);

    return _possibleConstructorReturn(this, (osFWo.__proto__ || Object.getPrototypeOf(osFWo)).apply(this, arguments));
  }

  return osFWo;
}(_metalComponent2.default);

_metalSoy2.default.register(osFWo, templates);
exports.osFWo = osFWo;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[310]);