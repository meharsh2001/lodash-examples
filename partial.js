var _ = require('lodash');

//_.partial(function,_,names)
//_.partial(function,greet)
//calls function

function greet(greet,name1,name2){
 console.log(greet,name1,name2)
}

var greetFred = _.partial(greet,_,'name1','name2');
greetFred('hi');