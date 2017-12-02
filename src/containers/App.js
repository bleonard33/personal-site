import React, { Component } from 'react';
import { appStyle } from '../appStyle';
import { sections, contact, jobs, skills } from '../data'

import { NavContainer } from '../containers/navContainer'
import { Section } from '../components/section';
import { Job } from '../components/job';
import { Education } from '../components/education';

class App extends Component {
  render() {
    return (
      <div style={appStyle.main}>
        <NavContainer
          sections={sections}
          contact={contact}/>
        <div className="container-fluid">
          <div className="body-content">
            <Section title='About'>
            </Section>

            <Section title='Experience'>
              {jobs.map((job, i) =>
                <Job key={i} job={job} />
              )}
            </Section>

            <Section title='Education'>
              <Education />
            </Section>

            <Section title='Skills'>
            </Section>

            <Section title='Contact'>
            </Section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
