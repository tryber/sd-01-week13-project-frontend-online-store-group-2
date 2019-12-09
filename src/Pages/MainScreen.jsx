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
import logo from '../image/logo.svg';
import '../Style/MainScreen.css'

import * as LocalStorageApi from '../Services/LocalStorageAPI';

export class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      category: '',
      enterClick: false,
      qtdTotal: 0,
    };

    this.changeHandlerSearch = this.changeHandlerSearch.bind(this);
    this.changeSelectedOption = this.changeSelectedOption.bind(this);
    this.changeQtd = this.changeQtd.bind(this);
  }

  componentDidMount() {
    this.changeQtd();
  }


  changeHandlerSearch(event) {
    this.setState({
      searchText: event.target.value,
      enterClick: true,
    });
  }

  changeQtd() {
    this.setState({ qtdTotal: LocalStorageApi.qtdTotal() });
  }

  changeSelectedOption(value) {
    this.setState({
      category: value,
    });
  }

  render() {
    const { searchText, category, enterClick, qtdTotal } = this.state;
    return (
      <div>
        <header className="header">
          <img className="logo" src={logo} alt="break-store"/>
          <SearchBar onSearchTextChange={this.changeHandlerSearch} />
          <ShopCartLink qtdTotal={qtdTotal} />
        </header>
        <section className="container-content">
          <div className="categories">
            <Categories category={category} changeSelectedCategory={this.changeSelectedOption} />
          </div>
          <ProductList
            goSearch={enterClick}
            searchText={searchText}
            category={category}
            onChange={this.changeQtd}
          />
        </section>
      </div>
    );
  }
}

export default MainScreen;
