import React from 'react'
import { Link } from 'react-router-dom'
import check from './assets/complete.svg'
function OrderConfirm() {
  return (
    <div className='fixed w-full flex justify-center items-center h-screen bg-white top-0 light-black'>
         
         <div className="flex flex-col  card w-[350px] p-5 min-h-[250px] justify-center items-center rounded-lg bg-white">
              <img src={check} className="w-6/12 " alt="check" />
            <h1 className="font-semibold mt-2 text-[18px] text-[#405DF8] ">
              We've Confirmed Your Order !!
            </h1>
            <p className='opacity-50'>Continue Shopping With Us</p>

             <Link to='/Homepage' className='w-full py-2'>
             <button className ="md:w-10/12 md:mx-auto md:px-5 cta flex justify-center items-center md:text-sm md:px-2  bg-[#405DF8] mt-2 w-full text-[#fff] rounded-md px-10 hover:bg-black py-3 font-semibold  text-md ">Continue Shopping </button>
            </Link>
         </div>

    </div>
  )
}

export default OrderConfirm