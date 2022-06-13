import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import {CartDeleteContext, CartContext} from './Context/CartContext';
import MainMenu from './Store/MainMenu';

function Cart() {
 let deleteProduct = useContext(CartDeleteContext)
 let bag = useContext(CartContext) 
  const [total, settotal] = useState(0);
 const CalcBill = ()=>{
     let sum = 0 ;     
    bag.forEach((ele)=>{
        sum +=ele.price;
    }) 
    settotal(sum)
 }
 
useEffect(() => {
    CalcBill()
}, [bag]);

let history = useHistory()
function Check(){
  
    history.push('/Address')
}
   return (
    <div>
  <MainMenu/>
  {
      total!=0? <div className="md:flex  md:flex-col md:flex-col-reverse grid md:w-full w-10/12 grid-cols-[7fr_5fr] md:grid-cols-1 mx-auto">
      <div className="col-1  my-5 min-h-screen py-5 px-5  md:min-h-[auto]">
           <div className="md:w-full w-12/12 rounded-lg p-5 bg-white mx-auto">
           <h1 className='text-2xl  text-left pb-5 font-semibold'>Order Summary</h1>
      
            <div className="grid-cols-2 md:grid-cols-1 grid gap-2 w-full">
            {
            bag.map((ele,index)=>
               <div key={index} className='w-full my-5 grid grid-cols-[3fr_9fr]' >
                   <div className="col-1">
                       <img src={ele.thumbnail}  alt="" />
                   </div>
                   <div className="col-1 flex flex-col justify-between text-left px-2">
                   <h2 className='md:text-sm font-semibold text-left text-[14px] md:text-[16px]  uppercase'>{ele.name.length>35?ele.name.slice(0,35).concat('..'):ele.name}</h2>
                   <div className="flex items-center justify-between w-full ">
                   <h4 className='text-left text-[14px] font-semibold opacity-70  uppercase'>Price - ₹ {ele.price}</h4>
                   <button onClick={()=>{
       deleteProduct(ele.id)
    }} className ="lg:text-sm   w-6/12 py-2 mx-2 text-[#FF0000] rounded-md    font-semibold text-[15px] px-2 max-w-[36px] h-[36px] flex items-center justify-center rounded-full cta md:text-sm md:px-2 bg-[#FFF3F3]  hover:bg-[#FF0000] hover:text-[#FFF3F3]  "><i class='bx bxs-trash text-[18px]'></i></button>
                   </div>        
                    </div>
               </div>    
           )
       }
            </div>

           </div>
      </div>
   <div className=" w-full">
        <div className="min-h-[50vh] md:w-full bg-white bill w-8/12 ml-auto p-5 mt-10">
        <h1 className='text-2xl  text-left pb-5 font-semibold '>Final Bill</h1>
            <div className="border-t border-b py-4 my-2  w-full grid grid-cols-[5fr_7fr]">
            <h1 className='text-left font-semibold opacity-60 text-md'>Total Bill</h1>
            <h1 className='text-right opacity-50  mb-3'> - ₹ {total}</h1>
 
            <h1 className='text-left font-semibold opacity-60 text-md'>Shipping Charges</h1>
            <h1 className='text-right opacity-50  mb-3'> - ₹ 199</h1>
 
            <h1 className='text-left font-semibold opacity-60 text-md'>GST</h1>
            <h1 className='text-right opacity-50  '> - ₹ 101 </h1>
 
 
 
            </div>
            <div className="flex justify-between w-full">
            <h1 className='text-left font-semibold text-[18px]'>Grand Total  </h1>
            <h1 className='text-right opacity-50 text-[18px] '> - ₹ {total+199+101} </h1>
        
            </div>
            <button onClick={()=>{
Check()
}} className="w-full col-span-2 mt-4 cta bg-[#405DF8] text-[#fff] rounded-md px-10 hover:bg-black py-2 text-[16px] "> Place My Order <i class='bx bxs-gift mx-2 align-middle text-xl'></i> </button>

         </div>
  
    </div>
  </div>
:<div className='w-full h-[90vh] flex items-center justify-center'>
    <div className="w-4/12 md:w-10/12 flex items-center flex-col">
        
     <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-4816550-4004141.png" alt="" />
     <h1 className='text-center font-semibold text-[18px]'>Hey , The Cart Seems Empty !!  </h1>
     <p>There is nothing in your cart let's add something</p>
    </div>
  </div>  
  }
    </div>
  )
}

export default Cart