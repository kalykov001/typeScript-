import { useForm } from "react-hook-form";
import scss from "./admin.module.scss";
import { useProducts } from "../../../hooks/porducts/useProducts";
interface IData {
    name: string;
  mainImage: string;
  price: number;
  backImage: string;
  description: string;
  _id?: number | string;

}
const Admin = () => {
  const {handleSubmit, register , reset} = useForm<IData>()
  const {createProduct} = useProducts()
  const haldleData = (data:IData ) => {
    createProduct(data)
    reset()
  }
  return (
    <div className={scss.container}>
      <div className="container">
         <h1
          style={{
            textAlign: "center",
            fontSize: "40px",
            paddingBottom: "30px",
            letterSpacing: "2px",

          }}
        >
          ADMIN
        </h1> 
        <div className={scss.mainContainer}>
          <form onSubmit={handleSubmit(haldleData)} className={scss.adminInp}>
            <input {...register("mainImage")} type="text" placeholder="mainImage" />
            <input {...register("backImage")} type="text" placeholder="backImage" />
            <input {...register("name")} type="text" placeholder="Name" />
            <input {...register("price")} type="number" placeholder="Price" />
            <input {...register("description")} type="text" placeholder="Description" />
            <button type="submit">Add toClothes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
