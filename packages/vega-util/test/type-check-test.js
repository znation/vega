var tape = require('tape'),
    vega = require('../');

tape('isArray tests arrays', function(t) {
  t.equal(vega.isArray([]), true);
  t.equal(vega.isArray({}), false);
  t.equal(vega.isArray('a'), false);
  t.end();
});

tape('isBoolean tests booleans', function(t) {
  t.equal(vega.isBoolean(true), true);
  t.equal(vega.isBoolean(false), true);
  t.equal(vega.isBoolean({}), false);
  t.equal(vega.isBoolean('a'), false);
  t.equal(vega.isBoolean(0), false);
  t.end();
});

tape('isDate tests dates', function(t) {
  t.equal(vega.isDate(new Date()), true);
  t.equal(vega.isDate(Date.now()), false);
  t.equal(vega.isDate({}), false);
  t.equal(vega.isDate([]), false);
  t.end();
});

tape('isFunction tests functions', function(t) {
  t.equal(vega.isFunction(function() { return 1; }), true);
  t.equal(vega.isFunction({}), false);
  t.equal(vega.isFunction(null), false);
  t.end();
});

tape('isNumber tests numbers', function(t) {
  t.equal(vega.isNumber(0), true);
  t.equal(vega.isNumber(1e5), true);
  t.equal(vega.isNumber(null), false);
  t.equal(vega.isNumber('a'), false);
  t.equal(vega.isNumber('1'), false);
  t.end();
});

tape('isObject tests objects', function(t) {
  t.equal(vega.isObject({}), true);
  t.equal(vega.isObject([]), true);
  t.equal(vega.isObject(new Date()), true);
  t.equal(vega.isObject(0), false);
  t.equal(vega.isObject('a'), false);
  t.equal(vega.isObject(true), false);
  t.end();
});

tape('isRegExp tests regular expressions', function(t) {
  t.equal(vega.isRegExp(/grep+/), true);
  t.equal(vega.isRegExp(null), false);
  t.equal(vega.isRegExp('a'), false);
  t.end();
});

tape('isString tests strings', function(t) {
  t.equal(vega.isString(''), true);
  t.equal(vega.isString('a'), true);
  t.equal(vega.isString([]), false);
  t.equal(vega.isString(0), false);
  t.end();
});
