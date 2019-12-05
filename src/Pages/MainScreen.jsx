// TELA PRINCIPAL ONDE SERAO EXIBIDOS OS PRODUTOS

// Componentes presentes:
// - SearchBar.jsx
// - ProductList.jsx > (ProductCard.jsx)
// - Categories.jsx

import React, { Component } from 'react';
import SearchBar from '../Components/SearchBar';
import Categories from '../Components/Categories';
import ShopCartLink from '../Components/ShopCartLink';

export class MainScreen extends Component {
  render() {
    return (
      <div className="mainscreen">
        <SearchBar />
        <ShopCartLink />
        <Categories />
      </div>
    );
  }
}

export default MainScreen;
