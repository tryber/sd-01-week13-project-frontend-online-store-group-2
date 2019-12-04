// TELA PRINCIPAL ONDE SERAO EXIBIDOS OS PRODUTOS
import React, { Component } from 'react';
import ProductCard from '../Components/ProductCard';
import * as LocalStorageAPI from '../Services/LocalStorageAPI';

class CartProductList extends Component {
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
    if (searchText !== prevProps.searchText
      || category !== prevProps.category) {

      if (searchText === '' && category !== '') {
        LocalStorageAPI.getItensByCategoryId(category)
          .then((dados) => this.changeStates(dados));
      } else if (searchText !== '' && category === '') {
        LocalStorageAPI.getItensByTerm(searchText)
          .then((dados) => this.changeStates(dados));
      } else {
        LocalStorageAPI.getItensByCategoryTerm(category, searchText)
          .then((dados) => this.changeStates(dados));
      }
    }
  }

  render() {

    const { dados } = this.state;
    console.log(dados)

    if (dados.length === 0) return <h4>Nada a ser pesquisado</h4>;

    return (
      <div>
        {dados.map((item, index) => <ProductCard key={index} value={item} />)}
      </div>
    );
  }
}
export default CartProductList;
