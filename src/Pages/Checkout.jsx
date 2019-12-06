// Componentes presentes:
// - CartReview.jsx
// - BuyerInfo.jsx
// - PaymentMethod.jsx
import React, { Component } from "react";

import BuyerInfo from "../Components/Checkout/BuyerInfo";
class Checkout extends React.Component {
  render() {
    return (
      <div>
        <BuyerInfo />
        
      </div>
    );
  }
}
export default Checkout;
