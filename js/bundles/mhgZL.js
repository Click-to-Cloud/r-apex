var pageComponent =
webpackJsonppageComponent([24],{

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

var _functionSoy = __webpack_require__(287);

var _functionSoy2 = _interopRequireDefault(_functionSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mhgZL = function (_Component) {
  _inherits(mhgZL, _Component);

  function mhgZL() {
    _classCallCheck(this, mhgZL);

    return _possibleConstructorReturn(this, (mhgZL.__proto__ || Object.getPrototypeOf(mhgZL)).apply(this, arguments));
  }

  return mhgZL;
}(_metalComponent2.default);

;

_metalSoy2.default.register(mhgZL, _functionSoy2.default);

exports.default = mhgZL;

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.mhgZL = undefined;

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

  // This file was automatically generated from function.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace mhgZL.
   * @public
   */

  goog.module('mhgZL.incrementaldom');

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
    var param515 = function param515() {
      ie_open('h6');
      var dyn32 = opt_data.page.description;
      if (typeof dyn32 == 'function') dyn32();else if (dyn32 != null) itext(dyn32);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('always');
      ie_close('h2');
      ie_open('p');
      itext('Return a function which returns the value whenever called.');
      ie_close('p');
      $templateAlias2({ code: 'Func f = (Func)R.always.run(1);\nSystem.debug(f.run(2));', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('applySpec');
      ie_close('h2');
      ie_open('p');
      itext('Given a spec object recursively mapping properties to functions, creates a function producing an object of the same structure, by mapping each property to the result of calling its associated function with the supplied arguments.');
      ie_close('p');
      $templateAlias2({ code: 'Map<String, Object> spec = new Map<String, Object>{\n    \'add\' => R.add,\n    \'subtract\' => R.subtract\n};\nSystem.debug(R.applySpec.run(spec, 1, 2));\n// {add=3, subtract=-1}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('binary');
      ie_close('h2');
      ie_open('p');
      itext('Make the function accept only two arguments. See ');
      ie_open('code');
      itext('nAry');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('compose');
      ie_close('h2');
      ie_open('p');
      itext('Compose the functions in a composing style. Composed functions are executed from right to left.');
      ie_close('p');
      $templateAlias2({ code: 'Func f = (Func)R.pipe.run(\n    R.add.apply(1),\n    R.multiply.apply(2)\n);\nSystem.debug(f.run(1));\n// 3', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('converge');
      ie_close('h2');
      ie_open('p');
      itext('Accepts a converging function and branching functions and returns a new function. When invoked, this new function is applied to some arguments, each branching function is applied to those same arguments. The results of each branching function are passed as arguments to the converging function to produce the return value.');
      ie_close('p');
      $templateAlias2({ code: 'Func f = (Func)R.converge.run(\n    R.multiply,\n    R.add,\n    R.subtract\n);\nSystem.debug(f.run(1, 2));\n// -3', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('evlove');
      ie_close('h2');
      ie_open('p');
      itext('Creates a new object by recursively evolving a copy of object, according to the transformation functions.');
      ie_close('p');
      $templateAlias2({ code: 'R.evolve.run(new Map<String, Object>{ \'name\' => R.append.apply(\'$\') }, new Map<String, Object>{ \'name\' => \'test\' })\n// {name=test$}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('flip');
      ie_close('h2');
      ie_open('p');
      itext('Flip the first two arguments of a function.');
      ie_close('p');
      $templateAlias2({ code: 'Func f = (Func)R.flip.run(R.subtract);\nSystem.debug(f.run(1, 2));\n// 1', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '8');
      ie_open('h2');
      itext('identity');
      ie_close('h2');
      ie_open('p');
      itext('Return whatever is passed in.');
      ie_close('p');
      $templateAlias2({ code: 'R.identity.run(\'abc\')\n// abc', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '9');
      ie_open('h2');
      itext('juxt');
      ie_close('h2');
      ie_open('p');
      itext('Applies a list of functions to a list of values.');
      ie_close('p');
      $templateAlias2({ code: 'List<Func> fns = new List<Func>{ R.add, R.subtract };\nSystem.debug(R.juxt.run(fns, 1, 2));\n// (3, -1)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '10');
      ie_open('h2');
      itext('memoize');
      ie_close('h2');
      ie_open('p');
      itext('Wrap the function to make it memoizable.');
      ie_close('p');
      $templateAlias2({ code: 'Func testF = (Func)R.memoize.run(\n   R.add.apply(1),\n   \'testF\',\n   R.toString\n);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '11');
      ie_open('h2');
      itext('nAry');
      ie_close('h2');
      ie_open('p');
      itext('Wrap the function to make it accept only N arguments.');
      ie_close('p');
      $templateAlias2({ code: 'Func f = (Func)R.nAry.run(2, R.product);\nSystem.debug(f.run(1, 2, 3));\n// 2', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '12');
      ie_open('h2');
      itext('once');
      ie_close('h2');
      ie_open('p');
      itext('Wrap the function to make it call only by once.');
      ie_close('p');
      $templateAlias2({ code: 'Func testF = (Func)R.once.run(R.add.apply(1), \'testF\');\ntestF.run(1) // 2\ntestF.run(2) // 2', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '13');
      ie_open('h2');
      itext('pipe');
      ie_close('h2');
      ie_open('p');
      itext('Compose the functions in a piping style. Composed functions are executed from left to right.');
      ie_close('p');
      $templateAlias2({ code: 'Func f = (Func)R.pipe.run(\n    R.add.apply(1),\n    R.multiply.apply(2)\n);\nSystem.debug(f.run(1));\n// 4', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '14');
      ie_open('h2');
      itext('placeholder');
      ie_close('h2');
      ie_open('p');
      itext('A placeholder in the applied arguments.');
      ie_close('p');
      $templateAlias2({ code: 'R.subtract.apply(R.placeholder, 2).run(1)\n// -1', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '15');
      ie_open('h2');
      itext('transform');
      ie_close('h2');
      ie_open('p');
      itext('Apply the function to the target.');
      ie_close('p');
      $templateAlias2({ code: 'R.transform.run(R.inc, 1)\n// 2', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '16');
      ie_open('h2');
      itext('unary');
      ie_close('h2');
      ie_open('p');
      itext('Make the function accept only one argument. See ');
      ie_open('code');
      itext('nAry');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '17');
      ie_open('h2');
      itext('useWith');
      ie_close('h2');
      ie_open('p');
      itext('Accepts a function fn and other functions and returns a new function. When the new function is invoked, it calls the function fn with parameters consisting of the result of calling each supplied handler on successive arguments to the new function.');
      ie_close('p');
      $templateAlias2({ code: 'Func f = (Func)R.useWith.run(\n    R.multiply,\n    R.add.apply(1),\n    R.subtract.apply(1)\n);\nSystem.debug(f.run(1, 2));\n// -2', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param515 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'mhgZL.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var mhgZL = function (_Component) {
  _inherits(mhgZL, _Component);

  function mhgZL() {
    _classCallCheck(this, mhgZL);

    return _possibleConstructorReturn(this, (mhgZL.__proto__ || Object.getPrototypeOf(mhgZL)).apply(this, arguments));
  }

  return mhgZL;
}(_metalComponent2.default);

_metalSoy2.default.register(mhgZL, templates);
exports.mhgZL = mhgZL;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[286]);