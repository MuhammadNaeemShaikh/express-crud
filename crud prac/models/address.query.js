module.exports = {
  create_table:
    'CREATE TABLE address (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(50),user_id INT,FOREIGN KEY (user_id) REFERENCES user(id));',
  insert_table: `INSERT INTO address(name,user_id)VALUES(?,?)`,
};
