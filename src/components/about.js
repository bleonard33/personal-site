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
      <div>
        <p>
          Without getting too technical (check out the rest of this page for more on that), I'm currently working at a financial technology startup in downtown Boston. I've lived in and around Boston my whole life, save for the four years I escaped down south after a terrible winter. 
        </p>
        <p>
          I attended UNC-Chapel Hill where I majored in Economics. During my time at Carolina, I ended up on the Executive Board of the Carolina For The Kids foundation which raises over half a million dollars annually for the families of UNC Children's. It became the thing I always wanted to be spending time on and leading our publicity and technology teams essentially became a full-time job for me.
        </p>
        <p>
          Since I've moved back north I've been in the startup world, which means I've gotten to jump around quite a bit and get a taste of all sorts of projects from UX design to machine learning. I love being thrown into unfamiliar territory and solving new problems, so this has worked out quite well for me. When I'm not writing code, I love to cook, travel, binge watch <i>Parks and Recreation</i> for the nth time, and this fall I ran my first (and likely last) half marathon.
        </p>
      </div>
    </div>
  </div>
)