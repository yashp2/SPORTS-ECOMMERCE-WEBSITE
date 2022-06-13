import React, { useState } from 'react'
import MainMenu from '../Store/MainMenu'
import product from './FootballData.json';
import FFilter from './FFilter';
import { Link } from 'react-router-dom';

function Football() {
    const [data, setdata] = useState(product);
    const [open, setopen] = useState(false);
    
    const toggle = ()=>{
      setopen(!open)
    }
  return (
    <>
       <MainMenu />
        <div className="w-full h-auto bg-[#0a67fd]">
        <div className="football-bg w-12/12 mx-auto md:h-[20vh] h-[50vh]"></div>

        </div>
        <div className="md:flex px-10 justify-between items-center w-[100%] sticky top-0 bg-[#f9faff]  z-40 min-h-[10vh]  hidden">
          <button onClick={()=>{
            toggle()
          }} className="border py-2 items-center w-4/12  flex justify-around font-semibold px-2 z-40">
            Filter <i className='bx bx-filter text-xl align-center'></i>
          </button>
           </div>
           {
             open ?
             <FFilter setdata={setdata} toggle={toggle} /> :null              
             
           }        
       <div className="grid  grid-cols-[2fr_10fr] md:grid-cols-1 mt-[10vh] md:mt-0 w-10/12 mx-auto ">
           <div className="filter md:hidden">
             <FFilter setdata={setdata} toggle={toggle} />               
           </div>
           <div className="p-container md:grid-cols-2 sm:grid-cols-1 w-full min-h-screen grid grid-cols-3 gap-5">
           {
               data.map((ele)=><Link to={`/Football/${ele.id}`}>
               
               <div className=" h-[max-content] w-full card p-[12px] rounded-md">
                    <img className='rounded-md  w-full' src={ele.thumbnail} alt="" />
                    <h2 className='font-semibold text-left text-sm mt-[12px]'>{ele.name.length>40?ele.name.slice(0,38).concat('...'):ele.name}</h2>
                    <h4 className='text-left font-semibold opacity-50 mb-2  capitalize'>{ele.category}</h4>
                     <div className="grid w-full my-2 grid-cols-[4fr_8fr]">
                        <div className='flex items-center'>
                        <h1 className='text-left  font-semibold text-xl'>₹ {ele.price} </h1>
                        </div>
                         <div>
                         <button className ="lg:text-sm px-2 cta md:text-sm md:px-2 bg-[#405DF8] w-full text-[#fff] rounded-md px-10 hover:bg-black py-2 font-semibold text-[16px] ">View Product <i className='bx bxs-right-arrow-alt text-xl align-middle'></i> </button>
                         </div>
                     </div>
                  </div>
               
               </Link>)
           }

         </div>
       </div>

    </>
  )
}

export default Football