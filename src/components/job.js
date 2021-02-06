import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { appStyle } from 'appStyle';
import { Projects } from 'components/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Job = (props) => {
  return (
    <Row style={appStyle.padRow}>
      <Col xs={12} style={appStyle.h2}>
        {props.job.company}
      </Col>
      <Col xs={12} style={appStyle.h3}>
        {props.job.title}
      </Col>
      <Col xs={12} lg={3}>
        <FontAwesomeIcon icon='map-marker-alt' style={appStyle.job.icon} />
        &nbsp;&nbsp;{props.job.location}
      </Col>
      <Col xs={12} lg={3}>
        <FontAwesomeIcon icon='calendar-alt' style={appStyle.job.icon} />
        &nbsp;&nbsp;
        {props.job.startDate}
        &nbsp;&ndash;&nbsp;
        {props.job.endDate}
      </Col>
      <Col xs={12} lg={3}>
        <FontAwesomeIcon icon='globe-americas' style={appStyle.job.icon} />
        &nbsp;&nbsp;
        <a href={'http://' + props.job.website} target='_blank' style={appStyle.job.link}>{props.job.website}</a>
      </Col>
      <ul style={appStyle.job.bullets}>
        {props.job.description.map((desc, i) =>
          <li key={i}>{desc}</li>
        )}
      </ul>
      { props.job.projects ? <Projects projects={props.job.projects} color={appStyle.colors.experience}></Projects> : null}
    </Row>
  )
}
