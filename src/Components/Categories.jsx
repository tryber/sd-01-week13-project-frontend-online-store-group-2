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
    const { changeSelectedCategory, category } = this.props
    const { categories } = this.state;
    const createRadioButton = (name, id, index) => (
      <label htmlFor={id}>
        <input
          key={index}
          type="radio"
          id={id}
          name="categories"
          value={id}
          checked={category === id}
          onChange={(e) => changeSelectedCategory(e.target.id)}
        />
        {name}
      </label>
    );
    return (
      categories.map(({ name, id }, index) => createRadioButton(name, id, index))
    );
  }
}

export default Categories;

Categories.propTypes = {
  changeSelectedCategory: PropTypes.func.isRequired,
  category: PropTypes.
};
