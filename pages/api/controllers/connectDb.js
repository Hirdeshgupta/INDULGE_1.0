const mongoose = require("mongoose");
export default async function connectDb() {
  await mongoose.connect(process.env.MONGODB_URI, () => {
    console.log("Mongo Db Connected...");
  });
}
