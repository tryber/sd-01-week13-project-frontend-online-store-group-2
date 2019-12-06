import React from 'react';
import PropTypes from 'prop-types';
import * as LocalStorageApi from '../../Services/LocalStorageAPI';

class CartProductList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      qtd: 1,
    }
  }

  componentDidMount() {
    const { details } = this.props;
    this.setState({ qtd: details.qtd })
  }

  changeQtd(value) {
    const { details } = this.props;
    if (value < details.available_quantity && value > 0) {
      LocalStorageApi.UpdateItemQtd(id,value);
      this.setState({ qtd: value });
    }
  }

  render() {
    const { details } = this.props;
    return (
      <div className="content-shopcart">
        <div>
          <p onClick={()=>LocalStorageApi.removeItem(details.id)}>X</p>
          <img src={details.thumbnail} />
          <p>
            {details.title}
          </p>
          <p onClick={() => this.changeQtd(this.state.qtd-1)}>-</p>
          <p>{this.state.qtd}</p>
          <p onClick={() => this.changeQtd(this.state.qtd+1)}>+</p>
          <p>
            {`Max-${details.available_quantity}`}
          </p>
          <p>
            {`R$ ${details.price*this.state.qtd}`}
          </p>
        </div>
      </div>
    );
  }
}

export default CartProductList;

CartProductList.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};
