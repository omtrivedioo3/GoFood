const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const mongoURI = process.env.MONGO_URL;
console.log(process.env.MONGO_URL);
const db = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://omtrivedioo3:cHJmpFbd3uymbONe@cluster0.0nanz1g.mongodb.net/gofoodmern?retryWrites=true&w=majority"
    );
    console.log("connect db successfully");
    const fetched_data = await mongoose.connection.db
      .collection("users")
      .find({})
      .toArray();

    // console.log(fetched_data);
  } catch (e) {
    console.log("Error from dbconnection: " + e.message);
  }
};
// const mongoose = require("mongoose");
// const URL = process.env.MONGO_URL;
// // con
// mongoose.connect(
//   "mongodb+srv://omtrivedioo3:cHJmpFbd3uymbONe@cluster0.0nanz1g.mongodb.net/gofoodmern?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );
// //  password : 78wXMxojl1rc0rSZ

// // var db = mongoose.connection;
// const db = async () => {
//   try {
//     await mongoose.connection.on(
//       "error",
//       console.error.bind(console, "Connecton error")
//     );
//     mongoose.connection.once("open", function () {
//       // console.log(URL);
//       console.log("mongoDB connected");
//       const fetched_data = mongoose.connection.db
//         .collection("items")
//         .find({})
//         .toArray();
//       console.log("mongoDB connected", fetched_data);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// module.exports = db;
module.exports = db;

// mongodb+srv://omtrivedioo3:cHJmpFbd3uymbONe@cluster0.0nanz1g.mongodb.net/gofoodmern?retryWrites=true&w=majority
