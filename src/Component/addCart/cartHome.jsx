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
import { Button, Grid,Box } from "@mui/material";

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
        <Box className="main-section" sx={{display:{xs:"block",sm:"grid",md:"grid",xl:"grid"}}}>
          <div className="left-container">
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
              </Grid>
              </div>
              <div className="right-container">
            <CheckOutPage
              cart={cart}
              clearProducts={clearProducts}
              message={message}
            />
            </div>
          
        </Box>
      </div>
    </>
  );
};
export default CartHome;
