const db = require("../db");
const { CodeQrHandler,
        QuestionHandler,
        CheckupHandler,
        GameHandler,
        ActionHandler,
        ExitHandler
    } = require("../Events-handler/Screen-PublicityHandler");

const ScreenEvent = (socket, io) => {
  socket.on("CodeQrHandler", () => CodeQrHandler(socket, io));
  socket.on("QuestionHandler", () => QuestionHandler(socket, io));
  socket.on("CheckupHandler", () => CheckupHandler(socket, io));
  socket.on("GameHandler", () => GameHandler(socket, io));
  socket.on("ActionHandler", () => ActionHandler(socket, io));
  socket.on("ExitHandler", () => ExitHandler(socket, io));


};

module.exports = { ScreenEvent };
