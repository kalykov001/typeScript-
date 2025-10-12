import { useEffect } from "react";
import { useProducts } from "../../../hooks/porducts/useProducts";
import scss from "./clothes.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../layout/footer/Footer";
const Clothes = () => {
const {readOneProduct , oneProduct} = useProducts()
const navigate = useNavigate()
const {id} = useParams()
useEffect(() => {
  readOneProduct(id)
},[id])
  return (
    <div className={scss.container}>
      <div className="container">
        <span onClick={() => navigate(`/about/${oneProduct?._id}`)} className={scss.exit}>x</span>
        <div className={scss.mainContainer}>
          <img src={oneProduct?.mainImage} alt="" />
          <img src={oneProduct?.backImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Clothes;
