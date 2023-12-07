const net = require('net');

// TCP Server
const server = net.createServer((socket) => {
    console.log('Client connected');

    socket.on('data', (data) => {
        console.log(`Received data: ${data}`);
        // Process the data as needed
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

const tcpPort = process.env.TCP_PORT || 3001; // Choose a different port for TCP, if needed

server.listen(tcpPort, () => {
    console.log(`TCP server listening on port ${tcpPort}`);
});

