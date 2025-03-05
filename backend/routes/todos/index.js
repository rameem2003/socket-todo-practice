const {
  getTodos,
  addTodo,
  deleteTheTodo,
} = require("../../controllers/todos.controller");

const router = require("express").Router();

router.get("/todo/all", getTodos);
router.post("/todo/add", addTodo);
router.delete("/todo/:id", deleteTheTodo);

module.exports = router;
