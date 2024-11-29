// eventsExampleHandlers.js

const { supabase } = require("../db");


// Assuming db and io are required or passed in some way to be accessible
const JoinGameHandler = (socket, db, io) => {
  return () => {};
};

const CreateUserHandler = (socket, db, io) => {
  return async (userData) => {
    io.emit('startTriviaClient', userData)
  };
};

const AnswerOptionsHandler = (socket, db, io) => {
  return () => {};
};

const StartGameHandler = (socket, db, io) => {
  return () => {};
};

const ActionPulseHandler = (socket, db, io) => {
  return () => {
    io.emit('ActionPulseClient', 'saltar')
  };
};

const VictoryHandler = (socket, db, io) => {
  return () => {};
};

const DefeatHandler = (socket, db, io) => {
  return (data) => {
    console.log(data);
    
    io.emit('DefeatClient', data)
  };
};

const RewardHandler = (socket, db, io) => {
  return () => {};
};

const CodeQrHandler = (socket, db, io) => {
  return () => {};
};

const QuestionHandler = (socket, db, io) => {
  return () => {};
};

const CheckupHandler = (socket, db, io) => {
  return () => {};
};

const ExitHandler = (socket, db, io) => {
  return () => {};
};
const StartTriviaHandler = (socket, db, io) => {
  return () => {};
};

module.exports = {
  JoinGameHandler,
  CreateUserHandler,
  AnswerOptionsHandler,
  StartGameHandler,
  ActionPulseHandler,
  VictoryHandler,
  DefeatHandler,
  RewardHandler,
  CodeQrHandler,
  QuestionHandler,
  CheckupHandler,
  ExitHandler,
  StartTriviaHandler
};
