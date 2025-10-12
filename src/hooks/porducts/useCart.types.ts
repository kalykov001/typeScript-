export interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeCart: (id: number) => void;
  clearCart: () => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  isLoading: boolean,
}

export interface CartItem {
  id?: number;
  name: string;
  price: number;
  description: string;
  mainImage: string;
  backImage: string;
  count: number;
}
