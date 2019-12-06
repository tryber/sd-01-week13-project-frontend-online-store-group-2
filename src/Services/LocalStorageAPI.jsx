<<<<<<< HEAD
export const setNewItem = (itens, value=1) => {
  const item = {...itens, qtd:value}
  const itemJson = JSON.stringify(item);
  localStorage.setItem(itens.id, itemJson);
};

export const getCar = (id) => {
  const item = localStorage.getItem(id);
  return JSON.parse(item);
};

export const UpdateItem = (id, value) => {
  const item=getCar(id);
  item.qtd=value;
  setNewItem(item,value);
}

export const AllItens = () => {
  const arrKeys = Object.keys(localStorage).filter((keys)=>keys.includes['MLB']);
  const itens = arrKeys.map((key)=>getCar(key));
  return itens;
}


