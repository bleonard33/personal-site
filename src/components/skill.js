import React from 'react';
import { appStyle } from 'appStyle';
import Col from 'react-bootstrap/Col';

export const Skill = (props) => (
  <Col xs={12} sm={6} md={3}>
    <h3 style={appStyle.h2}>
      {props.category.type}
    </h3>
    {props.category.skills.map((skill, i) =>
      <div key={i}>
        <span style={appStyle.skills}>
          {skill}
        </span>
      </div>
    )}
  </Col>
)
