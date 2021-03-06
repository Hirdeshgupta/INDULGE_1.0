import mongoose from "mongoose";

const connectDB = async (handler) => {
  if (
    mongoose.connections[0] != undefined &&
    mongoose.connections[0].readyState
  ) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect(
    process.env.MONGODB_URI,
    {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
    },
    () => {
      console.log("database successfully connected ...");
    }
  );
  return handler(req, res);
};

export default connectDB;
