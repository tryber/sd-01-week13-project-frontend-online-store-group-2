import React from 'react';
import ItemCart from './itemCart';
import * as LocalStorageApi from '../../Services/LocalStorageAPI';

class CartProductList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      update: false,
    }
    this.changeUpdate = this.changeUpdate.bind(this);
  }

  changeUpdate() {
    this.setState(state => ({ update: !state.update }))
  }

  render() {
    console.log(LocalStorageApi.AllItens())
    return (
      <div className="content-shopcart">
        {LocalStorageApi.AllItens()
          .map((produto) =>
            <ItemCart
              key={produto.id}
              details={produto}
              changeState={this.changeUpdate}
            />)}
      </div>
    );
  }
}

export default CartProductList;
