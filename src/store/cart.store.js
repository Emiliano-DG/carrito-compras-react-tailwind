import { create } from "zustand";
import data from "../../data.json";

export const useCartStore = create((set, get) => ({
  isClose: true,
  cart: [],
  products: data,

  toggleClose: () =>
    set((state) => ({
      isClose: !state.isClose,
    })),

  resetCart: () =>
    set(() => ({
      cart: [],
    })),

  addItemToCard: (newItem) =>
    set((state) => ({
      cart: [...state.cart, newItem],
    })),

  updateItemCart: (updateItem) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.name === updateItem.name ? { ...updateItem } : item
      ),
    })),

  deleteItemCart: (name) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.name != name),
    })),

  totalCard: () =>
    get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0),

  totalQuantityCard: () =>
    get().cart.reduce((acc, item) => acc + item.quantity, 0),
}));
