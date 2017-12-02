import React from 'react';
import { appStyle } from '../appStyle';

export const Skill = (props) => (
  <div>
    <span style={appStyle.skills}>
      {props.name}
    </span>
    <span style={appStyle.skills.stars}>
      {props.rating}
    </span>
  </div>
)