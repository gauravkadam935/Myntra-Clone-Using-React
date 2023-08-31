import React from "react";
import { NavLink } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CheckOutPage = ({ cart, count , clearProducts  }) => {
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.count,
    0
  );
  const additionalCharges = totalPrice + 10;
  const handleClick = () => {};

  const clear = ()=>{
    clearProducts();
  }
  return (
    <>
      <div className="checkoutpage-div">
        
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h4" fontWeight="700" component="div">
              Check-Out
            </Typography>
            <Typography variant="body2" sx={{fontWeight:"800",marginBottom:"10"}} color="text.secondary">
            <div>SubTotal</div>
            <div style={{fontWeight:"600"}}>${totalPrice}</div>
            </Typography>
            <Typography variant="body2" sx={{fontWeight:"800",marginBottom:"10"}} color="text.secondary">
            <div>Estimated Dilivery Charges</div>
                    <div style={{fontWeight:"600"}}>$10</div>
            </Typography>
            <Typography variant="body2" sx={{fontWeight:"800",marginBottom:"10"}} color="text.secondary">
            <div className="total">Total:${additionalCharges}</div>
            </Typography>
            <Typography variant="body2" sx={{fontWeight:"800",marginBottom:"10"}} color="text.secondary">
            <div className="checkbox-div">
                    
                <span style={{fontWeight:"600"}}>I have read and accept the terms and conditions</span>
                </div>
            </Typography>
          </CardContent>
          <CardActions>
           { cart?.length>0 ?<NavLink to="/payment">
            <Button variant="contained" sx={{bgcolor:"#F31559",mr:"2"}} id="pay-button" onClick={handleClick}>CheckOut</Button>
          </NavLink>:<Button variant="contained" sx={{bgcolor:"#F31559",mr:"2"}} id="pay-button" disabled>Select Product Item First</Button>}
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default CheckOutPage;
