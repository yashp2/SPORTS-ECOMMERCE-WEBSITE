import React, { useState } from 'react'
import data from './FootballData.json'
function FFilter({setdata,toggle}) {
  const [FootballCategory, setFootballCategory] = useState([
    {
      name:'jersey',
      isactive:false,
    },
    {
      name:'football',
      isactive:false,
    },
    {
      name:'shorts',
      isactive:false,
    },
    {
      name:'shoes',
      isactive:false,
    }
  
  ]);


  const ChangeCategory=(name)=>{
     let array = FootballCategory.filter((ele)=>{
       
      if(ele.name===name){
         ele.isactive=!ele.isactive;
       }
       return ele;
     })      
     setFootballCategory(array)
     let products = data.filter((element)=>{
       if(FootballCategory.some(ele=>ele.name==element.category && ele.isactive)){
         return element;
       }
     })
     if(products.length<1){
       setdata(data)
     }else{
      setdata(products)
     }
    }
  return (
    <div className='w-full text-left py-5 z-40 flex flex-col md:justify-center align-center sticky top-0 md:px-5  min-h-[100vh] md:min-h-[autoa] bg-[#f9faff]'>
<div>
<h1 className='font-bold text-xl mb-5'>CATEGORY </h1>
    {
      FootballCategory.map((ele)=>
      <div className='my-2 flex w-full items-center pr-5 justify-between'>
        <h1 className='font-semibold uppercase'>{ele.name}</h1>
        <input type="checkbox" className="w-[25px] checked:bg-blue-500 " checked={ele.isactive} onChange={()=>{
          ChangeCategory(ele.name)
        }} />
      </div>
      )
    }

</div>


<div>
<h1 className='font-bold text-xl my-5'>Sort By </h1>
<div className='my-2 flex w-full items-center pr-5 justify-between'>
        <h1 className='font-semibold uppercase'>Low To High</h1>
        <input type="checkbox" className="w-[25px] checked:bg-blue-500 " />
      </div>
      <div className='my-2 flex w-full items-center pr-5 justify-between'>
        <h1 className='font-semibold uppercase'>High To Low</h1>
        <input type="checkbox" className="w-[25px] checked:bg-blue-500 " />
      </div>
      <div className='my-2 flex w-full items-center pr-5 justify-between'>
        <h1 className='font-semibold uppercase'>Name A-Z</h1>
        <input type="checkbox" className="w-[25px] checked:bg-blue-500 " />
      </div>
      <div className='my-2 flex w-full items-center pr-5 justify-between'>
        <h1 className='font-semibold uppercase'>Name Z-A</h1>
        <input type="checkbox" className="w-[25px] checked:bg-blue-500 " />
      </div>

</div>



<div>
<h1 className='font-bold text-xl my-5'>Brand  </h1>
<div className='my-2 flex w-full items-center pr-5 justify-between'>
        <h1 className='font-semibold uppercase'>FLX</h1>
        <input type="checkbox" className="w-[25px] checked:bg-blue-500 " />
      </div>
      <div className='my-2 flex w-full items-center pr-5 justify-between'>
        <h1 className='font-semibold uppercase'>Decathlon</h1>
        <input type="checkbox" className="w-[25px] checked:bg-blue-500 " />
      </div>
      <div className='my-2 flex w-full items-center pr-5 justify-between'>
        <h1 className='font-semibold uppercase'>Yonex</h1>
        <input type="checkbox" className="w-[25px] checked:bg-blue-500 " />
      </div>
      <div className='my-2 flex w-full items-center pr-5 justify-between'>
        <h1 className='font-semibold uppercase'>Puma</h1>
        <input type="checkbox" className="w-[25px] checked:bg-blue-500 " />
      </div>

      <div className='my-2 flex w-full items-center pr-5 justify-between'>
        <h1 className='font-semibold uppercase'>Adidas</h1>
        <input type="checkbox" className="w-[25px] checked:bg-blue-500 " />
      </div>
</div>

<button onClick={()=>{
  toggle()
}} className='hidden md:block m-10 w-6/12 mx-auto bg-[#F3F5FF] py-3 text-[#405DF8] rounded md'>Close</button>

    </div>
    
  )
}

export default FFilter