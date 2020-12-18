import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Table, Form } from "../../../node_modules/react-bootstrap";
import "../Invoices/invoices.scss";

export default class invoices extends Component {
  render() {
    return (
      <div className="invoice-wrapper">
        <div className="details-dashboard">
          <Row>
            <Col sm={6} md={4}>
              <div className="ca-dashboard tips-dashboard">
                <div className="total-dashboard">
                  <p>
                    2598,98€<span>CA</span>
                  </p>
                </div>
                <div className="journey-dashboard">
                  <p>
                    329,78€<span>Aujourd’hui</span>
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} md={4}>
              <div className="invoice-dashboard tips-dashboard">
                <div className="total-dashboard">
                  <p>
                    74<span>Total factures</span>
                  </p>
                </div>
                <div className="journey-dashboard">
                  <p>
                    54<span>Factures payée</span>
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} md={4}>
              <div className="orders-dashboard tips-dashboard">
                <div className="total-dashboard">
                  <p>
                    3983<span>Commandes ce mois</span>
                  </p>
                </div>
                <div className="journey-dashboard">
                  <p>
                    56<span>Commandes aujourd’hui</span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="invoices-dashboard">
          <Row>
            <Col sm={12}>
              <div className="invoices-table">
                <div className="invoice-top">
                  <h3>Vos factures :</h3>
                  <div className="invoice-tools">
                    <Link to="/invoices/add/" className="btn btn-add">
                      Ajouter une facture
                    </Link>
                    <Form>
                      <Form.Control
                        className="search-input"
                        plaintext
                        placeholder="Chercher..."
                      />
                    </Form>
                  </div>
                </div>
                <Table className="table-dashboard">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Status</th>
                      <th>Client</th>
                      <th>Date facture</th>
                      <th>Quantité</th>
                      <th>Prix d'achat HT</th>
                      <th>Total HT</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#001</td>
                      <td>PRO</td>
                      <td>Uber Taxi</td>
                      <td>21-04-2005</td>
                      <td>1400</td>
                      <td>214,99 €</td>
                      <td>298,71 €</td>
                      <td>
                        <Link to="/invoices/show/invoice=001">
                          <span>
                            <i class="fas fa-eye"></i>
                          </span>
                        </Link>
                        <span className="download-btn">
                          <i class="fas fa-download"></i>
                        </span>
                        <Link to="/invoices/edits/invoice=001">
                          <span>
                            <i class="fas fa-pen"></i>
                          </span>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>#001</td>
                      <td>PRO</td>
                      <td>Uber Taxi</td>
                      <td>21-04-2005</td>
                      <td>1400</td>
                      <td>214,99 €</td>
                      <td>298,71 €</td>
                      <td>
                        <Link to="/invoices/show/invoice=001">
                          <span>
                            <i class="fas fa-eye"></i>
                          </span>
                        </Link>
                        <span className="download-btn">
                          <i class="fas fa-download"></i>
                        </span>
                        <Link to="/invoices/edits/invoice=001">
                          <span>
                            <i class="fas fa-pen"></i>
                          </span>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>#001</td>
                      <td>PRO</td>
                      <td>Uber Taxi</td>
                      <td>21-04-2005</td>
                      <td>1400</td>
                      <td>214,99 €</td>
                      <td>298,71 €</td>
                      <td>
                        <Link to="/invoices/show/invoice=001">
                          <span>
                            <i class="fas fa-eye"></i>
                          </span>
                        </Link>
                        <span className="download-btn">
                          <i class="fas fa-download"></i>
                        </span>
                        <Link to="/invoices/edits/invoice=001">
                          <span>
                            <i class="fas fa-pen"></i>
                          </span>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>#001</td>
                      <td>PRO</td>
                      <td>Uber Taxi</td>
                      <td>21-04-2005</td>
                      <td>1400</td>
                      <td>214,99 €</td>
                      <td>298,71 €</td>
                      <td>
                        <Link to="/invoices/show/invoice=001">
                          <span>
                            <i class="fas fa-eye"></i>
                          </span>
                        </Link>
                        <span className="download-btn">
                          <i class="fas fa-download"></i>
                        </span>
                        <Link to="/invoices/edits/invoice=001">
                          <span>
                            <i class="fas fa-pen"></i>
                          </span>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>#001</td>
                      <td>PRO</td>
                      <td>Uber Taxi</td>
                      <td>21-04-2005</td>
                      <td>1400</td>
                      <td>214,99 €</td>
                      <td>298,71 €</td>
                      <td>
                        <Link to="/invoices/show/invoice=001">
                          <span>
                            <i class="fas fa-eye"></i>
                          </span>
                        </Link>
                        <span className="download-btn">
                          <i class="fas fa-download"></i>
                        </span>
                        <Link to="/invoices/edits/invoice=001">
                          <span>
                            <i class="fas fa-pen"></i>
                          </span>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>#001</td>
                      <td>PRO</td>
                      <td>Uber Taxi</td>
                      <td>21-04-2005</td>
                      <td>1400</td>
                      <td>214,99 €</td>
                      <td>298,71 €</td>
                      <td>
                        <Link to="/invoices/show/invoice=001">
                          <span>
                            <i class="fas fa-eye"></i>
                          </span>
                        </Link>
                        <span className="download-btn">
                          <i class="fas fa-download"></i>
                        </span>
                        <Link to="/invoices/edits/invoice=001">
                          <span>
                            <i class="fas fa-pen"></i>
                          </span>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>#001</td>
                      <td>PRO</td>
                      <td>Uber Taxi</td>
                      <td>21-04-2005</td>
                      <td>1400</td>
                      <td>214,99 €</td>
                      <td>298,71 €</td>
                      <td>
                        <Link to="/invoices/show/invoice=001">
                          <span>
                            <i class="fas fa-eye"></i>
                          </span>
                        </Link>
                        <span className="download-btn">
                          <i class="fas fa-download"></i>
                        </span>
                        <Link to="/invoices/edits/invoice=001">
                          <span>
                            <i class="fas fa-pen"></i>
                          </span>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>#001</td>
                      <td>PRO</td>
                      <td>Uber Taxi</td>
                      <td>21-04-2005</td>
                      <td>1400</td>
                      <td>214,99 €</td>
                      <td>298,71 €</td>
                      <td>
                        <Link to="/invoices/show/invoice=001">
                          <span>
                            <i class="fas fa-eye"></i>
                          </span>
                        </Link>
                        <span className="download-btn">
                          <i class="fas fa-download"></i>
                        </span>
                        <Link to="/invoices/edits/invoice=001">
                          <span>
                            <i class="fas fa-pen"></i>
                          </span>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
