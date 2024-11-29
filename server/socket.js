const { Server } = require("socket.io");
const { handleEvents } = require("./Events");

let io;

const initSocket = (httpServer) => {
  io = new Server(httpServer, {
    path: "/real-time",
    cors: {
      origin: "*", // Permitir todas las solicitudes de origen cruzado
    },
  });

  io.on("connection", (socket) => {
    console.log("Nuevo cliente conectado");

    handleEvents(socket, io);

    // Registro
    socket.on("register", (username, email) => {
      console.log("Llega registro a servidor:", username, email);
    });

    // Recibir respuesta del cliente 1 y reenviarla
    socket.on("answer", (answer) => {
      console.log(`Respuesta recibida del cliente 1: ${answer}`);
      io.emit("answer", answer); // Reenvía la respuesta a todos los clientes
    });

    // Desconexión
    socket.on("disconnect", () => {
      console.log("Cliente desconectado");
    });
  });
};

const getIO = () => {
  if (!io) {
    throw new Error("Socket.io not initialized!");
  }
  return io;
};

module.exports = { initSocket, getIO };
