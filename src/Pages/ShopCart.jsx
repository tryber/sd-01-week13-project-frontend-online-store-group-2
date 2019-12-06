// Componentes presentes:
// - CartProductList.jsx

import React from 'react';
import '../Style/ShopCart.css';
import EmptyCart from '../Components/ShopCart/EmptyCart';
import ShopCartHeader from '../Components/ShopCart/ShopCartHeader';
import CartProductList from '../Components/ShopCart/CartProductList';

class ShopCart extends React.Component {

  render() {
    const { buyerCar } = this.props.location.state;
    console.log(this.props.location.state.buyerCar, 'shopcart')
    if (buyerCar === 0) return <EmptyCart />;

    return (
      <div className="content-shopcart">
        <ShopCartHeader />
        <div className="content-product-list">
          <p>PRODUTOS</p>
          <CartProductList
            buyerCar={buyerCar}
          />
        </div>
        {/* <p>{`Valor Total da Compra: R$ ${value}`}</p> */}
      </div>
    );
  }
}
export default ShopCart;
