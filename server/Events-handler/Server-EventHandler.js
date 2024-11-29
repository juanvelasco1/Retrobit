// eventsExampleHandlers.js

const StartHandler = (socket, db, io) => {
  return () => {};
};

// Assuming db and io are required or passed in some way to be accessible
const StartTriviaHandler = (socket, db, io) => {
  return (data) => {
    
    console.log("StartTriviaHandlerServer");
    io.emit('startTriviaClient', data)
  };
};

const StartGameHandler = (socket, db, io) => {
  return (data) => {
    console.log(data);
    
    io.emit('StartGameClient', data)

  };
};

module.exports = {
  StartHandler,
  StartTriviaHandler,
  StartGameHandler,
};
