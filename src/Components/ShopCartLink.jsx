import React from 'react';
import cartShop from '../image/001-shopping-cart.svg';
import './ShopCartLink.css';

class ShopCartLink extends React.Component {
  render() {
    return (
      <div className="content">
        <span className="number-cart">3</span>
        <img
          src={cartShop}
          alt="Cart"
          className="icon-cart"
        />
      </div>
    );
  }
}

export default ShopCartLink;
