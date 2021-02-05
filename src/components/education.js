import React from 'react';
import { appStyle } from '../appStyle';

export const Education = (props) => (
  <div className="col-xs-12 col-md-6">
    <h3 style={appStyle.subheader}>
      {props.degree.university}
    </h3>
    <h4>
      {props.degree.type}, {props.degree.field}
    </h4>
    <span style={appStyle.education.detail}>
      <i className='fa fa-map-marker' style={appStyle.education.icon} />&nbsp;&nbsp;
      {props.degree.city}, {props.degree.state}
    </span>
    <span style={appStyle.education.detail}>
      <i className='fa fa-calendar' style={appStyle.education.icon} />&nbsp;&nbsp;
        {props.degree.startDate}
        &nbsp;&ndash;&nbsp;
      {props.degree.endDate}
    </span>
    <span style={appStyle.education.detail}>
      <i className='fa fa-graduation-cap' style={appStyle.education.icon} />&nbsp;&nbsp;
      {Number(props.degree.gpa).toFixed(1)} GPA
    </span>
  </div>
)
