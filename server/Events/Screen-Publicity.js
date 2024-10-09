const db = require("../db");
const { CodeQrHandler,QuestionHandler,CheckupHandler,GameHandler,ActionHandler,ExitHandler} = require("../Events-handler/Screen-PublicityHandler");

const ScreenEvent = (socket, io) => {
  socket.on("CodeQr",CodeQrHandler(socket, db, io));
  socket.on("Question",QuestionHandler(socket, db, io));
  socket.on("Checkup",CheckupHandler(socket, db, io));
  socket.on("Game",GameHandler(socket, db, io));
  socket.on("Action",ActionHandler(socket, db, io));
  socket.on("Exit",ExitHandler(socket, db, io));

};

module.exports = { ScreenEvent };
