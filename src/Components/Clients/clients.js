import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Table,
  Button,
  Form
} from "../../../node_modules/react-bootstrap";
import "../Clients/clients.scss";

export default class clients extends Component {
  render() {
    return (
      <div className="client-wrapper">
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
        <div className="clients-dashboard">
          <Row>
            <Col sm={12}>
              <div className="clients-table">
                <div className="client-top">
                  <h3>Vos clients :</h3>
                  <div className="client-tools">
                    <Link to="/clients/add" className="btn btn-add">
                      Ajouter un client
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
                      <th>Date souscription</th>
                      <th>N° TVA</th>
                      <th>Adresse</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#001</td>
                      <td>PRO</td>
                      <td>Uber Taxi</td>
                      <td>21-04-2005</td>
                      <td>239017357590</td>
                      <td>85 Place de la Madeleine, 75010</td>
                      <td>
                        <Link to="/clients/client=001">
                          <span>
                            <i class="fas fa-ellipsis-v"></i>
                          </span>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>#002</td>
                      <td>Particulier</td>
                      <td>-</td>
                      <td>21-04-2016</td>
                      <td>-</td>
                      <td>85 Place de la Madeleine, 75010</td>
                      <td>
                        <Link to="/clients/client=001">
                          <span>
                            <i class="fas fa-ellipsis-v"></i>
                          </span>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>#001</td>
                      <td>PRO</td>
                      <td>Uber Taxi</td>
                      <td>21-04-2005</td>
                      <td>239017357590</td>
                      <td>85 Place de la Madeleine, 75010</td>
                      <td>
                        <Link to="/clients/client=001">
                          <span>
                            <i class="fas fa-ellipsis-v"></i>
                          </span>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>#002</td>
                      <td>Particulier</td>
                      <td>-</td>
                      <td>21-04-2016</td>
                      <td>-</td>
                      <td>85 Place de la Madeleine, 75010</td>
                      <td>
                        <Link to="/clients/client=001">
                          <span>
                            <i class="fas fa-ellipsis-v"></i>
                          </span>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>#001</td>
                      <td>PRO</td>
                      <td>Uber Taxi</td>
                      <td>21-04-2005</td>
                      <td>239017357590</td>
                      <td>85 Place de la Madeleine, 75010</td>
                      <td>
                        <Link to="/clients/client=001">
                          <span>
                            <i class="fas fa-ellipsis-v"></i>
                          </span>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>#002</td>
                      <td>Particulier</td>
                      <td>-</td>
                      <td>21-04-2016</td>
                      <td>-</td>
                      <td>85 Place de la Madeleine, 75010</td>
                      <td>
                        <Link to="/clients/client=001">
                          <span>
                            <i class="fas fa-ellipsis-v"></i>
                          </span>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>#001</td>
                      <td>PRO</td>
                      <td>Uber Taxi</td>
                      <td>21-04-2005</td>
                      <td>239017357590</td>
                      <td>85 Place de la Madeleine, 75010</td>
                      <td>
                        <Link to="/clients/client=001">
                          <span>
                            <i class="fas fa-ellipsis-v"></i>
                          </span>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>#002</td>
                      <td>Particulier</td>
                      <td>-</td>
                      <td>21-04-2016</td>
                      <td>-</td>
                      <td>85 Place de la Madeleine, 75010</td>
                      <td>
                        <Link to="/clients/client=001">
                          <span>
                            <i class="fas fa-ellipsis-v"></i>
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
