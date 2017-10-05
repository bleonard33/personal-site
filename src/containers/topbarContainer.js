import React, { Component } from 'react';
import { Topbar } from '../components/topbar'

export class TopbarContainer extends Component {
  render() {
    return (
      <Topbar
        sections={this.props.sections}
        contact={this.props.contact} />
    )
  }
}