import { useNavigate, useParams } from "react-router-dom";
import scss from "./aboutPage.module.scss";
import { IoMdClose } from "react-icons/io";
import { useProducts } from "../../../hooks/porducts/useProducts";
import { useEffect, useState } from "react";
import { useCart } from "../../../hooks/porducts/useCart";
const AboutPage = () => {
  const { readOneProduct, oneProduct } = useProducts();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { addToCart } = useCart();
  const { id } = useParams();
  useEffect(() => {
    readOneProduct(id);
  }, [id]);
  const navigate = useNavigate();
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.images}>
            <img
              onClick={() => navigate(`/onlyClothes/${oneProduct?._id}`)}
              className={scss.mainImage}
              src={oneProduct?.mainImage}
              alt=""
            />
            <img
              onClick={() => navigate(`/onlyClothes/${oneProduct?._id}`)}
              className={scss.miniImage}
              src={oneProduct?.backImage}
              alt=""
            />
          </div>
          <div className={scss.title}>
            {modalOpen && (
              <div className={scss.modal}>
                <div className={scss.open}>
                  <h6>✓ Item added to your cart</h6>
                  <span onClick={() => setModalOpen(false)}>
                    <IoMdClose />
                  </span>
                </div>
                <div className={scss.modalImg}>
                  <img
                    src={oneProduct?.mainImage}
                    alt=""
                  />
                  <h5>{oneProduct?.name}</h5>
                </div>
                <div className={scss.btnP}>
                  <button onClick={() => navigate("/cart")}>
                    View my cart
                  </button>
                  <button>Check out</button>
                  <p>continue shoping</p>
                </div>
              </div>
            )}
            <h1>{oneProduct?.name}</h1>
            <h3>${oneProduct?.price} CAD</h3>
            <h5>Quantity</h5>
            <div className={scss.counted}>
              <button>-</button>
              <h6>{oneProduct?.count}</h6>
              <button>+</button>
            </div>
            <button
              onClick={() => {
                addToCart(oneProduct);
                setModalOpen(true);
              }}
            >
              Add to cart
            </button>
            <button>Buy it now</button>
            <p>
              This is a demonstration store. You can purchase products like this
              from <a href="https://dictionary.cambridge.org/">Coursework</a>.
            </p>
            <p>{oneProduct?.description} </p>
            <ul className={scss.ulTeg}>
              <li>Made in the USA</li>
              <li>
                Genuine wool broadcloth, white felt "Coursework C" icon with
                combined embroidery
              </li>
              <li>Soft visor with green satin under visor</li>
              <li>Vintage hair cloth backed buckram crown</li>
              <li>Satin taping with cotton sweatband</li>
              <li>Black leather strap and black metal press closure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
