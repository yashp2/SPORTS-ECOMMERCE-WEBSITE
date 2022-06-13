import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MainMenu from '../Store/MainMenu';
import data from './TennisData.json';
import {CartUpdateContext,WishListUpdateContext} from '../Context/CartContext';
function TennisDetail() {
// wish

let wishUpdate = useContext(WishListUpdateContext)

const CheckWish = (ele)=>{
  let result = wishUpdate(ele);
 if(result===false){
  alert('Already added this product !')
 }else{
   alert(' Added To WishList Succussfully !')
 } 
}

  let {id} = useParams();
const [CurrImg, setCurrImg] = useState(null);
const [views, setview] = useState([]);
const [isActive, setisActive] = useState(0);
const [MRP, setMRP] = useState(0);
const [size, setsize] = useState(0);
const [isAdded, setisAdded] = useState(false);
let product = data.filter((ele)=>{
  return ele.id===id;
},[0])
product = product[0];
let cartUpdate = useContext(CartUpdateContext)
const CheckCart = (ele)=>{
  let result = cartUpdate(ele);
 if(result===false){
  alert('Already added this product !')
 }else{
   setisAdded(true)
   alert('Product Added Succussfully !')
 }

}

useEffect(() => { 
setCurrImg(product.views[0])
console.log(product)
setview(product.views)
const rndInt = Math.floor(Math.random() * (1000)) + product.price
setMRP(rndInt)
}, []);



  return (
 <div className="detail w-full">
    <MainMenu></MainMenu>    
     <div className='grid md:grid-cols-1 grid-cols-2 w-full md:min-h-[auto] min-h-[90vh]'>
     <div className="col min-h-[90vh]  md:min-h-[auto]">
      <div className="grid w-full   md:flex md:flex-col md:flex-col-reverse grid-cols-[2fr_10fr]">
        <div className="views md:flex-row  flex flex-col items-center justify-center h-[90vh] md:h-[auto] md:my-[20px] ">
                  {
                     views.map((ele,index)=>
                     
                       isActive===index ?<img onClick={()=>{
                        setisActive(index)
                      }} key={index} className='my-2 md:mx-2 md:w-[100px] border-[#405df8]  border-4 w-10/12' src={ele}></img> 
                       :<img key={index} onClick={()=>{
                         setisActive(index)
                       }} className='my-2 md:mx-2 md:w-[100px] w-10/12' src={ele}></img>
                     
                     )                  
                  }
         </div>
        <div className="p-4 main-img  h-full md:h-auto ">
               <img src={views[isActive]}  alt="" />
        </div>
      </div>
     </div>
     
     <div className="text-left col min-h-[90vh] px-5 py-3  ">
        <p className='text-left font-medium opacity-50 mb-2'>FLX DECATHLON</p>
        <h1 className='text-left font-bold  text-2xl'>{product.name}</h1>
        
        <div className="flex md:grid md:grid-cols-2 items-center price border-t border-b  py-5 my-5">
          <div className="w-[max-content] px-10 py-3   cursor-pointer rounded-md text-white box text-xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500">
          ₹ {product.price}
          </div>
          <div className="w-[max-content] px-10 py-3   cursor-pointer rounded-md text-[#1b1b1b] box text-xl font-medium">
         MRP ₹ {MRP}
          </div>
          <p className='md:col-span-2 md:mt-4'>You can save <span className='font-bold'>₹ {MRP-product.price}</span> on this deal order now   !! </p>
        </div>

        <div className="store">
          <div className="flex w-8/12 md:w-full   items-center justify-between">
            
          <p className='font-medium md:text-sm text-[16px] opacity-50 align-center'><i className='align-top text-xl bx bxs-store-alt'></i> Available on stores </p>
         <button className='text-[#405df8] md:hidden font-bold  hover:underline'>Know More</button>
          </div>
          <div className="flex w-8/12 md:w-full  my-3 items-center justify-between">
            
          <p className='font-medium md:text-sm text-[16px] opacity-50 align-center'><i className='align-top text-xl bx bxs-credit-card'></i> EMI Available from {Math.round(product.price/4)} /- for 4 months  </p>
         <button className='text-[#405df8] md:hidden font-bold  hover:underline'>Know More</button>
          </div>
  
      </div>
      <div className="border-t border-b w-full md:grid-cols-2 gap-4 grid grid-cols-3 py-4">
       
       <div className="flex">
       <img className='max-w-[32px] h-[40px]' src="https://contents.mediadecathlon.com/s810456/k$3d1c34a67fc4a7d2659a8f40f2f68cb7/Warranty.png" alt="" />
        <div>
        <p className="font-bold text-[#405df8] text-[17px] px-4">2 Years</p>
        <p className="text-[#ed7825] font-medium px-4">Warranty</p>
        </div>
       </div>

       <div className="flex">
       <img className='max-w-[32px] h-[40px]' src="https://contents.mediadecathlon.com/s810453/k$b01109de2bacb669e5db58aefa3c6ee9/Free%20delivery.png" alt="" />
        <div>
        <p className="font-bold text-[#405df8] text-[17px] px-4">Above 1000</p>
        <p className="text-[#ed7825] font-medium px-4">Free Delivery</p>
        </div>
       </div>

       <div className="flex">
       <img className='max-w-[32px] h-[32px]' src="https://contents.mediadecathlon.com/s810455/k$5d275c8ba3f1f586032fc19f5bacf57f/90%20dats%20return.png" alt="" />
        <div>
        <p className="font-bold text-[#405df8] text-[17px] px-4">90 Days</p>
        <p className="text-[#ed7825] font-medium px-4">Return Policy</p>
        </div>
       </div>

      </div>
      
     <div className="my-3 made-for">
       <h1 className='font-bold my-2'>MADE FOR</h1>
       <p className='opacity-50'>Our {product.description}</p>
     </div>
     {
       product.size.length>0? <div className="size flex my-4">
       <h1 className='font-bold my-2'>SIZE -</h1>
       {
         product.size.map((ele,index)=>
          index===size ?   <button onClick={()=>{
            setsize(index)
          }} key={index} className="mx-2 text-[16px] uppercase  w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#405DF8] text-white font-bold">
          {ele}
        </button>: <button onClick={()=>{
          setsize(index)
        }} key={index} className="mx-2 text-[16px] uppercase font-medium w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#E5E5E5]">
           {ele}
         </button>
          )
       }
     </div>
    :null
     }
     <div className="cart grid md:grid-cols-1 grid-cols-2 gap-3">
     <button className ="cta flex justify-center items-center md:text-sm md:px-2  bg-[#405DF8] mt-2 w-full text-[#fff] rounded-md px-10 hover:bg-black py-3 font-semibold  text-md " onClick={()=>{
       CheckCart(product)
     }}>{isAdded?'Added To The Cart':'Add To Cart'} <i className='bx bxs-cart-alt text-xl mx-2 align-top'></i> </button>
     <button onClick={()=>{
       CheckWish(product)
     }} className ="cta flex justify-center items-center md:text-sm md:px-2  bg-[#F3F5FF] mt-2 w-full text-[#405DF8] rounded-md px-10 border-2 border-[#405DF8]  py-3 font-semibold text-md ">Add To Wishlist <i className='bx bx-bookmark-heart text-xl mx-2 align-top'></i> </button>
     </div>
     </div>
    </div>
 </div>
  )
}

export default TennisDetail