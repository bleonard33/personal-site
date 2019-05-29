import React from 'react';
import { appStyle } from '../appStyle';

export const Education = (props) => (
  <div className="col-xs-12">
    <h3 style={appStyle.subheader}>
      {props.degree.university}
    </h3>
    <h4>
      {props.degree.type}, {props.degree.field}&nbsp;&bull;&nbsp;
      {props.degree.city}, {props.degree.state}&nbsp;&bull;&nbsp;
      {props.degree.startDate}&nbsp;&ndash;&nbsp;
      {props.degree.endDate}
    </h4>
  </div>
)
