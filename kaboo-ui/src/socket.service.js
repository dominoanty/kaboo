import { io } from 'socket.io-client';

const socket = io("ws://localhost:3001");

socket.on("connect", () => {
    socket.send("Hello");
})
socket.on("message", (data) => {
    console.log(data);
})

export default socket;