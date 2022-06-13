import React, { useState } from 'react';
import logo from '../assets/whitelogo.svg';
import { Link } from 'react-router-dom'
import Sidenav from './Sidenav';
function MainMenu() {
   const [isOpen, setisOpen] = useState(false);

   const toggle = ()=>{
       setisOpen(!isOpen)
   }
    return (
    <div className='w-full bg-[#405DF8] mx-auto px-3    '>
       <div className="container md:w-full w-10/12  text-white h-[10vh]  mx-auto flex items-center justify-between ">
             <div className="col-1 flex">
                 
<Link to='/Homepage'>       <img src={logo} className='w-[150px]' alt="" />
</Link>
             </div>
    
            <div className="sports md:hidden">
            <Link className='text-[18px] hover:text-black text-[#F9F9F9] hover:underline mx-3' to="/Badminton">Badminton</Link>
            <Link className='text-[18px] hover:text-black text-[#F9F9F9] hover:underline mx-3' to="/Football">Football</Link>
            <Link className='text-[18px] hover:text-black text-[#F9F9F9] hover:underline mx-3' to="/Cricket">Cricket</Link>
            <Link className='text-[18px] hover:text-black text-[#F9F9F9] hover:underline mx-3' to="/Tennis">Tennis</Link>
            </div>
            <div className="cart">
          <Link to='/Wishlist'>
          <button className='text-2xl mx-2 hover:text-black'> <i className='bx bx-bookmark-heart'></i></button>
          </Link>
          <Link to='/Cart'>
          <button className='text-2xl mx-2 hover:text-black'> <i className='bx bxs-cart-alt'></i></button>
          </Link>
            <button className='text-2xl mx-2 hover:text-black hidden md:inline' onClick={toggle}> <i className='bx bx-menu-alt-right'></i></button>
           
            </div>
    
       </div>
   {
       isOpen?      <Sidenav toggle={toggle}></Sidenav>:null
   }
    </div>
  )
}



export default MainMenu