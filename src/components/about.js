import React from 'react';
import { appStyle } from 'appStyle';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const About = (props) => (
  <Row>
    <Col xs={12} sm={9}>
      <h3 style={appStyle.h2}>
        {props.about.lede}
      </h3>
      <div>
        {props.about.blurb.map((paragraph, i) =>
          <p key={i}>{paragraph}</p>
        )}
      </div>
    </Col>
    <Col xs={12} sm={3}>
      <Image fluid src={process.env.PUBLIC_URL + '/headshot.jpeg'} rounded />
    </Col>
  </Row>
)
