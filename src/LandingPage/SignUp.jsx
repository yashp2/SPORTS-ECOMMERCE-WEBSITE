import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useUpdateContext} from '../Context/UserProvider';
import { useHistory } from "react-router-dom";



function SignUp() {
  const SignUp = useUpdateContext();
  let history = useHistory();  

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  function ValidateEmail(mail) 
  {
    const regex  = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
   if (regex.test(mail))
    {
      return (true)
    }
      return (false)
  }

  function CheckPassword(inputtxt) 
{ 
var passw=  new RegExp(/^[A-Za-z]\w{7,14}$/);
if(inputtxt.match(passw)) 
{ 
return (true);
}
else
{ 
return (false);
}
}

  function validate(){
          let flag=0;   
           if(!ValidateEmail(email)){
            alert("You have entered an invalid email address!")
            flag=1;
           }         
           if(!CheckPassword(password)){
              alert('Please Enter password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter ')
              flag=1;
            } 

          if(flag===0){
            SignUp(name,email,password);
            history.push('/homepage');
          }
  }
  
  return (
    <div className='bg-white sm:grid-cols-1  w-full min-h-screen grid grid-cols-2' >
        <div className="col min-h-screen bg-img sm:min-h-[50vh] ">
        </div>
        <div className="col min-h-screen sm:min-h-[auto] flex items-center justify-center">
            <div className="container w-8/12 h-[80vh] sm:min-h-[auto] flex flex-col items center justify-center">
                <h1 className='font-bold text-left font-serif text-4xl mb-1'>Sign Up</h1>
                <p className='opacity-75 text-left text-md'>Create your account to get started ! ! !</p>

<div className="input mt-[25px]">
<p className='text-left text-xl'>Enter Your Name</p>
  <input type="name" onChange={(e)=>{
         setname(e.target.value)
}} name="name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="John Doe" />   
 </div>            
 
 <div className="input mt-[25px]">
<p className='text-left text-xl'>Enter Your Email</p>
  <input type="email"  onChange={(e)=>{
         setemail(e.target.value)
}} name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="JohnDoe@example.com" />   
 </div>            
 
 <div className="input mt-[25px]">
<p className='text-left text-xl'>Enter Your Password</p>
  <input  onChange={(e)=>{
         setpassword(e.target.value)
}} type="password" name="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="yourpass@1234" />   
 </div>            

<button onClick={()=>{
 validate()
}} className="font-semibold w-full my-[25px] bg-[#405DF8] text-[#fff] rounded-md px-10 hover:bg-black py-3"> 
Create My Account
</button> 

<p>Already Have a account ? <span className='text-[#405DF8] text-semibold'><Link to='/SignIn'>Sign In </Link></span></p>
 </div>
        </div>
    </div>
  )
}

export default SignUp