import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class ProductCard extends Component {

  render() {
    const { price, title, thumbnail, id } = this.props.item;

    const saveAttributes = (value) => {
      const details = JSON.stringify(value);
      localStorage.setItem('produto', details);
    }

    return (
      <div className="card-product">
        <div className="title">
          <h3>{title}</h3>
          <Link to={`products/${id}`} onClick={() => saveAttributes(this.props.item)}>DETALHES</Link>
        </div>
        <div className="info-product">
          <img className="img-product" alt="imagem do produto" src={thumbnail} />
          <p className="value">{`R$ ${price}`}</p>
          <button
            type="button"
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
    id: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

// Tênis Feminino Casual Sapatênis Original Chiquiteira 60106
// 44.99
// http://mlb-s2-p.mlstatic.com/870455-MLB31209566380_062019-I.jpg
