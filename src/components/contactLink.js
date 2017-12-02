import React from 'react';
import { appStyle } from '../appStyle';

export const ContactLink = (props) => (
  <div className='col-xs-12 col-sm-6 col-md-4'>
    <a
      href={props.link}
      target="_blank"
      style={appStyle.contact}>
      <i className={'fa ' + props.icon}> </i>
      &nbsp;&nbsp;{props.handle}
    </a>
  </div>
)