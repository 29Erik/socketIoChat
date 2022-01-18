// The import on the html with <script src="/socket.io/socket.io.js" charset="utf-8"></script>
// Allow to use io methods
// In case of have 2 separate repositories io(http://midominio.com);
// Socket is the one that wll send the events to the server
const socket = io();

// DOM elements
let message = document.getElementById('message');
let username = document.getElementById('username');
let send = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

send.addEventListener('click', function() {
    // Send data to server
    socket.emit('chat:message', {
        username: username.value,
        message: message.value
    });
})

// shows when someone is typing
message.addEventListener('keypress', function() {
    socket.emit('chat:typing', username.value);
});

// Listen the emit from the server
socket.on('chat:message:server', function(data) {
    actions.innerHTML = '';
    output.innerHTML += `<p>
    <strong>${data.username}</strong>: ${data.message}
</p>`;
});

// Listen the emit from the server when someone is typing
socket.on('chat:typing:server', function(data) {
    actions.innerHTML = `<p><em>${data} is typing a message</em></p>`;
});
