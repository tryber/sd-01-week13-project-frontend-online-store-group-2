import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

export class Star extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
    this.changeRating = this.changeRating.bind(this);
  }


  changeRating(newRating) {
    console.log(newRating);
    this.setState({
      rating: newRating,
    });
  }

  render() {
    return (
      <StarRatings
        rating={this.state.rating}
        starRatedColor="blue"
        changeRating={this.changeRating}
        numberOfStars={6}
      />
    );
  }
}

export default Star;
