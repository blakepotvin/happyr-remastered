import React from "react";
import Section from "./section";
import FeatureBox from "./featureBox";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";

export default function Features() {
  return (
    <>
      <Divider />
      <Section name="features">
        <h1 className="text-center">Features</h1>
        <Row className="d-flex gap-5 justify-content-center">
          <FeatureBox
            title="Daily Qutoes"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis libero a dolor hendrerit interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
            icon="bi-chat-left-quote-fill"
          />
          <FeatureBox
            title="Daily Qutoes"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis libero a dolor hendrerit interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
            icon="bi-chat-left-quote-fill"
          />
          <FeatureBox
            title="Daily Qutoes"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis libero a dolor hendrerit interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
            icon="bi-chat-left-quote-fill"
          />
        </Row>
      </Section>
    </>
  );
}
