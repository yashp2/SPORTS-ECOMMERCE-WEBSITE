import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDetailContext} from '../Context/UserProvider';
import { useHistory } from "react-router-dom";
function SignUp() {
  let history = useHistory();  
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const validate = useDetailContext();

   const [msg, setmsg] = useState(false);

  function check(){
     if(validate(Email,Password)){
       console.log('not working')
      history.push("/Homepage");
    }else{      
      setmsg(true)

      setTimeout(() => {
            setmsg(false)
           }, 5000);
    }
  }
  return (
    <div className='bg-white sm:grid-cols-1   w-full min-h-screen grid grid-cols-2' >
        <div className="bg-img  h-screen sm:h-[50vh] ">
        </div>
        <div className="col sm:min-h-[auto] min-h-screen flex items-center justify-center">
            <div className="container w-8/12 sm:h-[auto] py-[10vh] h-[80vh] flex flex-col items center justify-center">
                <h1 className='font-bold text-left font-serif text-4xl mb-1'>Sign In</h1>
                <p className='opacity-75 text-left text-md'>Create your account to get started ! ! !</p>

 <div className="input mt-[25px]">
<p className='text-left text-xl'>Enter Your Email</p>
  <input type="email" onChange={(e)=>setEmail(e.target.value)} name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="JohnDoe@example.com" />   
 </div>            
 
 <div className="input mt-[25px]">
<p className='text-left text-xl'>Enter Your Password</p>
  <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="yourpass@1234" />   
 </div>            

<button onClick={()=>check()} className="font-semibold w-full my-[25px] bg-[#405DF8] text-[#fff] rounded-md px-10 hover:bg-black py-3"> 
Sign In 
</button> 
<p>Already Have a account ? <span className='text-[#405DF8] text-semibold'><Link to='/SignUp'>Sign Up </Link></span></p>
 {
   msg ? 
   <div className="mt-[4vh] bg-[#FFF3F9] text-[#F1002B] w-[max-content] mx-auto px-[30px]  py-[12px] rounded-md  drop-shadow-[.2px_.2px_rgba(0,0,0,0.25)]">Please Enter Valid Details <i className='text-[#F1002B] align-middle text-xl px-2 bx bxs-error-alt'></i></div>
        :null    
 }
 </div>
        </div>
    
        </div>
  )
}

export default SignUp