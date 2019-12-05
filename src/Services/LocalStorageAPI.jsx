export const setCar = (itens) => {
  const itemJson = JSON.stringify(itens);
  localStorage.setItem('BuyerCar',itemJson);
}

export const getCar = () => {
  const item = localStorage.getItem('tarefa');
  return JSON.parse(item);
}

export const getItemCar = (id) => {
  const item = getCar().Products.find((product) => product.id === id);
  return item;
}

export const removeProduct = (id) => {
  const item = getCar().Products.filter((product) => product.id !== id);
  setCar(item);
}

export const addProduct = (item) => {
  const valor = getCar();
  valor.Produtos.push(item);
  setCar(valor);
}

export const getValuesTotal = () => {
  return getCar().Produtos.reduce((acc,product)=>{
    let value = acc;
    value += Number(product.value) * Number(product.qtd);
    return value;
  },0)
}

export const changeQtdProduct = (id,value) => {
  const item = getItem(id);
  removeProduct(item.id);
  item.qtd = value;
  addProduct(item);
}


const CarrinhoDeCompras = {
  "Produtos": [
    {
      "id":1234,
      "titulo":"motogshow",
      "value":500,
      "qtd":3,
      "estoque":20,
      "thumbnail": "http://mlb-s1-p.mlstatic.com/964021-MLA31350197875_072019-I.jpg"
    },
    {
      "id":3333,
      "titulo":"iphone",
      "value":2500,
      "qtd":1,
      "estoque":20,
      "thumbnail": "http://mlb-s1-p.mlstatic.com/964021-MLA31350197875_072019-I.jpg"
    },
  ],
}

// updateProductQtd (produto) {
//   const Products = this.state.listProducts.map((product) => {
//     if (product.id === produto.id) {
//       return { ...product, ...produto };
//     }
//     return product;
//   });
//   this.setState({listProducts: Products})
// }

// deleteMovie(id){
//   const Products = this.state.listProducts.filter((product) => product.id !== id );
//   this.setState({listProducts: Products})
// }
