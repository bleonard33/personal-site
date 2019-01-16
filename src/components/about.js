import React from 'react';
import { appStyle } from '../appStyle';
import { Image } from 'react-bootstrap';

export const About = (props) => (
  <div className="col-xs-12">
    <div className="col-xs-12 col-sm-3 col-md-2">
      <Image src='headshot.jpeg' responsive circle/>
    </div>
    <div className="col-xs-12 col-sm-9 col-md-10">
      <h3 style={appStyle.subheader}>
        {props.about.lede}
      </h3>
      <div>
        {props.about.blurb.map((paragraph, i) =>
          <p>{paragraph}</p>
        )}
      </div>
    </div>
  </div>
)
