// TELA PRINCIPAL ONDE SERAO EXIBIDOS OS PRODUTOS

// Componentes presentes:
// - SearchBar.jsx
// - ProductList.jsx > (ProductCard.jsx)
// - Categories.jsx

import React, { Component } from 'react';
import SearchBar from '../Components/SearchBar';
import ProductList from '../Components/ProductList';
import Categories from '../Components/Categories';
import ShopCartLink from '../Components/ShopCartLink';

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
    const { searchText, category, enterClick } = this.state;
    return (
      <div>
        <SearchBar
          onSearchTextChange={this.changeHandlerSearch}
        />
        <ShopCartLink />
        <Categories category={category} changeSelectedCategory={this.changeSelectedOption} />
        <ProductList goSearch={enterClick} searchText={searchText} category={category} />
      </div>
    );
  }
}

export default MainScreen;
