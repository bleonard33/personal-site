import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { appStyle } from 'appStyle'

export class Section extends Component {

  render() {
    const sectionColor = appStyle.colors[this.props.title.toLowerCase()];

    return (
      <Row
        style={{ ...appStyle.section, ...{ borderLeftColor: sectionColor } }}>
        <Container>
          <h1 style={{ ...appStyle.h1, color: sectionColor }}>
            <span id={this.props.title.toLowerCase()} style={appStyle.section.idLinkPadding} >&nbsp;</span>
            {this.props.title}
          </h1>
          <hr style={{ borderColor: sectionColor, borderWidth: '1px' }} />
          {this.props.children}
        </Container>
      </Row>
    )
  }

}
