import React, { Component } from 'react';
import * as LocalStorageAPI from '../Services/LocalStorageAPI';

class ProductCard extends Component {
  render() {
    const { price, title, thumbnail } = this.props;
    return (
      <div className="card-product">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="info-product">
          <img className="img-product" src={thumbnail} />
          <p className="value">{`R$ ${price}`}</p>
          <button type="button" onClick={LocalStorageAPI.addCart(/*values*/)}></button>
        </div>
      </div>
    );
  }
}

export default ProductCard;
// FALTA SABER ONDE SERÁ ADICIONADO O LINK PARA VER MAIS
// OS DETALHES DO PRODUTO E FUNÇÃO PARA ADICIONAR NOVO ITEM NO CARRINHO
// FUNC SERÁ FEITA NO LOCALSTORAGEAPI. BASTARÁ APENAS PASSA-LA PARA O ONCLICK 
// NO BOTAO

//thumbnail é o caminho da imagem, nome que está na api é esse
