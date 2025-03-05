const todosModel = require("../models/todos.model");

const getAllTodos = async () => {
  let todos = await todosModel.find({});
  return todos;
};

const addNewTodo = async (todo) => {
  let newTodo = new todosModel({
    todo,
  });

  await newTodo.save();

  return newTodo;
};

const deleteTodo = async (id) => {
  await todosModel.findOneAndDelete({ _id: id });

  return id;
};

module.exports = { getAllTodos, addNewTodo, deleteTodo };
