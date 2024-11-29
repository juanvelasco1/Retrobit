//const { exampleEvent } = require("./exampleEvents")
const { ScreenEvent } = require("./screen-publicity")
const { ServerEvent } = require("./Server-Event")
const { UserEvent } = require("./User-experience")


const handleEvents = (socket, io) => {
  ScreenEvent(socket, io);
  ServerEvent(socket, io)
  UserEvent(socket, io);
}

module.exports = { handleEvents }
