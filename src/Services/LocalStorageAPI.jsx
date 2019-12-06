export const setNewItem = (itens) => {
  const itemJson = JSON.stringify(itens);
  console.log(itemJson)
  localStorage.setItem(itens.id, itemJson);
};

export const getItem = (id) => {
  const item = localStorage.getItem(id);
  return JSON.parse(item);
};

export const removeItem = (id) => {
  localStorage.removeItem(id);
}

export const UpdateItemQtd = (id, value) => {
  const item=getItem(id);
  item.qtd=value;
  setNewItem(item);
}

export const AllItens = () => {
  console.log(Object.keys(localStorage))
  const arrKeys = Object.keys(localStorage).filter((keys)=>keys.includes('MLB'));
  const itens = arrKeys.map((key)=>getItem(key));
  return itens;
}

export const valueTotal = () => {
  return AllItens().reduce((acc,item)=> {
    let total=acc;
    total+=item.price*item.qtd;
    return total;
  },0);
}
