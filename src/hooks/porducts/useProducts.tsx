import { create } from "zustand";
import type { IproductState } from "./useProducts.types";
import axios from "axios";
import { API } from "../../constants/api";
export const useProducts = create<IproductState>((set) => ({
  products: [],
  oneProduct: null,
  isLoading: false,
  isPosting: false,
  createProduct: async (newProduct) => {
    set({ isPosting: true });
    try {
      const response = await axios.post(API, newProduct);
      set((state) => ({
        products: [...state.products, response.data],
      }));
      set({ isLoading: false });
    } catch (error: any) {
      console.log(error.message);
    }
  },
  readProduct: async () => {
    try {
      const { data } = await axios.get(API);
      set({ products: data.data });
    } catch (error: any) {
      console.log(error.message);
    }
  },
  deleteProduct: async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      set((state) => ({
        products: [...state.products.filter((item) => item._id !== id)],
      }));
    } catch (error: any) {
      console.log(error.message);
    }
  },
  readOneProduct: async (id) => { 
    try {
      const { data } = await axios.get(`${API}/${id}`);
      set({ oneProduct: {...data , count: 1} });
    } catch (error: any) {
      console.log(error.message);
      
    }
  },
  editProduct: async (id, editedPoduct) => {
    const response = await  axios.patch(`${API}/${id}` , editedPoduct)
    set((state) => ({
      products:  state.products.map((item) => item._id === id ? response.data : item),
        }))
  },
    inrement: async(id)  => {},
  decrement: async (idr)  => {},
}));
