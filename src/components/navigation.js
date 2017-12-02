import React from 'react';
import { appStyle } from '../appStyle'
import { Navbar, Nav } from 'react-bootstrap';
import { NavSocial } from './navSocial'
import { NavTabContainer } from '../containers/navTabContainer'

export const Navigation = (props) => (
  <Navbar style={appStyle.nav}>
    <Navbar.Header>
      <Navbar.Brand>
        <div style={appStyle.nav.brand}>
          Brendan Leonard
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        {props.sections.map((section, i) =>
          <NavTabContainer
            key={i}
            section={section} />
        )}
      </Nav>
      <Nav pullRight>
        {props.contact.map((contact, i) =>
          <NavSocial
            key={i}
            contact={contact}/>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)