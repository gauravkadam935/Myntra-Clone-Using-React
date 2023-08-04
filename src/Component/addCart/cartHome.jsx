import React from "react";
import AddCart from "./AddCart";
import Navbar from "../Navbar/NavBar2";
import CheckOutPage from "./billing";
import "./cartHome.css";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Button, Grid } from "@mui/material";

const CartHome = ({
  deleteItem,
  cart,
  buyItem,
  filterProducts,
  searchProduct,
  count,
  profilePhoto,
  increaseProduct,
  decreaseProduct,
  clearProducts,
  message,
  loggedOut,
  loggedin,
}) => {
  return (
    <>
      <div className="carthome">
        {message && (
          <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Your Cart is Empty"}
            </DialogTitle>
            <DialogActions>
              <Button autoFocus>Done</Button>
            </DialogActions>
          </Dialog>
        )}
        <Navbar
          count={count}
          profilePhoto={profilePhoto}
          loggedOut={loggedOut}
          loggedin={loggedin}
        />
        <section className="main-section">
          <Grid>
            {cart.length > 0 &&
              cart.map((ele) => (
                <AddCart
                  {...ele}
                  key={ele.id}
                  onClick={deleteItem}
                  buyItem={buyItem}
                  increaseProduct={increaseProduct}
                  decreaseProduct={decreaseProduct}
                  message={message}
                />
              ))}
            <CheckOutPage
              cart={cart}
              clearProducts={clearProducts}
              message={message}
            />
          </Grid>
        </section>
      </div>
    </>
  );
};
export default CartHome;
