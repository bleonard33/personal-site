import React, { Component } from 'react';
import { sections, contact, jobs, skills } from '../data'
import { TopbarContainer } from '../containers/topbarContainer'
import { Section } from '../components/section';
import { Job } from '../components/job'
import { appStyle } from '../appStyle'

class App extends Component {
  render() {
    return (
      <div style={appStyle.main}>
        <TopbarContainer
          sections={sections}
          contact={contact}/>
        <div className="container-fluid">
          <div className="body-content">
            <Section title='About'>
            </Section>

            <Section title='Experience'>
              {jobs.map(job => <Job job={job} />)}
            </Section>

            <Section title='Education'>
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
