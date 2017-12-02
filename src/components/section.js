import React, { Component } from 'react';
import { appStyle } from '../appStyle'

export class Section extends Component {

  render() {
    const sectionColor = appStyle.colors[this.props.title.toLowerCase()];

    return (
      <div
        id={this.props.title.toLowerCase()}
        className='row'
        style={{...appStyle.section, ...{borderLeftColor: sectionColor}}}>
        <h1 style={appStyle.header}>
          {this.props.title}
        </h1>
        {this.props.children}
      </div>
    )
  }

}