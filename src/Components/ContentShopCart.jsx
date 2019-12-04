import React from 'react';
import emptyBox from '../image/empty-box.png';


class ContentShopCart extends React.Component {
  
  render() {
    return (
      <div className="content-center">
        <img
          src={emptyBox}
          alt="empty Box"
          className="empty-box"
          />
          <p>Seu Carrinho Está Vazio</p>
      </div>
    );
  }  
}

export default ContentShopCart;
