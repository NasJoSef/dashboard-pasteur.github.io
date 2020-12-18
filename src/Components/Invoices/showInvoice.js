import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Table, Button } from "../../../node_modules/react-bootstrap";
import "../Invoices/invoices.scss";

export default class showInvoice extends Component {
  render() {
    return (
      <div className="show-invoice">
        <div className="details-invoice">
          <Row>
            <Col sm={12}>
              <div className="view-invoice">
                <p>Voir la facture #001</p>
                <div className="show-tools">
                  <Button className="btn btn-status">
                    Changer statut de la facture
                  </Button>
                  <Link to="/invoices/edit/" className="btn btn-edit">
                    Modifier la facture
                  </Link>
                  <Button className="btn btn-download">
                    Télecharger la facture
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <div className="client-info">
                <h3>Information client :</h3>
                <div className="info-wrapper">
                  <div className="ref">
                    <h3>Réf facture :</h3>
                    <p>#RI4982</p>
                  </div>
                  <div className="ref">
                    <h3>Date facture :</h3>
                    <p>23-04-2021</p>
                  </div>
                  <div className="ref">
                    <h3>Deadline :</h3>
                    <p>23-05-2021</p>
                  </div>
                  <div className="ref">
                    <h3>Client / Entreprise :</h3>
                    <p>
                      <span className="status pro">PRO</span>#RC029 - UBER TAXI
                    </p>
                  </div>
                  <div className="ref">
                    <h3>Adresse :</h3>
                    <p>85 Place de la Madeleine, 75010, Paris, France</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className="client-info">
                <h3>Information paiement :</h3>
                <div className="info-wrapper">
                  <div className="ref">
                    <h3>Méthode paiement :</h3>
                    <p>Virement bancaire</p>
                  </div>
                  <div className="ref">
                    <h3>Total HT :</h3>
                    <p>2000,00 €</p>
                  </div>
                  <div className="ref">
                    <h3>TVA 20% :</h3>
                    <p>361,98 €</p>
                  </div>
                  <div className="ref">
                    <h3>Net TTC :</h3>
                    <p>2361,98 €</p>
                  </div>
                  <div className="ref">
                    <h3>Statut :</h3>
                    <p>Non payé</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <div className="order-information">
                <div className="order-infos-wrapper">
                  <h3>Information commandes :</h3>
                  <div className="order-table-infos">
                    <Table className="table-orders">
                      <thead>
                        <tr>
                          <th>Commande ID</th>
                          <th>Description</th>
                          <th>Nbr passage</th>
                          <th>Quantité</th>
                          <th>Prix achat HT</th>
                          <th>Total HT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#C001</td>
                          <td>RELEVE DE CARBURANT DU MOIS DE SEPTEMBRE 2021</td>
                          <td>18</td>
                          <td>1329</td>
                          <td>1382,69 €</td>
                          <td>2094,16 €</td>
                        </tr>
                        <tr>
                          <td>#C002</td>
                          <td>RELEVE DE CARBURANT DU MOIS DE SEPTEMBRE 2021</td>
                          <td>18</td>
                          <td>1329</td>
                          <td>1382,69 €</td>
                          <td>2094,16 €</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
