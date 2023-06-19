const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  productName: {
    type: String,
    require: true,
  },
  productDescription: {
    type: String,
  },
  productPrice: {
    type: Number,
    require: true,
  },
  productQuantity: {
    type: Number,
    require: true,
  },
  productImage: {
    type: String,
  },
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

module.exports = mongoose.model("Product", Schema);
