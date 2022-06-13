import React, {useState } from 'react'

export const CartContext = React.createContext()
export const CartUpdateContext = React.createContext()
export const CartDeleteContext = React.createContext()
export const CartEmptyContext = React.createContext()

export const WishListContext = React.createContext()
export const WishListUpdateContext = React.createContext()
export const WishListDeleteContext = React.createContext()


function CartProvider({children}) {  
    const [cart, setcart] = useState([]);
    const [wishList, setwishList] = useState([]);
    
    const RemoveWishElement = (id)=>{
      let products = setwishList.filter((ele)=>{
        if(ele.id!==id){
          return ele;
        }
      })
      
      setwishList(products)
      
    }
    
    const UpdateWishList=(element)=>{
      let exist = wishList.some(ele => ele.id === element.id);
    if(!exist)
    {
      setwishList([...wishList,element])
      return true 

    }else{
       return false
    }   
    } 
     const Empty=()=>{
      setcart([])
    }
    const RemoveElement = (id)=>{
      let products = cart.filter((ele)=>{
        if(ele.id!==id){
          return ele;
        }
      })
      console.log(id)
      setcart(products)
    }
    const UpdateCart=(element)=>{
          let exist = cart.some(ele => ele.id === element.id);
        if(!exist)
        {
          setcart([...cart,element])
          return true 
        }else{
           return false
        }   

}
    return (
    <CartContext.Provider value={cart}>
      <CartUpdateContext.Provider value={UpdateCart}>
          <CartDeleteContext.Provider value={RemoveElement}>
               <CartEmptyContext.Provider value={Empty}>
              <WishListContext.Provider value={wishList}>
                <WishListUpdateContext.Provider value={UpdateWishList}>
                  <WishListDeleteContext.Provider value={RemoveWishElement}>
                    {children}
                  </WishListDeleteContext.Provider>
                </WishListUpdateContext.Provider>
              </WishListContext.Provider>
               </CartEmptyContext.Provider>
          </CartDeleteContext.Provider>
     </CartUpdateContext.Provider>
    </CartContext.Provider>
      )
    }
    
    export default CartProvider;
