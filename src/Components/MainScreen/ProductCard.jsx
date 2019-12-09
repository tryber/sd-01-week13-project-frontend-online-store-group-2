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
    };
    this.removeUnitProduct = this.removeUnitProduct.bind(this);
    this.addUnitProduct = this.addUnitProduct.bind(this);
    this.createButtonMoreItem = this.createButtonMoreItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.createButtonAddItem = this.createButtonAddItem.bind(this);
    this.createButtonRemoveItem = this.createButtonRemoveItem.bind(this);
  }


  removeItem(func) {
    const { item } = this.props;
    const { id } = item;
    LocalStorageApi.removeItem(id);
    this.setState({ added: false });
    func();
  }

  addItem(func) {
    const { item } = this.props;
    const { price, title, thumbnail, id, available_quantity } = item;
    const obj = {
      id,
      price,
      title,
      thumbnail,
      available_quantity,
      qtd: 1,
    };
    LocalStorageApi.setNewItem(obj);
    this.setState({ added: true });
    func();
  }

  addUnitProduct(func) {
    const { id } = this.props.item;
    const value = LocalStorageApi.getQtd(id) + 1;
    if (value < this.props.item.available_quantity) {
      LocalStorageApi.UpdateItemQtd(id, value);
    }
    func();
  }

  removeUnitProduct(func) {
    const { id } = this.props.item;
    const value = LocalStorageApi.getQtd(id) - 1;
    if (value > 0) {
      LocalStorageApi.UpdateItemQtd(id, value);
    }
    func();
  }

  createButtonAddItem() {
    const { onChange } = this.props;
    return (
      <button type="button" onClick={() => this.addItem(onChange)} className="buttonAddCart" >
        Adicionar Item
      </button>
    );
  }

  createButtonRemoveItem() {
    const { onChange } = this.props;
    return (
      <div className="show-btn-remove">
        <button type="button" onClick={() => this.removeItem(onChange)} className="buttonRemoveCart" >
          Remover Item
        </button>
        {this.createButtonMoreItem()}
      </div>
    );
  }

  createButtonMoreItem() {
    const { onChange, item } = this.props;
    return (
      <div className="div-qtd">
        <button type="button" className="left" onClick={() => this.addUnitProduct(onChange)}>
          +
        </button>
        <div className="text-qtd">
          <span>{LocalStorageApi.getQtd(item.id)}</span>
        </div>
        <button type="button" className="right" onClick={() => this.removeUnitProduct(onChange)}>
          -
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
          <Link className="info" to={{ pathname: `products/${id}`, state: { productDetails: item } }}>
            +Info
          </Link>
          {!this.state.added && this.createButtonAddItem()}
          {this.state.added && this.createButtonRemoveItem()}
        </div>
      </section>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  onChange: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    available_quantity: PropTypes.number,
  }).isRequired,
};
