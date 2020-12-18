const router = require("express").Router();
let Invoice = require("../models/invoice.model");

router.route("/").get((req, res) => {
  Invoice.find()
    .then(invoice => res.json(invoice))
    .catch(err => res.status(400).json("Errror : " + err));
});

router.route("/add").post((req, res) => {
  const id = req.body.id;
  const dateInvoice = Date.parse(req.body.dateInvoice);
  const dateDeadline = Date.parse(req.body.dateDeadline);
  const status = req.body.status;
  const paymentMethod = req.body.paymentMethod;
  const total = Number(req.body.total);
  const tva = Number(req.body.tva);
  const netTTC = Number(req.body.netTTC);
  const dateOrder = Date.parse(req.body.orders.dateOrder);
  const description = req.body.orders.description;
  const nbrPassage = Number(req.body.orders.nbrPassage);
  const sellPrice = Number(req.body.orders.sellPrice);
  const quantity = Number(req.body.orders.quantity);
  const totalOrder = Number(req.body.orders.totalOrder);
  const newInvoice = new Invoice({
    id,
    dateInvoice,
    dateDeadline,
    status,
    paymentMethod,
    total,
    tva,
    netTTC,
    dateOrder,
    description,
    nbrPassage,
    sellPrice,
    quantity,
    totalOrder
  });

  newInvoice
    .save()
    .then(() => res.json("Invoice Added!"))
    .catch(err => res.status(400).json("Error : " + err));
});

router.route("/:id").get((req, res) => {
  Invoice.findById(req.params.id)
    .then(invoice => res.json(invoice))
    .catch(err => res.status(400).json("Error : " + err));
});

router.route("/:id").delete((req, res) => {
  Invoice.findByIdAndDelete(req.params.id)
    .then(invoice => res.json("Invoice deleted"))
    .catch(err => res.status(400).json("Error : " + err));
});

router.route("/update/:id").post((req, res) => {
  Invoice.findById(req.params.id)
    .then(invoice => {
      invoice.id = req.body.id;
      invoice.dateInvoice = Date.parse(req.body.dateInvoice);
      invoice.dateDeadline = Date.parse(req.body.dateDeadline);
      invoice.status = req.body.status;
      invoice.paymentMethod = req.body.paymentMethod;
      invoice.total = Number(req.body.total);
      invoice.tva = Number(req.body.tva);
      invoice.netTTC = Number(req.body.netTTC);

      invoice
        .save()
        .then(() => res.json("Invoice Updated!"))
        .catch(err => res.status(400).json("Error : " + err));
    })
    .catch(err => res.status(400).json("Error : " + err));
});

module.exports = router;
