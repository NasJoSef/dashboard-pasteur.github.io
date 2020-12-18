import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Table,
  Button,
  Form
} from "../../../node_modules/react-bootstrap";
import "../Invoices/invoices.scss";
import DatePicker from "react-date-picker";

export default class editInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderShown: false
    };
  }
  toggleOrder = () => {
    const { orderShown } = this.state;
    this.setState({
      orderShown: !orderShown
    });
  };
  render() {
    const { orderShown } = this.state;
    return (
      <div className="edit-invoice">
        <div className="details-invoice">
          <Row>
            <Col sm={12}>
              <div className="view-invoice">
                <p>Modifier la facture #001</p>
                <div className="show-tools">
                  <Button className="btn btn-save">Sauvgarder</Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <div className="invoice-info">
                <h3>Information facture :</h3>
                <div className="info-wrapper">
                  <div className="ref">
                    <h3>Réf facture :</h3>
                    <p>#RI4982</p>
                  </div>
                  <div className="ref">
                    <h3>Date facture :</h3>
                    <DatePicker clearIcon />
                  </div>
                  <div className="ref">
                    <h3>Deadline :</h3>
                    <DatePicker clearIcon />
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className="client-info">
                <h3>Information client :</h3>
                <div className="info-wrapper">
                  <div className="ref">
                    <h3>Client statut :</h3>
                    <Form.Check
                      name="status"
                      id="pro"
                      value="pro"
                      type="radio"
                      className="radio-client"
                    />
                    <Form.Label className="label-client" for="pro">
                      Pro
                    </Form.Label>
                    <Form.Check
                      name="status"
                      id="particulier"
                      value="particulier"
                      type="radio"
                      className="radio-client"
                    />
                    <Form.Label className="label-client" for="particulier">
                      Particulier
                    </Form.Label>
                  </div>
                  <div className="ref">
                    <h3>Client / Agence :</h3>
                    <Form.Group controlId="exampleForm.SelectCustom">
                      <Form.Control
                        className="select-client"
                        as="select"
                        custom
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                  </div>
                  <div className="ref">
                    <h3>Adresse :</h3>
                    <Form.Control
                      className="text-input address-input"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <div className="client-info">
                <h3>Information commande :</h3>
                <div className="info-wrapper">
                  <div className="ref">
                    <h3>Description :</h3>
                    <Form.Control
                      className="text-input description-input"
                      type="text"
                    />
                  </div>
                  <div className="ref">
                    <h3>Nombre de passages :</h3>
                    <Form.Control
                      className="text-input passage-input"
                      type="number"
                    />
                  </div>
                  <div className="ref">
                    <div className="ref-multi">
                      <div className="multi">
                        <h3>Prix d'achat HT :</h3>
                        <Form.Control
                          className="multi-input text-input achat-input"
                          type="number"
                        />
                      </div>
                      <div className="multi">
                        <h3>Quantité :</h3>
                        <Form.Control
                          className="multi-input text-input quantity-input"
                          type="number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ref">
                    <div className="ref-multi ref-button">
                      <div className="multi">
                        <h3>Total HT :</h3>
                        <Form.Control
                          className="multi-input text-input total-input"
                          type="number"
                        />
                      </div>
                      <div className="show-tools">
                        <Button className="btn btn-add">Ajouter</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className="order-info-list">
                <h3>Liste des commandes :</h3>
                <div className="order-wrapper-accord">
                  <div
                    className={orderShown ? "title-main active" : "title-main"}
                  >
                    <div className="title-order" onClick={this.toggleOrder}>
                      <h3>RELEVÉ DE CARBURANT DU MOIS DE SEPTEMBRE 2021</h3>
                      <span>
                        <i class="fas fa-chevron-down"></i>
                      </span>
                    </div>
                    <div className="detail-order">
                      <ul>
                        <li>
                          Nombre de passage :<span>16</span>
                        </li>
                        <li>
                          Quantité :<span>1265</span>
                        </li>
                        <li>
                          Prix d'achat HT :<span>268,91 €</span>
                        </li>
                        <li>
                          Total HT :<span>427,31 €</span>
                        </li>
                      </ul>
                      <div className="show-tools">
                        <Button className="btn btn-delete">Supprimer</Button>
                      </div>
                    </div>
                  </div>
                  <div
                    className={orderShown ? "title-main active" : "title-main"}
                  >
                    <div className="title-order" onClick={this.toggleOrder}>
                      <h3>RELEVÉ DE CARBURANT DU MOIS DE OCTOBRE 2021</h3>
                      <span>
                        <i class="fas fa-chevron-down"></i>
                      </span>
                    </div>
                    <div className="detail-order">
                      <ul>
                        <li>
                          Nombre de passage :<span>16</span>
                        </li>
                        <li>
                          Quantité :<span>1265</span>
                        </li>
                        <li>
                          Prix d'achat HT :<span>268,91 €</span>
                        </li>
                        <li>
                          Total HT :<span>427,31 €</span>
                        </li>
                      </ul>
                      <div className="show-tools">
                        <Button className="btn btn-delete">Supprimer</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <div className="payment-wrapper">
                <h3>Information paiement :</h3>
                <div className="payment-details-wrapper">
                  <div className="details-payment">
                    <div className="ref">
                      <h3>Méthode du paiement :</h3>
                      <Form.Check
                        name="status"
                        id="Chéque"
                        value="Chéque"
                        type="radio"
                        className="radio-client"
                      />
                      <Form.Label className="label-client" for="Chéque">
                        Chéque
                      </Form.Label>
                      <Form.Check
                        name="status"
                        id="Virement bancaire"
                        value="Virement bancaire"
                        type="radio"
                        className="radio-client"
                      />
                      <Form.Label
                        className="label-client"
                        for="Virement bancaire"
                      >
                        Virement bancaire
                      </Form.Label>
                      <Form.Check
                        name="status"
                        id="Carte crédit"
                        value="Carte crédit"
                        type="radio"
                        className="radio-client"
                      />
                      <Form.Label className="label-client" for="Carte crédit">
                        Carte crédit
                      </Form.Label>
                    </div>
                    <div className="ref">
                      <h3>Statut facture :</h3>
                      <Form.Check
                        name="pay"
                        id="Payé"
                        value="Payé"
                        type="radio"
                        className="radio-client"
                      />
                      <Form.Label className="label-client" for="Payé">
                        Payé
                      </Form.Label>
                      <Form.Check
                        name="pay"
                        id="Non_payé"
                        value="Non payé"
                        type="radio"
                        className="radio-client"
                      />
                      <Form.Label className="label-client" for="Non_payé">
                        Non payé
                      </Form.Label>
                    </div>
                  </div>
                  <div className="calcul-details">
                    <ul>
                      <li>
                        Total HT :<span>2000,00 €</span>
                      </li>
                      <li>
                        TVA 20% :<span>235,10 €</span>
                      </li>
                      <li>
                        Net TTC :<span>2235,10 €</span>
                      </li>
                    </ul>
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
