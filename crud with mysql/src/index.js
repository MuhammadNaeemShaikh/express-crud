const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');
const setupDatabase = require('./services/set_up_database');
const db_connection = require('./utils/db_connection');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require('./start_up/routes')(app)

const db_instance = new setupDatabase(db_connection);

http.listen(5000, async () => {
  try {
    console.log('Server listening on 5000');
    await db_instance.setupDatabase();
  } catch (error) {
    console.log(`Error Connection`);
  }
});
