import React from 'react';
import ItemCart from './itemCart'

class CartProductList extends React.Component {
  render() {
    const { produtos, onChangeQtd, deleteMovie } = this.props;
    return (
      <div className="content-shopcart">
        {produtos
          .map((produto) => 
          <ItemCart
            onDelete={deleteMovie}
            onChangeQtd={onChangeQtd}
            key={produto.id}
            details={produto}
          />)}
      </div>
    );
  }
}

export default CartProductList;


