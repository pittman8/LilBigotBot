const Hello = require("../models/Hello");
const twitt = require("./Twittercontrol");
const stats = require("./StatController");

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
    //console.log(testo);
    resolve(testo);


}).then(function(value){
  serverHello.value = value
  updateStats();
  res.json(serverHello);
})
  //res.json(serverHello);
};


updateStats = () =>{
new Promise(function(resolve, reject) {
  let statread = stats.readStatret();
  resolve(statread);

}).then(function(value){
  
  let holdval = value;
  holdval.Connections = holdval.Connections + 1;
  //console.log(holdval);
  return holdval;
}).then(function(value){
  
  //console.log("why");
  //console.log(value);
  return stats.updateStatret(value);
}).then(function(value){
  console.log(value)
;})


};