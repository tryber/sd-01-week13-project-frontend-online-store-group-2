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
  constructor(props) {
    super(props);
    this.state = {
      qtd: 0,
      add: false,
    };
    this.createButtonMoreItem = this.createButtonMoreItem.bind(this);
    this.changeQtd = this.changeQtd.bind(this);
    this.shouldAddQtd = this.shouldAddQtd.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.location.state.productDetails;
    this.changeQtd(LocalStorageApi.getQtd(id));
  }

  changeQtd(value) {
    this.setState({
      qtd: value,
    });
  }

  shouldAddQtd() {
    this.setState({ add: true });
  }

  addUnitProduct() {
    const value = this.state.qtd + 1;
    if (value <= this.props.location.state.productDetails.available_quantity) {
      this.changeQtd(value);
    }
  }

  removeUnitProduct() {
    const value = this.state.qtd - 1;
    if (value > 0) {
      this.changeQtd(value);
    }
  }

  addToCart(obj) {
    LocalStorageApi.setNewItem(obj);
    this.shouldAddQtd();
  }

  createButtonMoreItem() {
    const { qtd } = this.state;
    const { productDetails } = this.props.location.state;
    const { id, price, title, thumbnail, available_quantity } = productDetails;
    const obj = { id, price, title, thumbnail, available_quantity, qtd };
    return (
      <section className="qtd-product">
        <button
          type="button"
          className="btn"
          onClick={() => this.removeUnitProduct()}
        >
          -
        </button>
        <p>{this.state.qtd}</p>
        <button
          disabled={LocalStorageApi.getQtd(id) === productDetails.available_quantity}
          type="button"
          className="btn"
          onClick={() => this.addUnitProduct()}
        >
          +
        </button>
        <button type="button" onClick={() => this.addToCart(obj)} className="buttonAdd">
          Adicionar ao Carrinho
        </button>
      </section>
    );
  }

  render() {
    const { productDetails } = this.props.location.state;
    const { shipping } = productDetails;

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
          <div className="product-specifications">
            <Specifications attributes={productDetails.attributes} />
          </div>
        </section>
        <p className="product-title">Quantidade</p>
        {this.createButtonMoreItem()}
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
