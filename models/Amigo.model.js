const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const amigoSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    age: {
        type: Number,
        required: false
    }
  }
);

const Amigo = model("Amigo", amigoSchema);

module.exports = Amigo;
