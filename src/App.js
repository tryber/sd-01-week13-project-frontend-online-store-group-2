import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductDetails from './Pages/ProductDetails';
import MainScreen from './Pages/MainScreen';
import ShopCart from './Pages/ShopCart';
import './App.css';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route path="/shopcart" component={ShopCart} />
          <Route exact path="/products/:id_of_product" component={ProductDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
