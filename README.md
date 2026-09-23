# Real-Time Chat Application 💬

A real-time chat application built using HTML, CSS, JavaScript, Node.js, Express.js, and Socket.IO. This application allows users to exchange messages instantly through a web browser.

## 🚀 Live Demo

[Open Live Chat Application](https://real-time-chat-fij8.onrender.com)

## 📌 Project Overview

The Real-Time Chat Application is a web-based messaging platform that enables users to communicate instantly. It uses Socket.IO to establish real-time communication between the client and server.

Users can enter their username, send messages, view online users, and use emojis while chatting. The application is designed with a responsive WhatsApp-style interface.

## ✨ Features

* Real-time messaging using Socket.IO
* Username-based chat
* Online users count
* Message timestamps
* Emoji picker
* Responsive user interface
* WhatsApp-style chat layout
* Instant message broadcasting
* Deployed online using Render

## 🛠️ Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and responsive design
* **JavaScript** – Client-side functionality
* **Node.js** – Backend runtime environment
* **Express.js** – Web server framework
* **Socket.IO** – Real-time communication
* **Git & GitHub** – Version control and source code hosting
* **Render** – Application deployment

## 📂 Project Structure

```text
real-time-chat/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Vamsi-063/Real-time-chat.git
```

### 2. Navigate to the Project Directory

```bash
cd Real-time-chat
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Application

```bash
node server.js
```

### 5. Open in Browser

```text
http://localhost:3000
```

## 🔄 How It Works

1. The user opens the chat application.
2. The user enters a username.
3. The user types and sends a message.
4. The client sends the message to the Socket.IO server.
5. The server broadcasts the message to connected users.
6. All connected users receive the message in real time.

## 🌐 Deployment

The application is deployed using Render.

**Live URL:** https://real-time-chat-fij8.onrender.com

## 🔐 Environment Variables

This project does not require any custom environment variables for local development.

The application uses the port provided by the hosting platform when deployed.

## 🗄️ Database

This project does not use a database. Messages are exchanged in real time through Socket.IO and are not stored permanently.

## 👤 Project Contribution

This is an individual project developed by **Vamsi**.

The project includes frontend development, backend implementation, real-time communication, testing, and deployment.

## 📄 License

This project is created for learning and educational purposes.
