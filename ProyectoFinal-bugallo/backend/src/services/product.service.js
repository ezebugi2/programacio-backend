const products = [
  { id: 1, name: "papas", price: 1000 },
  { id: 2, name: "queso", price: 500 },
  { id: 3, name: "hamburguesa", price: 1500 },
  { id: 4, name: "soda", price: 1000 },
  { id: 5, name: "golosinas", price: 800 },
];

export function find(id) {
  const selectedProduct = products.find((product) => product.id === id);
  if (!selectedProduct) throw new Error("Producto no encontrado");
  return selectedProduct;
}
