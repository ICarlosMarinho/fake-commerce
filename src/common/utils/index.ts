import { CartItem, Product } from "../types";

export const getPrice = (value: number) =>
  value.toLocaleString("en-us", { style: "currency", currency: "USD" });

export const addProduct = (id: number, storage: Product[], cart: CartItem[]) => {
  const item = cart.find((item) => item.id === id);

  if (item) {
    const updated: CartItem = { ...item, quantity: item.quantity + 1, rating: { ...item.rating } };

    return cart.map((item) => (item.id === updated.id ? updated : item));
  } else {
    const product = storage.find((product) => product.id === id);

    if (!product) return cart;

    return [...cart, { ...product, quantity: 1, rating: { ...product.rating } }];
  }
};

export const removeProduct = (id: number, cart: CartItem[]) => {
  const item = cart.find((item) => item.id === id);

  if (!item) return cart;

  const updated: CartItem = { ...item, quantity: item.quantity - 1, rating: { ...item.rating } };

  if (!updated.quantity) {
    return cart.filter((item) => item.id !== id);
  } else {
    return cart.map((item) => (item.id === id ? updated : item));
  }
};
