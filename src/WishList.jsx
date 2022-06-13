import React, { useContext, useEffect } from 'react'
import MainMenu from './Store/MainMenu'
import {WishListDeleteContext,WishListContext} from './Context/CartContext';
import { Link } from 'react-router-dom';
function WishList() {
  let wishlist = useContext(WishListContext)
  let removeElement = useContext(WishListDeleteContext)
  useEffect(() => {
    console.log(wishlist)
  }, [removeElement,wishlist]);
  return (
    <div>
      <MainMenu/>
     <div className="w-10/12 mx-auto">
     <h1 className='text-2xl font-bold my-5 text-left'>Wishlist</h1>
     <div className="grid w-full grid-cols-4 gap-5 md:grid-cols-2 sm:grid-cols-1">
      
          {
            wishlist.map((ele)=>   
               <Link to={ele.sports==='cricket'?`/${ele.id}`:`${ele.sports}/${ele.id}`}>
                           <div className=" h-[max-content] w-full card p-[12px] rounded-md">
                 <img className='rounded-md  w-full' src={ele.thumbnail} alt="" />
                 <h2 className='font-semibold text-left text-sm  mt-[12px]'>{ele.name.length>30?ele.name.slice(0,30).concat('...'):ele.name}</h2>
                 <h4 className='text-left font-semibold opacity-50 mb-2  capitalize'>{ele.category}</h4>
                  <div className="grid w-full my-2 grid-cols-[4fr_8fr]">
                     <div className='flex items-center'>
                     <h1 className='text-left  font-semibold text-xl'>₹ {ele.price} </h1>
                     </div>
                      <div>
                      <button className ="lg:text-sm px-2 cta md:text-sm md:px-2 bg-[#405DF8] w-full text-[#fff] rounded-md  hover:bg-black py-2 font-semibold text-[16px] ">View Product <i className='bx bxs-right-arrow-alt text-xl align-middle'></i> </button>
                      </div>
                  </div>
               </div>

               </Link>         
         )
        }
      
     </div>
     </div>
    </div>
  )
}

export default WishList