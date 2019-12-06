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
import * as LocalStorageApi from '../../Services/LocalStorageAPI';

export class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      category: '',
      enterClick: false,
      buyerCar: [],
    };

    this.changeHandlerSearch = this.changeHandlerSearch.bind(this);
    this.changeSelectedOption = this.changeSelectedOption.bind(this);
    this.updateProductQtd = this.updateProductQtd.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.setDados = this.setDados.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.verifyItem = this.verifyItem.bind(this);
  }

  componentDidMount(){
    setDados();
  }

  componentDidUpdate() {
    LocalStorageApi.setCar(this.state.buyerCar);
  }

  updateProductQtd(produto) {
    const Products = this.state.buyerCar.map((product) => {
      if (product.id === produto.id) {
        return { ...product, ...produto };
      }
      return product;
    });
    this.setState({ buyerCar: Products })
  }

  verifyItem(item, status) {
    const value = this.state.buyerCar
    .find((product) => product.id === item.id)
    if (value.qtd < value.available_quantity && status === 1) {
      value.qtd += 1;
      this.updateProductQtd(value);
      return;
    }

    if (value.qtd > 1 && status === -1) {
      value.qtd -= 1;
      this.updateProductQtd(value);
      return;
    }
    this.addNewItem(item);
  }

  addNewItem(item) {
    if (!this.state.buyerCar
      .some((product) => product.id === item.id)) {
      this.setState((state) => ({ buyerCar: [...state.buyerCar, item] }));
    }
  }

  deleteProduct(id) {
    const Products = this.state.buyerCar.filter((product) => product.id !== id);
    this.setState({ buyerCar: Products });
  }

  setDados() {
    this.setState({
      buyerCar: LocalStorageApi.getCar().Produtos,
    })
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
        <SearchBar onSearchTextChange={this.changeHandlerSearch} />
        <ShopCartLink addNewItem={this.addNewItem} deleteProduct={this.deleteProduct} updateProductQtd={this.updateProductQtd} />
        <Categories category={category} changeSelectedCategory={this.changeSelectedOption} />
        <ProductList goSearch={enterClick} searchText={searchText} category={category} addNewItem={this.addNewItem} />
      </div>
    );
  }
}

export default MainScreen;
