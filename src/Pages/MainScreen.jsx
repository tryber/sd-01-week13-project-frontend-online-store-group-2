// TELA PRINCIPAL ONDE SERAO EXIBIDOS OS PRODUTOS

// Componentes presentes:
// - SearchBar.jsx
// - ProductList.jsx > (ProductCard.jsx)
// - Categories.jsx

import React, { Component } from 'react';
import SearchBar from '../Components/MainScreen/SearchBar';
import Categories from '../Components/MainScreen/Categories';
import ShopCartLink from '../Components/ShopCartLink';
import ProductList from '../Components/MainScreen/ProductList';

export class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      category: '',
      enterClick: false,
    };

    this.changeHandlerSearch = this.changeHandlerSearch.bind(this);
    this.changeSelectedOption = this.changeSelectedOption.bind(this);
  }


  changeHandlerSearch(event) {
    this.setState({
      searchText: event.target.value,
      enterClick: true,
    });
  }

  changeSelectedOption(value) {
    this.setState({
      category: value,
    });
  }

  render() {
    const { searchText, category, enterClick, buyerCar } = this.state;
    return (
      <div>
        <SearchBar onSearchTextChange={this.changeHandlerSearch} />
        <ShopCartLink buyerCar={buyerCar} />
        <Categories category={category} changeSelectedCategory={this.changeSelectedOption} />
        <ProductList
          goSearch={enterClick}
          searchText={searchText}
          category={category}
        />
      </div>
    );
  }
}

export default MainScreen;
