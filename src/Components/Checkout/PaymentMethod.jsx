import React from 'react';
import CreditCard from '../../image/credit-card.png';
import Billing from '../../image/codigo-de-barras.png';
import '../../Style/PaymentMethod.css';

class PaymentMethod extends React.Component {

  render() {
    return (
      <div className="payment-method">
        <div className="payment-option">
          <p>Boleto</p>
          <label htmlFor="boleto" className="method">
            <input type="radio" name="payment-method" id="boleto" />
            <img src={Billing} alt="boleto bancario" className="method-image" />
          </label>
        </div>
        <div className="payment-option">
          <p>Cartão de Crédito</p>
          <div className="credit-card">
            <label htmlFor="visa-credit" className="method">
              <input type="radio" name="payment-method" id="visa-credit" />
              Visa
              <img src={CreditCard} alt="cartao de credito" className="method-image" />
            </label>
            <label htmlFor="mastercard-credit" className="method">
              <input type="radio" name="payment-method" id="mastercard-credit" />
              MasterCard
              <img src={CreditCard} alt="cartao de credito" className="method-image" />
            </label>
            <label htmlFor="elo-credit" className="method">
              <input type="radio" name="payment-method" id="elo-credit" /> Elo
              <img src={CreditCard} alt="cartao de credito" className="method-image" />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentMethod;
