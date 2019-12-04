// Componentes presentes:
// - ProductCard.jsx
import React, { Component } from "react";
import ProductCard from "./ProductCard";
import * as ProductAPI from "../Services/ProductAPI";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: []
    };
  }

  componentDidMount() {
    
  }

  render() {
    const frase = 'Busca vazia!'
    const { dados } = this.state;
    if (dados.length === 0) return frase
    return (
      <div className="product-list">
        {dados.map(product => (
          <ProductCard item={product} />
        ))}
      </div>
    );
  }
}
