import React, { useContext, useEffect, useState } from 'react'
import MainMenu from './Store/MainMenu';
import {CartContext,CartEmptyContext} from './Context/CartContext'
import MasterCard from './assets/mastercard.svg'
import paypal from './assets/paypal.svg'
import visa from './assets/visa.svg'
import OrderConfirm from './OrderConfirm';

function Address() {
  let Empty = useContext(CartEmptyContext)
  let bag = useContext(CartContext) 
  const [total, settotal] = useState(0);
  let options= [visa,paypal,MasterCard]
  const [Value, setValue] = useState(0);
  
  const [isOpen, setisOpen] = useState(false);




 const CalcBill = ()=>{
     let sum = 0 ;     
    bag.forEach((ele)=>{
        sum +=ele.price;
    }) 
    settotal(sum)
 }

 useEffect(() => {
  CalcBill()
 }, [bag])
 

  const [details, setdetails] = useState({
    fname:"",
    email:"",
    mobile:"",
    address:"",
    state:"",
    city:"",
    zip:"",
}
);

const [card, setcard] = useState({
 name:"",
 cnumber:"",
 expiration:"",
 cvv:""
}
);

function validCard(){
  let  result = true;
  for (const ele in card) {
     if(card[ele]===""){
         result=false;
         break;
       }
  }
  return result;
}
  function CheckCard(){
      if(!validCard()){
        alert('Please Enter All Details of Card !')
      }else if(!validCheck()){
         alert('Please Enter All Details of Address')
      }else{
         Empty()
        setisOpen(true)
      }
  }


 
 function validCheck(){
    let result=true;
   for (const ele in details) {
      if(details[ele]===""){
          result=false;
          break;
        }
  
   }
   return result;
  }

  function CheckAddress(){
    if(!validCheck()){
      alert('Please Enter All Address Details')
         return false;
    }
    return true;
  }


  return (
 <div>
   <MainMenu></MainMenu>
   <div className='w-10/12 md:w-full md:grid-cols-1 mx-auto grid grid-cols-[7fr_5fr]'>
   
   <div className="col-1 md:w-full min-h-screen py-5 px-2 md:min-h-[auto] md:px-10">
    <h1 className='text-2xl text-left pb-5 font-semibold'>Shopping Cart</h1>
    <h2 className='opacity-20 text-xl text-left font-medium'>Billing Details</h2>
    <div className="grid grid-cols-2  gap-1 ">
    
    <div className="input mt-[12px] md:col-span-2">
<p className='text-left text-[16px] mb-2'>Enter You Name</p>
<input onChange={(ev)=>{
setdetails(values => ({...values, fname: ev.target.value}))
}} type="name" name="name"  className="mt-1 px-3 py-4  border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="John Doe" />   
</div>            
<div className="input mt-[12px] md:col-span-2">
<p className='text-left text-[16px] mb-2'>Enter You Email ID</p>
<input onChange={(ev)=>{
setdetails(values => ({...values, email: ev.target.value}))
}} type="email" name="email"  className="mt-1 px-3 py-4  border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="JohnDoe@mail.com" />   
</div>            

<div className="input mt-[12px] col-span-2">
<p className='text-left text-[16px] mb-2'>Enter You Mobile Number</p>
<input onChange={(ev)=>{
setdetails(values => ({...values, mobile: ev.target.value}))
}}  type="tel" name="tel"  className="mt-1 px-3 py-4  border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="+91 91746 28282" />   
</div>            

    </div>


    <h2 className='opacity-20 text-xl text-left font-medium mt-[3vh]'>Address Details</h2>
    <div className="grid grid-cols-2 gap-2">
    
    <div className="input md:col-span-2 mt-[12px]">
    <p className='text-left text-[16px] mb-2'>Enter Your Address</p>
<textarea
onChange={(ev)=>{
setdetails(values => ({...values, address: ev.target.value}))
}} 
class="
form-control
block
w-full
px-3
py-1.5
text-base
font-normal
text-gray-700
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
id="exampleFormControlTextarea1"
rows="1"
placeholder="124 , ABC Street "
></textarea>
 </div>            
<div className="input mt-[12px]">
<p className='text-left text-[16px] mb-2'>Enter Your State</p>
<input type="name" name="name"  onChange={(ev)=>{
setdetails(values => ({...values, state: ev.target.value}))
}}  className="mt-1 px-3 py-4  border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Maharashtra" />   
</div>            

<div className="input mt-[12px] ">
<p className='text-left text-[16px] mb-2'>Enter Your City</p>
<input type="name" name="name" onChange={(ev)=>{
setdetails(values => ({...values, city: ev.target.value}))
}}  className="mt-1 px-3 py-4  border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Pune" />   
</div>            

<div className="input mt-[12px] md:col-span-2 ">
<p className='text-left text-[16px] mb-2'>Enter Your Zip Code</p>
<input type="name" name="name" onChange={(ev)=>{
setdetails(values => ({...values, zip: ev.target.value}))
}}   className="mt-1 px-3 py-4  border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="411041" />   
</div>            
<button  onClick={()=>{
CheckAddress()
}}  className="w-full col-span-2 mt-4 cta bg-[#405DF8] text-[#fff] rounded-md px-10 hover:bg-black py-3 text-[18px] "> Save My Details <i class='mx-2 bx bxs-save text-xl align-top'></i> </button>

    </div>


</div>

<div className="col-1 md:w-full  min-h-screen py-5 px-2 md:min-h-[auto] md:px-10">

<div className="w-10/12 ml-auto  md:w-full bg-white p-10 md:p-5 rounded-lg">
<h1 className='text-2xl text-left pb-5 font-semibold'>Payment Details</h1>

            <div className="border-t border-b py-4 my-2  w-full grid grid-cols-[5fr_7fr]">
            <h1 className='text-left font-semibold opacity-60 text-md'>Total Bill</h1>
            <h1 className='text-right opacity-50 '> - ₹ {total+99+150}</h1>
 
 
            </div>
            <h1 className='mt-4 text-left font-semibold text-[16px] uppercase'>Payment Information  </h1>
         <div className="flex w-full justify-between my-3">
           {
             options.map((ele , index)=>(
               index===Value?
               <div className='border px-3 bg-[#f2f2ff] border-[#405DF8] py-1'>
                 <img src={ele} alt="" />
                </div>:
               <div className=' px-3 bg-[#f2f2ff]  py-1'>
                 <img src={ele} alt="" onClick={()=>{
                   setValue(index)
                 }} />
                </div>
             ))
           }

         </div>

         <div className="grid grid-cols-2 gap-1 w-full">
         <div className="input mt-[12px] col-span-2">
<p className='text-left text-[16px] mb-2'>Enter Name On Card </p>
<input  onChange={(ev)=>{
setcard(values => ({...values, name: ev.target.value}))
}} type="text" name="card"  className="mt-1 px-3 py-2  border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="John Doe" />   
</div>      

<div className="input mt-[12px] col-span-2">
<p className='text-left text-[16px] mb-2'>Enter Card Number </p>
<input  onChange={(ev)=>{
setcard(values => ({...values, cnumber: ev.target.value}))
}} type="text" name="card"  className="mt-1 px-3 py-2  border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="917 462 282 4282" />   
</div>      

<div className="input mt-[12px] ">
<p className='text-left text-[16px] mb-2'>Expiration </p>
<input onChange={(ev)=>{
setcard(values => ({...values, expiration: ev.target.value}))
}}  type="text" name="card"  className="mt-1 px-3 py-2  border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="12/24" />   
</div>      

<div className="input mt-[12px] ">
<p className='text-left text-[16px] mb-2'>CVV </p>
<input onChange={(ev)=>{
setcard(values => ({...values, cvv: ev.target.value}))
}} type="password" name="card"  className="mt-1 px-3 py-2  border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="* * *" />   
</div>   
         </div>

         <button onClick={()=>{
        CheckCard()
         }} className="w-full col-span-2 mt-4 md:text-[15px] md:px-0 cta bg-[#405DF8] text-[#fff] rounded-md px-10 hover:bg-black py-3 text-[18px] "> Confirm Payment Of  <span className='font-bold'>₹ {total+99+150}</span> </button>

</div>

</div>

    </div>
{
  isOpen===true ? <OrderConfirm/>:null
}
 </div>
    )
}

export default Address;