var _ = require('lodash');

//_.intersection(arrays) 
//Returns the new array of intersecting values.

var jsonData = [
    '6363a1b512a0cf6f4055da93',
    '6363a1f312a0cf6f4055da99',
    '63639ed312a0cf6f4055da85',
    '6363a21212a0cf6f4055daa2',
    '6363a21612a0cf6f4055daa5',
    '63639ed312a0cf6f4055da86',
    '6363a22d12a0cf6f4055dab4',
    '6363a22512a0cf6f4055daae',
    '6363a22912a0cf6f4055dab1'
  ]
var jsonData2 = [
    '6363a1b512a0cf6f4055da93',
    '6363a1f312a0cf6f4055da99',
    '63639ed312a0cf6f4055da85',
    '63639ed312a0cf6f4055da87',
    '6363a22d12a0cf6f4055dab2',    
    '6363a22512a0cf6f4055daae',
    '6363a22912a0cf6f4055dab1'
  ]
var filtered = _.intersection(jsonData, jsonData2) 
console.log(filtered) 
//[ '6363a1b512a0cf6f4055da93',  '6363a1f312a0cf6f4055da99', '63639ed312a0cf6f4055da85',  '6363a22512a0cf6f4055daae',  '6363a22912a0cf6f4055dab1']