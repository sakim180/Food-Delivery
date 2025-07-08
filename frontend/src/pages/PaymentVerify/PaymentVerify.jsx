import './paymentVerify.css'
import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContex';
import axios from 'axios';

export const PaymentVerify = () => {
    const [searchParams,setSerchParams]=useSearchParams();
    const {url}=useContext(StoreContext);
    const navigate=useNavigate();
    const success=searchParams.get("success")
        const orderId=searchParams.get("orderId")
       
        const verifyPayment=async()=>{
            const response= await axios.post(url+"/api/order/verify",{success,orderId})
            console.log(response)
            if(response.data.success){
             navigate("/myorders")

            }
            else{
                navigate("/")
            }
        }

        useEffect(()=>{
            verifyPayment()
        },[])
  return (
    <div class='verify'>
        <div class='spinner'></div>
    </div>
  )
}
export default PaymentVerify