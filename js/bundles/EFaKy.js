var pageComponent =
webpackJsonppageComponent([22],{

/***/ 282:
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

var _listSoy = __webpack_require__(283);

var _listSoy2 = _interopRequireDefault(_listSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EFaKy = function (_Component) {
  _inherits(EFaKy, _Component);

  function EFaKy() {
    _classCallCheck(this, EFaKy);

    return _possibleConstructorReturn(this, (EFaKy.__proto__ || Object.getPrototypeOf(EFaKy)).apply(this, arguments));
  }

  return EFaKy;
}(_metalComponent2.default);

;

_metalSoy2.default.register(EFaKy, _listSoy2.default);

exports.default = EFaKy;

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.EFaKy = undefined;

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

  // This file was automatically generated from list.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace EFaKy.
   * @public
   */

  goog.module('EFaKy.incrementaldom');

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
    var param622 = function param622() {
      ie_open('h6');
      var dyn34 = opt_data.page.description;
      if (typeof dyn34 == 'function') dyn34();else if (dyn34 != null) itext(dyn34);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('adjust');
      ie_close('h2');
      ie_open('p');
      itext('Adjust the element using the function.');
      ie_close('p');
      $templateAlias2({ code: 'R.adjust.run(R.inc, 1, R.with(1, 2, 3))\n// (1, 3, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('all');
      ie_close('h2');
      ie_open('p');
      itext('Check if all elements match the predicate.');
      ie_close('p');
      $templateAlias2({ code: 'R.all.run(R.isNotNull, R.with(1, 2, 3))\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('append');
      ie_close('h2');
      ie_open('p');
      itext('Append an element to the elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.append.run(1, R.with(1, 2, 3))\n// (1, 2, 3, 1)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('assoc');
      ie_close('h2');
      ie_open('p');
      itext('Set the key value.');
      ie_close('p');
      $templateAlias2({ code: 'R.assoc.run(\'name\', \'test\', new Map<String, Object>())\n// {name=test}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('biMap');
      ie_close('h2');
      ie_open('p');
      itext('Map over both the keys and values.');
      ie_close('p');
      $templateAlias2({ code: 'R.bimap.run(R.append.apply(\'_key\'), R.append.apply(\'_value\'), R.withObj(\'name\', \'test\'))\n// {test_key=test_value}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('concat');
      ie_close('h2');
      ie_open('p');
      itext('Concatenate two objects.');
      ie_close('p');
      $templateAlias2({ code: 'R.concat.run(R.with(1, 2, 3), R.with(4, 5, 6))\n// (4, 5, 6, 1, 2, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('contains');
      ie_close('h2');
      ie_open('p');
      itext('Check if the element is contained.');
      ie_close('p');
      $templateAlias2({ code: 'R.contains.run(1, R.with(1, 2, 3))\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '8');
      ie_open('h2');
      itext('containsBy');
      ie_close('h2');
      ie_open('p');
      itext('Check if the element is contained by the comparator returning boolean.');
      ie_close('p');
      $templateAlias2({ code: 'R.containsBy.run(R.equals, 1, R.with(1, 2, 3))\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '9');
      ie_open('h2');
      itext('containsKey');
      ie_close('h2');
      ie_open('p');
      itext('Check if the key is contained.');
      ie_close('p');
      $templateAlias2({ code: 'R.containsKey.run(\'name\', new Map<String, Object>{ \'name\' => \'test\' })\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '10');
      ie_open('h2');
      itext('countBy');
      ie_close('h2');
      ie_open('p');
      itext('Get counts by the key.');
      ie_close('p');
      $templateAlias2({ code: 'R.countBy.run(R.identity, R.with(1, 2, 2))\n// {1=1, 2=2}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '11');
      ie_open('h2');
      itext('difference');
      ie_close('h2');
      ie_open('p');
      itext('Make a difference of the two objects.');
      ie_close('p');
      $templateAlias2({ code: 'R.difference.run(R.with(1, 2, 3), R.with(2, 3, 4))\n// (4)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '12');
      ie_open('h2');
      itext('dissoc');
      ie_close('h2');
      ie_open('p');
      itext('Remove the key value.');
      ie_close('p');
      $templateAlias2({ code: 'R.dissoc.run(\'name\', new Map<String, Object>{ \'name\' => \'test\' })\n// {}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '13');
      ie_open('h2');
      itext('doInsert');
      ie_close('h2');
      ie_open('p');
      itext('Insert element at the index.');
      ie_close('p');
      $templateAlias2({ code: 'R.doInsert.run(1, \'x\', R.with(1, 2, 3))\n// (1, x, 2, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '14');
      ie_open('h2');
      itext('doInsertAll');
      ie_close('h2');
      ie_open('p');
      itext('Insert elements at the index.');
      ie_close('p');
      $templateAlias2({ code: 'R.doInsertAll.run(1, R.with(\'x\', \'y\'), R.with(1, 2, 3))\n// (1, x, y, 2, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '15');
      ie_open('h2');
      itext('doJoin');
      ie_close('h2');
      ie_open('p');
      itext('Join the elements by the separator.');
      ie_close('p');
      $templateAlias2({ code: 'R.doJoin.run(\'-\', R.with(1, 2, 3))\n// 1-2-3', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '16');
      ie_open('h2');
      itext('doMap');
      ie_close('h2');
      ie_open('p');
      itext('Map over the elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.doMap.run(R.inc, R.with(1, 2, 3))\n// (2, 3, 4)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '17');
      ie_open('h2');
      itext('doUpdate');
      ie_close('h2');
      ie_open('p');
      itext('Update an element of the elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.doUpdate.run(1, 3, R.with(1, 2, 3))\n// (1, 3, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '18');
      ie_open('h2');
      itext('drop');
      ie_close('h2');
      ie_open('p');
      itext('Drop first N elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.drop.run(1, \'abc\')\n// bc', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '19');
      ie_open('h2');
      itext('dropRight');
      ie_close('h2');
      ie_open('p');
      itext('Drop first N elements from right.');
      ie_close('p');
      $templateAlias2({ code: 'R.dropRight.run(1, \'abc\')\n// ab', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '20');
      ie_open('h2');
      itext('dropRightWhile');
      ie_close('h2');
      ie_open('p');
      itext('Drop elements from right until not satisfied.');
      ie_close('p');
      $templateAlias2({ code: 'R.dropRightWhile.run(R.equals.apply(\'a\'), \'abc\')\n// abc', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '21');
      ie_open('h2');
      itext('dropWhile');
      ie_close('h2');
      ie_open('p');
      itext('Drop elements until not satisfied.');
      ie_close('p');
      $templateAlias2({ code: 'R.dropWhile.run(R.equals.apply(\'a\'), \'abc\')\n// bc', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '22');
      ie_open('h2');
      itext('endsWith');
      ie_close('h2');
      ie_open('p');
      itext('Check ending with.');
      ie_close('p');
      $templateAlias2({ code: 'R.endsWith(\'a\', \'abc\')\n// false', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '23');
      ie_open('h2');
      itext('every');
      ie_close('h2');
      ie_open('p');
      itext('Same as ');
      ie_open('code');
      itext('all');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '24');
      ie_open('h2');
      itext('filter');
      ie_close('h2');
      ie_open('p');
      itext('Filter on the elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.filter.run(R.isNotNull, R.with(\'a\', null, \'b\'))\n// (a, b)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '25');
      ie_open('h2');
      itext('find');
      ie_close('h2');
      ie_open('p');
      itext('Find the first element that matches the predicate.');
      ie_close('p');
      $templateAlias2({ code: 'R.find.run(R.equals.apply(\'a\'), R.with(\'a\', \'b\'))\n// a', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '26');
      ie_open('h2');
      itext('findIndex');
      ie_close('h2');
      ie_open('p');
      itext('Find the index of the first element that matches the predicate.');
      ie_close('p');
      $templateAlias2({ code: 'R.findIndex.run(R.equals.apply(\'a\'), R.with(\'a\', \'b\'))\n// 0', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '27');
      ie_open('h2');
      itext('findLast');
      ie_close('h2');
      ie_open('p');
      itext('Find the first element from last that matches the predicate.');
      ie_close('p');
      $templateAlias2({ code: 'R.findLast.run(R.equals.apply(\'a\'), R.with(\'a\', \'b\'))\n// a', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '28');
      ie_open('h2');
      itext('findlastIndex');
      ie_close('h2');
      ie_open('p');
      itext('Find the index of the first element from last that matches the predicate.');
      ie_close('p');
      $templateAlias2({ code: 'R.findLastIndex.run(R.equals.apply(\'a\'), R.with(\'a\', \'b\'))\n// 0', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '29');
      ie_open('h2');
      itext('first');
      ie_close('h2');
      ie_open('p');
      itext('Get the first element.');
      ie_close('p');
      $templateAlias2({ code: 'R.first.run(R.with(1, 2, 3))\n// 1', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '30');
      ie_open('h2');
      itext('flatten');
      ie_close('h2');
      ie_open('p');
      itext('Flatten the elements recursively.');
      ie_close('p');
      $templateAlias2({ code: 'R.flatten.run(R.with(1, R.with(2, R.with(3))))\n// (1, 2, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '31');
      ie_open('h2');
      itext('forEach');
      ie_close('h2');
      ie_open('p');
      itext('Do for-each on the elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.forEach.run(R.debug, R.with(1, 2, 3));\n// 1\n// 2\n// 3', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '32');
      ie_open('h2');
      itext('fromPairs');
      ie_close('h2');
      ie_open('p');
      itext('Convert a list of pairs to map.');
      ie_close('p');
      $templateAlias2({ code: 'R.fromPairs.run(R.with(new R.Pair(\'a\', 1)))\n// {a=1}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '33');
      ie_open('h2');
      itext('groupBy');
      ie_close('h2');
      ie_open('p');
      itext('Get groups by the key.');
      ie_close('p');
      $templateAlias2({ code: 'R.groupBy.run(R.identity, R.with(1, 2, 2))\n// {1=(1), 2=(2, 2)}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '34');
      ie_open('h2');
      itext('head');
      ie_close('h2');
      ie_open('p');
      itext('Same as ');
      ie_open('code');
      itext('first');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '35');
      ie_open('h2');
      itext('indexBy');
      ie_close('h2');
      ie_open('p');
      itext('Get indexes by the key.');
      ie_close('p');
      $templateAlias2({ code: 'R.indexBy.run(R.identity, R.with(1, 2, 2))\n// {1=1, 2=2}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '36');
      ie_open('h2');
      itext('indexOf');
      ie_close('h2');
      ie_open('p');
      itext('Get the index of the first element found.');
      ie_close('p');
      $templateAlias2({ code: 'R.indexOf.run(1, R.with(1, 2, 3))\n// 0', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '37');
      ie_open('h2');
      itext('init');
      ie_close('h2');
      ie_open('p');
      itext('Get the elements except the last.');
      ie_close('p');
      $templateAlias2({ code: 'R.init.run(R.with(1, 2, 3))\n// (1, 2)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '38');
      ie_open('h2');
      itext('intersection');
      ie_close('h2');
      ie_open('p');
      itext('Make an intersection of the two objects.');
      ie_close('p');
      $templateAlias2({ code: 'R.intersection.run(R.with(1, 2, 3), R.with(2, 3, 4))\n// (2, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '39');
      ie_open('h2');
      itext('isEmpty');
      ie_close('h2');
      ie_open('p');
      itext('Check if it is empty.');
      ie_close('p');
      $templateAlias2({ code: 'R.isEmpty.run(R.with(1, 2, 3))\n// false', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '40');
      ie_open('h2');
      itext('last');
      ie_close('h2');
      ie_open('p');
      itext('Get the last element.');
      ie_close('p');
      $templateAlias2({ code: 'R.last.run(R.with(1, 2, 3))\n// 3', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '41');
      ie_open('h2');
      itext('lastIndexOf');
      ie_close('h2');
      ie_open('p');
      itext('Get the index of the first element found from the last.');
      ie_close('p');
      $templateAlias2({ code: 'R.lastIndexOf.run(1, R.with(1, 2, 3))\n// 0', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '42');
      ie_open('h2');
      itext('length');
      ie_close('h2');
      ie_open('p');
      itext('Get the length.');
      ie_close('p');
      $templateAlias2({ code: 'R.length.run(R.with(1, 2, 3))\n// 3', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '43');
      ie_open('h2');
      itext('none');
      ie_close('h2');
      ie_open('p');
      itext('Check if none of the elements match the predicate.');
      ie_close('p');
      $templateAlias2({ code: 'R.none.run(R.isNotNull, R.with(1, 2, 3))\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '44');
      ie_open('h2');
      itext('nth');
      ie_close('h2');
      ie_open('p');
      itext('Get the nth element.');
      ie_close('p');
      $templateAlias2({ code: 'R.nth.run(1, R.with(1, 2, 3))\n// 2', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '45');
      ie_open('h2');
      itext('pair');
      ie_close('h2');
      ie_open('p');
      itext('Create a pair.');
      ie_close('p');
      $templateAlias2({ code: 'R.pair.run(1, 2)\n// Pair:[fst=1, snd=2]', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '46');
      ie_open('h2');
      itext('partition');
      ie_close('h2');
      ie_open('p');
      itext('Create a partitioned pair using the predicate.');
      ie_close('p');
      $templateAlias2({ code: 'R.partition.run(R.equals.apply(\'a\'), R.with(\'a\', \'b\', \'c\'))\n// Pair:[fst=(a), snd=(b, c)]', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '47');
      ie_open('h2');
      itext('pluck');
      ie_close('h2');
      ie_open('p');
      itext('Pluck the fields out of elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.pluck.run(\'Description\', R.with(new Account(Description=\'desc\')))\n// (desc)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '48');
      ie_open('h2');
      itext('prepend');
      ie_close('h2');
      ie_open('p');
      itext('Prepend an element to the elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.prepend.run(1, R.with(1, 2, 3))\n// (1, 1, 2, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '49');
      ie_open('h2');
      itext('project');
      ie_close('h2');
      ie_open('p');
      itext('Project elements into other elements according to the fields.');
      ie_close('p');
      $templateAlias2({ code: 'R.project.run(R.with(\'Description\'), R.with(new Account(Description=\'desc\')))\n// ({Description=desc})', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '50');
      ie_open('h2');
      itext('range');
      ie_close('h2');
      ie_open('p');
      itext('Generate a range of decimals.');
      ie_close('p');
      $templateAlias2({ code: 'R.range.run(1, 3)\n// (1, 2)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '51');
      ie_open('h2');
      itext('reduce');
      ie_close('h2');
      ie_open('p');
      itext('Reduce over the elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.reduce.run(R.add, 0, R.with(1, 2, 3))\n// 6', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '52');
      ie_open('h2');
      itext('reject');
      ie_close('h2');
      ie_open('p');
      itext('Reject on the elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.reject.run(R.isNull, R.with(\'a\', null, \'b\'))\n// (a, b)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '53');
      ie_open('h2');
      itext('remove');
      ie_close('h2');
      ie_open('p');
      itext('Remove elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.remove.run(1, 2, R.with(1, 2, 3))\n// (1)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '54');
      ie_open('h2');
      itext('repeat');
      ie_close('h2');
      ie_open('p');
      itext('Repeat the target to generate elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.repeat.run(5, \'a\')\n// (a, a, a, a, a)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '55');
      ie_open('h2');
      itext('reverse');
      ie_close('h2');
      ie_open('p');
      itext('Reverse the elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.reverse.run(\'abc\')\n// cba', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '56');
      ie_open('h2');
      itext('sample');
      ie_close('h2');
      ie_open('p');
      itext('Get a random element.');
      ie_close('p');
      $templateAlias2({ code: 'R.sample.run(\'abcdef\')\n// e', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '57');
      ie_open('h2');
      itext('sampleSize');
      ie_close('h2');
      ie_open('p');
      itext('Get a list of random elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.sampleSize.run(2, \'abcdef\')\n// df', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '58');
      ie_open('h2');
      itext('shuffle');
      ie_close('h2');
      ie_open('p');
      itext('Create a shuffled collection.');
      ie_close('p');
      $templateAlias2({ code: 'R.shuffle.run(\'abcdef\')\n// fdeabc', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '59');
      ie_open('h2');
      itext('size');
      ie_close('h2');
      ie_open('p');
      itext('Get the size. See ');
      ie_open('code');
      itext('length');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '60');
      ie_open('h2');
      itext('slice');
      ie_close('h2');
      ie_open('p');
      itext('Get a slice of the elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.slice.run(0, 1, R.with(1, 2, 3))\n// (1)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '61');
      ie_open('h2');
      itext('some');
      ie_close('h2');
      ie_open('p');
      itext('Check if some elements match the predicate.');
      ie_close('p');
      $templateAlias2({ code: 'R.some.run(R.isNotNull, R.with(1, 2, 3))\n// false', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '62');
      ie_open('h2');
      itext('sortBy');
      ie_close('h2');
      ie_open('p');
      itext('Sort by the comparator.');
      ie_close('p');
      $templateAlias2({ code: 'R.sortBy.run(R.compare, R.with(3, 2, 1))\n// (1, 2, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '63');
      ie_open('h2');
      itext('sortDefault');
      ie_close('h2');
      ie_open('p');
      itext('Sort by default.');
      ie_close('p');
      $templateAlias2({ code: 'R.sortDefault.run(R.with(3, 2, 1))\n// (1, 2, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '64');
      ie_open('h2');
      itext('startsWith');
      ie_close('h2');
      ie_open('p');
      itext('Check starting with.');
      ie_close('p');
      $templateAlias2({ code: 'R.startsWith(\'a\', \'abc\')\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '65');
      ie_open('h2');
      itext('sum');
      ie_close('h2');
      ie_open('p');
      itext('Get the sum.');
      ie_close('p');
      $templateAlias2({ code: 'R.sum.run(R.with(1, 2, 3))\n// 6', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '66');
      ie_open('h2');
      itext('tail');
      ie_close('h2');
      ie_open('p');
      itext('Get the elements except the first.');
      ie_close('p');
      $templateAlias2({ code: 'R.tail.run(R.with(1, 2, 3))\n// (2, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '67');
      ie_open('h2');
      itext('take');
      ie_close('h2');
      ie_open('p');
      itext('Take the first N elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.take.run(1, \'abc\')\n// a', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '68');
      ie_open('h2');
      itext('takeRight');
      ie_close('h2');
      ie_open('p');
      itext('Take the first N elements from right.');
      ie_close('p');
      $templateAlias2({ code: 'R.takeRight.run(1, \'abc\')\n// c', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '69');
      ie_open('h2');
      itext('takeRightWhile');
      ie_close('h2');
      ie_open('p');
      itext('Take elements from right until not satisfied.');
      ie_close('p');
      $templateAlias2({ code: 'R.takeRightWhile.run(R.equals.apply(\'a\'), \'abc\')\n//', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '70');
      ie_open('h2');
      itext('takeWhile');
      ie_close('h2');
      ie_open('p');
      itext('Take elements until not satisfied.');
      ie_close('p');
      $templateAlias2({ code: 'R.takeWhile.run(R.equals.apply(\'a\'), \'abc\')\n// a', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '71');
      ie_open('h2');
      itext('times');
      ie_close('h2');
      ie_open('p');
      itext('Invoke a function for N times.');
      ie_close('p');
      $templateAlias2({ code: 'R.times.run(3, R.identity)\n// (0, 1, 2)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '72');
      ie_open('h2');
      itext('toPairs');
      ie_close('h2');
      ie_open('p');
      itext('Convert a map to a list of pairs.');
      ie_close('p');
      $templateAlias2({ code: 'R.toPairs.run(new Map<String, Object>{ \'name\' => \'test\' })\n// (Pair:[fst=name, snd=test])', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '73');
      ie_open('h2');
      itext('union');
      ie_close('h2');
      ie_open('p');
      itext('Make a union of the two objects.');
      ie_close('p');
      $templateAlias2({ code: 'R.union.run(R.with(1, 2, 3), R.with(2, 3, 4))\n// (2, 3, 4, 1)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '74');
      ie_open('h2');
      itext('uniq');
      ie_close('h2');
      ie_open('p');
      itext('Get a unique collection of the elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.uniq.run(R.with(1, 2, 2))\n// (1, 2)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '75');
      ie_open('h2');
      itext('unnest');
      ie_close('h2');
      ie_open('p');
      itext('Flatten the elements by one level.');
      ie_close('p');
      $templateAlias2({ code: 'R.unnest.run(R.with(1, R.with(2, 3)))\n// (1, 2, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '76');
      ie_open('h2');
      itext('without');
      ie_close('h2');
      ie_open('p');
      itext('Same with ');
      ie_open('code');
      itext('difference');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '77');
      ie_open('h2');
      itext('xor');
      ie_close('h2');
      ie_open('p');
      itext('Make an xor of the two objects.');
      ie_close('p');
      $templateAlias2({ code: 'R.xor.run(R.with(1, 2, 3), R.with(2, 3, 4))\n// (4, 1)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '78');
      ie_open('h2');
      itext('zip');
      ie_close('h2');
      ie_open('p');
      itext('Zip two collections to create a list of pairs.');
      ie_close('p');
      $templateAlias2({ code: 'R.zip.run(R.with(\'a\', \'b\'), R.with(1, 2))\n// (Pair:[fst=a, snd=1], Pair:[fst=b, snd=2])', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '79');
      ie_open('h2');
      itext('zipObj');
      ie_close('h2');
      ie_open('p');
      itext('Zip two collections to create a map.');
      ie_close('p');
      $templateAlias2({ code: 'R.zipObj.run(R.with(\'a\', \'b\'), R.with(1, 2))\n// {a=1, b=2}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param622 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'EFaKy.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var EFaKy = function (_Component) {
  _inherits(EFaKy, _Component);

  function EFaKy() {
    _classCallCheck(this, EFaKy);

    return _possibleConstructorReturn(this, (EFaKy.__proto__ || Object.getPrototypeOf(EFaKy)).apply(this, arguments));
  }

  return EFaKy;
}(_metalComponent2.default);

_metalSoy2.default.register(EFaKy, templates);
exports.EFaKy = EFaKy;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[282]);