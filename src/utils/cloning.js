export const cloning = (data, product, operator) => {
  const newProducts = JSON.parse(JSON.stringify(data));
  let index = newProducts.products.findIndex(x => x.product.id == product.id);
  newProducts.products[index].quantity =
    operator == "add"
      ? newProducts.products[index].quantity + 1
      : newProducts.products[index].quantity - 1;

  return newProducts;
};
