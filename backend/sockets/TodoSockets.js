const { addNewTodo, deleteTodo } = require("../services/todo.service");

const todoSocketHandler = async (io) => {
  io.on("connection", async (socket) => {
    console.log("New Socket Connected");

    socket.on("addTodo", async (data) => {
      let newTodo = await addNewTodo(data);

      socket.emit("return-todo", newTodo);
    });

    socket.on("deleteTodo", async (data) => {
      let deletedId = await deleteTodo(data);

      socket.emit("afterDelete", deletedId);
    });
  });
};

module.exports = todoSocketHandler;
