// Componentes presentes:
// - CartProductsList.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import emptyBox from '../image/empty-box.png';


class ShopCart extends React.Component {
  render() {
    return (
        <div className="content-shopcart">
            <div className="icon-back">
                <Link to="/">voltar</Link>
            </div>
            <div className="content-center">
                <img src={emptyBox} />
            </div>
        </div>
    );
  }
}

export default ShopCart;
