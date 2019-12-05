import React, { Component } from 'react';

export class Specifications extends Component {

  render() {
    const { attributes } = this.props;

    const getSpecifications = (attribute) => {
      return (
        <li>{`${attribute.name}: ${attribute.value_name}`}</li>
      );
    }
    
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
