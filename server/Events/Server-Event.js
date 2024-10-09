const db = require("../db");
const { StartTriviaHandler} = require("../Events-handler/Server-EventHandler");

const ServerEvent = (socket, io) => {
  socket.on("StartTrivia",StartTriviaHandler(socket, db, io));

};

module.exports = { ServerEvent };
