import React from 'react';
import ItemCart from './itemCart'

class CartProductList extends React.Component {
  render() {
    const { produtos } = this.props;
    return (
      <div className="content-shopcart">
        {produtos
          .map((produto) =>
            <ItemCart
              key={produto.id}
              details={produto}
            />)}
      </div>
    );
  }
}

export default CartProductList;
