import React from 'react';
import cartShop from '../image/001-shopping-cart.svg';
import PreviousLink from './PreviousLink';
import '../Pages/ShopCart.css'

class ShopCartHeader extends React.Component {

  render() {
    return (
      <header>
        <PreviousLink />
        <div className="cart-title">
          <img
            src={cartShop}
            className="icon-cart-title"
            alt="Cart"
          />
          <p>Carrinho de Compras</p>
        </div>
      </header>
    );
  }
}

export default ShopCartHeader;
