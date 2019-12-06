// Componentes presentes:
// - CartReview.jsx
// - BuyerInfo.jsx
// - PaymentMethod.jsx

import React from 'react';
import PaymentMethod from '../Components/Checkout/PaymentMethod';
import BuyerInfo from '../Components/Checkout/BuyerInfo';
import '../Style/Checkout.css';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <div className="checkout-payment">
          <BuyerInfo />
          <h3>Método de Pagamento</h3>
          <PaymentMethod />
        </div>
      </div>
    );
  }
}

export default Checkout;
