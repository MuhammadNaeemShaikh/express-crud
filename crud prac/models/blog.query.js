module.exports = {
  create_blogs_table: `CREATE TABLE blog (id INT AUTO_INCREMENT PRIMARY KEY,title VARCHAR(50),content VARCHAR(5000),user_id int , FOREIGN KEY(user_id) REFERENCES users(id) ); `,
  insert_blogs: `INSERT INTO blog (title,content,user_id)VALUES(?,?,?)`,
  get_blogs: `SELECT * FROM blog as b INNER JOIN user as u ON b.user_id = u.id;`,
};
