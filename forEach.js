var _ = require('lodash');

//forEach
//_.forEach(data,function);
var jsonData = {
    false: [
      {
        _id: "6363a1b512a0cf6f4055da93",
        _blockPageId: "63639ed312a0cf6f4055da74",
        _blockBankId: 1,
        _isCorrect: false,
      },
      {
        _id: "6363a1f312a0cf6f4055da99",
        _blockPageId: "63639ed312a0cf6f4055da74",
        _blockBankId: 1,
        _isCorrect: false,
      },
      {
        _id: "63639ed312a0cf6f4055da85",
        _blockPageId: "63639ed312a0cf6f4055da74",
        _blockBankId: 1,
        _isCorrect: false,
      },
      {
        _id: "6363a21212a0cf6f4055daa2",
        _blockPageId: "63639ed312a0cf6f4055da75",
        _blockBankId: 2,
        _isCorrect: false,
      },
      {
        _id: "6363a21612a0cf6f4055daa5",
        _blockPageId: "63639ed312a0cf6f4055da75",
        _blockBankId: 2,
        _isCorrect: false,
      },
      {
        _id: "63639ed312a0cf6f4055da86",
        _blockPageId: "63639ed312a0cf6f4055da75",
        _blockBankId: 2,
        _isCorrect: false,
      },
    ],
    true:[
        {
            _id: "6363a22d12a0cf6f4055dab4",
            _blockPageId: "63639ed312a0cf6f4055da76",
            _blockBankId: 3,
            _isCorrect: true,
          },
          {
            _id: "6363a22512a0cf6f4055daae",
            _blockPageId: "63639ed312a0cf6f4055da76",
            _blockBankId: 3,
            _isCorrect: true,
          },
          {
            _id: "6363a22912a0cf6f4055dab1",
            _blockPageId: "63639ed312a0cf6f4055da76",
            _blockBankId: 3,
            _isCorrect: true,
          },
    ],
  }

_.forEach(jsonData,function(questions){// run for both array
    _.forEach(questions,function(question){// run for each question in array
        console.log(question._isCorrect)
    });
});