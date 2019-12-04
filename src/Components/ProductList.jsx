// Componentes presentes:
// - ProductCard.jsx
// TELA PRINCIPAL ONDE SERAO EXIBIDOS OS PRODUTOS
import React, { Component } from 'react';
import ProductCard from '../Components/ProductCard';
import * as ProductAPI from '../Services/ProductAPI';

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

  getData(searchText, category) {
    if (searchText === '' && category !== '') {
      ProductAPI.getItensByCategoryId(category)
        .then((dados) => this.changeStates(dados));
    } else if (searchText !== '' && category === '') {
      ProductAPI.getItensByTerm(searchText)
        .then((dados) => this.changeStates(dados));
    } else {
      ProductAPI.getItensByCategoryTerm(category, searchText)
        .then((dados) => this.changeStates(dados));
    }
  }

  componentDidUpdate(prevProps) {
    const { searchText, category } = this.props;
    if (searchText !== prevProps.searchText
      || category !== prevProps.category) {
      this.getData(searchText, category);
    }
  }

  render() {

    const { dados } = this.state;
    console.log(dados)

    if (dados.length === 0) return <h4>Nada a ser pesquisado</h4>;

    return (
      <div>
        {dados.map((product, index) => <ProductCard key={index} item={product} />)}
      </div>
    );
  }
}
export default ProductList;
