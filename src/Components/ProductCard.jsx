import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as LocalStorageAPI from '../Services/LocalStorageAPI';

class ProductCard extends Component {
  render() {
    const { price, title, thumbnail } = this.props.item;
    return (
      <div className="card-product">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="info-product">
          <img className="img-product" alt="imagem do produto" src={thumbnail} />
          <p className="value">{`R$ ${price}`}</p>
          <button
            type="button"
            onClick={LocalStorageAPI.addItemCart()}
          >
            Adicionar Item
          </button>
        </div>
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  item: PropTypes.shape({
    price: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

// Tênis Feminino Casual Sapatênis Original Chiquiteira 60106
// 44.99
// http://mlb-s2-p.mlstatic.com/870455-MLB31209566380_062019-I.jpg
