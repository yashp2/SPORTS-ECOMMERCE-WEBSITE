import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav({toggle}) {
  return (
    <div className='transition z-50 all ease-in-out delay-150 text-white fixed top-0 right-0 w-[300px] h-screen bg-[#1A1919] flex items-center justify-center flex-col '>
            <Link className='text-[18px] text-[#F9F9F9] hover:underline my-3' to="/Badminton">Badminton</Link>
            <Link className='text-[18px] text-[#F9F9F9] hover:underline my-3' to="/Football">Football</Link>
            <Link className='text-[18px] text-[#F9F9F9] hover:underline my-3' to="/Cricket">Cricket</Link>
            <Link className='text-[18px] text-[#F9F9F9] hover:underline my-3' to="/Tennis">Tennis</Link>
            <button onClick={toggle} className='bg-[#333333] w-7/12 rounded-md mt-10 hover:bg-black py-3' >Close </button>

    </div>
  )
}

export default Sidenav