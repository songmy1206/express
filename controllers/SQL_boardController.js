const connection = require('./dbConnect');

const boardDB = {
  // 모든게시글 가져오기
  getAllArticles: (cb) => {
    connection.query('SELECT * from mydb.board', (err, data) => {
      if (err) throw err;
      console.log(data);
      cb(data);
    });
  },
  // 게시글 추가하기
  writeArticle: (newArticle, cb) => {
    connection.query(
      `INSERT INTO mydb.board (USERID, TITLE, CONTENT) VALUES('${newArticle.userId}', '${newArticle.title}', '${newArticle.content}')`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      },
    );
  },
  // 특정 ID 값을 가지는 게시글 찾기
  getArticle: (id, cb) => {
    connection.query(
      `SELECT * FROM mydb.board WHERE ID_PK = ${id};`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      },
    );
  },
  // 특정 id를 가지는 게시들을 하는 컨트롤러
  modifyArticle: (id, modifyArticle, cb) => {
    connection.query(
      `UPDATE mydb.board SET TITLE = '${modifyArticle.title}', CONTENT = '${modifyArticle.content}' WHERE ID_PK = ${id};`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      },
    );
  },
  // 특정 id를 가지는 게시글 삭제하기
  deleteArticle: (id, cb) => {
    connection.query(
      `DELETE FROM mydb.board WHERE ID_PK = ${id};`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      },
    );
  },
};
module.exports = boardDB;
