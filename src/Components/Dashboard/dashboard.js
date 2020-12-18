import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Table } from "../../../node_modules/react-bootstrap";
import "../Dashboard/dashboard.scss";
import Chart from "chart.js";

export default class dashboard extends Component {
  componentDidMount() {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"],
        datasets: [
          {
            label: "",
            data: [1252, 963, 1200, 947, 682, 1982],
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderColor: "#0200C9",
            borderWidth: 1
          }
        ]
      }
    });
  }
  render() {
    return (
      <div className="dashboard-wrapper">
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
        <div className="chart-dashboard">
          <Row>
            <Col sm={12}>
              <h3>Votre financement :</h3>
              <div className="canvas-dashboard">
                <canvas id="myChart" width="400" height="100"></canvas>
              </div>
            </Col>
          </Row>
        </div>
        <div className="invoices-dashboard">
          <Row>
            <Col sm={8}>
              <div className="invoices-table">
                <div className="invoice-top">
                  <h3>Vos factures :</h3>
                  <Link className="see-all" to="/invoices">
                    Voir tous les factures
                  </Link>
                </div>
                <Table className="table-dashboard">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Status</th>
                      <th>Client</th>
                      <th>Date facture</th>
                      <th>Quantité</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="paid">
                      <td>#001</td>
                      <td>PRO</td>
                      <td>Uber Taxi</td>
                      <td>21-04-2021</td>
                      <td>1392</td>
                      <td>2389,81€</td>
                      <td>
                        <Link to="/invoices/invoice=001">
                          <span>
                            <i class="fas fa-eye"></i>
                          </span>
                        </Link>
                        <span className="download-btn">
                          <i class="fas fa-download"></i>
                        </span>
                      </td>
                    </tr>
                    <tr className="pending">
                      <td>#002</td>
                      <td>Particulier</td>
                      <td>Uber Eats</td>
                      <td>21-04-2021</td>
                      <td>782</td>
                      <td>2389,81€</td>
                      <td>
                        <Link to="/invoices/invoice=001">
                          <span>
                            <i class="fas fa-eye"></i>
                          </span>
                        </Link>
                        <span className="download-btn">
                          <i class="fas fa-download"></i>
                        </span>
                      </td>
                    </tr>
                    <tr className="paid">
                      <td>#003</td>
                      <td>Particulier</td>
                      <td>Booba</td>
                      <td>21-04-2021</td>
                      <td>951</td>
                      <td>2389,81€</td>
                      <td>
                        <Link to="/invoices/invoice=001">
                          <span>
                            <i class="fas fa-eye"></i>
                          </span>
                        </Link>
                        <span className="download-btn">
                          <i class="fas fa-download"></i>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col sm={4}>
              <div className="task-table">
                <div className="task-top">
                  <h3>Les tâches d'aujourd’hui :</h3>
                  <Link className="see-all" to="/taks">
                    Voir tous les tâches
                  </Link>
                </div>
                <Table className="tasks-table">
                  <thead>
                    <tr>
                      <th>Nom de la tâche</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="done">
                      <td>Appeler Uber concernant les factures.</td>
                    </tr>
                    <tr className="pending">
                      <td>Appler le comptable.</td>
                    </tr>
                    <tr className="done">
                      <td>Vérifier les factures.</td>
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
