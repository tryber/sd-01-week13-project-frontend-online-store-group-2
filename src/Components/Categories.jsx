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
  }

  componentDidMount() {
    ProductAPI.getCategories()
      .then((data) => this.setState({
        loading: false,
        categories: data,
      }));
  }  

  render() {
    if (loading) return <Loading />;
    const { categories, loading } = this.state;
    const createRadioButton = (name, id) => {
      return (
        <label htmlFor="categories">
          {name}
          <input type="radio" name="categories" value={id} />
        </label>
      );
    }
    
    return (
      categories.map(({ name, id }) => createRadioButton(name, id))
    );
  }
}

export default Categories;
