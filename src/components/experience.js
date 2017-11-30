import React from 'react';
import { Job } from './job';

export const Experience = (props) => {
  return (
    <div>
      <h1>Experience</h1>
      {props.jobs.map(job =>
        <Job job={job} />
      )}
    </div>
  )
}