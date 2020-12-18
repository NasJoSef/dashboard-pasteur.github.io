import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import { Container, Row, Col } from "../../../node_modules/react-bootstrap";
import "../Navigation/navigation.scss";
import pasteur_logo from "../../assets/img/pasteur_logo.svg";

import Orders from "../Orders/orders";
import AddOrder from "../Orders/addOrder";
import EditOrder from "../Orders/editOrder";
import Dashboard from "../Dashboard/dashboard";
import Invoices from "../Invoices/invoices";
import AddInvoice from "../Invoices/addInvoice";
import EditInvoice from "../Invoices/editInvoice";
import ShowInvoice from "../Invoices/showInvoice";
import Clients from "../Clients/clients";
import AddClient from "../Clients/addClient";
import EditClient from "../Clients/editClient";
export default class navigation extends Component {
  render() {
    return (
      <div className="navigation-wrapper">
        <Router>
          <Container fluid>
            <Row>
              <Col sm={3}>
                <div className="navigation-bar">
                  <div className="logo-dashboard">
                    <img src={pasteur_logo} alt="" />
                  </div>
                  <div className="menu-dashboard">
                    <ul>
                      <li>
                        <NavLink className="navs" exact={true} to="/">
                          <div className="ico-tab-wrapper">
                            <div className="ico">
                              <i class="fas fa-chart-bar"></i>
                            </div>
                            <div className="tab">
                              <p>Dashboard</p>
                            </div>
                          </div>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="navs" to="/clients">
                          <div className="ico-tab-wrapper">
                            <div className="ico">
                              <i class="fas fa-users"></i>
                            </div>
                            <div className="tab">
                              <p>Clients</p>
                            </div>
                          </div>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="navs" to="/orders">
                          <div className="ico-tab-wrapper">
                            <div className="ico">
                              <i class="fas fa-shopping-basket"></i>
                            </div>
                            <div className="tab">
                              <p>Commandes</p>
                            </div>
                          </div>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="navs" to="/invoices">
                          <div className="ico-tab-wrapper">
                            <div className="ico">
                              <i class="fas fa-file-invoice-dollar"></i>
                            </div>
                            <div className="tab">
                              <p>Factures</p>
                            </div>
                          </div>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col sm={9}>
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/clients" component={Clients} />
                  <Route path="/clients/add" component={AddClient} />
                  <Route path="/clients/edit" component={EditClient} />
                  <Route exact path="/orders" component={Orders} />
                  <Route path="/orders/add" component={AddOrder} />
                  <Route path="/orders/edit" component={EditOrder} />
                  <Route path="/orders/show" component={EditOrder} />
                  <Route exact path="/invoices" component={Invoices} />
                  <Route path="/invoices/add" component={AddInvoice} />
                  <Route path="/invoices/edit" component={EditInvoice} />
                  <Route path="/invoices/show" component={ShowInvoice} />
                </Switch>
              </Col>
            </Row>
          </Container>
        </Router>
      </div>
    );
  }
}
