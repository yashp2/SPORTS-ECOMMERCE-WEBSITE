import React from 'react'
import Header from './Header'
import Heroimg from '../assets/HeroImage.svg';
import HRX from '../assets/hrx.svg';
import Nike from '../assets/Nike.svg';
import Puma from '../assets/Puma.svg';
import New_Balance from '../assets/New_Balance.svg';
import yonex from '../assets/yonex.svg';
import adidas from '../assets/adidas.svg';
import { Link } from 'react-router-dom';
function LandingPage() {
  return (
    <div className='Landing-Page'>
     <Header />
      <div className=" w-10/12 md:py-[10vh] md:grid-cols-1 m-auto grid grid-cols-3 gap-4  hero mt-[10vh]">
            <div className="col1 flex flex-col justify-center items-start h-[90vh] md:h-[auto] md:my-[5vh]">
              <p className='text-[#405DF8]'><i className='bx bxs-rocket'></i> Fast Shipping all over india</p>
              <h1 className='font-bold text-6xl text-left font-serif'>Win with the best sports gear</h1>
              <p className='text-left text-xl opacity-50 my-5 text-'>We've tied up with the best sports brand all over india to give you high quality & premium sports gear</p>
               <Link to='/Signup'>
               <button className ="cta bg-[#405DF8] w-full text-[#fff] rounded-md px-10 hover:bg-black py-3">Get Started</button>

               </Link>
            </div>
            <div className="col2 flex justify-center h-[90vh] items-center md:h-[auto] md:my-[5vh]">
            <img src={Heroimg} alt="" />  
            </div>   
            <div className="col3 px-5 md:px-2  flex justify-center flex-col h-[90vh] md:h-[auto] md:my-[5vh]  items-start">
              <h1 className='text-6xl font-serif font-bold'>100k +</h1>
              <p className='opacity-50 text-xl '> Daily products sold on our website</p>
              <div className="flex text-white card bg-[#1A1919] rounded-md p-4 my-5">
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a1a5ba116194407.605ccd8b1071c.png" alt="" className='w-[90px] h-[90px] rounded-full ' />
             <div className="txt px-2  mx-2">
               <h2 className='text-left font-bold font-serif my-1 text-2xl'>Air Jordan 14 </h2>
               <p className='text-left opacity-70 text-md'>The Air Jordan XXXVI isn't just the next shoe up franchise</p>
              </div>
              </div>
              </div>  
      </div>


      <div className="md:grid  md:grid-cols-2 md:gap-4 md:flex-col brand-partner items-center justify-between flex w-10/12 min-h-[10vh]  m-auto flex ">
        <h1 className='text-2xl text-left text-[#405DF8] font-semibold'>Our Partners </h1>
        <div></div>
        <img alt="brand" src={HRX}/>
        <img alt="brand" src={New_Balance}/>
        <img alt="brand" src={Puma}/>
        <img alt="brand" src={Nike}/>
        <img alt="brand" src={yonex}/>
        <img alt="brand" src={adidas}/>

      </div>
 

    </div>
  )
}

export default LandingPage