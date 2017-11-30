import React, { Component } from 'react';
import { Experience } from '../components/experience'

export class ExperienceContainer extends Component {
    render() {
        return <Experience jobs={this.props.jobs}/>
    }
}