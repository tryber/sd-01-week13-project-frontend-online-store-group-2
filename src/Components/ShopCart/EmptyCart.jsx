import React from 'react';
import emptyBox from '../../image/empty-box.png';
import '../../Style/EmptyCart.css';
import ShopCartHeader from './ShopCartHeader';

class EmptyCart extends React.Component {

  render() {
    return (
      <div className="content-shopcart">
        <ShopCartHeader />
        <div className="content-center">
          <img
            src={emptyBox}
            alt="empty Box"
            className="empty-box"
          />
          <p>Seu Carrinho Está Vazio</p>
        </div>
      </div>
    );
  }
}

export default EmptyCart;
