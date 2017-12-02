import React, { Component } from 'react';
import { Skill } from '../components/skill';

export class SkillContainer extends Component {

  calculateRating() {
    const wholeStar = <i className="fa fa-star" />;
    const halfStar = <i className="fa fa-star-half-o" />;
    const emptyStar = <i className="fa fa-star-o" />;

    let rating = [];

    for (let i=0; i < Math.floor(this.props.rating); i++) {
      rating.push(wholeStar);
    }

    if (this.props.rating % 1 === 0.5) {
      rating.push(halfStar);
    }


    for (let i=0; i <= (5 - rating.length); i++) {
      rating.push(emptyStar)
    }

    return rating;
  }

  render() {
    return (
      <Skill
        name={this.props.name}
        rating={this.calculateRating()} />
    )
  }
}