const { MongoClient, ServerApiVersion, FindCursor } = require('mongodb');

const { MONGO_DB_URI } = process.env;
// const uri =
//   'mongodb+srv://songmy1206:thdalsdud1206~!@cluster0.ujuooeh.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
