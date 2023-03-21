const mongoClient = require('./mongoConnect');

const userDB = {
  // 중복회원 찾기
  userCheck: async (userId) => {
    try {
      const client = await mongoClient.connect();
      const user = client.db('kdt5').collection('user');
      const findUser = await user.findOne({ id: userId });
      if (!findUser) return false;
      return findUser;
    } catch (err) {
      console.error(err);
    }
  },
  // 회원가입하기
  registerUser: async (newUser)=>{
    try{
      const client = await mongoClient.connect();
      const user = client.db('kdt5').collection('user');
      await isSecureContext.insertOne(newUser)
      return true;
    }catch(err){
      console.log(err);
    }
  }















  userCheckSQL: (userId, cb) => {
    connection.query(
      `SELECT * FROM mydb.user WHERE USERID = '${userId}';`,
      (err, data) => {
        if (err) throw err;
        console.log(data);
        cb(data);
      },
    );
  },
  // 회원가입 하기
  registerUser: (newUser, cb) => {
    connection.query(
      `INSERT INTO mydb.user (USERID, PASSWORD) values ('${newUser.id}', '${newUser.password}');`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      },
    );
  },
  // getUsers: (cb) => {
  //   connection.query('SELECT * FROMD mydb.user;', (err, data) => {
  //     if (err) throw err;
  //     console.log(data);
  //     cb(data);
  //   });
  // },
};

module.exports = userDB;
