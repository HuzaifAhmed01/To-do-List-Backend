import mongoose from "mongoose";

let connectDB = async (dbstring, dbname) => {
  try {
    await mongoose.connect(dbstring + dbname);
    console.log("Database connection established");
  } catch (error) {
    console.log(`failed to connect to database ${error.message}`);
  }
};

export default connectDB;
