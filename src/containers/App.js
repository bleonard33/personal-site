import React, { Component } from 'react';
import { sections, contact, jobs, skills } from '../data'
import { TopbarContainer } from '../containers/topbarContainer'
import { ExperienceContainer } from '../containers/experienceContainer'

import { Job } from '../components/job'
import { AppStyle } from '../appStyle'

const style = {
  fontFamily: AppStyle.sans,
}

class App extends Component {
  render() {
    return (
      <div style={style}>
        <TopbarContainer
          sections={sections}
          contact={contact}/>
        <h1>About</h1>
        <ExperienceContainer jobs={jobs} />
        <h1>Education</h1>
        <h1>Skills</h1>
        <h1>Contact</h1>
      </div>
    );
  }
}

export default App;
