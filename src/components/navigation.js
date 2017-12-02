import React from 'react';
import { appStyle } from '../appStyle'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavSocial } from './navSocial'
import { NavTab } from './navTab'

export const Navigation = (props) => (
  <Navbar style={appStyle.nav}>
    <Navbar.Header>
      <Navbar.Brand>
        <div style={appStyle.nav.brand}>Brendan Leonard</div>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        {props.sections.map(section =>
          <NavTab section={section} />
        )}
      </Nav>
      <Nav pullRight>
        {props.contact.map(contact =>
          <NavSocial contact={contact}/>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)