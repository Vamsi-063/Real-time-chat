const socket = io();

const form = document.getElementById("chatForm");
const usernameInput = document.getElementById("usernameInput");
const input = document.getElementById("messageInput");
const messages = document.getElementById("messages");

const onlineCount = document.getElementById("onlineCount");
const sidebarOnlineCount = document.getElementById("sidebarOnlineCount");
const emojiButton = document.querySelector(".emoji-button");

// Emoji Picker

const emojis = [
  "😀", "😂", "😍", "🥰", "😎",
  "😊", "😉", "😢", "😡", "🤔",
  "👍", "👎", "👏", "🙏", "❤️",
  "🔥", "🎉", "💯", "✨", "🚀"
];

const emojiPicker = document.createElement("div");
emojiPicker.classList.add("emoji-picker");

emojis.forEach((emoji) => {
  const emojiItem = document.createElement("button");

  emojiItem.type = "button";
  emojiItem.classList.add("emoji-item");
  emojiItem.textContent = emoji;

  emojiItem.addEventListener("click", () => {
    input.value += emoji;
    input.focus();
    emojiPicker.classList.remove("show");
  });

  emojiPicker.appendChild(emojiItem);
});

document.querySelector(".message-form").appendChild(emojiPicker);

emojiButton.addEventListener("click", () => {
  emojiPicker.classList.toggle("show");
});

// Send Message

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const message = input.value.trim();

  if (username === "") {
    alert("Please enter your name");
    usernameInput.focus();
    return;
  }

  if (message === "") {
    return;
  }

  socket.emit("chat message", {
    username: username,
    message: message
  });

  input.value = "";
  input.focus();
  emojiPicker.classList.remove("show");
});

// Receive Message

socket.on("chat message", (data) => {
  const currentUsername = usernameInput.value.trim();

  const messageElement = document.createElement("div");
  const messageText = document.createElement("div");
  const messageTime = document.createElement("small");

  messageElement.classList.add("message");

  if (data.username === currentUsername) {
    messageElement.classList.add("own-message");
  }

  messageText.classList.add("message-text");
  messageText.textContent = `${data.username}: ${data.message}`;

  messageTime.classList.add("message-time");
  messageTime.textContent = data.time || "Time unavailable";

  messageElement.appendChild(messageText);
  messageElement.appendChild(messageTime);

  messages.appendChild(messageElement);

  messages.scrollTop = messages.scrollHeight;
});

// Online Users

socket.on("online users", (count) => {
  onlineCount.textContent = `${count} Online`;
  sidebarOnlineCount.textContent = `${count} Online`;
});
