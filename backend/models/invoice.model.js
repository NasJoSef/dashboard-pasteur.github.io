const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
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
    totalOrder: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

const invoiceSchema = new Schema(
  {
    dateInvoice: {
      type: Date,
      required: true
    },
    dateDeadline: {
      type: Date,
      required: false
    },
    status: {
      type: Boolean,
      required: true
    },
    paymentMethod: {
      type: String,
      required: true
    },
    total: {
      type: Number,
      default: 0
    },
    tva: {
      type: Number,
      default: 0
    },
    netTTC: {
      type: Number,
      default: 0
    },
    orders: {
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
      totalOrder: {
        type: Number,
        default: 0
      }
    }
  },
  {
    timestamps: true
  }
);

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
