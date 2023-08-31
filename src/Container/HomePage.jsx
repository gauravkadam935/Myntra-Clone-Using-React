import React from "react";
import Pagination from "./Pagination/Pagination";
import CardItem from "../Component/Product/Cart";
import { Routes, Route } from "react-router-dom";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import NavBar1 from "../Component/Navbar/NavBar1";
import Loader from "./Loader/Loader";
import InfiniteScroll from "./Infinite_Scroll/InfiniteScroll";
// import ResponsiveAppBar from "./ProductPage/ProductPage";
// import Carousel from "../Component/Crousel/Crouasel";

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
  loggedOut,
  loader,
}) => {
  return (
    <>
      {loader && <Loader />}
      <div className="homepage">
        <NavBar1
          filterProducts={filterProducts}
          searchProduct={searchProduct}
          count={count}
          profilePhoto={profilePhoto}
          loggedOut={loggedOut}
          loggedin={loggedin}
        />
        {/* <InfiniteScroll/> */}
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
        {/* <Pagination onClick={handlePage} count={pageNumber} /> */}
      </div>
    </>
  );
};
export default Homepage;
