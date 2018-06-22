var pageComponent =
webpackJsonppageComponent([30],{

/***/ 268:
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

var _indexSoy = __webpack_require__(269);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ulACm = function (_Component) {
  _inherits(ulACm, _Component);

  function ulACm() {
    _classCallCheck(this, ulACm);

    return _possibleConstructorReturn(this, (ulACm.__proto__ || Object.getPrototypeOf(ulACm)).apply(this, arguments));
  }

  return ulACm;
}(_metalComponent2.default);

;

_metalSoy2.default.register(ulACm, _indexSoy2.default);

exports.default = ulACm;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.ulACm = undefined;

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

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace ulACm.
   * @public
   */

  goog.module('ulACm.incrementaldom');

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
    var param315 = function param315() {
      ie_open('h6');
      var dyn27 = opt_data.page.description;
      if (typeof dyn27 == 'function') dyn27();else if (dyn27 != null) itext(dyn27);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('What is a Func object?');
      ie_close('h2');
      ie_open('p');
      itext('A Func object represents a function, namely a block of business logic. Users can create new functions by composing smaller functions, or extend from this class to create any custom functions.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('How to create a Func object?');
      ie_close('h2');
      ie_open('p');
      itext('Here is a sample custom function:');
      ie_close('p');
      $templateAlias2({ code: 'class CustomFunc extends Func {\n    public CustomFunc() {\n        super(2);\n    }\n    public override Object exec(Object arg1, Object arg2) {\n        // TODO\n        return null;\n    }\n}\n\nFunc f = new CustomFunc();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('In the constructor, we may specify the length of the Func by calling ');
      ie_open('code');
      itext('super(2)');
      ie_close('code');
      itext(', or we can skip this to allow a variadic argument function.');
      ie_close('p');
      ie_open('p');
      itext('There are a few ');
      ie_open('code');
      itext('exec');
      ie_close('code');
      itext(' methods from Func that we can override to provide our own implementations.');
      ie_close('p');
      ie_open('p');
      itext('Extend ');
      ie_open('code');
      itext('exec()');
      ie_close('code');
      itext(' if our Func does not accept any argument.');
      ie_close('p');
      ie_open('p');
      itext('Extend ');
      ie_open('code');
      itext('exec(Object)');
      ie_close('code');
      itext(' if our Func accepts one argument.');
      ie_close('p');
      ie_open('p');
      itext('Extend ');
      ie_open('code');
      itext('exec(Object, Object)');
      ie_close('code');
      itext(' if our Func accepts two arguments.');
      ie_close('p');
      ie_open('p');
      itext('Extend ');
      ie_open('code');
      itext('exec(Object, Object, Object)');
      ie_close('code');
      itext(' if our Func accepts three arguments.');
      ie_close('p');
      ie_open('p');
      itext('Extend ');
      ie_open('code');
      itext('execMore(List<Object>)');
      ie_close('code');
      itext(' if our Func accepts more than three arguments.');
      ie_close('p');
      ie_open('p');
      itext('Extend ');
      ie_open('code');
      itext('execN(List<Object>)');
      ie_close('code');
      itext(' if our Func accepts variadic arguments.');
      ie_close('p');
      ie_open('p');
      itext('Here is the guide to help us decide which one is invoked.');
      ie_close('p');
      ie_open('p');
      itext('If Func length is not specified, the ');
      ie_open('code');
      itext('exec');
      ie_close('code');
      itext(' method is invoked according to the actual number of arguments.');
      ie_close('p');
      ie_open('p');
      itext('If Func length is 0, only the ');
      ie_open('code');
      itext('exec()');
      ie_close('code');
      itext(' method is invoked.');
      ie_close('p');
      ie_open('p');
      itext('If Func length is 1, only the ');
      ie_open('code');
      itext('exec(Object)');
      ie_close('code');
      itext(' method is invoked.');
      ie_close('p');
      ie_open('p');
      itext('If Func length is 2, only the ');
      ie_open('code');
      itext('exec(Object, Object)');
      ie_close('code');
      itext(' method is invoked.');
      ie_close('p');
      ie_open('p');
      itext('If Func length is 3, only the ');
      ie_open('code');
      itext('exec(Object, Object, Object)');
      ie_close('code');
      itext(' method is invoked.');
      ie_close('p');
      ie_open('p');
      itext('If Func length is more than 3, only the ');
      ie_open('code');
      itext('execMore(List<Object>)');
      ie_close('code');
      itext(' method is invoked.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('How to invoke a Func object?');
      ie_close('h2');
      ie_open('p');
      itext('There are two stages when invoking a Func:');
      ie_close('p');
      ie_open('p');
      itext('a) Applying (optional)');
      ie_close('p');
      ie_open('p');
      itext('Applying is the stage where the Func receives some arguments and stores them for invocation in the future.');
      ie_close('p');
      ie_open('p');
      itext('Here is how we apply a Func:');
      ie_close('p');
      $templateAlias2({ code: 'Func f = R.equals.apply(1);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('If we want to apply more than 3 arguments, we have to use:');
      ie_close('p');
      $templateAlias2({ code: 'Func f = SomeFunc.applyN(a, b, c, d, ...);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Each applying will in fact create a new Func, which means that the original Func will not get affected.');
      ie_close('p');
      ie_open('p');
      itext('b) Running');
      ie_close('p');
      ie_open('p');
      itext('Running is the stage where the Func uses all the arguments it has collected and produces the final result.');
      ie_close('p');
      ie_open('p');
      itext('Here is how we run a Func:');
      ie_close('p');
      $templateAlias2({ code: 'Object result = f.run(1);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('If we want to run the func with more than 3 arguments, we have to use:');
      ie_close('p');
      $templateAlias2({ code: 'Object result = f.runN(a, b, c, d, ...);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Suppose Func f takes three arugments, the following cases are equivalent:');
      ie_close('p');
      $templateAlias2({ code: 'f.apply(a, b, c).run() ===\nf.run(a, b, c) ===\nf.apply(a).apply(b).apply(c).run() ===\nf.apply(a).apply(b, c).run() ===\nf.apply(a, b).apply(c)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Func Package');
      ie_close('h2');
      ie_open('p');
      itext('In R.apex, you can bundle your Funcs and export them as a Func Package. Func packages can be used by others without interacting directly with your apex classes.');
      ie_close('p');
      ie_open('p');
      itext('Here is how we define a Func Package:');
      ie_close('p');
      $templateAlias2({ code: 'public class CustomPackage extends Func.DefaultPackage {\n    public override void init() {\n        this.export(\'plus\', R.add);\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('And you can then require the Func somewhere else.');
      ie_close('p');
      $templateAlias2({ code: 'Func plus = Func.require(\'Custom.plus\');\nObject result = plus.run(1, 2);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('The best practice is that you put your package class as a top level class, so that you leave the freedom to users, who can then decide if they are going to use the Func Package, which relies on R.apex.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param315 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'ulACm.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var ulACm = function (_Component) {
  _inherits(ulACm, _Component);

  function ulACm() {
    _classCallCheck(this, ulACm);

    return _possibleConstructorReturn(this, (ulACm.__proto__ || Object.getPrototypeOf(ulACm)).apply(this, arguments));
  }

  return ulACm;
}(_metalComponent2.default);

_metalSoy2.default.register(ulACm, templates);
exports.ulACm = ulACm;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[268]);