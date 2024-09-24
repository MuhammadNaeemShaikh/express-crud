const { user_queries, address_queries } = require('../models');
const db_creationQuery = require('../models/db_creation.query');

class SetUpDb {
  constructor(db_instance) {
    this.db = db_instance;
  }

  async set_up_database() {
    try {
      this.create_database();
      this.set_up_table();
    } catch (error) {
      console.log(`Error Setting Up Db ${error}`);
      throw error;
    }
  }

  async create_database() {
    const [rows] = await this.db.promise().query('SHOW DATABASES;');
    const db_exist = rows.some((row) => row.Database === 'test');
    if (!db_exist) {
      const create_db = await this.db
        .promise()
        .query(db_creationQuery.create_data_base);

      console.log(`Database Created test`);
    } else {
      console.log(`Using Existing Database Test`);
    }
  }

  async set_up_table() {
    await this.crete_user_table();
    await this.crete_add_table();
  }

  async crete_user_table() {
    const [rows] = await this.db.promise().query('SHOW TABLES LIKE "user"');
    if (rows.length === 0) {
      await this.db.promise().query(user_queries.create_table_user);
      console.log('Users table created.');
    } else {
      console.log('Users table already exists.');
    }
  }

  async crete_add_table() {
    const [rows] = await this.db.promise().query('SHOW TABLES LIKE "address"');
    if (rows.length === 0) {
      await this.db.promise().query(address_queries.create_table);
      console.log('Address table created.');
    } else {
      console.log('Address table already exists.');
    }
  }
}

module.exports = SetUpDb;
