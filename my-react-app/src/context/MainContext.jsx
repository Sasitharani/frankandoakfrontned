import React, { createContext, useContext, useEffect, useState } from 'react'
export let cartContext=createContext();
export default function MainContext({children}) {
  
  let [cart,setCart]=useState([])
  let cartObj={cart,setCart}

  useEffect(()=>{
    console.log(cart);
  },(cart))

  console.log(cart.length);
  let cartItems=cart.length
  return (
    <cartContext.Provider value={cartObj}>
    <div>
      {children}
    </div>
    </cartContext.Provider>
  )
}
