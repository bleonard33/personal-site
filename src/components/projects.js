import React from 'react';
import { appStyle } from 'appStyle'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

export const Projects = (props) => (
  <Col xs={12}>
    <CardDeck style={appStyle.project.deck}>
      {props.projects.map((project, i) =>
        <Card style={appStyle.project.card}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body className="d-flex flex-column">
            <Card.Title>{project.title}</Card.Title>
            <Card.Subtitle>{project.subtitle}</Card.Subtitle>
            <Card.Text class="font-italic" style={{ paddingTop: '0.25em' }}>
              {project.description}
            </Card.Text>
            <Button className="mt-auto" variant="dark" href={project.url} target="_blank"
              style={{ ...appStyle.project.button, backgroundColor: props.color }}>
              {project.action}
            </Button>
          </Card.Body>
        </Card>
      )}
    </CardDeck>
  </Col>
)
