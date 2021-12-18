import React from 'react';
import emptyStar from '../main/assets/emptystar.png'

class StarRating extends React.Component {

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="stars">
        <div>Place Holder while i figure out image uploading!</div>
        <div className="star-left">o</div>
        <div className="star-middle-left">o</div>
        <div className="star-middle">o</div>
        <div className="star-middle-right">o</div>
        <div className="star-right">o</div>
      </div>
    );
  }
}

export default StarRating;