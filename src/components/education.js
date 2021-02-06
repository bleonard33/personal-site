import React from 'react';
import { Projects } from 'components/projects';
import { appStyle } from 'appStyle';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Education = (props) => (
  <Row style={appStyle.padRow}>
    <Col xs={12} style={appStyle.h2}>
      {props.degree.university}
    </Col>
    <Col xs={12} style={appStyle.h3}>
      {props.degree.type}, {props.degree.field}
    </Col>
    <Col xs={12} lg={3}>
      <FontAwesomeIcon icon='map-marker-alt' style={appStyle.education.icon} />
      &nbsp;&nbsp;
      {props.degree.city}, {props.degree.state}
    </Col>
    <Col xs={12} lg={3}>
      <FontAwesomeIcon icon='calendar-alt' style={appStyle.education.icon} />
      &nbsp;&nbsp;
      {props.degree.startDate}
      &nbsp;&ndash;&nbsp;
      {props.degree.endDate}
    </Col>
    <Col xs={12} lg={3}>
      <FontAwesomeIcon icon='graduation-cap' style={appStyle.education.icon} />&nbsp;&nbsp;
      {Number(props.degree.gpa).toFixed(1)} GPA
    </Col>
    { props.degree.projects ? <Projects projects={props.degree.projects} color={appStyle.colors.education}></Projects> : null}
  </Row>
)
