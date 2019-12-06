// Componentes presentes:
// - CartProductList.jsx

import React from 'react';
import PropTypes from 'prop-types';
import '../Style/ShopCart.css';
import EmptyCart from '../Components/ShopCart/EmptyCart';
import ShopCartHeader from '../Components/ShopCart/ShopCartHeader';
import CartProductList from '../Components/ShopCart/CartProductList';

class ShopCart extends React.Component {

  render() {
    const { buyerCar } = this.props.location.state;
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

Product.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      buyerCar: PropTypes.shape([{
        id: PropTypes.number,
      }]).isRequired,
    }),
  }),
};

