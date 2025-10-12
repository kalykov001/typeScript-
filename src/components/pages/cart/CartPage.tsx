import { NavLink, useNavigate } from "react-router-dom";
import scss from "./cartPage.module.scss";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCart } from "../../../hooks/porducts/useCart";

const CartPage = () => {
  const { cart, removeCart, increment, decrement } = useCart();
  const subtotal = cart.reduce((acc, item) => acc += +item.supPrice, 0);
  const navigate = useNavigate();
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          {cart.length >= 1 && (
            <div className={scss.cartTop}>
              <h2>Your cart</h2>
              <NavLink to="/">
                <p> Continue shopping</p>
              </NavLink>
            </div>
          )}
          {cart.length >= 1 && (
            <div className={scss.typeClothes}>
              <h6>PRODUCT</h6>
              <h6 className={scss.quantity}>QUANTITY</h6>
              <h6>TOTAL</h6>
            </div>
          )}
          <div className={scss.blockCart}>
            {cart.length ? (
              cart.map((item, idx) => (
                <div key={item._id} className={scss.cartClothes}>
                  <div className={scss.cartImage}>
                    <img src={item.mainImage} alt="" />
                    <div className={scss.cartNamePr}>
                      <h4>{item.name}</h4>
                      <h4>${item.price}</h4>
                    </div>
                  </div>
                  <div className={scss.cartCount}>
                    <div className={scss.counted}>
                      <button onClick={() => decrement(item._id)}>-</button>
                      <h6>{item.count}</h6>
                      <button onClick={() => increment(item._id)}>+</button>
                    </div>
                    <span onClick={() => removeCart(item._id)}>
                      <RiDeleteBin6Line />
                    </span>
                  </div>
                  <h3>${item.supPrice}</h3>
                </div>
              ))
            ) : (
              <div className={scss.error}>
                <h1>Your cart is empty</h1>
                <button onClick={() => navigate("/")}>Continue shopping</button>
              </div>
            )}
          </div>
        </div>
        {cart.length >= 1 && (
          <div className={scss.buyGoods}>
            <h4>
              Subtotal <span>${+subtotal} CAD</span>
            </h4>
            <p>Taxes and shipping calculated at checkout</p>
            <button onClick={() => navigate("/contact ")}>Check out</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
