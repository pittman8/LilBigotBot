const Hello = require("../models/Hello");
const twitt = require("./Twittercontrol");
const stats = require("./StatController");

getQueryString = () => {
  const slurBank = ['fag', 'faggot', 'dyke', 'homo', 'sodomite'];
  let queryString = '';
  for (i=0;i<slurBank.length; i++) {
    queryString += ' ' + slurBank[i]
    if (i<slurBank.length-1) {
      queryString += ' OR'
    }

  }
  return queryString;
}

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

  let u = req.body.value;
  let s = getQueryString();
  new Promise(function(resolve, reject) {
    let testo = twitt.twitconn(u, s)
    //console.log(testo);
    //console.log(serverHello.value);
    resolve(testo);


}).then(function(value){
  serverHello.value = value
  updateStats();
  res.json(serverHello);
  var stringify = JSON.parse(value);
 // console.log(stringify);
  console.log(stringify.statuses[0].id);
  console.log(stringify.statuses.length);
  for(var i = 0; i < stringify.statuses.length; i++) {
    console.log(stringify.statuses[i].id);
  }
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