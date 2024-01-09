var _ = require('lodash');

//_.toArray(value)
//Returns array

var array = _.toArray({ 'a': 1, 'b': 2 });
console.log(array)// => [ 1, 2 ]

var array = _.toArray('abc');
console.log(array)// => ['a', 'b', 'c']