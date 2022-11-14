var _ = require('lodash');

var array = [1,2,1,2];
//_.indexOf(searchIn,searchFor,fromIndex);
//returns position in array

var a = _.indexOf(array,2);// 2 is present at index 1
var b = _.indexOf(array,2,2);// 2 is present at index 1 and 3 but starting search from index 2
console.log(a,b)//output: 1 3