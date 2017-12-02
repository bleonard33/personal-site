import React from 'react';
import { appStyle } from '../appStyle';
import { Image } from 'react-bootstrap';

export const About = (props) => (
  <div className="col-xs-12">
    <div className="col-xs-4 col-sm-3 col-md-2">
      <Image src='headshot.jpeg' responsive circle/>
    </div>
    <div className="col-xs-8 col-sm-9 col-md-10">
      <h3 style={appStyle.subheader}>
        Hi, I'm Brendan.
      </h3>
    </div>
  </div>
)