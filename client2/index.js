// app.js
// const socket = io("http://localhost:3000"); // Replace with your server URL

// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.querySelector(".msger-inputarea");
//   const input = document.querySelector(".msger-input");
//   const chat = document.querySelector(".msger-chat");

//   form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const messageText = input.value;
//     if (messageText.trim() !== "") {
//       // Emit a new message to the server
//       socket.emit("newMessage", { text: messageText, sender: "Sajad" });

//       // Display the sent message in the chat
//       displayMessage("right", "Sajad", messageText);
      
//       // Clear the input field
//       input.value = "";
//     }
//   });

//   socket.on("connect", () => {
//     console.log("Connected to WebSocket server");
//   });

//   socket.on("onMessage", (data) => {
//     console.log("Received message:", data);
//     displayMessage("left", "BOT", data.content.text);
//   });
// });

// function displayMessage(position, name, text) {
//   const chat = document.querySelector(".msger-chat");
//   const msgClass = position === "right" ? "right-msg" : "left-msg";

//   const messageHTML = `
//     <div class="msg ${msgClass}">
//       <div class="msg-img" style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"></div>
//       <div class="msg-bubble">
//         <div class="msg-info">
//           <div class="msg-info-name">${name}</div>
//           <div class="msg-info-time">${getCurrentTime()}</div>
//         </div>
//         <div class="msg-text">${text}</div>
//       </div>
//     </div>
//   `;

//   chat.insertAdjacentHTML("beforeend", messageHTML);
//   chat.scrollTop = chat.scrollHeight; // Scroll to the bottom of the chat
// }

// function getCurrentTime() {
//   const now = new Date();
//   const hours = now.getHours().toString().padStart(2, "0");
//   const minutes = now.getMinutes().toString().padStart(2, "0");
//   return `${hours}:${minutes}`;
// }



// app.js
const socket = io();

function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;
  if (message.trim() !== '') {
    socket.emit('message', message);
    messageInput.value = '';
  }
}

socket.on('message', (message) => {
  const chatDisplay = document.getElementById('chat-display');
  const newMessage = document.createElement('div');
  newMessage.textContent = message;
  chatDisplay.appendChild(newMessage);
  chatDisplay.scrollTop = chatDisplay.scrollHeight;
});
