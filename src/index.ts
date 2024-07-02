import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import app  from "./app";
import { PORT } from "./config";

const server = http.createServer(app);
const io = new SocketIOServer(server);

io.on('connection', (socket) =>{
    console.log('A user connected:', socket.id);
    
    socket.on('userData', (data) =>{
        console.log('User connected:', data.userName);
        io.emit('greeting',{userName: data.userName});
    });


});

server.listen(PORT);
console.log('Server on port:', PORT);