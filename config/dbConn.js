const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
  } catch (err) {
    console.log(err); // also, it's 'error', not 'err'
  }
};

module.exports = connectDB;
