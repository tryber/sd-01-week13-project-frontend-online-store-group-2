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
    if (this.props.searchText === prevProps.searchText
      && this.props.category === prevProps.category) {
      return;
    }

    if (this.props.searchText === '' && this.props.category !== '') {
      ProductApi.getItensByCategoryId(this.props.category)
        .then((dados) => this.changeStates(dados));
      return;
    }

    if (this.props.searchText !== '' && this.props.category === '') {
      ProductApi.getItensByTerm(this.props.searchText)
        .then((dados) => this.changeStates(dados));
      return;
    }

    ProductApi.getItensByCategoryTerm(this.props.category, this.props.searchText)
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
