module.exports = {
  create_table_user: `CREATE TABLE USERS (id INT PRIMARY KEY,name VARCHAR(30),email VARCHAR(50),password VARCHAR(30), age INT NOT NULL, add_id INT,FOREIGN KEY (add_id) REFERENCES address(id))`,
};
