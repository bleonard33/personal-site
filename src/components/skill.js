import React from 'react';
import { appStyle } from '../appStyle';

export const Skill = (props) => (
  <div>
    <span style={appStyle.skills}>
      {props.name}
    </span>
  </div>
)