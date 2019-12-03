import React, { Component } from 'react';
import MainScreen from './Pages/MainScreen';
import './App.css';
import ShopCart from './Pages/ShopCart';


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
