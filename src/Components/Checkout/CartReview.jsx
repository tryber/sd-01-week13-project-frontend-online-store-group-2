import React from 'react';
import * as LocalStorageApi from '../../Services/LocalStorageAPI';
import '../../Style/CartReview.css';

class CartReview extends React.Component {
  
  render() {
    const createItens = ({ thumbnail, title, price, id, qtd }) => (
      <div className="itens" key={id}>
        <div className="">
          <img className="img-product-car" src={thumbnail} alt="product" />
        </div>
        <p className="name-product">
          {title}
        </p>
        <div className="qtd-product">
          <p>{qtd}</p>
        </div>
        <span className="total">
          {`R$ ${parseFloat((price * qtd).toFixed(2))}`}
        </span>
      </div>
    );
    return (
      <div className="CartReview">
        <h2>Revise seus Produtos</h2>
        <div className="list-cartReview">
          {LocalStorageApi.AllItens().map((itens) => createItens(itens))}
        </div>
        <p className="total-price ">
          {`Valor Total da Compra: R$ ${parseFloat(LocalStorageApi.valueTotal().toFixed(2))}`}
        </p>
      </div>
    );
  }
}

export default CartReview;
