import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cartShop from '../image/001-shopping-cart.svg';
import '../Style/ShopCartLink.css';

class ShopCartLink extends React.Component {
  render() {
    return (
      <Link
        className="car-link"
        to={{
          pathname: '/shopcart',
        }}
      >
        <div className="content">
          <span className="number-cart">{this.props.qtdTotal}</span>
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
  qtdTotal: PropTypes.number.isRequired,
};
