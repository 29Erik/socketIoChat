// Express initialization
const express = require("express");
const app = express();
// Module for paths in express
const path = require('path');
// Routes lecture
const routes = require("./config/routes");

// Use of routes
routes(app);

// Port declaration
app.set('port', process.env.PORT || 3000);

// Static files on server
app.use(express.static(path.join(__dirname, 'public')));

// Server Port
const server = app.listen(app.get('port'), function() {
    console.log(`Server running on port: ${app.get('port')}`);
});

// Declaration of Socket IO
const socketIo = require("socket.io");
// Creation of the Socket IO Server
const io = socketIo(server);

// Websockets

// Cpnnection of a new User
// Socket is the variable used in the client
// More specific in chat.js
io.on('connection', (socket) => {
    console.log(`New Connection: ${socket.id}`);
});
