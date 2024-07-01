const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const PORT = 3000;

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("message", (msg) => {
    io.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("User left");
  });
});

server.listen(PORT, () => console.log("server running on : " + PORT));
