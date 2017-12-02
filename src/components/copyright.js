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
      &nbsp;Brendan&nbsp;Leonard
    </div>
  </div>
)