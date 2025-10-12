import { useForm } from "react-hook-form";
import { useProducts } from "../../../hooks/porducts/useProducts";
import scss from "./editPage.module.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const EditPage = () => {
  const { oneProduct , readOneProduct , editProduct} = useProducts();
  const [ mainImage, setMainImage ] = useState("");
  const [ backImage, setBackImage] = useState("");
  const [ name, setName ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ description, setDescription ] = useState("");
  const navigate = useNavigate()
  const {id} = useParams()
  useEffect(() => {
readOneProduct(id)
  },[id])
useEffect(() => {
  if(oneProduct) {
    setMainImage(oneProduct.mainImage || "")
    setBackImage(oneProduct.mainImage || "")
    setName(oneProduct.name || "")
    setPrice(oneProduct.price || "")
    setDescription(oneProduct.description || "")

  }
} , [oneProduct])  
const handleSave = () => {
editProduct(id,{
mainImage: mainImage,
backImage: backImage,
name: name,
price: price,
description: description
})
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
            color: "rgba(0, 0, 0, 0.73)",
          }}
        >
          CHANGE DATA
        </h1>
        <div className={scss.mainContainer}>
          <div className={scss.adminInp}>
            <input value={mainImage}
              onChange={(e) => setMainImage(e.target.value)}
              type="text"
              placeholder="mainImage"
            />
            <input value={backImage}
              onChange={(e) => setBackImage(e.target.value)}
              type="text"
              placeholder="backImage"
            />
            <input value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
            />
            <input value={[price]}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              placeholder="Price"
            />
            <input value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder="Description"
            />
            <button onClick={handleSave}>Add toClothes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
