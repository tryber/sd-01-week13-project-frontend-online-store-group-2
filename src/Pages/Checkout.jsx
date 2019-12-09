import React from 'react';
import PaymentMethod from '../Components/Checkout/PaymentMethod';
import '../Style/Checkout.css';
import BuyerInfo from '../Components/Checkout/BuyerInfo';
import CartReview from '../Components/Checkout/CartReview';
import PreviousLink from '../Components/PreviousLink';

class Checkout extends React.Component {

  render() {
    return (
      <div className="Checkout">
        <PreviousLink />
        <div className="checkout-payment">
          <CartReview />
          <BuyerInfo />
          <h3>Método de Pagamento</h3>
          <PaymentMethod />
        </div>
      </div>
    );
  }
}

export default Checkout;
