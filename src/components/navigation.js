import React from 'react';
import { appStyle } from 'appStyle'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavSocial } from 'components/navSocial'
import { NavTabContainer } from 'containers/navTabContainer'

export const Navigation = (props) => (
  <Navbar
    style={appStyle.nav}
    bg={appStyle.nav.backgroundColor}
    sticky="top" collapseOnSelect expand="md" variant="dark">
    <Navbar.Brand>
      <a href="#" style={appStyle.nav.brand}>
        {props.headerName}
      </a>
    </Navbar.Brand>
    <Navbar.Toggle style={appStyle.nav.toggle} aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        {props.sections.map((section, i) =>
          <NavTabContainer
            key={i}
            section={section} />
        )}
      </Nav>
      <Nav className="ml-auto" style={appStyle.nav.socialNav}>
        {props.contact.map((contact, i) => {
          if (contact.nav) {
            return (
              <NavSocial
                key={i}
                contact={contact} />
            )
          }
        })}
      </Nav>
    </Navbar.Collapse>
  </Navbar >
)

export default Navigation;
