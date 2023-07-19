import React from "react";
import Navbar from "../Component/Navbar/NavBar";
import Pagination from "./Pagination/Pagination";
import CardItem from "../Component/Product/Cart";
import { Routes, Route } from "react-router-dom";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const Homepage = ({
  filterProducts,
  searchProduct,
  count,
  isActive,
  newArray,
  handleClick,
  handlePage,
  pageNumber,
  buyButton,
  loggedin,
  profilePhoto,
}) => {
  return (
    <>
      <div className="homepage">
        <Navbar
          filterProducts={filterProducts}
          searchProduct={searchProduct}
          count={count}
          profilePhoto={profilePhoto}
        />

        {/* <Carousel/> */}
        <div className="cards-div">
          {isActive &&
            newArray.map((ele) => (
              <CardItem
                {...ele}
                key={ele.id}
                onClick={handleClick}
                buyButton={buyButton}
                loggedin={loggedin}
              />
            ))}
        </div>
        <Pagination onClick={handlePage} count={pageNumber} />
      </div>
    </>
  );
};
export default Homepage;
