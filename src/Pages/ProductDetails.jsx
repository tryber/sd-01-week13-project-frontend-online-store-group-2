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
    const { results } = this.props
    return (
      <div>
        <header>
          <PreviousLink />
          <ShopCartLink />
        </header>
        <div>
          {results.thumbnail}
        </div>
        <div>
          <Specifications product={results.attributes} />
        </div>
      </div>
    );
  }
}

export default ProductDetails;

ProductDetails.PropTypes = {
  results: PropTypes.shape({
      thumbnail: PropTypes.string,
      attributes: PropTypes.array,
  }).isRequired,
};
