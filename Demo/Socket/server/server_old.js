const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");

  setTimeout(() => {
    // socket.send("This event is fired from the server");
    let obj = {
      channelName: "Chat",
      subscribers: 400,
      message: "Please join this channel",
    };
    socket.emit("customEvent", { data: obj });
  }, 4000);

  socket.on("send_message", (data) => {
    console.log("send_message : ", data);
    io.emit("received_message", data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
