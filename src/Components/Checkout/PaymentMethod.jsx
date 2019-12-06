import React from 'react';
import CreditCard from '../../image/credit-card.png';
import Billing from '../../image/codigo-de-barras.png';
import '../../Style/PaymentMethod.css'

class PaymentMethod extends React.Component {
  KeyPress(event) {
    if (event.key === 'Enter') {
      this.props.onSearchTextChange(event);
    }
  }

  render() {
    return (
      <div>
        <h3>Método de Pagamento</h3>
        <div className="payment-method">
        <div className="payment-option">
          <p>Boleto</p>
          <label htmlFor="boleto">
            <input type="radio" name="payment-method" id="boleto" />
            <img src={Billing} alt="boleto bancario" className="method-image" />
          </label>
        </div>
        <div className="payment-option">
          <p>Cartão de Crédito</p>
          <label htmlFor="visa-credit">
            <input type="radio" name="payment-method" id="visa-credit" />
            Visa
            <img src={CreditCard} alt="cartao de credito" className="method-image" />
          </label>
          <label htmlFor="mastercard-credit">
            <input type="radio" name="payment-method" id="mastercard-credit" />
            MasterCard
            <img src={CreditCard} alt="cartao de credito" className="method-image" />
          </label>
          <label htmlFor="elo-credit">
            <input type="radio" name="payment-method" id="elo-credit" />
            Elo
            <img src={CreditCard} alt="cartao de credito" className="method-image" />
          </label>
        </div>
        </div>
      </div>
    );
  }
}

export default PaymentMethod;
