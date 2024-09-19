module.exports = {
  create_table_user: `CREATE TABLE USERS (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(30),email VARCHAR(50),password VARCHAR(100), age INT NOT NULL, add_id INT,FOREIGN KEY (add_id) REFERENCES address(id))`,
  insert_table_user: `INSERT INTO users (name,email,password,age,add_id) VALUES (?,?,?,?,?)`,
  is_email_exist: `SELECT id,email,password FROM users WHERE email = ? limit 1;`,
};
