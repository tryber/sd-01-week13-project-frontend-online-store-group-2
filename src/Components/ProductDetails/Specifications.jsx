import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Specifications extends Component {

  render() {
    const { attributes } = this.props;

    const getSpecifications = (attribute) => (
      <li>{`${attribute.name}: ${attribute.value_name}`}</li>
    );

    if (attributes === undefined) return true;
    return (
      <div>
        <h3>Especificações Técnicas</h3>
        <ul>
          {attributes.map((attribute) => getSpecifications(attribute))}
        </ul>
      </div>
    );
  }
}

export default Specifications;

Specifications.propTypes = {
  attributes: PropTypes.shape([]).isRequired,
};
