import React, { Component } from 'react';
import Radium from 'radium';
import { NavItem } from 'react-bootstrap';


class TopSection extends Component {
  render() {
    return (
      <NavItem
        href={"#" + this.props.section.title.toLowerCase()}
        style={{':hover': {backgroundColor: this.props.section.color}}}>
          {this.props.section.title}
      </NavItem>
    )
  }
}

export default TopSection = Radium(TopSection);
