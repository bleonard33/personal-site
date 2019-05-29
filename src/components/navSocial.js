import React from 'react';
import { appStyle } from '../appStyle'
import { NavItem } from 'react-bootstrap';


export const NavSocial = (props) => {
  return (
    <NavItem
      href={props.contact.link}
      target="_blank">
        <i
          style={appStyle.nav.socialIcon}
          className={'fa ' + props.contact.icon}></i>
    </NavItem>
  )
}