var _ = require('lodash');

//clone(objects)
//Returns the cloned value.

var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var shallow = _.clone(objects);

console.log(shallow , objects);//[ { a: 1 }, { b: 2 } ] [ { a: 1 }, { b: 2 } ]