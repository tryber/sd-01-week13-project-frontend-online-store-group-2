// Componentes presentes:
// - CartProductList.jsx

import React from 'react';
import './ShopCart.css';
import EmptyCart from './EmptyCart';
import ShopCartHeader from '.ShopCartHeader';
import CartProductList from './CartProductList';

class ShopCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itens: 0,
      listProducts: [],
      valueTotal: 0,
    };
    this.updateProductQtd = this.updateProductQtd.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  updateProductQtd (produto){
    const Products = this.state.listProducts.map((product) => {
      if (product.id === produto.id) {
        return { ...product, ...produto };
      }
      return product;
    });
    this.setState({listProducts: Products})
  }

  deleteMovie(id){
    const Products = this.state.listProducts.filter((product) => product.id !== id );
    this.setState({listProducts: Products})
  }

  componentDidMount() {

    const { valueTotal } = CarrinhoDeCompras;
    this.setState({
      listProducts:CarrinhoDeCompras.Produtos,
      itens:CarrinhoDeCompras.Produtos.length,
      valueTotal,
    })
  }

  render() {
    const { itens, listProducts, value } = this.state;
    if (itens === 0) return <EmptyCart />;

    return (
      <div className="content-shopcart">
        <ShopCartHeader />
        <div className="content-product-list">
          <p>PRODUTOS</p>
          <CartProductList
            onDelete={this.deleteMovie}
            onChangeQtd={this.updateProductQtd}
            produtos={listProducts}
          />
        </div>
        <p>{`Valor Total da Compra: R$ ${value}`}</p>
      </div>
    );
  }
}

export default ShopCart;


