import React from 'react';
import { NavItem } from 'react-bootstrap';


const tab = {
  textAlign: 'center'
}

const sectionIcon = {
  fontSize: '1.2em',
  textAlign: 'center'
}

export const NavTab = (props) => (
  <NavItem
    href={"#" + props.section.title.toLowerCase()}
    onMouseEnter={props.handleHover}
    onMouseLeave={props.handleHover}
    style={{...props.tabStyle, tab}}>

    <div style={{...props.iconStyle, ...sectionIcon}}>
      <i className={props.icon} />
    </div>
    <div style={props.textStyle}>{props.section.title}</div>
  </NavItem>
)