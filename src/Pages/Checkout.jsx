// Componentes presentes:
// - CartReview.jsx
// - BuyerInfo.jsx
// - PaymentMethod.jsx

import React from 'react';
import PaymentMethod from '../Components/Checkout/PaymentMethod';

class Checkout extends React.Component {

  render() {
    return (
      <div>
        <PaymentMethod />
      </div>
    );
  }
}

export default Checkout;
