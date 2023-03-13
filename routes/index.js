const express = require('express');

const router = express.Router();

// localhost:4000/
router.get('/', (req, res) => {
  res.render('index', { msg: '백엔드가 보낸 데이터' });
});

module.exports = router;
