// TELA PRINCIPAL ONDE SERAO EXIBIDOS OS PRODUTOS

// Componentes presentes:
// - SearchBar.jsx
// - ProductList.jsx > (ProductCard.jsx)
// - Categories.jsx

import React, { Component } from 'react';
import SearchBar from '../Components/SearchBar';
import Categories from '../Components/Categories';

export class MainScreen extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Categories />
      </div>
    );
  }
}

export default MainScreen;
