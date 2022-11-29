var _ = require('lodash');

//  _.findIndex(data, to find);
//returns index
var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

  var index = _.findIndex(users, { 'user': 'fred', 'active': false });
  console.log(index)// => 1

 var index = _.findIndex(users, ['active', false]);
  console.log(index)// => 0