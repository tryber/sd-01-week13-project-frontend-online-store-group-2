import React, { Component } from 'react';
import * as ProductAPI from '../Services/ProductAPI';
import Loading from './Loading';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      categories: [],
    };
    this.createRadioButton = this.createRadioButton.bind(this)
  }

  componentDidMount() {
    ProductAPI.getCategories()
      .then((data) => this.setState({
        loading: false,
        categories: data,
      }));
  }

  createRadioButton(name, id) {
    return <label><input type="radio" name="categories" value={id} />{name}</label>
  }

  render() {
    const { categories, loading } = this.state
    console.log(categories)
    
    if (loading) return <Loading />
    return (
      categories.map(({ name, id }) => this.createRadioButton(name, id))
    );
  }
}

export default Categories;
