import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as ProductAPI from '../../Services/ProductAPI';
import '../../Style/Categories.css';

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
    const { changeSelectedCategory, category } = this.props;
    const { categories } = this.state;
    const createRadioButton = (name, id, index) => (
      <li className="categories-methods">
        <label className="container" htmlFor={id}>
          <span className="checkmark">
            <input
            key={index}
            type="radio"
            id={id}
            className="categories-method"
            name="categories"
            value={id}
            checked={category === id}
            onChange={(e) => changeSelectedCategory(e.target.id)}
            />
          </span>
          {name}
        </label>
      </li>
    );
    return (
      categories.map(({ name, id }, index) => createRadioButton(name, id, index))
    );
  }
}

export default Categories;

Categories.propTypes = {
  changeSelectedCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};
