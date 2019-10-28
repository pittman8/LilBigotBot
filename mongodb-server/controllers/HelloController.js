const Hello = require("../models/Hello");

exports.returnHello = (req, res) => {
  /*Hello.find({}, (err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(task);
  });*/
  
  console.log('Hello :)');
  returnValue = new Hello();
  returnValue.value = 'success';
  return returnValue;
};