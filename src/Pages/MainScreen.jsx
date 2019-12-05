// TELA PRINCIPAL ONDE SERAO EXIBIDOS OS PRODUTOS

// Componentes presentes:
// - SearchBar.jsx
// - ProductList.jsx > (ProductCard.jsx)
// - Categories.jsx

import React, { Component } from 'react';
import SearchBar from '../Components/SearchBar';
import ProductList from '../Components/ProductList';
import Categories from '../Components/Categories';

export class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      category: '',
    };

    this.changeSelectedOption = this.changeSelectedOption.bind(this);
  }

  changeHandlerSearch(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  changeSelectedOption(value) {
    this.setState({
      category: value,
    });
  }

  render() {
    const { searchText, category } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(e) => this.changeHandlerSearch(e)}
        />
        <Categories category={category} changeSelectedCategory={this.changeSelectedOption} />
        <ProductList searchText={searchText} category={category} />
      </div>
    );
  }
}

export default MainScreen;
