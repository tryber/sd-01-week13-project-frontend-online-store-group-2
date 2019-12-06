import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from './Pages/MainScreen';
import ShopCart from './Pages/ShopCart';
import Checkout from './Pages/Checkout'
import Product from './Pages/Product';
import './App.css';
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route path="/shopcart" component={ShopCart} />
          <Route exact path="/products/:id_of_product" component={Product} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
