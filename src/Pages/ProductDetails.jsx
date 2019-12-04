// Componetes presentes:
// - Specifications.jsx
// - CreateRating.jsx
// - RatingComments.jsx

import React, { Component } from 'react';
import Specifications from '../Components/Specifications';

export class ProductDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.props.thumbnail}
        </div>
        <div>
          <Specifications product={this.props.value.results}/>
        </div>
        <Link to="/shopcart"/>
      </div>
    );
  }
}

export default ProductDetails;
