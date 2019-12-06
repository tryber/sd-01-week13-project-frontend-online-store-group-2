import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class ProductCard extends Component {

  render() {
    const { item, addNewItem } = this.props;
    const { price, title, thumbnail, id, available_quantity } = item;
    const obj = { id, price, title, thumbnail, available_quantity, qtd: 1 };

    return (
      <div className="card-product">
        <div className="title">
          <h3>{title}</h3>
          <Link
            to={{ pathname: `products/${id}`, state: { productDetails: item }}}
          >
            DETALHES
          </Link>
        </div>
        <div className="info-product">
          <img className="img-product" alt="imagem do produto" src={thumbnail} />
          <p className="value">{`R$ ${price}`}</p>
          <button type="button" onClick={() => addNewItem(obj)}>
            Adicionar Item
          </button>
        </div>
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  addNewItem: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

// Tênis Feminino Casual Sapatênis Original Chiquiteira 60106
// 44.99
// http://mlb-s2-p.mlstatic.com/870455-MLB31209566380_062019-I.jpg
