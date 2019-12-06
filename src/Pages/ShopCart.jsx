// Componentes presentes:
// - CartProductList.jsx

import React from 'react';
import PropTypes from 'prop-types';
import '../Style/ShopCart.css';
import EmptyCart from '../Components/ShopCart/EmptyCart';
import ShopCartHeader from '../Components/ShopCart/ShopCartHeader';
import CartProductList from '../Components/ShopCart/CartProductList';
import * as LocalStorageApi from '../Services/LocalStorageAPI';

class ShopCart extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      buyerCar:[],
    }
  }

  componentDidMount(){
    this.setState({ buyerCar: LocalStorageApi.AllItens() })
  }

  render() {
    const { buyerCar } = this.state;
    if (buyerCar === 0) return <EmptyCart />;

    return (
      <div className="content-shopcart">
        <ShopCartHeader />
        <div className="content-product-list">
          <p>PRODUTOS</p>
          <CartProductList />
        </div>
        <p>{`Valor Total da Compra: R$ ${LocalStorage.valueTotal()}`}</p>
      </div>
    );
  }
}
export default ShopCart;

ShopCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      buyerCar: PropTypes.shape([{
        id: PropTypes.number,
      }]),
    }),
  }).isRequired,
};

