import { render } from "@testing-library/react";
import { addProduct, getPrice, removeProduct } from ".";
import { CartItem } from "../types";

describe("Utils module | Unit test", () => {
  const product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120
    }
  };

  it("Should return a formatted price string", () => {
    const value = 10.9;
    const price = "$10.90";

    const result = getPrice(value);

    expect(result).toBe(price);
  });

  it("Should add a new product to cart", () => {
    const item: CartItem = { ...product, rating: { ...product.rating }, quantity: 1 };
    const storage = [product];
    const cart = [] as CartItem[];

    const result = addProduct(1, storage, cart);

    expect(result).toEqual([item]);
  });

  it("Should increment cart item quantity", () => {
    const storage = [product];
    const cart = [{ ...product, rating: { ...product.rating }, quantity: 1 }];

    const result = addProduct(1, storage, cart);

    expect(result[0].quantity).toBe(2);
  });

  it("Should not add item to cart when the product is not found", () => {
    const storage = [product];
    const cart = [{ ...product, rating: { ...product.rating }, quantity: 1 }];

    const result = addProduct(2, storage, cart);

    expect(result).toEqual(cart);
  });

  it("Should remove product from cart", () => {
    const cart = [{ ...product, rating: { ...product.rating }, quantity: 1 }];

    const result = removeProduct(1, cart);

    expect(result).toHaveLength(0);
  });

  it("Should decrement cart item quantity", () => {
    const cart = [{ ...product, rating: { ...product.rating }, quantity: 2 }];

    const result = removeProduct(1, cart);

    expect(result[0].quantity).toBe(1);
  });

  it("Should not remove item from cart when the product is not found", () => {
    const cart = [{ ...product, rating: { ...product.rating }, quantity: 2 }];

    const result = removeProduct(2, cart);

    expect(result).toEqual(cart);
  });
});
