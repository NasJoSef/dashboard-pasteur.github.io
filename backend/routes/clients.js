const router = require("express").Router();
let Client = require("../models/clients.model");

router.route("/").get((req, res) => {
  Client.find()
    .then(client => res.json(client))
    .catch(err => res.status(400).json("Errror : " + err));
});

router.route("/add").post((req, res) => {
  const id = req.body.id;
  const dateSubscription = Date.parse(req.body.dateSubscription);
  const statusClient = req.body.statusClient;
  const raisonSocial = req.body.raisonSocial;
  const tvaReference = Number(req.body.tvaReference);
  const address = req.body.address;
  const mobilePhone = req.body.mobilePhone;
  const fixePhone = req.body.fixePhone;
  const faxPhone = req.body.faxPhone;
  const email = req.body.email;
  const newClient = new Client({
    id,
    dateSubscription,
    statusClient,
    raisonSocial,
    tvaReference,
    address,
    mobilePhone,
    fixePhone,
    faxPhone,
    email
  });

  newClient
    .save()
    .then(() => res.json("Client Added!"))
    .catch(err => res.status(400).json("Error : " + err));
});

router.route("/:id").get((req, res) => {
  Client.findById(req.params.id)
    .then(client => res.json(client))
    .catch(err => res.status(400).json("Error : " + err));
});

router.route("/:id").delete((req, res) => {
  Client.findByIdAndDelete(req.params.id)
    .then(client => res.json("Client deleted"))
    .catch(err => res.status(400).json("Error : " + err));
});

router.route("/update/:id").post((req, res) => {
  Client.findById(req.params.id)
    .then(client => {
      client.id = req.body.id;
      client.dateSubscription = Date.parse(req.body.dateSubscription);
      client.statusClient = req.body.statusClient;
      client.raisonSocial = req.body.raisonSocial;
      client.tvaReference = Number(req.body.tvaReference);
      client.address = req.body.address;
      client.mobilePhone = req.body.mobilePhone;
      client.fixePhone = req.body.fixePhone;
      client.faxPhone = req.body.faxPhone;
      client.email = req.body.email;

      client
        .save()
        .then(() => res.json("Client Updated!"))
        .catch(err => res.status(400).json("Error : " + err));
    })
    .catch(err => res.status(400).json("Error : " + err));
});

module.exports = router;
