import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Table,
  Button,
  Form
} from "../../../node_modules/react-bootstrap";
import DatePicker from "react-date-picker";
import "./orders";

export default class editOrder extends Component {
  render() {
    return (
      <div className="edit-invoice">
        <div className="details-invoice">
          <Row>
            <Col sm={12}>
              <div className="view-invoice">
                <p>Modifier la commande #RO001</p>
                <div className="show-tools">
                  <Button className="btn btn-save">Sauvgarder</Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <div className="invoice-info client-info">
                <h3>Civilité client :</h3>
                <div className="info-wrapper">
                  <div className="ref">
                    <h3>Réf commande :</h3>
                    <p>#RO001</p>
                  </div>
                  <div className="ref">
                    <h3>Date commande :</h3>
                    <DatePicker clearIcon />
                  </div>
                  <div className="ref">
                    <h3>Client statut :</h3>
                    <Form.Check
                      name="status"
                      id="pro"
                      value="pro"
                      type="radio"
                      className="radio-client"
                      checked
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
                      checked
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
                        title="Uber Eats"
                      >
                        <option>Uber Eats</option>
                        <option>Booba</option>
                        <option>Digit Agency</option>
                      </Form.Control>
                    </Form.Group>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className="client-info">
                <h3>Information commande :</h3>
                <div className="info-wrapper">
                  <div className="ref">
                    <h3>Nombre de passages :</h3>
                    <Form.Control
                      className="text-input address-input"
                      type="text"
                    />
                  </div>
                  <div className="ref">
                    <h3>Quantité :</h3>
                    <Form.Control
                      className="text-input address-input"
                      type="text"
                    />
                  </div>
                  <div className="ref">
                    <h3>Prix d'achat TTC :</h3>
                    <Form.Control
                      className="text-input address-input"
                      type="text"
                    />
                  </div>
                  <div className="ref">
                    <h3>Total :</h3>
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
            <Col>
              <div className="view-invoice">
                <div className="show-tools">
                  <Button className="btn btn-save">
                    Sauvgarder & ajouter une facture
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
