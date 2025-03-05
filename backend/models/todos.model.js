const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("todo", todosSchema);
