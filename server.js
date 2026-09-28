
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

let onlineUsers = 0;

io.on("connection", (socket) => {
  onlineUsers++;

  console.log("A user connected:", socket.id);
  io.emit("online users", onlineUsers);

  socket.on("chat message", (data) => {
    if (!data || typeof data.message !== "string") return;

    const chatMessage = {
      username: String(data.username || "Guest").slice(0, 30),
      message: data.message.slice(0, 1000),
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
    io.emit("online users", onlineUsers);
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});