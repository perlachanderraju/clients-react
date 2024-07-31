import React,{useState,useEffect} from 'react'

import axios from 'axios'

import { useParams } from 'react-router-dom'
import TopBar from './TopBar'

const ProductMenu = () => {
    const [productData,setProductdata]=useState([])
    const {firmId}=useParams()
    const ProductData = () => {
        axios
            .get(`https://backend-nodejs-suby.onrender.com/product/${firmId}/products`)
            .then((data) =>{
                setProductdata(data.data)
                console.log("product",data.data)
            } )
            .catch(error => console.log(error));
    };

    useEffect(()=>{
        ProductData()
    },[])
  return (
    <>
    <TopBar/>
    
    <div className='productSection'>
    <h3>{productData.restaurantName}</h3>
        {productData.products && productData.products.map((product)=>{
            return(
                <>
                <div className='productBox'>
                    <div>
                        <div> <strong>{product.productName}</strong></div>
                        <div>₹{product.price}</div>
                        <div>{product.description}</div>    
                    </div>
                    <div className='productImage'>
                        <img src={`https://backend-nodejs-suby.onrender.com/uploads/${product.image}`}/>
                        <div className='addbtn'>
                            ADD
                        </div>
                    </div>
                </div>
                </>
            )
        })}
    </div>
    </>
  )
}

export default ProductMenu