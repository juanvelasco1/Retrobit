const db = require("../db");
const { CreateUserHandler, JoinGameHandler} = require("../Events-handler/User-experienceHandler");

const UserEvent = (socket, io) => {
  socket.on("JoinGame", JoinGameHandler(socket, db, io));
  socket.on("Register", CreateUserHandler(socket, db, io));
};

module.exports = { UserEvent };
