var pageComponent =
webpackJsonppageComponent([20],{

/***/ 304:
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

var _mapSoy = __webpack_require__(305);

var _mapSoy2 = _interopRequireDefault(_mapSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mFsgW = function (_Component) {
  _inherits(mFsgW, _Component);

  function mFsgW() {
    _classCallCheck(this, mFsgW);

    return _possibleConstructorReturn(this, (mFsgW.__proto__ || Object.getPrototypeOf(mFsgW)).apply(this, arguments));
  }

  return mFsgW;
}(_metalComponent2.default);

;

_metalSoy2.default.register(mFsgW, _mapSoy2.default);

exports.default = mFsgW;

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.mFsgW = undefined;

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

  // This file was automatically generated from map.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace mFsgW.
   * @public
   */

  goog.module('mFsgW.incrementaldom');

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
    var param1049 = function param1049() {
      ie_open('h6');
      var dyn36 = opt_data.page.description;
      if (typeof dyn36 == 'function') dyn36();else if (dyn36 != null) itext(dyn36);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('doMerge');
      ie_close('h2');
      ie_open('p');
      itext('Merge the two objects.');
      ie_close('p');
      $templateAlias2({ code: 'R.doMerge.run(R.withObj(\'name\', \'b\'), R.withObj(\'name\', \'a\'))\n// {name=b}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('has');
      ie_close('h2');
      ie_open('p');
      itext('Check if the wrapped object has a non-null value of the field.');
      ie_close('p');
      $templateAlias2({ code: 'R.has.run(\'Description\', new Account())\n// false', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('invert');
      ie_close('h2');
      ie_open('p');
      itext('Invert the wrapped object, with values mapped by the same key added to a list.');
      ie_close('p');
      $templateAlias2({ code: 'R.invert.run(R.withObj(\'name\', \'test\'))\n// {name=test}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('invertObj');
      ie_close('h2');
      ie_open('p');
      itext('Invert the wrapped object.');
      ie_close('p');
      $templateAlias2({ code: 'R.invertObj.run(R.withObj(\'name\', \'test\'))\n// {name=test}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('keys');
      ie_close('h2');
      ie_open('p');
      itext('Get the keys.');
      ie_close('p');
      $templateAlias2({ code: 'R.keys.run(R.withObj(\'name\', \'test\'))\n// {name}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('omit');
      ie_close('h2');
      ie_open('p');
      itext('Omit the fields and pick remaining fields into a map.');
      ie_close('p');
      $templateAlias2({ code: 'R.omit.run(R.with(\'Description\'), new Account(Description=\'desc\', FirstName=\'name\'))\n// {FirstName=name}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('pick');
      ie_close('h2');
      ie_open('p');
      itext('Pick the fields into a map.');
      ie_close('p');
      $templateAlias2({ code: 'R.pick.run(R.with(\'Description\'), new Account(Description=\'desc\', FirstName=\'name\'))\n// {Description=desc}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '8');
      ie_open('h2');
      itext('prop');
      ie_close('h2');
      ie_open('p');
      itext('Get the property value.');
      ie_close('p');
      $templateAlias2({ code: 'R.prop.run(\'Description\', new Account(Description=\'desc\'))\n// desc', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '9');
      ie_open('h2');
      itext('propEq');
      ie_close('h2');
      ie_open('p');
      itext('Check that its property value equals given value.');
      ie_close('p');
      $templateAlias2({ code: 'R.propEq.run(\'Description\', \'desc\', new Account(Description=\'desc\'))\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '10');
      ie_open('h2');
      itext('propOr');
      ie_close('h2');
      ie_open('p');
      itext('Get the property value, or return the default value if it is null.');
      ie_close('p');
      $templateAlias2({ code: 'R.propOr.run(\'Description\', \'desc\', new Account())\n// desc', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '11');
      ie_open('h2');
      itext('propSObject');
      ie_close('h2');
      ie_open('p');
      itext('Get the property value by \'getSObject\'.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '12');
      ie_open('h2');
      itext('propSObjects');
      ie_close('h2');
      ie_open('p');
      itext('Get the property value by \'getSObjects\'.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '13');
      ie_open('h2');
      itext('propSatisfies');
      ie_close('h2');
      ie_open('p');
      itext('Check if the property value satisfies the predicate.');
      ie_close('p');
      $templateAlias2({ code: 'R.propSatisfies.run(\'Description\', R.isNotNull, new Account())\n// false', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '14');
      ie_open('h2');
      itext('values');
      ie_close('h2');
      ie_open('p');
      itext('Get the values.');
      ie_close('p');
      $templateAlias2({ code: 'R.values.run(R.withObj(\'name\', \'test\'))\n// (test)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '15');
      ie_open('h2');
      itext('whereEq');
      ie_close('h2');
      ie_open('p');
      itext('Check if matching the key-values.');
      ie_close('p');
      $templateAlias2({ code: 'R.whereEq.run(R.withObj(\'Description\', \'desc\'), new Account(Description=\'desc\'))\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '16');
      ie_open('h2');
      itext('whereSatisfies');
      ie_close('h2');
      ie_open('p');
      itext('Check if matching the key-predicates.');
      ie_close('p');
      $templateAlias2({ code: 'R.whereSatisfies.run(R.withObj(\'Description\', R.isNotNull), new Account(Description=\'desc\'))\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param1049 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'mFsgW.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var mFsgW = function (_Component) {
  _inherits(mFsgW, _Component);

  function mFsgW() {
    _classCallCheck(this, mFsgW);

    return _possibleConstructorReturn(this, (mFsgW.__proto__ || Object.getPrototypeOf(mFsgW)).apply(this, arguments));
  }

  return mFsgW;
}(_metalComponent2.default);

_metalSoy2.default.register(mFsgW, templates);
exports.mFsgW = mFsgW;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[304]);