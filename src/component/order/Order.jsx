import { useFormik } from "formik"
import { useContext } from "react";

import { useParams } from "react-router-dom";
import * as Yup from "yup"
import { CartContext } from "../../Context/CartContext.js";

export default function Order() {

  let {id} = useParams()
  let{checkPayment} =useContext(CartContext)


  let s =Yup.object({
        
    street:Yup.string().required("street  required").min(3,"min length 7"),
    phone:Yup.string().required("phone  required").min(3,"min length 3").max(20,"max length 20").matches(/^01[1520][0-9]{8}$/,"enter valid phone"),
    city:Yup.string().required("detailcitys  required").min(3,"min length 7"),
    
    

  })




  let ShippingForm = useFormik({
    initialValues:{
      street: "",
      phone: "",
      city: ""
    },
    validationSchema:s,
    onSubmit:function(val){
      payChipping(val)
    }
})







  async function payChipping(val){

    let {data} =await  checkPayment(id,val)

    console.log(data);

    if(data.message == "success"){
      window.location.href = data.session.url
      
    }
  }

  return <>
    <div className="container">
      <div className="row py-5">


      <form onSubmit={ShippingForm.handleSubmit} action="">
      <div className="py-2">
      <label htmlFor="street">street</label>
      <input onChange={ShippingForm.handleChange} className="form-control" type="text" name="street" id="street"/>
      <p className="text-danger">{ShippingForm.errors.street}</p>
      </div>

      <div className="py-2">
      <label htmlFor="phone">phone</label>
      <input onChange={ShippingForm.handleChange} className="form-control" type="tel" name="phone" id="phone"/>
      <p className="text-danger">{ShippingForm.errors.phone}</p>

      </div>
    
      <div className="py-2">
      <label htmlFor="city">city</label>
      <input onChange={ShippingForm.handleChange} className="form-control" type="text" name="city" id="city"/>
      <p className="text-danger">{ShippingForm.errors.city}</p>

      </div>


    <button type="submit" className="btn btn-danger w-100 d-block my-3"><i className="fa-brands fa-cc-amazon-pay px-2"></i>  pay</button>

    </form>


      </div>
    </div>
  </>
}