const { createServer } = require("http");
const app = require("./app.js");
const { initSocket } = require("./socket.js");

const httpServer = createServer(app); // Explicitly creates an HTTP server from the Express app

// Initialize Socket.IO
initSocket(httpServer);

httpServer.listen(5050, () => console.log("Server starting 🚀🆙✔ on http://localhost:5050"));
