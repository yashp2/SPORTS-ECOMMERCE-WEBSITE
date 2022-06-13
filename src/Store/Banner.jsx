import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

function Banner() {
  return (
       <div className="Banner">
             <Carousel>

      
             <div className='mt-[0] w-full h-[70vh] md:h-[50vh] bg-fixed img'>
<div className=" text-white mx-auto container w-full h-full light-black">
    <div className="grid grid-cols-2 md:grid-cols-1 container h-full  mx-auto w-10/12 ">
        <div className="col h-full flex flex-col items-start justify-center">
         <h1 className='text-6xl md:text-4xl text-left font-serif font-bold'>Play Badminton Anywhere</h1>
         <Link to='/Badminton' className='bg-black px-12 py-4 rounded-md mt-10'> Explore Products </Link>
        </div>
        <div className="col flex items-center md:hidden  justify-center">
              <div className="img-1 bg-black mx-auto w-9/12 h-[70%]">

              </div>
        </div>
    </div>
</div>
</div>

<div className='mt-[0] w-full h-[70vh] md:h-[50vh] bg-fixed tennis'>
<div className=" text-white mx-auto container w-full h-full light-black">
    <div className="grid grid-cols-2 md:grid-cols-1 container h-full  mx-auto w-10/12 ">
        <div className="col h-full flex flex-col items-start justify-center">

         <h1 className='text-6xl md:text-4xl text-left font-serif font-bold'>Get All Tennis Gears Exclusively !</h1>
         <Link to='/Tennis' className='bg-black px-12 py-4 rounded-md mt-10'> Explore Products </Link>
        </div>
        <div className="col flex items-center md:hidden center  justify-center">
        <div className="img-2 bg-black mx-auto w-9/12 h-[70%]">

        </div>

        </div>
    </div>
</div>
</div>
<div className='mt-[0] w-full h-[70vh] md:h-[50vh] bg-fixed cricket'>
<div className=" text-white mx-auto container w-full h-full light-black">
    <div className="grid grid-cols-2 md:grid-cols-1 container h-full  mx-auto w-10/12 ">
        <div className="col h-full flex flex-col items-start justify-center">
         <h1 className='text-6xl md:text-4xl text-left font-serif font-bold'>Get Your Cricket Kit Right Now !!</h1>
         <Link to='/Cricket' className='bg-black px-12 py-4 rounded-md mt-10'> Explore Products </Link>
        </div>
        <div className="col flex items-center md:hidden center  justify-center">
        <div className="img-3 bg-black mx-auto w-9/12 h-[70%]"> </div> 
        </div>
    </div>
</div>
</div>

<div className='mt-[0] w-full h-[70vh] md:h-[50vh] bg-fixed football'>
<div className=" text-white mx-auto container w-full h-full light-black">
    <div className="grid grid-cols-2 md:grid-cols-1 container h-full  mx-auto w-10/12 ">
        <div className="col h-full flex flex-col items-start justify-center">
         <h1 className='text-6xl md:text-4xl text-left font-serif font-bold'>Kick Off With Football Gears  !!</h1>
         <Link to='/Football' className='bg-black px-12 py-4 rounded-md mt-10'> Explore Products </Link>
        </div>
        <div className="col flex items-center md:hidden center  justify-center">
        <div className="img-4 bg-black mx-auto w-9/12 h-[70%]"> </div> 

        </div>
    </div>
</div>
</div>
            </Carousel>
       
       </div>
    )
}

export default Banner