// TELA PRINCIPAL ONDE SERAO EXIBIDOS OS PRODUTOS

// Componentes presentes:
// - SearchBar.jsx
// - ProductList.jsx > (ProductCard.jsx)
// - Categories.jsx

import React, { Component } from 'react';
import SearchBar from '../Components/SearchBar';
import Categories from '../Components/Categories';
import ProductList from '../Components/ProductList';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seachText: '',
      category: ''
    };
    this.changeHandlerSearch = this.changeHandlerSearch.bind(this);
  }

  changeHandlerSearch(event) {
    this.setState({
      seachText: event.target.value
    });
  }

  changeHandlerCategory(event) {
    this.setState({
      category: event.target.value
    });
  }

  render() {
    const { seachText, category } = this.state;
    return (
      <div>
        <SearchBar seachText={seachText}
        changeSearchText={this.changeHandlerSearch} />
        <Categories changeCategories={this.changeHandlerCategory} />
        <ProductList seachText={seachText} category={category} />
      </div>
    );
  }
}
