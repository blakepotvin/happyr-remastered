import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function Footer() {
    function currentYear(){
        return new Date().getUTCFullYear();
    }
  return (
    <div className="section footer">
      <Container>
        <Row className="d-flex justify-content-between gap-4">
          <Col lg={5} className="d-flex flex-column">
            <h1>Happyr</h1>
            <p>Start Your Day Off Right. Become Happyr.</p>
          </Col>
        <Col lg={2} className="d-flex flex-column">
            <h3>Navigation</h3>
            <ul className="list-unstyled">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#features">Features</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
            </ul>
        </Col>
        <Col lg={2} className="d-flex flex-column">
            <h3>Information</h3>
            <ul className="list-unstyled">
                <li>
                    <a href="#">Terms & Conditions</a>
                </li>
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
                <li>
                    <a href="#">Dashboard</a>
                </li>
            </ul>
        </Col>
        <Col lg={2} className="d-flex flex-column">
            <h3>Contact</h3>
            <ul className="list-unstyled">
                <li>
                    <a href="#">email@email.com</a>
                </li>
            </ul>
        </Col>
        </Row>
        <hr/>
        <p style={{opacity: .9}}>Happyr | Copyright &copy; {currentYear()} | All rights reserved.</p>
      </Container>
    </div>
  );
}
