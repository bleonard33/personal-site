import React, { Component } from 'react';
import { appStyle } from '../appStyle'

export class Section extends Component {

  render() {
    const sectionColor = appStyle.colors[this.props.title.toLowerCase()];

    return (
      <div
        id={this.props.title.toLowerCase()}
        className='row'
        style={{ ...appStyle.section, ...{ borderLeftColor: sectionColor } }}>
        <div className='container'>
          <h1 style={{ ...appStyle.header, color: sectionColor }}>
            {this.props.title}
          </h1>
          {this.props.children}
        </div>
      </div>
    )
  }

}
