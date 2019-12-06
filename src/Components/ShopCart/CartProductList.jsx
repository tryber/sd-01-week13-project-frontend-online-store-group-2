import React from 'react';
import PropTypes from 'prop-types';
import ItemCart from './itemCart';

class CartProductList extends React.Component {
  render() {
    const { buyerCar } = this.props;
    return (
      <div className="content-shopcart">
        {buyerCar
          .map((produto) =>
            <ItemCart
              key={produto.id}
              details={produto}
            />)}
      </div>
    );
  }
}

export default CartProductList;

CartProductList.propTypes = {
  buyerCar: PropTypes.shape({
    id:PropTypes.string,
  }).isRequired,
};
