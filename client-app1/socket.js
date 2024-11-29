const socket = io("https://38af-2800-e2-7780-34b-4ce1-41b-d751-517b.ngrok-free.app", { path: "/real-time" }); // Update this to your server URL

socket.on("connect", () => {
  console.log("Connected to Socket.IO server");
});

export default socket;

