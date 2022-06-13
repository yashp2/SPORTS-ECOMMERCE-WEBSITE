import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav({toggle}) {
  return (
    <div className='transition all ease-in-out delay-150 text-white fixed top-0 right-0 w-[300px] h-screen bg-[#1A1919] flex items-center justify-center flex-col '>
           
           <Link to='/Signup'>           <button className=" my-5  cta bg-[#405DF8] text-[#fff] rounded-md px-10 hover:bg-black py-3 ">Sign Up</button>
</Link>

           <Link to='/Signin'>           <button className=" my-5  cta bg-[#405DF8] text-[#fff] rounded-md px-10 hover:bg-black py-3 ">Sign In</button>
</Link>
         
           <button onClick={toggle} className='bg-[#333333] w-7/12 rounded-md mt-10 hover:bg-black py-3' >Close </button>

    </div>
  )
}

export default Sidenav