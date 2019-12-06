import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {addClass: false}
  }

  toggle() {
    this.setState({addClass: !this.state.addClass});
  }

  render() {
    const { price, title, thumbnail } = this.props.item;
    let titleSpace = title.split(' ');
    let cardClass = ["card-product"];
    if(this.state.addClass) {
      cardClass.push('border');
    }
    return (
      <section className="content-center">
        <div className={cardClass.join(' ')}>
          <div className="title">
            <h3>{`${titleSpace[0]} ${titleSpace[1]}`}</h3>
            <h3>{`${titleSpace[2]} ${titleSpace[3]}`}</h3>
            <p className="value">{`R$ ${price}`}</p>
          </div>
          <div className="info-product">
            <img className="img-product" alt="imagem do produto" src={thumbnail} />
          </div>
            <span onClick={this.toggle.bind(this)} className="buttonAddCart" >
              Adicionar Item
            </span>
            <span onClick={this.toggle.bind(this)} className="buttonRemoveCart" >
              remover Item
            </span>
        </div>
      </section>
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
