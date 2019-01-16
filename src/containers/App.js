import React, { Component } from 'react';
import { appStyle } from '../appStyle';

import {
  sections,
  contact,
  about,
  jobs,
  degrees,
  skills 
} from '../data';

import { Navigation } from '../components/navigation';
import { Section } from '../components/section';
import { About } from '../components/about'
import { Job } from '../components/job';
import { Education } from '../components/education';
import { Skill } from '../components/skill';
import { ContactLink } from '../components/contactLink';
import { Copyright } from '../components/copyright'

class App extends Component {
  render() {
    return (
      <div style={appStyle.main}>
        <Navigation
          sections={sections}
          contact={contact}/>
        <div 
          className="container-fluid">
          <div className="body-content">

            <Section title='About'>
              <About
                about={about} />
            </Section>

            <Section title='Experience'>
              {jobs.map((job, i) =>
                <Job
                  key={i}
                  job={job} />
              )}
            </Section>

            <Section title='Education'>
              {degrees.map((degree, i) =>
              <Education
                  key={i}
                  degree={degree} />
              )}
            </Section>

            <Section title='Skills'>
              {skills.map((category, i) =>
                <Skill
                  key={i}
                  category={category} />
              )}
            </Section>

            <Section title='Contact'>
              {contact.map((link, i) =>
                <ContactLink
                  key={i}
                  link={link.link}
                  icon={link.icon}
                  handle={link.handle} />
              )}
            </Section>

            <Copyright />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
