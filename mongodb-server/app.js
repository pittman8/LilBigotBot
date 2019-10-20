const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const HelloController = require("./controllers/HelloController");

// db instance connection
//require("./db");

const port = process.env.PORT || 80;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


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
