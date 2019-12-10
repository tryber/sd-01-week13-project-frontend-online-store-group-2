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
      <div className="input-radio">
        <input
          key={index}
          className="radiobtn"
          type="radio"
          id={id}
          name="categories"
          value={id}
          checked={category === id}
          onChange={(e) => changeSelectedCategory(e.target.id)}
        />
        <label htmlFor={id}>
          {name}
        </label>
      </div>
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
