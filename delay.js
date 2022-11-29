var _ = require('lodash');

//_.delay(function)

var delay =_.delay(function (text) {
    console.log(text);
}, 1000, 'later');
console.log(delay)
//Timeout {    _idleTimeout: 1000,    _idlePrev: [TimersList],    _idleNext: [TimersList],    _idleStart: 45,    _onTimeout: [Function (anonymous)],    _timerArgs: undefined,_repeat: null,    _destroyed: false,    [Symbol(refed)]: true,    [Symbol(kHasPrimitive)]: false,    [Symbol(asyncId)]: 2,[Symbol(triggerId)]: 1  }
//  later