// Componentes presentes:
// - CartProductList.jsx

import React from 'react';
import '../Style/ShopCart.css';
import EmptyCart from '../Components/ShopCart/EmptyCart';
import ShopCartHeader from '../Components/ShopCart/ShopCartHeader';


class ShopCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itens: 0,
    };
  }

  render() {
    if (this.state.itens === 0) return <EmptyCart />;

    return (
      <div className="content-shopcart">
        <ShopCartHeader />
        <div className="content-center">
          <p>PRODUTOS</p>
        </div>
      </div>
    );
  }
}

export default ShopCart;
