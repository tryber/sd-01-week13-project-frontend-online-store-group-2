import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as LocalStorageApi from '../../Services/LocalStorageAPI';
import '../../Style/ProductCard.css';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidUpdate() {
    const { item } = this.props;
    const { price, title, thumbnail, id, available_quantity } = item;
    const obj = { id, price, title, thumbnail, available_quantity, qtd: 1 };
    if (this.state.added) {
      LocalStorageApi.setNewItem(obj);
    } else {
      const value = LocalStorageApi.getItem(id);
      if (value !== null) {
        LocalStorageApi.removeItem(id);
      }
    }
  }

  toggle() {
    this.setState({ added: !this.state.added });
  }

  render() {
    const { item } = this.props;
    const { price, title, thumbnail, id } = item;
    let cardClass = ["card-product"];
    let titleSpace = title.split(" ");
    if (this.state.added) {
      cardClass.push("border");
    }

    return (
      <section className="content-center">
        <div className={cardClass.join(" ")}>
          <div className="title">
            <h3>{`${titleSpace[0]} ${titleSpace[1]}`}</h3>
            <h3>{`${titleSpace[2]} ${titleSpace[3]}`}</h3>
            <p className="value">{`R$ ${price}`}</p>
            <Link
              to={{
                pathname: `products/${id}`,
                state: { productDetails: item }
              }}
            > <div className="content-info">
                <span className="info">+Info</span>
              </div>
            </Link>
          </div>
          <div className="info-product">
            <img
              className="img-product"
              alt="imagem do produto"
              src={thumbnail}
            />
          </div>
          {!this.state.added && (
            <span onClick={this.toggle.bind(this)} className="buttonAddCart">
              Adicionar Item
            </span>
          )}
          {this.state.added && (
            <span onClick={this.toggle.bind(this)} className="buttonRemoveCart">
              remover Item
            </span>
          )}
          
        </div>
      </section>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string
  }).isRequired
};
