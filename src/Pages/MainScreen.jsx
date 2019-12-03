// TELA PRINCIPAL ONDE SERAO EXIBIDOS OS PRODUTOS

// Componentes presentes:
// - SearchBar.jsx
// - ProductList.jsx > (ProductCard.jsx)
// - Categories.jsx

import React, { Component } from 'react';
import SearchBar from '../Components/SearchBar';

export class MainScreen extends Component {
  render() {
    return (
      <SearchBar />
      <div>
        <Link to="/shopcart">
          <input
            type="text"
            className="icon-cart"
            alt="Cart"
          />
        </Link>
      </div>
    );
  }
}

export default MainScreen;
