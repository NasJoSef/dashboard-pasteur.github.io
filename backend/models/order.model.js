const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    id: {
      type: String,
      unique: true
    },
    dateOrder: {
      type: Date,
      required: true
    },
    description: {
      type: String,
      require: true
    },
    nbrPassage: {
      type: Number,
      require: true,
      default: 0
    },
    sellPrice: {
      type: Number,
      require: true,
      default: 0
    },
    quantity: {
      type: Number,
      require: true,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
