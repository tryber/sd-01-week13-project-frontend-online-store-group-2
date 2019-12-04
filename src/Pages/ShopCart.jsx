// Componentes presentes:
// - CartProductsList.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import emptyBox from '../image/empty-box.png';
import previous from '../image/003-previous.svg';
import cartShop from '../image/001-shopping-cart.svg';
import './ShopCart.css';


class ShopCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itens: 0,
    };

    this.createEmptyBox = this.createEmptyBox.bind(this);
    this.createLinkPrevious = this.createLinkPrevious.bind(this);
    this.createCartIconTitle = this.createCartIconTitle.bind(this);
  }

  createEmptyBox() {
    return (
      <div className="content-center">
        <img
          src={emptyBox}
          alt="empty Box"
          className="empty-box"
        />
        <p>Seu Carrinho Está Vazio</p>
      </div>
    );
  }
  createLinkPrevious(){
    
    return (
      <div className="previous">
        <Link to="/">
          <div className="content-center">
            <img
              src={previous}
              alt="previous"
              className="previous"
            />
          </div>
        </Link>
      </div>
    );
  }
  createCartIconTitle(){
    return (
      <div className="cart-icon-title">
        <img 
          src={cartShop}
          className="icon-cart"
          alt="Cart"
        />
        <p>Carrinho de Compras</p>
      </div>
    )
  }
  
  render() {
    if (this.state.itens === 0) {
      return (
        <div className="content-shopcart">
          {this.createLinkPrevious()}
          {this.createCartIconTitle()}
          <br />
          <br />
          <br />
          <br />
          {this.createEmptyBox()}
        </div>
      );
    }
  }
}

export default ShopCart;
