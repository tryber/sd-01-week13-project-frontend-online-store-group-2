import React from 'react';
import ItemCart from './ItemCart.jsx';
import emptyBox from '../../image/empty-box.png';
import * as LocalStorageApi from '../../Services/LocalStorageAPI';
import '../../Style/CartProductList.css';

class CartProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
      valueTotal: 0,
    };
    this.changeUpdate = this.changeUpdate.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  componentDidMount() {
    this.setValue();
  }

  setValue() {
    this.setState({ valueTotal: LocalStorageApi.valueTotal() });
  }

  changeUpdate() {
    this.setState((state) => ({ update: !state.update, valueTotal: LocalStorageApi.valueTotal() }));
  }

  render() {
    if (LocalStorageApi.AllItens().length === 0) {
      return (<div className="content-center">
        <img src={emptyBox} alt="empty Box" className="empty-box" />
        <p>Seu Carrinho Está Vazio</p>
      </div>
      );
    }
    return (
      <div className="Cart-Product-List">
        <div className="list-itens">
          {LocalStorageApi.AllItens()
            .map((produto) =>
              <ItemCart
                key={produto.id}
                details={produto}
                changeState={this.changeUpdate}
              />)}
        </div>
        <p>{`Valor Total da Compra: R$ ${parseFloat(this.state.valueTotal.toFixed(2))}`}</p>
      <button>
        Finalizar Compra
      </button>
      </div>
    );
  }
}

export default CartProductList;
