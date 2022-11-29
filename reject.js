var _ = require('lodash');

//_.isEmpty(value)
//Checks if value is an empty object, collection, map, or set
//Returns true if value is empty, else false

var users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred',   'age': 40, 'active': true }
  ];
   
  var reject = _.reject(users, function(o) { return !o.active; });
  console.log(reject)
  // => objects for ['fred']