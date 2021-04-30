import express from  'express'; 
import cors from 'cors';
import mainRoutes from './routes/main.js';
import gameRoutes from './routes/games.js';
import bodyParser from 'body-parser';
import {Server} from 'socket.io';
import http from 'http';
import { readFile } from 'fs';

const app = express()
const port = 3001
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors())

app.use('/', mainRoutes);
app.use('/games', gameRoutes);
// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

let server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"]
  }
})
io.on("connection", socket => {
  // either with send()
  socket.on("game created", (data) => {
    console.log("Received game created event!")
    console.log(data);
  })
  console.log("Received connection from client!")
  socket.send("Hello!");
});
server.listen(port)
export default app;

