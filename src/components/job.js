import React from 'react';
import { appStyle } from '../appStyle'

export const Job = (props) => {
  return (
    <div className="col-xs-12">
      <h3 style={appStyle.subheader}>
        {props.job.name}
      </h3>
      <h4>{props.job.title}</h4>
      <span style={appStyle.job.detail}>
        <i className='fa fa-map-marker' style={appStyle.job.icon} />&nbsp;&nbsp;{props.job.location}
      </span>
      <span style={appStyle.job.detail}>
        <i className='fa fa-globe' style={appStyle.job.icon} />&nbsp;&nbsp;
        <a href={'http://' + props.job.website} target='_blank' style={appStyle.job.link}>{props.job.website}</a>
      </span>
      <span style={appStyle.job.detail}>
        <i className='fa fa-calendar' style={appStyle.job.icon} />&nbsp;&nbsp;
        {props.job.startDate}
        &nbsp;&ndash;&nbsp;
      {props.job.endDate}
      </span>
      <ul style={appStyle.job.bullets}>
        {props.job.description.map((desc, i) =>
          <li key={i}>{desc}</li>
        )}
      </ul>
    </div>
  )
}
