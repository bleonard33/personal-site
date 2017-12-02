import React, { Component } from 'react';
import { NavTab } from '../components/navTab';

export class NavTabContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      icon: 'fa ' + this.props.section.icon,
      iconStyle: {display: 'none'},
      textStyle: {display: null},
      tabStyle: {backgroundColor: 'white'}
    }

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(event) {
    this.setState({
      hover: !this.state.hover,
      iconStyle: {
        display: !this.state.hover ? 'block' : 'none',
        color: 'white'
      },
      textStyle: {
        visibility: !this.state.hover ? 'hidden' : null,
        height: !this.state.hover ? '0px' : null,
        overflow: !this.state.hover ? 'hidden' : null,
      },
      tabStyle: {
        backgroundColor: !this.state.hover ? this.props.section.color : 'white'
      }
    });
  }

  render() {
    return (
      <NavTab
        section={this.props.section}
        handleHover={this.handleHover}
        hover={this.state.hover}
        icon={this.state.icon}
        iconStyle={this.state.iconStyle}
        textStyle={this.state.textStyle}
        tabStyle={this.state.tabStyle} />
    )
  }
}