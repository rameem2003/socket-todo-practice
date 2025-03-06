const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      ""
    );
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error);

    console.log("Database Connection Failed");
  }
};
module.exports = connectDB;
