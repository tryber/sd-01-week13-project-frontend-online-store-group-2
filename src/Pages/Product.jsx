// Componetes presentes:
// - Specifications.jsx
// - CreateRating.jsx
// - RatingComments.jsx

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Specifications from '../Components/Specifications';
import ShopCartLink from '../Components/ShopCartLink';
import PreviousLink from '../Components/PreviousLink';
import './Product.css';

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: [],
    };
    this.saveProduct = this.saveProduct.bind(this);
  }

  saveProduct() {
    this.setState({
      productDetails: details,
    });
  }

  componentDidMount() {
    const jsonDetails = localStorage.getItem('produto');
    const details = JSON.parse(jsonDetails);
    this.saveProduct()
  }

  render() {
    const { productDetails } = this.state;
    return (
      <div className="product">
        <header className="product-header">
          <PreviousLink />
          <ShopCartLink />
        </header>
        <div className="product-title">
          {`${productDetails.title} - R$${productDetails.price}`}
        </div>
        <section className="product-details">
          <img src={productDetails.thumbnail} className="product-img" alt="product" />
          <div className="product-specifications">
            <Specifications attributes={productDetails.attributes} />
          </div>
        </section>
      </div>
    );
  }
}

export default Product;

Product.propTypes = {
  productDetails: PropTypes.shape([{
    thumbnail: PropTypes.string,
    attributes: PropTypes.array,
  }]).isRequired,
};
