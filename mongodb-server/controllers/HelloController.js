const Hello = require("../models/Hello");
const twitt = require("./Twittercontrol");

exports.returnFake = (res) => {
  //returns fake data, nothing calls this though
  let serverHello = new Hello();
  serverHello._id = '99999';
  serverHello.value = 'success';
  res.json(serverHello);
};

exports.returnHello = (req, res) => {
  //recieves a Hello and returns it
  let serverHello = new Hello(req.body);
  serverHello._id = '99999';
  new Promise(function(resolve, reject) {

    let testo = twitt.twitconn(serverHello.value)
    //console.log(testo);
    //console.log(serverHello.value);
    resolve(testo);


}).then(function(value){
  console.log(value[3]);
  console.log(typeof value);
  serverHello.tweetObject = value;
  res.json(serverHello);
})
  

  //res.json(serverHello);
};