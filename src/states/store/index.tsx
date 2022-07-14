import { createContext, useState } from "react";
import { CartItem, Product, WithChildren } from "../../common/types";
import { addProduct, removeProduct } from "../../common/utils";

type Store = {
  storage: Product[];
  cart: CartItem[];
  fillStorage: (products: Product[]) => void;
  clearStorage: () => void;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const StoreContext = createContext<Store>({
  storage: [],
  cart: [],
  fillStorage: () => null,
  clearStorage: () => null,
  addToCart: () => null,
  removeFromCart: () => null
});

const StoreProvider = ({ children }: WithChildren) => {
  const [storage, setStorage] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const fillStorage = (products: Product[]) => setStorage(products);

  const clearStorage = () => setStorage([]);

  const addToCart = (id: number) => setCart((items) => addProduct(id, storage, items));

  const removeFromCart = (id: number) => setCart((items) => removeProduct(id, items));

  return (
    <StoreContext.Provider
      value={{
        cart,
        storage,
        fillStorage,
        clearStorage,
        addToCart,
        removeFromCart
      }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
