import React, { Component } from "react";
import { Container, Row, Col } from "../../../node_modules/react-bootstrap";
import "../Header/header.scss";

export default class header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <Container>
          <Row>
            <Col sm={6}>
              <div className="name-dashboard">
                <h3>Pasteur service station</h3>
                <p>gestion commandes & factures</p>
              </div>
            </Col>
            <Col sm={6}>
              <div className="time-dashboard">
                <p>
                  vendredi 23 janvier 2021<span>14 : 34 : 56</span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
