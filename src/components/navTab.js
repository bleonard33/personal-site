import React from 'react';
import { appStyle } from 'appStyle';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NavTab = (props) => (
  <Nav.Item
    onMouseEnter={props.handleHover}
    onMouseLeave={props.handleHover}
    style={{ ...props.tabStyle, ...appStyle.nav.item }}>
    <Nav.Link href={"#" + props.section.title.toLowerCase()} >
      <div style={{ ...appStyle.nav.sectionIcon, ...props.iconStyle }}>
        <FontAwesomeIcon icon={props.section.icon} />
      </div>
      <div style={{ ...appStyle.nav.sectionTab, ...props.textStyle }}>
        {props.section.title}
      </div>
    </Nav.Link>
  </Nav.Item>
)
