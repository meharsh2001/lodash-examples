var _ = require('lodash');

//similar as partial
//_.bind(function,object,_,'!');
function greet(greeting,punctuation){
    return greeting+' '+this.user+punctuation;
    }
    
    var object = { 'user': 'harsh'};
    var bound =_.bind(greet,object,_,'!');
    console.log(bound('hi'));//hi harsh!
