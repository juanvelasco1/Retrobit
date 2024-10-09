const db = require("../db");
const { CreateUserHandler, JoinGameHandler,AnswerOptionsHandler ,StartGameHandler ,ActionPulseHandler ,DefeatHandler ,VictoryHandler ,RewardHandler } = require("../Events-handler/User-experienceHandler");

const UserEvent = (socket, io) => {
  socket.on("JoinGame", JoinGameHandler(socket, db, io));
  socket.on("CreateUser", CreateUserHandler(socket, db, io));
  socket.on("AnswerOptions", AnswerOptionsHandler(socket, db, io));
  socket.on("StartGame", StartGameHandler(socket, db, io));
  socket.on("ActionPulse", ActionPulseHandler(socket, db, io));
  socket.on("Defeat", DefeatHandler(socket, db, io));
  socket.on("Victory", VictoryHandler(socket, db, io));
  socket.on("Reward", RewardHandler(socket, db, io));

};

module.exports = { UserEvent };
