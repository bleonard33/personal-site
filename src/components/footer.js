import React from 'react';
import { appStyle } from '../appStyle';

export const Footer = (props) => (
    <div
        className='container-fluid'
        style={appStyle.footer}>
        <div className='row'>
            <div>
                &copy;&nbsp;
      {new Date().getFullYear()}
      &nbsp;Brendan&nbsp;Leonard <br />
                <a href="https://github.com/bleonard33/bleonard33.github.io">
                    Check out the source code for this site
                </a>
            </div>
        </div>
    </div>
)
