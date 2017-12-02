import React, { Component } from 'react';
import { Navigation } from '../components/navigation'

export class NavContainer extends Component {
  render() {
    return (
      <Navigation
        sections={this.props.sections}
        contact={this.props.contact} />
    )
  }
}