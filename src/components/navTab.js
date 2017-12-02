import React, { Component } from 'react';
import { NavItem } from 'react-bootstrap';


export class NavTab extends Component {
  render() {

    const style = {
      ':hover': {
        backgroundColor: '#AAA'
      }
    }

    return (
      <NavItem
        href={"#" + this.props.section.title.toLowerCase()}
        style={style}>
          {this.props.section.title}
      </NavItem>
    )
  }
}
