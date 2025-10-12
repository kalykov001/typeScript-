export interface IproductState {
  products: Iproduct[];
  oneProduct: Iproduct | null;
  createProduct: (newProduct: Iproduct) => Promise<void>;
  readProduct: () => Promise<void>
  deleteProduct: (id: number) => Promise<void>  
  readOneProduct: (id: number) => Promise<void>
  editProduct: (id : number, editedProduct: Partial<Iproduct>) => Promise<void>
  isPosting: boolean
  isLoading: boolean
  inrement: (id: number)  => Promise<void>
  decrement: (id: number)  => Promise<void>
}
export interface Iproduct {
  name: string;
  mainImage: string;
  price: number;
  backImage: string;
  description: string;
  _id?: number | string;
  count:number
}

