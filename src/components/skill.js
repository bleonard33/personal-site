import React from 'react';
import { appStyle } from '../appStyle';

export const Skill = (props) => (
  <div className="col-xs-12 col-sm-6 col-md-3">
    <h3 style={appStyle.subheader}>
      {props.category.type}
    </h3>
    {props.category.skills.map((skill, i) =>
      <div>
        <span style={appStyle.skills}>
          {skill}
        </span>
      </div>
    )}
  </div>
)
