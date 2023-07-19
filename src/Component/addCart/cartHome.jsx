import React from "react";
import AddCart from "./AddCart";
import Navbar from "../Navbar/NavBar2";
import CheckOutPage from "./billing";
import "./cartHome.css";

const CartHome = ({
  deleteItem,
  cart,
  buyItem,
  filterProducts,
  searchProduct,
  count,
  profilePhoto,
  increaseProduct,
  decreaseProduct
}) => {
  return (
    <>
      <div className="carthome">
        <Navbar count={count} profilePhoto={profilePhoto} />
        <section className="main-section">
          <div className="addcart-div">
            {cart.length > 0 &&
              cart.map((ele) => (
                <AddCart
                  {...ele}
                  key={ele.id}
                  onClick={deleteItem}
                  buyItem={buyItem}
                  increaseProduct={increaseProduct}
                  decreaseProduct={decreaseProduct}
                />
              ))}
          </div>
          <CheckOutPage cart={cart} />
        </section>
      </div>
    </>
  );
};
export default CartHome;
