const { MongoClient, ServerApiVersion, FindCursor } = require('mongodb');

const uri =
  'mongodb+srv://songmy1206:thdalsdud1206~!@cluster0.ujuooeh.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function main() {
  try {
    await client.connect();
    const member = client.db('kdt5').collection('member');

    await member.deleteMany({});

    await member.insertMany([
      { name: '희희', age: 24 },
      { name: '인영', age: 25 },
      { name: '성희', age: 26 },
      { name: '두루님', age: 30 },
    ]);

    await member.insertOne({ name: '유림', age: 26 });

    await member.deleteOne({ name: '인영' });

    await member.updateOne(
      { name: '유림' },
      { $set: { name: '인영', age: 25 } },
    );

    const findCursor = member.find({ age: { $gte: 25 } });
    const dateArr = await findCursor.toArray();
    console.log(dateArr);
  } catch (err) {
    console.error(err);
  }
}
main();

// client.connect((err) => {
//   const member = client.db('kdt5').collection('member');
//   member.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);
//     member.insertMany(
//       [
//         { name: '희희', age: 24 },
//         { name: '인영', age: 25 },
//         { name: '성희', age: 26 },
//         { name: '두루님', age: 30 },
//       ],
//       (insertManyErr, insertManyResult) => {
//         if (insertManyErr) throw insertManyErr;
//         console.log(insertManyResult);

//         member.insertOne(
//           { name: '유림', age: 26 },
//           (insertOneErr, insertOneResult) => {
//             if (insertOneErr) throw insertOneErr;
//             console.log(insertOneResult);

//             member.deleteOne(
//               { name: '인영' },
//               (deleteOneErr, deleteOneResult) => {
//                 if (deleteOneErr) throw deleteOneErr;
//                 console.log(deleteOneResult);

//                 member.updateOne(
//                   { name: '유림' },
//                   { $set: { name: '인영', age: 25 } },
//                   (updateOneErr, updateOneResult) => {
//                     if (updateOneErr) throw updateOneErr;
//                     console.log(updateOneResult);
//                     const findCursor = member.find({ age: { $gte: 25 } });
//                     console.log(findCursor);
//                     findCursor.toArray((toArrErr, toArrData) => {
//                       if (toArrErr) throw toArrErr;
//                       console.log(toArrData);
//                     });
//                   },
//                 );
//               },
//             );
//           },
//         );
//       },
//     );
//   });
// });
