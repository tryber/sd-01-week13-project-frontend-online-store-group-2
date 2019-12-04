import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
