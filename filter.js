var _ = require('lodash');

//_.filter(collection, [predicate=_.identity])
//can return multiple object

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

  var index = _.filter(users, { 'user': 'fred', 'active': false });
  console.log(index)// => [{ 'user': 'fred',    'active': false }]

 var index = _.filter(users, ['active', false]);
  console.log(index)// =>  [ { user: 'barney', active: false }, { user: 'fred', active: false } ]