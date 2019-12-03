import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as ProductAPI from '../Services/ProductAPI';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.createRadioButton = this.createRadioButton.bind(this)
  }

  componentDidMount() {
    ProductAPI.getCategories()
      .then((data) => this.setState({
        categories: data,
      }));
  }

  createRadioButton() {
    
  }

  render() {
    const { categories } = this.state
    const { name, id } = categories;

    return (
      <input type="radio"></input>
    );
  }
}

export default Categories;
