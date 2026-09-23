const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

let onlineUsers = 0;

io.on("connection", (socket) => {
  onlineUsers++;

  console.log("A user connected:", socket.id);
  console.log("Online users:", onlineUsers);

  io.emit("online users", onlineUsers);

  socket.on("chat message", (data) => {
    const chatMessage = {
      username: data.username,
      message: data.message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    io.emit("chat message", chatMessage);
  });

  socket.on("disconnect", () => {
    onlineUsers--;

    console.log("A user disconnected:", socket.id);
    console.log("Online users:", onlineUsers);

    io.emit("online users", onlineUsers);
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
