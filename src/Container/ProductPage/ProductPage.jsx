import React,{useEffect, useState} from 'react'
import "../../App.css"
import CardItem from '../../Component/Product/Cart'
import { useParams } from 'react-router-dom'

const ProductPage = ({isActive,loggedin,pageNumber,handlePage,newArray,handleClick,buyButton,setNewArray}) => {
    let {category} = useParams();
    const [categoryArray,setCategoryArray] = useState([]);
    console.log(category);
    useEffect(() => {
      fetch(`https://dummyjson.com/products/category/${category}`)
      .then((response)=>response.json())
      .then((data)=>setCategoryArray(data.products))
    },[category]);
    // setNewArray(api.filter((ele) => ele.category === category));
  return (
    <>
    <div className="cards-div">
    {isActive &&
            categoryArray.map((ele) => (
              <CardItem
                {...ele}
                key={ele.id}
                onClick={handleClick}
                buyButton={buyButton}
                loggedin={loggedin}
              />
            ))}
      </div>
    </>
  )
}

export default ProductPage