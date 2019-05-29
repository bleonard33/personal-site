import React from 'react';
import { appStyle } from '../appStyle'

export const Job = (props) => {
  return (
    <div className="col-xs-12 col-md-6">
      <a href={'http://' + props.job.website} target='_blank'>
        <h3 style={appStyle.subheader}>
          {props.job.name}
        </h3>
      </a>
      <h4>{props.job.title}</h4>
      <h4>
        <i className='fa fa-map-marker' style={appStyle.mappin}/>&nbsp;
        {props.job.location}
      </h4>
      <h4>
        {props.job.startDate}
        &nbsp;&ndash;&nbsp;
        {props.job.endDate}
      </h4>
      <ul>
      {props.job.description.map((desc, i) =>
        <li key={i}>{desc}</li>
      )}
      </ul>
    </div>
  )
}
