import { io } from "socket.io-client"; // Asegúrate de que esto funcione en tu entorno

const socket = io("http://localhost:5050", { path: "/socket.io" }); // Asegúrate de que la URL y el path sean correctos

// ------------- SOCKET LISTENERS ----------------

socket.on("event1", (data) => {
  console.log(data);
});

socket.on("event2", (data) => {
  console.log(data);
});

socket.on("event3", (data) => {
  console.log(data);
});

socket.on("event4", (data) => {
  console.log(data);
});
