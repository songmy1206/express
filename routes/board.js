const express = require('express');

const router = express.Router();

const ARTICLE = [
  {
    title: 'title1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ducimus, qui obcaecati repellat alias dolorem quidem ea, hic, amet architecto sint recusandae officia consectetur tempore! Impedit cumque quo autem repellendus!',
  },
  {
    title: 'title2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ducimus, qui obcaecati repellat alias dolorem quidem ea, hic, amet architecto sint recusandae officia consectetur tempore! Impedit cumque quo autem repellendus!',
  },
];

// localhost:4000/board/
// 글 목록 보여주기
router.get('/', (req, res) => {
  res.render('board', { ARTICLE, articleCounts: ARTICLE.length });
});

// 글쓰기
// 글쓰기 모드로 이동
router.get('/write', (req, res) => {
  res.render('board_write');
});

// 글쓰기 추가
router.post('/write', (req, res) => {
  if (req.body.title && req.body.content) {
    const newArticle = {
      title: req.body.title,
      content: req.body.content,
    };
    ARTICLE.push(newArticle);
    res.redirect('/board');
  } else {
    const err = new Error('폼 입력을 확인하세요');
    err.statusCode = 400;
    throw err;
  }
});

// 글수정
// 글수정 모드로 이동
router.get('/modify/:title', (req, res) => {
  const arrIndex = ARTICLE.findIndex(
    (article) => req.params.title === article.title
  );
  const selectedArticle = ARTICLE[arrIndex];
  res.render('board_modify', { selectedArticle });
});

router.post('/modify/:title', (req, res) => {
  if (req.body.title && req.body.content) {
    const arrIndex = ARTICLE.findIndex(
      (article) => article.title === req.params.title
    );
    ARTICLE[arrIndex].title = req.body.title;
    ARTICLE[arrIndex].content = req.body.content;
    res.redirect('/board');
  } else {
    const err = new Error('해당 제목의 글이 없습니다.');
    err.statusCode = 404;
    throw err;
  }
});

// 글삭제
router.delete('/delete/:title', (req, res) => {
  const arrIndex = ARTICLE.findIndex(
    (article) => article.title === req.params.title
  );
  ARTICLE.splice(arrIndex, 1);
  res.send('글삭제 완');
});

module.exports = router;
