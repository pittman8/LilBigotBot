const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const HelloController = require("./controllers/HelloController");

var corsOptions = {
  origin: 'localhost/4200',
  //origin: 'http://example.com',     /// note, this has to be the URL that your client app is calling from
  optionsSuccessStatus: 200       // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

// db instance connection
//require("./db");

const port = process.env.PORT || 80;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions))

// API ENDPOINTS
app
	.route("/hello")
	.get(HelloController.hello);
/*
app
  .route("/tasks")
  .get(taskController.listAllTasks)
  .post(taskController.createNewTask);

app
  .route("/tasks/:taskid")
  .get(taskController.readTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);
*/
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
