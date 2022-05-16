import React from "react";
import Section from "./section";
import { Row } from "react-bootstrap";
import TestimonialBox from "./testimonialBox";
export default function Testimonials() {
  return (
    <Section name="testimonials">
      <h1 className="text-center">Testimonials</h1>
      <Row className="d-flex justify-content-center">
        <TestimonialBox
          author="Saurik"
          occupation="SaurikIT LLC"
          quote="Interesting."
          image="/testimonials/saurik.png"
        />
        <TestimonialBox
          author="Sampath Eaty"
          occupation="Hemlock Semiconductor Operations"
          quote="Quite literally my main motivator in my life."
          image="/testimonials/sampath.jpeg"
        />
        <TestimonialBox
          author="Prathik Murthy"
          occupation="Steelcase"
          quote="Agreed, this is the best way to to stay motivated."
          image="/testimonials/prathik.jpeg"
        />
      </Row>
    </Section>
  );
}
