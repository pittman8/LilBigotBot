const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// db instance connection
require("./config/db");
//require("./callTwitter");
require("./search");
const app = express();

const port = process.env.PORT || 80;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// API ENDPOINTS


/* const options = {
  host: 'https://api.twitter.com',
  port: 443,
  path: '/some/path',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}; */


app
  .route("/tasks")
  .get(taskController.listAllTasks)
  .post(taskController.createNewTask);

app
  .route("/tasks/:taskid")
  .get(taskController.readTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});