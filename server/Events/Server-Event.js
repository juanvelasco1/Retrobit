const db = require("../db");
const { StartHandler,
        StartTriviaHandler,
        StartGameHandler
      } = require("../Events-handler/Server-EventHandler");

const ServerEvent = (socket, io) => {
  socket.on("StartHandler",StartHandler(socket, db, io));
  socket.on("StartTrivia",StartTriviaHandler(socket, db, io));
  socket.on("StartGame",StartGameHandler(socket, db, io));
};

module.exports = { ServerEvent };
