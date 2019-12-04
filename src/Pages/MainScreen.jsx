// TELA PRINCIPAL ONDE SERAO EXIBIDOS OS PRODUTOS

// Componentes presentes:
// - SearchBar.jsx
// - ProductList.jsx > (ProductCard.jsx)
// - Categories.jsx

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../Components/SearchBar';
import Categories from '../Components/Categories';
import cartShop from '../image/001-shopping-cart.svg';


export class MainScreen extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Link to="/shopcart">
          <img 
            src={cartShop}
            className="icon-cart"
            alt="Cart"
          />
        </Link>
        <Categories />
      </div>
    );
  }
}

export default MainScreen;
