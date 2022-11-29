var _ = require('lodash');

//_.isEmpty(array,[ignore these values])

var res = _.without([2, 1, 2, 4, 3],1, 2);
console.log(res)// => [ 4, 3 ]