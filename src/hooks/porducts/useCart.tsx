import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCart = create()(
  persist(
    (set) => ({
      cart: [],
      isLoading: false,

      addToCart: (item) => {
        set((state) => {
          const existing = state.cart.find((el) => el._id === item._id);
          if (existing) {
            return {
              cart: state.cart.map((el) =>
                el._id === item._id
                  ? {
                      ...el,
                      count: el.count + 1,
                      supPrice: +el.supPrice + +el.price,
                    }
                  : el
              ),
            };
          } else {
            return {
              cart: [
                ...state.cart,
                { ...item, count: 1, supPrice: +item.price },
              ],
            };
          }
        });
      },

      removeCart: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item._id !== id),
        }));
      },

      clearCart: () => {
        set({ cart: [] });
      },

      increment: (id) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item._id === id
              ? {
                  ...item,
                  count: item.count + 1,
                  supPrice: +item.supPrice + +item.price,
                }
              : item
          ),
        }));
      },

      decrement: (id) => {
        set((state) => ({
          cart: state.cart.map((item) => {
            if (item._id === id && item.count > 1) {
              return {
                ...item,
                count: item.count - 1,
                supPrice: item.supPrice - item.price,
              };
            }
            return item;
          }),
        }));
      },
    }),
    {
      name: "cart",
    }
  )
);
