var _ = require('lodash');

//_.difference(array1, array2);
//returns array
//checks for all elements of array1 in array2
//example array1[0] in array2[all]

var diff =_.difference([2,0],[2,3]);
console.log(diff)//[0]