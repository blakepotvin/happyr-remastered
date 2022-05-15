import React from 'react'
import {Col} from 'react-bootstrap'

export default function FeatureBox(props) {
  return (
    <>
      <Col lg={3} className="feature-box">
        <div className="feature-box-icon text-center">
          <i className={"bi " + props.icon} style={{fontSize: "4rem"}}></i>
        </div>
        <h3 className="text-center">{props.title}</h3>
        <hr/>
        <p className="text-center">{props.desc}</p>
      </Col>
    </>
  )
}
