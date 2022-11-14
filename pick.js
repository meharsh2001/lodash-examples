var _ = require('lodash');

//_.pick(object,property to pick)
// will not pick same properties

var greetFred = _.pick({'a':1,'b':'2','c':3},['a','c']);
console.log(greetFred);//{ a: 1, c: 3 }