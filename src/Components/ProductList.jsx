// Componentes presentes:
// - ProductCard.jsx
import React, { Component } from 'react';
import ProductCard from './ProductCard';
import * as ProductAPI from '../Services/ProductAPI';
import PropTypes from 'prop-types';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.changeStateValue = this.changeStateValue.bind(this);
  }

  changeStateValue(value) {
    this.setState({
      data: value.result,
    });
  }

  componentDidUpdate(prevProps) {
    const { seachText, category } = this.props;
    if (seachText !== prevProps.seachText || category !== prevProps.category) {
      if (seachText === '' && category !== '') {
        ProductAPI.getItensByCategoryId(category).then(data =>
          this.changeStateValue(data)
        );
      } else if (seachText !== '' && category === '') {
        ProductAPI.getItensByTerm(seachText).then(data =>
          this.changeStateValue(data)
        );
      } else {
        ProductAPI.getItensByCategoryTerm(category, seachText).then(data =>
          this.changeStateValue(data)
        );
      }
    }
  }

  render() {
    const mensage = 'Busca vazia!';
    const { data } = this.state;
    if (data.length === 0) return mensage;
    return (
      <div className='product-list'>
        {data.map(product => (
          <ProductCard item={product} />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  seachText: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
