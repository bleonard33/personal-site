import React from 'react';
import { appStyle } from 'appStyle'
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const NavSocial = (props) => {
  return (
    <Nav.Item
    >
      <Nav.Link href={props.contact.link}
        target="_blank">
        <FontAwesomeIcon icon={props.contact.icon} style={appStyle.nav.socialIcon} />
      </Nav.Link>
    </Nav.Item >
  )
}
