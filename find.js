var _ = require('lodash');

//_.find(collection,findby);
//findby can be a function
//returns first matched data
//example username matched in collection => returns user data

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];

var data = _.find(users, function (o) { return o.age < 40; });
console.log(data);//{ user: 'barney', age: 36, active: true }
var data = _.find(users, { 'age': 1, 'active': true });
console.log(data);//{ user: 'pebbles', age: 1, active: true }
var data = _.find(users, ['active', false]);
console.log(data); //{ user: 'fred', age: 40, active: false }
var data = _.find(users, 'active');
console.log(data);//{ user: 'barney', age: 36, active: true } 