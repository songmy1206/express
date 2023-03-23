// const mongoClient = require('./mongoConnect');
require('./mongooseConnect');

const User = require('../models/user');

const UNEXPECTED_MSG =
  '알 수 없는 문제 발생<br><a href="/register">회원가입으로 이동</a>';
const DUPLICATED_MSG =
  '동일한 ID를 가진 회원이 존재<br><a href="/register">회원가입으로 이동</a>';
const SUCCESS_MSG = '회원가입 성공<br><a href="/login">로그인으로 이동</a>';
const LOGIN_UNEXPECTED_MSG =
  '알 수 없는 문제 발생<br><a href="/register">회원가입으로 이동</a>';
const LOGIN_NOT_REGISTERED_MSG =
  '존재하지 않는 회원<br><a href="/login">로그인으로 이동</a>';
const LOGIN_WRONG_PASSWORD_MSG =
  '비밀번호가 틀렸습니다<br><a href="/login">로그인으로 이동</a>';

const registerUser = async (req, res) => {
  try {
    // const client = await mongoClient.connect();
    // const user = client.db('kdt5').collection('user');

    const duplicatedUser = await User.findOne({ id: req.body.id });
    if (duplicatedUser) return res.status(400).send(DUPLICATED_MSG);

    await User.create(req.body);

    res.status(200).send(SUCCESS_MSG);
  } catch (err) {
    console.error(err);
    res.status(500).send(UNEXPECTED_MSG);
  }
};

const loginUser = async (req, res) => {
  try {
    // const client = await mongoClient.connect();
    // const user = client.db('kdt5').collection('user');

    const logUser = await User.findOne({ id: req.body.id });
    if (!logUser) return res.status(400).send(LOGIN_NOT_REGISTERED_MSG);

    if (logUser.password !== req.body.password)
      return res.status(400).send(LOGIN_WRONG_PASSWORD_MSG);

    // 백엔드 세션 생성
    req.session.login = true;
    req.session.userId = req.body.id;

    // 로그인 쿠키 발행
    res.cookie('user', req.body.id, {
      maxAge: 1000 * 30,
      httpOnly: true,
      signed: true, // 쿠키 데이터 암호화되어 저장
    });
    res.status(200);
    res.redirect('/dbBoard');
  } catch (err) {
    console.error(err);
    res.status(500).send(LOGIN_UNEXPECTED_MSG);
  }
};

module.exports = {
  registerUser,
  loginUser,
};

// const userDB = {
//   // 중복회원 찾기
//   userCheck: async (userId) => {
//     try {
//       const client = await mongoClient.connect();
//       const user = client.db('kdt5').collection('user');
//       const findUser = await user.findOne({ id: userId });
//       // if (!findUser) return false;
//       return findUser;
//     } catch (err) {
//       console.error(err);
//     }
//   },
//   // 회원가입하기
//   registerUser: async (newUser) => {
//     try {
//       const client = await mongoClient.connect();
//       const user = client.db('kdt5').collection('user');
//       await user.insertOne(newUser);
//       return true;
//     } catch (err) {
//       console.log(err);
//     }
//   },

//   // userCheckSQL: (userId, cb) => {
//   //   connection.query(
//   //     `SELECT * FROM mydb.user WHERE USERID = '${userId}';`,
//   //     (err, data) => {
//   //       if (err) throw err;
//   //       console.log(data);
//   //       cb(data);
//   //     },
//   //   );
//   // },

//   // 회원가입 하기
//   // registerUser: (newUser, cb) => {
//   //   connection.query(
//   // `INSERT INTO mydb.user (USERID, PASSWORD) values ('$newUser.id}', '${newUser.password}');`,
//   //     (err, data) => {
//   //       if (err) throw err;
//   //       cb(data);
//   //     },
//   //   );
//   // },

//   // getUsers: (cb) => {
//   //   connection.query('SELECT * FROMD mydb.user;', (err, data) => {
//   //     if (err) throw err;
//   //     console.log(data);
//   //     cb(data);
//   //   });
//   // },
// };

// module.exports = userDB;
