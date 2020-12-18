const router = require("express").Router();
let Order = require("../models/order.model");

router.route("/").get((req, res) => {
  Order.find()
    .then(order => res.json(order))
    .catch(err => res.status(400).json("Errror : " + err));
});

router.route("/add").post((req, res) => {
  const id = req.body.id;
  const dateOrder = Date.parse(req.body.dateOrder);
  const description = req.body.description;
  const nbrPassage = Number(req.body.nbrPassage);
  const sellPrice = Number(req.body.sellPrice);
  const quantity = Number(req.body.quantity);
  const total = Number(req.body.total);
  const newOrder = new Order({
    id,
    dateOrder,
    description,
    nbrPassage,
    sellPrice,
    quantity,
    total
  });

  newOrder
    .save()
    .then(() => res.json("Order Added!"))
    .catch(err => res.status(400).json("Error : " + err));
});

router.route("/:id").get((req, res) => {
  Order.findById(req.params.id)
    .then(order => res.json(order))
    .catch(err => res.status(400).json("Error : " + err));
});

router.route("/:id").delete((req, res) => {
  Order.findByIdAndDelete(req.params.id)
    .then(order => res.json("Order deleted"))
    .catch(err => res.status(400).json("Error : " + err));
});

router.route("/update/:id").post((req, res) => {
  Order.findById(req.params.id)
    .then(order => {
      order.id = req.body.id;
      order.dateOrder = Date.parse(req.body.dateOrder);
      order.description = req.body.description;
      order.nbrPassage = Number(req.body.nbrPassage);
      order.sellPrice = Number(req.body.sellPrice);
      order.quantity = Number(req.body.quantity);
      order.total = Number(req.body.total);

      order
        .save()
        .then(() => res.json("Order Updated!"))
        .catch(err => res.status(400).json("Error : " + err));
    })
    .catch(err => res.status(400).json("Error : " + err));
});

module.exports = router;
