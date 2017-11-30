import React from 'react';
import Radium from 'radium';
import { AppStyle } from '../appStyle'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { TopSocial } from './topSocial'
import { TopSection } from './topSection'

const brandStyle = {
  fontFamily: AppStyle.slab
}

export const Topbar = (props) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <div style={brandStyle}>Brendan Leonard</div>
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