import React from 'react';
import PropTypes from 'prop-types';
import * as LocalStorageApi from '../Services/LocalStorageAPI';

// const obj = { id, price, title, thumbnail, available_quantity, qtd: 1 };

class CartProductList extends React.Component {
  render() {
    const { details } = this.props;
    return (
      <div className="content-shopcart">
        <div>
          <p>X</p>
          <img src={details.thumbnail} />
          <p>
            {details.title}
          </p>
          <p>-</p>
          <p>{details.qtd}</p>
          <p>+</p>
          <p>
            {`Max-${details.available_quantity}`}
          </p>
          <p>
            {details.price}
          </p>
        </div>
      </div>
    );
  }
}

export default CartProductList;

CartProductList.propTypes = {
  buyerCar: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};
