import React, { useState } from 'react'
import logo from '../assets/logo.svg';
import {Link} from "react-router-dom";
import Sidenav from './SideNav';
function Header() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = ()=>{
    setisOpen(!isOpen);
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-white p-2 ">
        <div className="container w-10/12 h-[10vh] flex items-center  m-auto justify-between">
              <img src={logo} alt="logo" className='w-[150px]' />
           <Link to="/SignUp">
           <button className="md:hidden cta bg-[#405DF8] text-[#fff] rounded-md px-10 hover:bg-black py-3">Get Started</button>
         
           </Link>
           <button onClick={toggle} className='menu hidden md:block'><i className='text-2xl bx bx-menu'></i></button>

        </div>

        {
          isOpen?<Sidenav toggle={toggle} />:null
        }
    </div>
  )
}

export default Header