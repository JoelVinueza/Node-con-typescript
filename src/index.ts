import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import app  from "./app";
import  {PORT, IP} from "./config";

const server = http.createServer(app);
const io = new SocketIOServer(server);

io.on('connection', (socket) =>{
    console.log('A user connected:', socket.id);
    
    socket.on('userData', (data) =>{
        console.log('User connected:', data.userName);
        io.emit('greeting',{userName: data.userName});
    });

    socket.on('sendMessage', (data) =>{
        console.log(data.userName + ' envió un mensaje');
        io.emit('newMessage', {userName: data.userName, message: data.message});
    })


});

server.listen(PORT, IP as any, () => {

});
console.log(`Server on: http://${IP}:${PORT}`);