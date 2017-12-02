import React, { Component } from 'react';
import { Skill } from '../components/skill';

export class SkillContainer extends Component {

  render() {
    return (
      <Skill
        name={this.props.name} />
    )
  }
}