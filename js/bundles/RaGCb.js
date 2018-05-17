var pageComponent =
webpackJsonppageComponent([6],{

/***/ 308:
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

var _step_3Soy = __webpack_require__(309);

var _step_3Soy2 = _interopRequireDefault(_step_3Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RaGCb = function (_Component) {
  _inherits(RaGCb, _Component);

  function RaGCb() {
    _classCallCheck(this, RaGCb);

    return _possibleConstructorReturn(this, (RaGCb.__proto__ || Object.getPrototypeOf(RaGCb)).apply(this, arguments));
  }

  return RaGCb;
}(_metalComponent2.default);

;

_metalSoy2.default.register(RaGCb, _step_3Soy2.default);

exports.default = RaGCb;

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.RaGCb = undefined;

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

  // This file was automatically generated from step_3.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace RaGCb.
   * @public
   */

  goog.module('RaGCb.incrementaldom');

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
    var param1944 = function param1944() {
      ie_open('h2');
      var dyn46 = opt_data.page.title;
      if (typeof dyn46 == 'function') dyn46();else if (dyn46 != null) itext(dyn46);
      ie_close('h2');
      ie_open('p');
      ie_open('code');
      itext('HelloWorldFunc');
      ie_close('code');
      itext(' does not make much sense, though it does a good illustration. Normally we want functions that accept arguments to do complex business logic. Here comes the ');
      ie_open('code');
      itext('AddFunc');
      ie_close('code');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: 'public class AddFunc extends Func {\n    public AddFunc() {\n        super(2);\n    }\n\n    public override Object exec(Object arg1, Object arg2) {\n        Integer a = (Integer)arg1;\n        Integer b = (Integer)arg2;\n        return a + b;\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Quite simple, right? In the constructor, we denote that this AddFunc takes two arguments(the length of the function), and correspondingly we override the exec(Object, Object) method from Func to have our custom implementation.');
      ie_close('p');
      ie_open('p');
      itext('Try it.');
      ie_close('p');
      $templateAlias2({ code: 'Func add = new AddFunc();\nInteger result = (Integer)add.run(1, 2);\n// 3', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('To conclude, we set the length of the function in its constructor, and override ');
      ie_open('code');
      itext('exec(...)');
      ie_close('code');
      itext(' method with correct arguments.');
      ie_close('p');
      ie_open('p');
      itext('For example, if the length of the function is 3, we have ');
      ie_open('code');
      itext('exec(Object, Object, Object)');
      ie_close('code');
      itext('. Easy, yeah?');
      ie_close('p');
      ie_open('p');
      itext('What about a function with a length of 4? ');
      ie_open('code');
      itext('exec(Object, Object, Object, Object)');
      ie_close('code');
      itext('?');
      ie_close('p');
      ie_open('p');
      itext('Nay, when the length goes over 3, we have ');
      ie_open('code');
      itext('execMore(List<Object>)');
      ie_close('code');
      itext(' to override.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param1944 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'RaGCb.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var RaGCb = function (_Component) {
  _inherits(RaGCb, _Component);

  function RaGCb() {
    _classCallCheck(this, RaGCb);

    return _possibleConstructorReturn(this, (RaGCb.__proto__ || Object.getPrototypeOf(RaGCb)).apply(this, arguments));
  }

  return RaGCb;
}(_metalComponent2.default);

_metalSoy2.default.register(RaGCb, templates);
exports.RaGCb = RaGCb;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[308]);