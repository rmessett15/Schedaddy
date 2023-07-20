const { Schema, model } = require("mongoose");

// const userSchema = require("./User");

const positionSchema = new Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Position = model("Position", positionSchema);

module.exports = Position;
