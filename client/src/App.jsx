import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";
const socket = io("http://localhost:3000/");

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input) {
      socket.emit("addTodo", input);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    socket.emit("deleteTodo", index);
  };

  const fetchData = async () => {
    let res = await axios.get("http://localhost:3000/api/v1/todo/all");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchData();
    socket.on("return-todo", (data) => {
      setTodos((prev) => [...prev, data]);
    });

    socket.on("afterDelete", (data) => {
      setTodos((prev) => prev.filter((todo) => todo._id != data));
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="border p-2 flex-grow"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new todo"
          />
          <button className="bg-blue-500 text-white p-2 ml-2" onClick={addTodo}>
            Add
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>{todo.todo}</span>
              <button
                className="bg-red-500 text-white p-1"
                onClick={() => removeTodo(todo._id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
