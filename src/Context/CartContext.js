import axios from "axios";
import { createContext, useEffect, useState } from "react";
export let CartContext = createContext();

export default function CartContextProvider(props){
    let [cartCount,setCartCount] = useState(0)

    let [prosuctFor,setprosuctFor]=useState([])

    let baseUrl = `https://final-pro-api-j1v7.onrender.com`
    let userToken = localStorage.getItem('token')
    let headers = {
        token:userToken
    }

    async function getLoggedUserCart (){
        try {
            const response = await axios.get(`${baseUrl}/api/v1/cart`, { headers });
            return response;
        } catch (error) {
            return error;
        }
        
     }


     async function addToCart (productId){
        console.log(productId);
        try {
             const response = await axios.post(`${baseUrl}/api/v1/cart`,
                 {
                     product: productId
                 },
                 {
                     headers
                 }
             );
             return response;
         } catch (error) {
             return error;
         }
     
     }

     async function removeCartItem (productId){
         try {
             const response = await axios.delete(`${baseUrl}/api/v1/cart/${productId}`, { headers });
             return response;
         } catch (error) {
             return error;
         }
     }
     
     async function updateProductCount (id,count){
         try {
             const response = await axios.put(`${baseUrl}/api/v1/cart/${id}`,
                 {
                     quantity: count
                 },
                 { headers });
             return response;
         } catch (error) {
             return error;
         }
     
     }

     async function deleteCart (){
         try {
             const response = await axios.delete(`${baseUrl}//api/v1/cart`, { headers });
             return response;
         } catch (error) {
             return error;
         }
     }





     async function ForYouProduct (product){

        setprosuctFor(product)
        console.log("product",product);

     }




     useEffect(()=>{
        async function getdata(){
             let  {data} = await getLoggedUserCart()
             if(data?.message=='success'){
                setCartCount(data.cartItems);
             }else if(data?.message=='fail'){
                setCartCount(0);
             }
         }
         getdata()
     },[])




     function checkPayment(id,shippingData){

        let body ={
            shippingAddress:shippingData
        }

        return axios.post(`${baseUrl}/api/v1/order/ChickOut/${id}`,body,{
            headers
        })
    }


    return <CartContext.Provider value={{prosuctFor,ForYouProduct,checkPayment,setCartCount,cartCount,addToCart,getLoggedUserCart,removeCartItem,updateProductCount,deleteCart}}>
        {props.children}
    </CartContext.Provider>

}  