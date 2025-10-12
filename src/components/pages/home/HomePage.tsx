import { useNavigate } from "react-router-dom";
import scss from "./homePage.module.scss";
import { useEffect, useState } from "react";
import { useProducts } from "../../../hooks/porducts/useProducts";
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { readProduct, products, deleteProduct } = useProducts();
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      await readProduct();
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  const navigate = useNavigate();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  return (
    <section className={scss.container}>
      <div className="container">
        <div  className={scss.mainContainer}>
          {isLoading ? (
            <Skeleton 
            
              width={270}
              height={260}
              count={10}
              borderRadius={20}
              baseColor="#e0e0e0" 
              highlightColor="#f5f5f5"
            />
          ) : (
            products?.map((item, idx) => (
              <div  key={item._id} className={scss.cardClothes}>
                <img
                  onMouseEnter={() => setHoverIndex(idx)}
                  onMouseLeave={() => setHoverIndex(null)}
                  onClick={() => navigate(`/about/${item._id}`)}
                  src={hoverIndex === idx ? item.backImage : item.mainImage}
                  alt=""
                />
                <h3>{item.name}</h3>
                <h2>${item.price} CAD</h2>
                <div className={scss.btns}>
                  <button onClick={() => deleteProduct(item._id)}>
                    <MdOutlineDeleteForever />
                  </button>
                  <button onClick={() => navigate(`/edit/${item._id}`)}>
                    <CiEdit />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
