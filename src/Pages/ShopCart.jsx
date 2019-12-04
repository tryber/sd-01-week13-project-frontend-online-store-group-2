// Componentes presentes:
// - CartProductsList.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import previous from '../image/003-previous.svg';
import cartShop from '../image/001-shopping-cart.svg';
import ContentShopCart from '../Components/ContentShopCart';
import './ShopCart.css';


class ShopCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itens: 0,
    };
  }

  render() {
    if (this.state.itens === 0) {
      return (
        <div className="content-shopcart">
          <div className="previous">
            <Link to="/">
              <img
                src={previous}
                alt="previous"
                className="previous"
              />
            </Link>
          </div>
          <div className="cart-icon-title">
            <img
              src={cartShop}
              className="icon-cart"
              alt="Cart"
            />
            <p>Carrinho de Compras</p>
          </div>
          <br />
          <ContentShopCart />
        </div>
      );
    }
    return(
      true
    );
  }
}

export default ShopCart;
