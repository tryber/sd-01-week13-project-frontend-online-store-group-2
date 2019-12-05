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

  componentDidUpdate(prevProps) {
    const { searchText, category } = this.props;
    if (this.props !== prevProps) return;
    
    if (searchText === '' && category !== '') {
      ProductApi.getItensByCategoryId(category)
        .then((dados) => this.changeStates(dados));
      return;
    }
    if (searchText !== '' && category === '') {
      ProductApi.getItensByTerm(searchText)
        .then((dados) => this.changeStates(dados));
      return
    }
    ProductApi.getItensByCategoryTerm(category, searchText)
      .then((dados) => this.changeStates(dados));
  }

  changeStates(value) {
    this.setState({
      dados: value.results,
    })
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
