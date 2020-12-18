const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema(
  {
    id: {
      type: String
    },
    dateSubscription: {
      type: Date,
      required: true
    },
    statusClient: {
      type: String,
      require: true
    },
    raisonSocial: {
      type: String
    },
    tvaReference: {
      type: String
    },
    address: {
      type: String
    },
    mobilePhone: {
      type: String
    },
    fixePhone: {
      type: String
    },
    faxPhone: {
      type: String
    },
    email: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
