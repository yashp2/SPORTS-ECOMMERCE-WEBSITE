import React, { useContext, useState } from 'react'
import { useHistory } from "react-router-dom";
import Banner from './Banner';
import MainMenu from './MainMenu';
import cricketData from '../Cricket/CricketData.json';
import TennisData from '../Tennis/TennisData.json';
import BadmintonData from '../Badminton/BadmintonData.json';
import FootballData from '../Football/FootballData.json';
import { Link } from 'react-router-dom';

function Homepage() {
  let history = useHistory();  
 
  if(localStorage.getItem('email')==null && localStorage.getItem('password')==null){
             history.push('/Landingpage')
    } 
   
    function get4Elements(array){

      let newarray = array.filter((ele,index)=>{
        if(index<4){
          return ele;
        }
      })
      return newarray;
    }
    
    cricketData = get4Elements(cricketData)
    FootballData = get4Elements(FootballData)
    TennisData = get4Elements(TennisData)
    BadmintonData = get4Elements(BadmintonData)

    return (
    <div className='Homepage'>
    <MainMenu/>
    <Banner/>
 
    <div className="Trend w-10/12 mx-auto mt-[5vh]">
      <h3 className='text-black opacity-50 font-semibold text-left text-xl'>Cricket</h3>
      <h1 className='text-left font-bold text-3xl'>Fever</h1>
    </div>
    
    <div className="grid gap-3 md:grid-cols-2 sm:grid-cols-1 min-h-[50vh] my-[5vh] w-10/12 mx-auto grid-cols-4">
    {
               cricketData.map((ele,index)=><Link key={index} to={`/${ele.id}`}>
               
               <div className=" h-[max-content] w-full card p-[12px] rounded-md">
                    <img className='rounded-md  w-full' src={ele.thumbnail} alt="" />
                    <h2 className='font-semibold text-left md:text-sm text-[16px]  mt-[12px]'>{ele.name.length>30?ele.name.slice(0,30).concat('...'):ele.name}</h2>
                    <h4 className='text-left font-semibold opacity-50 mb-2  capitalize'>{ele.category}</h4>
                     <div className="grid gap-3 w-full my-2 grid-cols-[4fr_8fr]">
                        <div className='flex items-center'>
                        <h1 className='text-left  font-semibold text-xl'>₹ {ele.price} </h1>
                        </div>
                         <div>
                         <button className ="lg:text-sm   px-2 cta md:text-sm md:px-2 bg-[#405DF8] w-full text-[#fff] rounded-md  hover:bg-black py-2 font-semibold text-[16px] ">View Product <i className='bx bxs-right-arrow-alt text-xl align-middle'></i> </button>

                         </div>
                     </div>
                  </div>
               
               </Link>)
           }



    </div>   


    <div className="Trend w-10/12 mx-auto mt-[5vh]">
      <h3 className='text-black opacity-50 font-semibold text-left text-xl'>Football</h3>
      <h1 className='text-left font-bold text-3xl'>Freaks</h1>
    </div>
    
    <div className="grid gap-3 md:grid-cols-2 sm:grid-cols-1 min-h-[50vh] my-[5vh] w-10/12 mx-auto grid-cols-4">
    {
               FootballData.map((ele,index)=><Link key={index} to={`/Football/${ele.id}`}>
               
               <div className=" h-[max-content] w-full card p-[12px] rounded-md">
                    <img className='rounded-md  w-full' src={ele.thumbnail} alt="" />
                    <h2 className='font-semibold text-left md:text-sm text-[16px]  mt-[12px]'>{ele.name.length>30?ele.name.slice(0,30).concat('...'):ele.name}</h2>
                    <h4 className='text-left font-semibold opacity-50 mb-2  capitalize'>{ele.category}</h4>
                     <div className="grid gap-3 w-full my-2 grid-cols-[4fr_8fr]">
                        <div className='flex items-center'>
                        <h1 className='text-left  font-semibold text-xl'>₹ {ele.price} </h1>
                        </div>
                         <div>
                         <button className ="lg:text-sm   px-2 cta md:text-sm md:px-2 bg-[#405DF8] w-full text-[#fff] rounded-md  hover:bg-black py-2 font-semibold text-[16px] ">View Product <i className='bx bxs-right-arrow-alt text-xl align-middle'></i> </button>
                  </div>
                     </div>
                  </div>
               
               </Link>)
           }



    </div>   



    <div className="Trend w-10/12 mx-auto mt-[5vh]">
      <h3 className='text-black opacity-50 font-semibold text-left text-xl'>Tennis</h3>
      <h1 className='text-left font-bold text-3xl'>Freaks</h1>
    </div>
    
    <div className="grid gap-3 md:grid-cols-2 sm:grid-cols-1 min-h-[50vh] my-[5vh] w-10/12 mx-auto grid-cols-4">
    {
               TennisData.map((ele,index)=><Link key={index} to={`/Tennis/${ele.id}`}>
               
               <div className=" h-[max-content] w-full card p-[12px] rounded-md">
                    <img className='rounded-md  w-full' src={ele.thumbnail} alt="" />
                    <h2 className='font-semibold text-left md:text-sm text-[16px]  mt-[12px]'>{ele.name.length>30?ele.name.slice(0,30).concat('...'):ele.name}</h2>
                    <h4 className='text-left font-semibold opacity-50 mb-2  capitalize'>{ele.category}</h4>
                     <div className="grid gap-3 w-full my-2 grid-cols-[4fr_8fr]">
                        <div className='flex items-center'>
                        <h1 className='text-left  font-semibold text-xl'>₹ {ele.price} </h1>
                        </div>
                         <div>
                         <button className ="lg:text-sm   px-2 cta md:text-sm md:px-2 bg-[#405DF8] w-full text-[#fff] rounded-md  hover:bg-black py-2 font-semibold text-[16px] ">View Product <i className='bx bxs-right-arrow-alt text-xl align-middle'></i> </button>
                  </div>
                     </div>
                  </div>
               
               </Link>)
           }



    </div>   




    <div className="Trend w-10/12 mx-auto mt-[5vh]">
      <h3 className='text-black opacity-50 font-semibold text-left text-xl'>Badminton</h3>
      <h1 className='text-left font-bold text-3xl'>Freaks</h1>
    </div>
    
    <div className="grid gap-3 md:grid-cols-2 sm:grid-cols-1 min-h-[50vh] my-[5vh] w-10/12 mx-auto grid-cols-4">
    {
               BadmintonData.map((ele,index)=><Link key={index} to={`/Badminton/${ele.id}`}>
               
               <div className=" h-[max-content] w-full card p-[12px] rounded-md">
                    <img className='rounded-md  w-full' src={ele.thumbnail} alt="" />
                    <h2 className='font-semibold text-left md:text-sm text-[16px]  mt-[12px]'>{ele.name.length>30?ele.name.slice(0,30).concat('...'):ele.name}</h2>
                    <h4 className='text-left font-semibold opacity-50 mb-2  capitalize'>{ele.category}</h4>
                     <div className="grid gap-3 w-full my-2 grid-cols-[4fr_8fr]">
                        <div className='flex items-center'>
                        <h1 className='text-left  font-semibold text-xl'>₹ {ele.price} </h1>
                        </div>
                         <div>
                         <button className ="lg:text-sm   px-2 cta md:text-sm md:px-2 bg-[#405DF8] w-full text-[#fff] rounded-md  hover:bg-black py-2 font-semibold text-[16px] ">View Product <i className='bx bxs-right-arrow-alt text-xl align-middle'></i> </button>
                  </div>
                     </div>
                  </div>
               
               </Link>)
           }



    </div>   
    </div>
  )
}

export default Homepage