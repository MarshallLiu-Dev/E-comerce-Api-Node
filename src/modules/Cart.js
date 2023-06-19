const mongoose = require("mongoose");
const { type } = require("os");

const Schema = new mongoose.Schema({
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  userName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  address: {
    street: {
      type: String,
      //  required: true
    },
    number: {
      type: String,
      //  required: true
    },
    city: {
      type: String,
      //  required: true
    },
  },
  payment: {
    card: {
      type: String,
      //  required: true
    },
    cvc: {
      type: String,
      //  required: true
    },
  },
});

module.exports = mongoose.model("Cart", Schema);
