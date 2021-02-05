import React, { Component } from 'react';
import { appStyle } from '../appStyle';
import { NavTab } from '../components/navTab';

export class NavTabContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      icon: 'fa ' + this.props.section.icon,
      iconStyle: { display: 'none' },
      textStyle: { display: null },
      tabStyle: { backgroundColor: appStyle.colors.headerBackground }
    }

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(event) {

    const newHover = !this.state.hover;
    const sectionColor = appStyle.colors[this.props.section.title.toLowerCase()];

    this.setState({
      hover: newHover,
      iconStyle: { display: newHover ? 'block' : 'none' },
      textStyle: {
        height: newHover ? '0px' : null,
        overflow: newHover ? 'hidden' : null,
      },
      tabStyle: {
        backgroundColor: newHover ? sectionColor : appStyle.colors.headerBackground
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
