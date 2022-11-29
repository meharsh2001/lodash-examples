var _ = require('lodash');

//_.isEmpty(value)
//Checks if value is an empty object, collection, map, or set
//Returns true if value is empty, else false

var empty = _.isEmpty(null);
console.log(empty)

_.isEmpty(true);// => true
_.isEmpty(1);// => true
_.isEmpty([1, 2, 3]);// => false
_.isEmpty({ 'a': 1 });// => false