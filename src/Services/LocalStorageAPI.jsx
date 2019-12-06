export const setCar = (itens) => {
  const itemJson = JSON.stringify(itens);
  localStorage.setItem('BuyerCar', itemJson);
};

export const getCar = () => {
  const item = localStorage.getItem('BuyerCar');
  return JSON.parse(item);
};
