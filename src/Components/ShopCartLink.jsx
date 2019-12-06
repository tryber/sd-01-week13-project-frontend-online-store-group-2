import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cartShop from '../image/001-shopping-cart.svg';
import '../Style/ShopCartLink.css';

class ShopCartLink extends React.Component {
  render() {
    const { buyerCar } = this.props;
    console.log(buyerCar, 'link');
    return (
      <Link
        to={{
          pathname: '/shopcart',
          state: {
            buyerCar,
          },
        }}
      >
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

ShopCartLink.propTypes = {
  buyerCar: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};
