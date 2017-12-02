import React from 'react';
import { appStyle } from '../appStyle'
import { NavItem } from 'react-bootstrap';

export const NavTab = (props) => (
  <NavItem
    href={"#" + props.section.title.toLowerCase()}
    onMouseEnter={props.handleHover}
    onMouseLeave={props.handleHover}
    style={props.tabStyle}>

    <div style={{...appStyle.nav.sectionIcon, ...props.iconStyle}}>
      <i className={props.icon} />
    </div>
    <div style={{...appStyle.nav.sectionTab, ...props.textStyle}}>
      {props.section.title}
    </div>
  </NavItem>
)