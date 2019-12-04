import React from 'react';
import cartShop from '../image/001-shopping-cart.svg';
import './ShopCartLink.css';



class ShopCartLink extends React.Component {
    render() {
    return (
        <div className="content-shopcart">
            <img 
                src={cartShop}
                className="icon-cart"
                alt="Cart"
            />
        </div>
    );
  }
}

export default ShopCartLink;
