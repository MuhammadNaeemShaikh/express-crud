const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');
const set_up_db = require('./services/set_up_db');
const { db_connection } = require('./start_up/db_connection');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require('./start_up/routes')(app);

const db_connect = new set_up_db(db_connection);

http.listen(4000, () => {
  console.log(`Server is Running on ${4000}`);
  db_connect.set_up_database();
});
