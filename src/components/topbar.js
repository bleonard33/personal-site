import React from 'react';
import { appStyle } from '../appStyle'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { TopSocial } from './topSocial'
import { TopSection } from './topSection'

export const Topbar = (props) => (
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
          <TopSection section={section} />
        )}
      </Nav>
      <Nav pullRight>
        {props.contact.map(contact =>
          <TopSocial contact={contact}/>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)