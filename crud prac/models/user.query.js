module.exports = {
  create_table_user: `CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    password VARCHAR(100),
    email VARCHAR(50),
    age INT NOT NULL
  )
  `,
  insert: `INSERT INTO user(name,password,email,age)VALUES(?,?,?,?);`,
  is_email: `SELECT id,email,password FROM user WHERE email = ? limit 1;`,
};
