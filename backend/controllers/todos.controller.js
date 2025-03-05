const todosModel = require("../models/todos.model");
const {
  getAllTodos,
  addNewTodo,
  deleteTodo,
} = require("../services/todo.service");

const getTodos = async (req, res) => {
  try {
    let todos = await getAllTodos();
    res.status(200).send(todos);
  } catch (error) {
    res.status(500).send({ error });
  }
};

const addTodo = async (req, res) => {
  const { todo } = req.body;

  try {
    let newTodo = await addNewTodo(todo);

    res.status(201).send(newTodo);
  } catch (error) {
    res.status(500).send({ error });
  }
};

const deleteTheTodo = async (req, res) => {
  const { id } = req.params;

  try {
    await deleteTodo(id);
    res.status(201).send({ msg: "Todo Delete" });
  } catch (error) {
    res.status(500).send({ error });
  }
};

module.exports = { getTodos, addTodo, deleteTheTodo };
