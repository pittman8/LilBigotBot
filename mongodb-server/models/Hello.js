const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HelloSchema = new Schema({
  value: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Hello", HelloSchema);
