// Componentes presentes:
// - ProductCard.jsx
// TELA PRINCIPAL ONDE SERAO EXIBIDOS OS PRODUTOS
import React, { Component } from 'react';
import * as ProductApi from '../Services/ProductAPI';
import ProductCard from '../Components/ProductCard';


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: [],
    }
  }

  changeStates(value) {
    this.setState({
      dados: value.results,
    })
  }

  componentDidUpdate(prevProps) {
    const { searchText, category } = this.props;

    if (searchText === prevProps.searchText
      && category === prevProps.category) {
      return;
    }

    if (searchText === '' && category !== '') {
      LocalStorageAPI.getItensByCategoryId(category)
        .then((dados) => this.changeStates(dados));
      return;
    }

    if (searchText !== '' && category === '') {
      LocalStorageAPI.getItensByTerm(searchText)
        .then((dados) => this.changeStates(dados));
      return;
    }

    LocalStorageAPI.getItensByCategoryTerm(category, searchText)
      .then((dados) => this.changeStates(dados));
  }

  render() {

    const { dados } = this.state;

    if (dados.length === 0) return <h4>Nada a ser pesquisado</h4>;

    return (
      <div>
        {dados.map((item, index) => <ProductCard key={index} item={item} />)}
      </div>
    );
  }
}
export default ProductList;
