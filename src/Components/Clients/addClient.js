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
import "./clients.scss";

export default class addClient extends Component {
  render() {
    return (
      <div className="edit-invoice">
        <div className="details-invoice">
          <Row>
            <Col sm={12}>
              <div className="view-invoice">
                <p>Nouveau client #RC001</p>
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
                    <h3>Réf client :</h3>
                    <p>#RC001</p>
                  </div>
                  <div className="ref">
                    <h3>Date souscription :</h3>
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
                  </div>
                  <div className="ref">
                    <h3>Raison social :</h3>
                    <Form.Control
                      className="text-input address-input"
                      type="text"
                    />
                  </div>
                  <div className="ref">
                    <h3>N° TVA :</h3>
                    <Form.Control
                      className="text-input address-input"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className="client-info">
                <h3>Information client :</h3>
                <div className="info-wrapper">
                  <div className="ref">
                    <h3>Adresse :</h3>
                    <Form.Control
                      className="text-input address-input"
                      type="text"
                    />
                  </div>
                  <div className="ref">
                    <h3>N° mobile :</h3>
                    <Form.Control
                      className="text-input address-input"
                      type="text"
                    />
                  </div>
                  <div className="ref">
                    <h3>N° fixe :</h3>
                    <Form.Control
                      className="text-input address-input"
                      type="text"
                    />
                  </div>
                  <div className="ref">
                    <h3>N° fax :</h3>
                    <Form.Control
                      className="text-input address-input"
                      type="text"
                    />
                  </div>
                  <div className="ref">
                    <h3>Adresse mail :</h3>
                    <Form.Control
                      className="text-input address-input"
                      type="email"
                    />
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
