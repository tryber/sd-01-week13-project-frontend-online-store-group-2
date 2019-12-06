import React from 'react';
import ItemCart from './itemCart';
import * as LocalStorageApi from '../Services/LocalStorageAPI';

class CartProductList extends React.Component {
  render() {
    return (
      <div className="content-shopcart">
        {LocalStorageApi.AllItens()
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
