// Componetes presentes:
// - Specifications.jsx
// - CreateRating.jsx
// - RatingComments.jsx

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Specifications from '../Components/ProductDetails/Specifications';
import ShopCartLink from '../Components/ShopCartLink';
import PreviousLink from '../Components/PreviousLink';
import '../Style/Product.css';
import * as LocalStorageApi from '../Services/LocalStorageAPI';

export class Product extends Component {
  render() {
    const { productDetails } = this.props.location.state;
    const { id, price, title, thumbnail, available_quantity, shipping } = productDetails;
    const obj = { id, price, title, thumbnail, available_quantity, qtd: 1 };
    return (
      <div className="product">
        <header className="product-header">
          <PreviousLink />
          <ShopCartLink qtdTotal={LocalStorageApi.qtdTotal()} />
        </header>
        <div className="product-title">
          {`${productDetails.title} - R$${productDetails.price}`}
        </div>
        <section className="product-details">
          <div>
            <img src={productDetails.thumbnail} className="product-img" alt="product" />
            {shipping.free_shipping && <div className="freeShip">Frete Grátis</div>}
          </div>
          <button type="button" onClick={() => LocalStorageApi.setNewItem(obj)}>
            Adicionar Item
          </button>
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
  location: PropTypes.shape({
    state: PropTypes.shape({
      productDetails: PropTypes.shape([{
        thumbnail: PropTypes.string,
        attributes: PropTypes.array,
      }]),
    }),
  }).isRequired,
};
