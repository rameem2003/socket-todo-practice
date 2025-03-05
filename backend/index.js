const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const connectDB = require("./config/db.config");
const http = require("http");
const router = require("./routes");
const todoSocketHandler = require("./sockets/TodoSockets");
connectDB();

const app = express();
const server = http.createServer(app);

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});
app.use(express.json());
app.use(router);

// io.on("connection", (socket) => {
//   console.log("User connected", socket.id);

//   socket.on("test", (data) => {
//     console.log(data);

//     socket.emit("reply", data);
//   });
// });
todoSocketHandler(io);

app.get("/", (req, res) => {
  res.status(200).send("Hi");
});

server.listen(3000, () => {
  console.log("server running");
});

module.exports = io;
