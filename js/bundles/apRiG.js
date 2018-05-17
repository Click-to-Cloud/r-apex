var pageComponent =
webpackJsonppageComponent([7],{

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

var _step_2Soy = __webpack_require__(273);

var _step_2Soy2 = _interopRequireDefault(_step_2Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var apRiG = function (_Component) {
  _inherits(apRiG, _Component);

  function apRiG() {
    _classCallCheck(this, apRiG);

    return _possibleConstructorReturn(this, (apRiG.__proto__ || Object.getPrototypeOf(apRiG)).apply(this, arguments));
  }

  return apRiG;
}(_metalComponent2.default);

;

_metalSoy2.default.register(apRiG, _step_2Soy2.default);

exports.default = apRiG;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.apRiG = undefined;

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

  // This file was automatically generated from step_2.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace apRiG.
   * @public
   */

  goog.module('apRiG.incrementaldom');

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
    var param1918 = function param1918() {
      ie_open('h2');
      var dyn45 = opt_data.page.title;
      if (typeof dyn45 == 'function') dyn45();else if (dyn45 != null) itext(dyn45);
      ie_close('h2');
      ie_open('p');
      itext('Apex does not support first class functions, and we have NO WAY to get around it. However, we can create an invocable object camouflaged as a function, and it is referred to as a Func. Or more precisely, it is an instance of class Func. In R.apex, we roughly refer to instances of Func when we mention functions, to make things clear.');
      ie_close('p');
      ie_open('p');
      itext('Here is how we create a function that returns ');
      ie_open('code');
      itext('Hello World');
      ie_close('code');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: 'public class HelloWorldFunc extends Func {\n    public HelloWorldFunc() {\n        super(0);\n    }\n\n    public override Object exec() {\n        return \'Hello World\';\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('And then we get a function!');
      ie_close('p');
      $templateAlias2({ code: 'Func helloworld = new HelloWorldFunc();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Let\'s invoke this function.');
      ie_close('p');
      $templateAlias2({ code: 'String message = (String)helloworld.run();\nSystem.debug(message);\n// Hello World', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('That\'s how easy it is to create a function in R.apex.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param1918 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'apRiG.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var apRiG = function (_Component) {
  _inherits(apRiG, _Component);

  function apRiG() {
    _classCallCheck(this, apRiG);

    return _possibleConstructorReturn(this, (apRiG.__proto__ || Object.getPrototypeOf(apRiG)).apply(this, arguments));
  }

  return apRiG;
}(_metalComponent2.default);

_metalSoy2.default.register(apRiG, templates);
exports.apRiG = apRiG;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[272]);