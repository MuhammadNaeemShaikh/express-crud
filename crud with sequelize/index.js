const express = require('express');
const app = express();
const cors = require('cors');
const db_connect = require('./start_up/db_connect');
const http = require('http').createServer(app);
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());
require('./start_up/routes')(app);

db_connect
  .authenticate()
  .then(() => {
    http.listen(process.env.PORT, () => {
      console.log(
        `listening on ${process.env.PORT},and the enivroment is ${process.env.NODE_ENV}`
      );
    });
  })
  .catch((err) => {
    console.log(`Unable to connect to the database: ${err}`);
  });
