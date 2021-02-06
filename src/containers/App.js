import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { appStyle } from 'appStyle';

import {
  sections,
  contact,
  about,
  jobs,
  degrees,
  skills
} from 'data';

import Navigation from 'components/navigation';
import { Section } from 'components/section';
import { About } from 'components/about'
import { Job } from 'components/job';
import { Education } from 'components/education';
import { Skill } from 'components/skill';
import { ContactLinks } from 'components/contactLinks';
import { Footer } from 'components/footer';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fab, fas, far)

class App extends Component {
  render() {
    return (
      <div style={appStyle.main}>
        <Navigation
          sections={sections}
          contact={contact} />
        <Container
          fluid>
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
              <Row>
                {skills.map((category, i) =>
                  <Skill
                    key={i}
                    category={category} />
                )}
              </Row>
            </Section>
            <Section title='Contact'>
              <ContactLinks
                contact={contact} />
            </Section>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
