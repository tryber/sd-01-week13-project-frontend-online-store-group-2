import React from 'react';
import PropTypes from 'prop-types';
import * as LocalStorageApi from '../../Services/LocalStorageAPI';
import '../../Style/ItemCart.css';

class ItemCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qtd: 1,
    };

    this.setQtd = this.setQtd.bind(this);
  }

  componentDidMount() {
    this.setQtd();
  }

  setQtd() {
    const { id } = this.props.details;
    this.setState({ qtd: LocalStorageApi.getItem(id).qtd });
  }

  changeQtd(value) {
    const { details } = this.props;
    this.props.changeState();
    if (value <= details.available_quantity && value > 0) {
      LocalStorageApi.UpdateItemQtd(details.id, value);
      this.setState({ qtd: value });
    }
  }

  removeItem(id) {
    LocalStorageApi.removeItem(id);
    this.props.changeState();
  }

  render() {
    const { details } = this.props;
    return (
      <div className="content-shopcart">
        <button type="button" className="btn" onClick={() => this.removeItem(details.id)}>X</button>
        <div className="div-img">
          <img className="img-product-car" src={details.thumbnail} alt="product" />
        </div>
        <p className="name-product">{details.title}</p>
        <div className="qtd-product">
          <button type="button" className="btn" onClick={() => this.changeQtd(this.state.qtd - 1)}>
            -
          </button>
          <p>{this.state.qtd}</p>
          <button
            disabled={this.state.qtd === details.available_quantity}
            type="button"
            className="btn"
            onClick={() => this.changeQtd(this.state.qtd + 1)}
          >
            +
          </button>
          <p>{`Avaliable  ${details.available_quantity}`}</p>
        </div>
        <span className="total">
          {`R$ ${parseFloat((details.price * this.state.qtd).toFixed(2))}`}
        </span>
      </div>
    );
  }
}

export default ItemCart;

ItemCart.propTypes = {
  changeState: PropTypes.func.isRequired,
  details: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};
