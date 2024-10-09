// eventsExampleHandlers.js

const { JoinGameHandler, CreateUserHandler } = require("../utils/helpers");

// Assuming db and io are required or passed in some way to be accessible
const JoinGameHandler = (socket, db, io) => {
  return () => {};
};

const CreateUserHandler = (socket, db, io) => {
  return () => {};
};

module.exports = {
  JoinGameHandler,
  CreateUserHandler,
};
