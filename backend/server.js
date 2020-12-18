const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

const clientsRouter = require("./routes/clients");
const invoicesRouter = require("./routes/invoices");
const ordersRouter = require("./routes/orders");

app.use("/clients", clientsRouter);
app.use("/invoices", invoicesRouter);
app.use("/orders", ordersRouter);

app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
