import React from 'react'
import Section from './section'
import Divider from './divider'
import {Row, Col} from 'react-bootstrap'
import Image from 'next/image'

export default function About() {
  return (
      <>
        <Divider/>
        <Section name="about">
            <Row className="d-flex justify-content-between">
                <Col xs={{number: 12, order: 'last'}} md={{number: 5, order: 'first'}}>
                    <h1>About</h1>
                    <b className="br"></b>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod
                        nisi, eu porttitor nisl nisi eu risus. Sed euismod, urna euer 
                        tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl
                        nisi eu risus. Sed euismod, urna euer tincidunt consectetur, nisl
                        nunc euismod nisi, eu porttitor nisl nisi eu risus. 
                    </p>
                </Col>
                <Col xs={12} md={6} className="order-xs-first" style={{paddingBottom: '1rem'}}>
                    <Image src="/about.svg" height="165" width="340" layout="responsive"/>
                </Col>
            </Row>
        </Section>
      </>
  )
}
