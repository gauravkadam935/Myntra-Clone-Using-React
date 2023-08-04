import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Pagination from "./Container/Pagination/Pagination";
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import Homepage from "./Container/HomePage";
import CartHome from "./Component/addCart/cartHome";
import AddCart from "./Component/addCart/AddCart";
import PaymentForm from "./Container/Payment/PaymentForm";
import Login from "./Component/Login/Login";

function App() {
  const CART_KEY = "cartkey";
  const LOGIN_KEY = "loginkey";
  const LOGINPASSWORD = "passwordkey";
  localStorage.setItem(LOGIN_KEY, "admin");
  localStorage.setItem(LOGINPASSWORD, "12345");

  const INITIALCART_ITEMS = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  const [api, setApi] = useState([]);
  const [newArray, setNewArray] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [cart, setCart] = useState(INITIALCART_ITEMS);
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const cartItems = cart.reduce((items, currItem) => items + currItem.count, 0);
  const [loggedin, setLoggedin] = useState(false);
  const [loader,setLoader] = useState(false);

  const fetchApi = () => {
    setLoader(true);
    fetch(
      `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=${pageNumber}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setApi(data);
        setNewArray(data);
      });
      setLoader(false);
    setIsActive(true);
    // fetch(`https://dummyjson.com/products?limit=100`).then((res)=>res.json()).then(data=>console.log(data));
  };

  useEffect(() => {
    fetchApi();
  }, [pageNumber]);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  useEffect(()=>{
    if(!loggedin){
      setProfilePhoto((preValue)=>"");
    }
  },[loggedin])

  // filter Products by category
  const filterProducts = (category) => {
    setNewArray(api.filter((ele) => ele.category === category));
  };
  // search product
  const searchProduct = (value) => {
    console.log(value);
    const updatedArray = api.filter((ele) =>
      ele.title.toLowerCase().includes(value.toLowerCase())
    );
    setNewArray(updatedArray);
  };
  // addcart
  const handleClick = (id) => {
    setCount((ele) => ele + 1);
    const index = cart.findIndex((ele) => ele.id === id);
    if (index === -1) {
      const product = api.find((ele) => ele.id === id);
      setCart((oldProducts) => [...oldProducts, { ...product, count: 1 }]);
      return;
    }
    const newProduct = cart.map((ele) =>
      ele.id === id ? { ...ele, count: ele.count + 1 } : ele
    );
    setCart(newProduct);
  };
  const buyButton = (id) => {
    const index = cart.findIndex((ele) => ele.id === id);
    if (index === -1) {
      const product = api.find((ele) => ele.id === id);
      setCart((oldProducts) => [...oldProducts, { ...product, count: 1 }]);
      return;
    }
    const newProduct = cart.map((ele) => (ele.id === id ? { ...ele } : ele));
    setCart(newProduct);
  };

  const deleteItem = (id) => {
    const items = cart.filter((ele) => ele.id !== id);
    setCart(items);
  };
  const buyItem = (id) => {
    const updatedCart = cart.filter((ele) => ele.id !== id);
    setCart(updatedCart);
  };
  const increaseProduct=((id)=>{
    
    const increseItem = cart.map((ele)=>ele.id == id ? {...ele,count:ele.count+1} : ele)
    setCart(increseItem);
  })
  const decreaseProduct=((id)=>{
    
    const decreseItem = cart.map((ele)=>ele.id == id ? {...ele,count:ele.count-1} : ele)
    setCart(decreseItem);
  })
  const handlePage = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  const mylocations = useLocation();
  const[profilePhoto,setProfilePhoto] = useState("");
  console.log(mylocations);
  useEffect(()=>{
    if(mylocations.state){
      setProfilePhoto(mylocations.state.profilePhoto);
    }
  },[mylocations.state]);
const [message,setMessage]=useState(false);
  const clearProducts=()=>{
    setCart([]);
    setMessage(true);
  }

  const loggedOut =()=>{
    setLoggedin(false);
  }
  return (
    <>
    
      <div className="main">
          <Routes>
            <Route
              path="login"
              element={<Login setLoggedin={setLoggedin} />}
            ></Route>
            <Route
              path="/"
              element={
                <Homepage
                  filterProducts={filterProducts}
                  searchProduct={searchProduct}
                  count={cartItems}
                  isActive={isActive}
                  handlePage={handlePage}
                  newArray={newArray}
                  pageNumber={pageNumber}
                  handleClick={handleClick}
                  buyButton={buyButton}
                  loggedin={loggedin}
                  profilePhoto={profilePhoto}
                  loggedOut={loggedOut}
                  loader={loader}
                />
              }
            ></Route>
            <Route
              path="addcart"
              element={
                <CartHome
                  deleteItem={deleteItem}
                  cart={cart}
                  buyItem={buyItem}
                  filterProducts={filterProducts}
                  searchProduct={searchProduct}
                  count={cartItems}
                  profilePhoto={profilePhoto}
                  increaseProduct={increaseProduct}
                  decreaseProduct={decreaseProduct}
                  clearProducts={clearProducts}
                  message={message}
                  loggedOut={loggedOut}
                  loggedin={loggedin}
                />
              }
            ></Route>
            <Route
              path="payment"
              element={
                <div className="payment">
                  <PaymentForm setCart={setCart} />
                </div>
              }
            ></Route>
          </Routes>
      </div>
    </>
  );
}
export default App;
// LOGIN_KEY={LOGIN_KEY} LOGINPASSWORD={LOGINPASSWORD}
