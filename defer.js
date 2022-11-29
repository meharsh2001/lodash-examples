var _ = require('lodash');

//defer(function)
//returns timeout

function defer (){
    console.log('hello')
}
var deferData = _.defer(defer)
console.log(deferData)
// Timeout {_idleTimeout: 1,    _idlePrev: [TimersList],    _idleNext: [TimersList],    _idleStart: 44,    _onTimeout: [Function (anonymous)],_timerArgs: undefined,    _repeat: null,    _destroyed: false,    [Symbol(refed)]: true,    [Symbol(kHasPrimitive)]: false,[Symbol(asyncId)]: 2,    [Symbol(triggerId)]: 1}
//  hello