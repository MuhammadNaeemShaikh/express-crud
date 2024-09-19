const db_connection = require('../utils/db_connection');
const { create_table_add } = require('../models/add.model');
const { create_table_user } = require('../models/user');
const { create_blogs_table } = require('../models/blog.model');

class SetupDB {
  constructor(db_instance) {
    this.db = db_instance;
  }

  async setupDatabase() {
    try {
      await this.createDatabase();
      await this.setupTables();
      console.log('Database setup complete.');
    } catch (error) {
      console.error('Error setting up database:', error);
      throw error;
    }
  }

  async createDatabase() {
    const [rows] = await this.db.promise().query('SHOW DATABASES;');
    const employeeExists = rows.some((row) => row.Database === 'employee');
    if (!employeeExists) {
      await this.db.promise().query('CREATE DATABASE employee;');
      console.log('Database "employee" created.');
    } else {
      console.log('Using existing database "employee".');
    }
  }

  async setupTables() {
    await this.createAddressTable();
    await this.createUserTable();
    await this.createBlogTable();
  }

  async createBlogTable() {
    const [rows] = await this.db.promise().query('SHOW TABLES LIKE "blog";');
    if (rows.length === 0) {
      await this.db.promise().query(create_blogs_table);
    } else {
      console.log(`Blog Table Already Exist`);
    }
  }

  async createAddressTable() {
    const [rows] = await this.db.promise().query('SHOW TABLES LIKE "address";');
    if (rows.length === 0) {
      await this.db.promise().query(create_table_add);
      console.log('Address table created.');
    } else {
      console.log('Address table already exists.');
    }
  }

  async createUserTable() {
    const [rows] = await this.db.promise().query('SHOW TABLES LIKE "USERS"');
    if (rows.length === 0) {
      await this.db.promise().query(create_table_user);
      console.log('Users table created.');
    } else {
      console.log('Users table already exists.');
    }
  }
}

module.exports = SetupDB;
