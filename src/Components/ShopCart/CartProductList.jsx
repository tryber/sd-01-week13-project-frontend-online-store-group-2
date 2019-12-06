import React from 'react';
import ItemCart from './ItemCart.jsx';
import emptyBox from '../../image/empty-box.png'
import * as LocalStorageApi from '../../Services/LocalStorageAPI';

class CartProductList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      update: false,
      valueTotal:0,
    }
    this.changeUpdate = this.changeUpdate.bind(this);
  }

  componentDidMount(){
    this.setState({ valueTotal : LocalStorageApi.valueTotal() })
  }

  changeUpdate() {
    this.setState(state => ({ update: !state.update, valueTotal: LocalStorageApi.valueTotal() }))
  }

  render() {
    if (LocalStorageApi.AllItens().length === 0) return (<div className="content-center">
      <img
        src={emptyBox}
        alt="empty Box"
        className="empty-box"
      />
      <p>Seu Carrinho Está Vazio</p>
    </div>);
    return (
      <div className="content-shopcart">
        {LocalStorageApi.AllItens()
          .map((produto) =>
            <ItemCart
              key={produto.id}
              details={produto}
              changeState={this.changeUpdate}
            />)}

        <p>{`Valor Total da Compra: R$ ${this.state.valueTotal}`}</p>
      </div>
    );
  }
}

export default CartProductList;
