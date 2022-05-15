import React from "react";
import { Container } from "react-bootstrap";

export default function Section(props) {
  return (
    <div className={props.name + " section"} id={props.name}>
      <Container>{props.children}</Container>
    </div>
  );
}
