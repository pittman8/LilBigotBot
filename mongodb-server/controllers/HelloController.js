const Hello = require("../models/Hello");

exports.hello = (req, res) => {  	
	let response = ({value: 'success'});
	console.log('sending: ' + response);
    res.json(response);
};
