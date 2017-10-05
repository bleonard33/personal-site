import React from 'react';
import { NavItem } from 'react-bootstrap';


export const TopSocial = (props) => {
  return (
    <NavItem
      href={props.contact.link}
      target="_blank">
        <i className={"fa " + props.contact.icon}></i>
    </NavItem>
  )
}