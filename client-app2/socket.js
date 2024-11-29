// console.log("Hola esteban")

// Establece la conexión con el servidor Socket.IO
const socket = io("https://38af-2800-e2-7780-34b-4ce1-41b-d751-517b.ngrok-free.app", { path: "/real-time" }); // Actualiza esto con la URL de tu servidor

// Maneja el evento de conexión
socket.on("connect", () => {
  console.log("Connected to Socket.IO server");
});

// Manejo de posibles errores de conexión
socket.on("connect_error", (error) => {
  console.error("Connection error:", error);
});

// Exporta el socket para su uso en otras partes de la aplicación
export default socket;
