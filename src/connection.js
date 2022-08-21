const mongoose = require("mongoose");

const connectionString = "";

const connectDB = async () => {
  try {
    // mongodb connection string
    const con = await mongoose.connect(connectionString);
    console.log(`MongoDB connected; ${con.connection.host}`);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
