import React from 'react';

class ItemCart extends React.Component {
  getValueTotal() {
    const { qtd, value } = this.props.details;
    return qtd * value;
  }

  render() {
    const { details } = this.props;
    return (
      <div className="content-shopcart">
        <div >X</div>
        <img src={details.thumbnail} />
        <p>{details.titulo}</p>
        <div>
          <div>-</div>
          <div>{details.qtd}</div>
          <div>+</div>
        </div>
        <div>{this.getValueTotal()}</div>
      </div>
    );
  }
}

export default ItemCart;


