// Componentes presentes:
// - CartProductList.jsx

import React from 'react';
import '../Style/ShopCart.css';
import EmptyCart from '../Components/ShopCart/EmptyCart';
import ShopCartHeader from '../Components/ShopCart/ShopCartHeader';
import CartProductList from '../Components/ShopCart/CartProductList';
import * as LocalStorageApi from '../../Services/LocalStorageAPI';


class ShopCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itens:[]
    };

    this.setDados=this.setDados.bind(this);
  }

  componentDidMount(){
    this.setDados();
  }

  setDados() {
    this.setState({
      itens: LocalStorageApi.getCar().Produtos,
    })
  }

  render() {
    if (this.state.itens === []) return <EmptyCart />;
    console.log(this.props)
    return (
      <div className="content-shopcart">
        <ShopCartHeader />
        <div className="content-product-list">
          <p>PRODUTOS</p>
          <CartProductList
            produtos={listProducts}
          />
        </div>
        <p>{`Valor Total da Compra: R$ ${value}`}</p>
      </div>
    );
  }
}
export default ShopCart;
