
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext.js";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { WishList } from "../../Context/wishListContext.js";

export default function ForYou() {
  let {prosuctFor,addToCart,setCartCount} = useContext(CartContext)
  let {addProductToWishList} = useContext(WishList);
  console.log(prosuctFor);


  async function addProductToCart (id){
    let response = await  addToCart(id)
    console.log(response);
    if (response.data.message === 'success')
    {
     setCartCount(response.data.NumberOfCart)
      toast.success('product added successfully')
    }
    else
    {
      toast.error("This didn't work.")
    }
    }


    async function addProductWishList (id){
      let {data} = await addProductToWishList(id)
      // console.log(data);
  
      if(data.message==='success'){
        toast.success('product added to wishList successfully')
      }else{
        toast.error("This didn't work.")
      }
    }


  return <>
  <div className='container py-2'>
 <div className="row">

 <div>
              <h2 className="make-squre h3 fw-bolder text-main d-flex">
                 Product For You
              </h2>
              <h3 className="h2 text-black fw-bold">Explore Our Products</h3>
            </div>




            {prosuctFor?.map((product) => {
              return (
                <div key={product._id} className="col-md-3">
                 
                    <div className="product py-2 px-3 cursor-pointer">
                    <Link to={`/productDetailes/${product._id}`}>
                      <img
                        src={product.imgCover}
                        className="w-100"
                        alt={product.title}
                        height={180}
                      />
                      <p className="text-main font-sm fw-bolder">
                        {product.slug}
                      </p>
                      <h3 className="h6">
                        {product.title.split(" ").slice(0, 2).join(" ")}
                        {/* split to convert into array ,slice to cut The first two words ,join to conver into staing agian */}
                      </h3>
                      <div className="d-flex justify-content-between mt-3">
                        <span>{product.price}EGP</span>
                        <span>
                          {product.rateAvg}
                          <i className="fa-solid fa-star rating-color"></i>
                        </span>
                      </div>
                      </Link>

                      <div onClick={()=>{
                        addProductWishList(product._id)
                        
                      }} class="con-like me-auto">
  <input class="like" type="checkbox" title="Add TO WishList"/>
  <div class="checkmark">
    <svg xmlns="http://www.w3.org/2000/svg" class="outline" viewBox="0 0 24 24">
      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="filled" viewBox="0 0 24 24">
      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="celebrate">
      <polygon class="poly" points="10,10 20,20"></polygon>
      <polygon class="poly" points="10,50 20,50"></polygon>
      <polygon class="poly" points="20,80 30,70"></polygon>
      <polygon class="poly" points="90,10 80,20"></polygon>
      <polygon class="poly" points="90,50 80,50"></polygon>
      <polygon class="poly" points="80,80 70,70"></polygon>
    </svg>
  </div>
                          </div>


                      <button onClick={()=>addProductToCart(product._id)} className="btn bg-main text-white w-100 btn-sm mt-2">
                        Add to cart
                      </button>
                    </div>
                   
                  
                </div>
              );
            })}



 </div>
  </div>


             
  </>
}
