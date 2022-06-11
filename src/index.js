const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let TODO_DATABASE = [{ id: 1, title: "Todo 1" }];

// Get all todo
app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "Get all todo",
    data: TODO_DATABASE,
  });
});
// Get todo by :id
app.get("/:id", (req, res) => {
  const id = req.params["id"];
  let todo = null;
  TODO_DATABASE.forEach((item) => {
    if (item.id == id) {
      todo = item;
    }
  });
  if (todo === null) {
    res.status(404).send({
      success: false,
      message: "Todo not found",
    });
    return;
  }
  res.send({
    success: true,
    message: `Get todo by id ${id}`,
    data: todo,
  });
});
// Create new todo
app.post("/", (req, res) => {
  const todo = {
    id: Date.now(),
    title: req.body["title"],
    done: false,
    created_at: new Date().toISOString(),
  };
  TODO_DATABASE.push(todo); // INSERT INTO
  res.send({
    success: true,
    message: "Todo Created",
    data: todo,
  });
});
// Update todo by :id
app.put("/:id", (req, res) => {
  res.send({
    success: true,
    message: "Update todo by id 1",
  });
});
// Delete todo by :id
app.delete("/:id", (req, res) => {
  res.send({
    success: true,
    message: "Delete todo by id 1",
  });
});

app.listen("8000", () => {
  console.log("Server running at http://localhost:8000 🚀");
});
