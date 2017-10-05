import React, { Component } from 'react';
import Radium from 'radium';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { TopSocial } from './topSocial'
import { TopSection } from './topSection'

export class Topbar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Brendan Leonard</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {this.props.sections.map(section =>
              <TopSection section={section} />
            )}
          </Nav>
          <Nav pullRight>
            {this.props.contact.map(contact =>
              <TopSocial contact={contact}/>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}