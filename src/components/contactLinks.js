import React from 'react';
import { appStyle } from 'appStyle';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ContactLinks = (props) => (
  <Row>
    <Col xs={12} className="text-center">
      {props.contact.map((link, i) =>
        <Button style={appStyle.contact} variant="dark"
          href={link.link} target="_blank">
          <FontAwesomeIcon icon={link.icon} />
          &nbsp;&nbsp;{link.handle}
        </Button>
      )}
    </Col>
  </Row>
)

