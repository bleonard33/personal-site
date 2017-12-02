import React from 'react';
import { appStyle } from '../appStyle';
import { SkillContainer } from '../containers/skillContainer'

export const SkillCategory = (props) => (
  <div class="col-xs-12 col-sm-4">
    <h3 style={appStyle.subheader}>
      {props.category.type}
    </h3>
    {props.category.skills.map((skill, i) =>
      <SkillContainer
        key={i}
        name={skill.name}
        rating={skill.rating} />
    )}
  </div>
)