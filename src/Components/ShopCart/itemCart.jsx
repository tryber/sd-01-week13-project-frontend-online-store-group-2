import React from 'react';

class ItemCart extends React.Component {
  getValueTotal() {
    const { qtd, value } = this.props.details;
    return qtd * value;
  }

  render() {
    const { details, onChangeQtd, onDelete } = this.props;
    return (
      <div className="content-shopcart">
        <div onClick={() => onDelete(details.id)}>X</div>
        <img src={details.thumbnail} />
        <p>{details.titulo}</p>
        <div>
          <div onClick={() => onChangeQtd(details.qtd-1)}>-</div>
          <div>{details.qtd}</div>
          <div onClick={() => onChangeQtd(details.qtd-1)}>+</div>
        </div>
        <div>{this.getValueTotal()}</div>
      </div>
    );
  }
}

export default ItemCart;


