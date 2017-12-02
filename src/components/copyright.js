import React from 'react';
import { appStyle } from '../appStyle';

export const Copyright = (props) => (
  <div
    className='row'
    style={{
        ...appStyle.section,
        ...{
          borderLeftColor: appStyle.colors.contact,
          textAlign: 'center'
        }
    }}>
    <div>
      &copy;
      {new Date().getFullYear()}
      &nbsp;Brendan&nbsp;Leonard <br/>
      <a href="https://github.com/bleonard33/bleonard33.github.io">
        Check out the source code for this site
      </a>
    </div>
  </div>
)