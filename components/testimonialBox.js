import React from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
export default function TestimonialBox(props) {
  return (
    <Col lg={3} md={5} className="testimonial-box mx-3 d-flex flex-column justify-content-between">
      <p className="quote">"{props.quote}"</p>
      <Row className="d-flex align-items-center">
        <Col md={3} xs={2}>
          <Image src={props.image} height="60" width="60" className="rounded-circle"/>
        </Col>
        <Col>
          <span className="author">{props.author}</span><br/>
          <span className="occupation">{props.occupation}</span>
        </Col>
      </Row>
    </Col>
  );
}
