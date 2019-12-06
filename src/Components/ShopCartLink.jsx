import React from 'react';
import { Link } from 'react-router-dom';
import cartShop from '../image/001-shopping-cart.svg';
import '../Style/ShopCartLink.css';

class ShopCartLink extends React.Component {
  render() {
    const {addNewItem, deleteProduct, updateProductQtd} = this.props;
    return (
      <Link to={{
        pathname: '/shopcart',
        state: {
          addNewItem:{addNewItem},
          deleteProduct:{deleteProduct},
          updateProductQtd:{updateProductQtd},
        }
        }}>
        <div className="content">
          <span className="number-cart">3</span>
          <img
            src={cartShop}
            alt="Cart"
            className="icon-cart"
          />
        </div>
      </Link>
    );
  }
}

export default ShopCartLink;
