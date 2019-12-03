import React, { Component } from 'react';
import * as ProductAPI from '../Services/ProductAPI';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    ProductAPI.getCategories()
      .then((data) => this.setState({
        categories: data,
      }));
  }

  render() {
    const { categories } = this.state;
    const createRadioButton = (name, id) => (
      <label htmlFor={id}>
        <input type="radio" id={id} name="categories" value={id} />
        {name}
      </label>
    );

    return (
      categories.map(({ name, id }) => createRadioButton(name, id))
    );
  }
}

export default Categories;
