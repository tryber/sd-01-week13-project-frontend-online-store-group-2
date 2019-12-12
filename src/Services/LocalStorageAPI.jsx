export const setNewItem = (itens) => {
  const itemJson = JSON.stringify(itens);
  localStorage.setItem(itens.id, itemJson);
};

export const getItem = (id) => {
  const item = localStorage.getItem(id);
  return JSON.parse(item);
};

export const removeItem = (id) => {
  localStorage.removeItem(id);
};

export const UpdateItemQtd = (id, value) => {
  const item = getItem(id);
  item.qtd = value;
  setNewItem(item);
};

export const AllItens = () => {
  const arrKeys = Object.keys(localStorage).filter((keys) => keys.includes('MLB'));
  const itens = arrKeys.map((key) => getItem(key));
  return itens;
};

export const valueTotal = () => (
  AllItens().reduce((acc, item) => {
    let total = acc;
    total += item.price * item.qtd;
    return total;
  }, 0)
);

export const getQtd = (id) => {
  if (getItem(id)) {
    return getItem(id).qtd;
  }
  return 1;
};

export const qtdTotal = () => (
  AllItens().reduce((acc, item) => {
    let total = acc;
    total += item.qtd;
    return total;
  }, 0)
);

export const getComment = () => {
  const item = localStorage.getItem("Comments");
  return JSON.parse(item);
};

export const addComment = (Comment) => {
  let listComment = getComment();
  console.log(getComment())
  listComment.push(Comment);
  const commentJson = JSON.stringify(listComment);
  localStorage.setItem('Comments', commentJson);
}

export const createcommemt = () => {
  localStorage.setItem('Comments','email:errr, ess:sdsd,')
}
