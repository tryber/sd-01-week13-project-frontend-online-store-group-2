// Componetes presentes:
// - Specifications.jsx
// - CreateRating.jsx
// - RatingComments.jsx

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
          {this.props.product.results.thumbnail}
        </div>
        <div>
          <Specifications product={this.props.product.results.attributes} />
        </div>
      </div>
    );
  }
}

export default ProductDetails;

ProductDetails.PropTypes = {
  product: PropTypes.shape({
    results: {
      thumbnail: PropTypes.string,
      attributes: PropTypes.array,
    },
  }).isRequired,
};
