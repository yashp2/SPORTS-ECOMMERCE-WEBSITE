import React, { useContext, useState } from 'react'

const userContext = React.createContext()
const userUpdateContext = React.createContext()
const userDetailContext = React.createContext()



export function useUpdateContext(){
  return useContext(userUpdateContext);
}
export function useDetailContext(){
  return useContext(userDetailContext);
}

function UserProvider({children}) {  
const [User, setUser] = useState({
    name:localStorage.getItem('name'),
    email:localStorage.getItem('email'),
    password:localStorage.getItem('password')
});
function setDetails(name , email , password){
  setUser(name , email , password);
  console.log(User)
    localStorage.setItem('name',name);
   localStorage.setItem('email',email);
   localStorage.setItem('password',password);
   console.log('user saved successfully')
  }
  
function getUser(email , password){
   if(email===localStorage.getItem('email') && password===localStorage.getItem('password')){
          return true;
   }else{
     return false;
   }
}
return (
<userContext.Provider value={User}>
  <userUpdateContext.Provider value={setDetails}>
      <userDetailContext.Provider value={getUser}>
      {children}
     </userDetailContext.Provider>
 </userUpdateContext.Provider>
</userContext.Provider>
  )
}

export default UserProvider;