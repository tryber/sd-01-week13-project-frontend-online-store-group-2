import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as LocalStorageApi from '../../Services/LocalStorageAPI';
import '../../Style/ProductCard.css';


class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false,
      qtd: 1,
    };

    this.toggle = this.toggle.bind(this);
    this.changeQtd = this.changeQtd.bind(this);
    this.createButton = this.createButton.bind(this);
    this.addUnitProduct = this.addUnitProduct.bind(this);
    this.createButtonMoreItem = this.createButtonMoreItem.bind(this);
  }

  componentDidUpdate() {
    const { item } = this.props;
    const { price, title, thumbnail, id, available_quantity } = item;
    const obj = {
      id,
      price,
      title,
      thumbnail,
      available_quantity,
      qtd: LocalStorageApi.getQtd(id),
    };
    if (this.state.added) {
      LocalStorageApi.setNewItem(obj);
    } else {
      const value = LocalStorageApi.getItem(id);
      if (value !== null) {
        LocalStorageApi.removeItem(id);
        this.changeQtd(1);
      }
    }
  }

  toggle() {
    this.setState({ added: !this.state.added });
  }

  changeQtd(value) {
    this.setState({ qtd: value });
  }

  addUnitProduct() {
    const { qtd } = this.state;
    const { id } = this.props.item;
    const value = qtd + 1;
    if (value < this.props.item.available_quantity) {
      LocalStorageApi.UpdateItemQtd(id, value);
      this.changeQtd(value);
    }
  }

  createButton(value) {
    let name;
    let label;
    if (value) {
      name = 'buttonAddCart';
      label = 'Adicionar Item';
    } else {
      name = 'buttonRemoveCart';
      label = 'remover Item';
    }
    return (
      <button type="button" onClick={this.toggle} className={name} >
        {label}
      </button>
    );
  }

  createButtonMoreItem() {
    return (
      <div className="div-qtd">
        <div>
          <span>{this.state.qtd}</span>
        </div>
        <button type="button" className="btn-qtd" onClick={this.addUnitProduct}>
          +
        </button>
      </div>
    );
  }

  render() {
    const { item } = this.props;
    const { price, title, thumbnail, id } = item;
    const cardClass = ['card-product'];
    const titleSpace = title.split(' ');
    if (this.state.added) {
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
          {this.state.added && this.createButtonMoreItem()}
          {this.createButton(this.state.added)}
          <Link to={{ pathname: `products/${id}`, state: { productDetails: item } }}>
            +
          </Link>
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
    thumbnail: PropTypes.string,
    available_quantity: PropTypes.number,
  }).isRequired,
};
