var _ = require('lodash');

//_.isFinite(value)
var number = _.isFinite(3);// => true
console.log(number)
var number = _.isFinite(Number.MIN_VALUE);// => true
console.log(number)
var random = Math.random();
var number = _.isFinite(random);// => true
console.log(number,random)
var number = _.isFinite(Infinity);// => false
console.log(number)
var number = _.isFinite('3');// => false
console.log(number)