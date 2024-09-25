const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');
const set_up_db = require('./services/set_up_db');
const { db_connection } = require('./start_up/db_connection');
const socketIO = require('socket.io');
const { verify_tokens } = require('./middlewares/verify_token');
const io = socketIO(http);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require('./start_up/routes')(app);

const db_connect = new set_up_db(db_connection);

io.use(verify_tokens);
io.on('connection', (socket) => {
  console.log('A user Connnected');

  socket.on('join_room', async ({ room_id }) => {
    socket.join(room_id);
    io.to(socket.id).emit('recive_join_room', {
      message: 'Room Succesfull Joined',
    });
  });

  //Send message to only a particular user
  socket.on('send_message', (message) => {
    receiverChatID = message.receiverChatID;
    senderChatID = message.senderChatID;
    content = message.content;

    //Send message to only that particular room
    socket.in(receiverChatID).emit('receive_message', {
      content: content,
      senderChatID: senderChatID,
      receiverChatID: receiverChatID,
    });
  });
});

http.listen(4000, () => {
  console.log(`Server is Running on ${4000}`);
  db_connect.set_up_database();
});
