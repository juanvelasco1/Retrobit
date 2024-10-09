const db = require("../db");
const { CodeQrHandler} = require("../Events-handler/Screen-PublicityHandler");

const ScreenEvent = (socket, io) => {
  socket.on("CodeQr",CodeQrHandler(socket, db, io));

};

module.exports = { ScreenEvent };
