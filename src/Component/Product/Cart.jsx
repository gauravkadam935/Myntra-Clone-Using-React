import React, { useState } from "react";
import App from "../../App.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";
const CardItem = (props) => {
  const {
    title,
    id,
    price,
    thumbnail,
    rating,
    rate,
    category,
    onClick,
    buyButton,
    loggedin,
  } = props;
  const handleClick = () => {
    if(!loggedin){
      return; 
    }
    onClick(id);
  };
  const handleClick2 = () => {
    if(!loggedin){
      return; 
    }
    buyButton(id);
  };
  return (
    <>
      <div className="card-div" key={id} style={{marginBottom:"20px"}}>
    
        <Card sx={{
    width: 280,
    margin: "0 auto",
    padding: "0.1em",
  }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={thumbnail}
        sx={{objectFit: "contain" }}
      />
          <CardContent>
            <Typography gutterBottom  sx={{width:150,}} noWrap >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            ₹{price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            ⭐{rating}
            </Typography>
          </CardContent>
          <CardActions>
            <NavLink to={loggedin ? "addcart" : "login"}>
              <Button size="small" onClick={handleClick2} sx={{bgcolor:'#F31559',color:'whitesmoke',":hover":{bgcolor:"#F31559"}}}>
                Buy
              </Button>
            </NavLink>
            <NavLink to={loggedin ? "/" : "login"}>
              <Button size="small" onClick={handleClick}>
                Add to Cart
              </Button>
            </NavLink>
          </CardActions>
        </Card>
      </div>
    </>
  );
};
export default CardItem;
