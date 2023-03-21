const { MongoClient, ServerApiVersion, FindCursor } = require('mongodb');

const uri =
  'mongodb+srv://songmy1206:thdalsdud1206~!@cluster0.ujuooeh.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
