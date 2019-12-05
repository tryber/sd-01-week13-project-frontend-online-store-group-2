import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import previous from '../image/003-previous.svg';
import '../Pages/ShopCart.css';

export class PreviousLink extends Component {
    
  render() {
    return (
      <div className="previous">
        <Link to="/">
          <img
            src={previous}
            alt="previous"
            className="previous"
          />
        </Link>
      </div>
    );
  }
}

export default PreviousLink;
