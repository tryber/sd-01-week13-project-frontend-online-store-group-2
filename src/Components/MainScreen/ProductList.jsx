// Componentes presentes:
// - ProductCard.jsx
// TELA PRINCIPAL ONDE SERAO EXIBIDOS OS PRODUTOS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as ProductApi from '../../Services/ProductAPI';
import ProductCard from './ProductCard';
import '../../Style/ProductList.css'


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: [],
    };

    this.setUrl = this.setUrl.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props === prevProps) return;
    ProductApi.getData(this.setUrl()).then((data) => this.changeStates(data));
  }

  setUrl() {
    const { searchText, category } = this.props;
    let url = '';
    if (searchText === '' && category !== '') {
      url = `https://api.mercadolibre.com/sites/MLB/search?category=${category}`;
    }
    if (searchText !== '' && category === '') {
      url = `https://api.mercadolibre.com/sites/MLB/search?q=${searchText}`;
    } else {
      url = `https://api.mercadolibre.com/sites/MLB/search?category=${category}&q=${searchText}`;
    }
    return url;
  }


  changeStates(value) {
    this.setState({
      dados: value.results,
    });
  }

  render() {
    const { dados } = this.state;
    const { goSearch } = this.props;
    if (!goSearch) return <h4>Ainda não pesquisou!</h4>;
    if (dados.length === 0) return <h4>Nada encontrado</h4>;
    return (
      <div className="content-center">
        {dados.map((item) => <ProductCard key={item.id} item={item} />)}
      </div>
    );
  }
}
export default ProductList;

ProductList.propTypes = {
  searchText: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  goSearch: PropTypes.bool.isRequired,
};
