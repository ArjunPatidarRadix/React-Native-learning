const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");
const socketIo = require("socket.io")(http, {
  cors: {
    origin: "http://10.0.2.2:3000/",
  },
});

let chatGroups = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

function createUniqueId() {
  return Math.random().toString(20).substring(2, 10);
}

socketIo.on("connection", (socket) => {
  console.log(`${socket.id} user is just connected`);

  socket.on("getAllGroups", () => {
    socket.emit("groupList", chatGroups);
  });
  socket.on("createNewGroup", (currentGroupName) => {
    console.log("createNewGroup :: ", currentGroupName);
    chatGroups.unshift({
      id: chatGroups.length + 1,
      currentGroupName,
      messages: [],
    });
    socket.emit("groupList", chatGroups);
  });

  socket.on("findGroup", (id) => {
    const filteredGroup = chatGroups.filter((item) => item.id === id);
    socket.emit("foundGroup", filteredGroup[0].messages);
  });

  socket.on("newChatMessage", (data) => {
    const { currentChatMessage, groupIdentifier, currentUser, timeData } = data;
    const filteredGroup = chatGroups.filter(
      (item) => item.id === groupIdentifier
    );
    const newMessage = {
      id: createUniqueId(),
      text: currentChatMessage,
      currentUser: currentUser,
      time: `${timeData.hr}:${timeData.mins}`,
    };

    socket
      .to(filteredGroup[0].currentGroupName)
      .emit("groupMessage", newMessage);

    filteredGroup[0].messages.push(newMessage);
    socket.emit("groupList", chatGroups);
    socket.emit("foundGroup", filteredGroup[0].messages);
  });
});

app.get("/api", (req, res) => {
  console.log(req, res);
  res.json(chatGroups);
});
const port = process.env.PORT || 4000;
http.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
