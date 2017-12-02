import React, { Component } from 'react';
import { appStyle } from '../appStyle';
import { sections, contact, jobs, skills } from '../data';

import { Navigation } from '../components/navigation';
import { Section } from '../components/section';
import { Job } from '../components/job';
import { Education } from '../components/education';
import { SkillCategory } from '../components/skillCategory';
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
          style={appStyle.body}
          className="container-fluid">
          <div className="body-content">
            <Section title='About'>
            </Section>

            <Section title='Experience'>
              {jobs.map((job, i) =>
                <Job
                  key={i}
                  job={job} />
              )}
            </Section>

            <Section title='Education'>
              <Education />
            </Section>

            <Section title='Skills'>
              {skills.map((category, i) =>
                <SkillCategory
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
