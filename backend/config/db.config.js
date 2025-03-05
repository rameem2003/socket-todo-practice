const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rameemPersonal:rameem2003db@cluster0.ncsjdoi.mongodb.net/sockettodo"
    );
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error);

    console.log("Database Connection Failed");
  }
};
module.exports = connectDB;
