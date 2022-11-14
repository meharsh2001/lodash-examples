var _ = require('lodash');


//_.uniq(array);//returns unique elements in array

var array = [
        "_blockBankId",
        "_blockBankId",
        "_blockBankId",
        "_blockBankId",
        "_blockBankId",
        "_isCorrect",
        "_id",
        "_blockPageId",
        "_blockBankId",
        "_isCorrect"
];

var result = _.uniq(array);//returns an array
//[ '_blockBankId', '_isCorrect', '_id', '_blockPageId' ]
console.log(result)