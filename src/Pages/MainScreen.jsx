// TELA PRINCIPAL ONDE SERAO EXIBIDOS OS PRODUTOS

// Componentes presentes:
// - SearchBar.jsx
// - ProductList.jsx > (ProductCard.jsx)
// - Categories.jsx

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../Components/SearchBar';
import Categories from '../Components/Categories';
import ShopCartLink from '../Components/ShopCartLink';
import './MainScreen.css';



export class MainScreen extends Component {
  render() {
    return (
      <div className="mainscreen">
        <SearchBar />
        <Link to="/shopcart">
          <ShopCartLink />
        </Link>
        <Categories />
      </div>
    );
  }
}

export default MainScreen;
