// Componetes presentes:
// - Specifications.jsx
// - CreateRating.jsx
// - RatingComments.jsx

import React, { Component } from 'react';
import Specifications from '../Components/Specifications';
import ShopCartLink from '../Components/ShopCartLink';
import PreviousLink from '../Components/PreviousLink';

export class ProductDetails extends Component {

  render() {
    return (
      <div>
        <header>
          <PreviousLink />
          <ShopCartLink />
        </header>
        <div>
          {this.props.product.thumbnail}
        </div>
        <div>
          <Specifications product={this.props.product.results.attributes}/>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
