import React, { createContext, useState } from 'react'

export let countContext=createContext()

export default function MainContext({children}) {
    let [count,setCount]=useState(0)
    let obj ={count,setCount}
  return (
    <countContext.Provider value={obj  }>
    <div>
        {children}
        {/* wereever this component is called use its children */}
    </div>
    </countContext.Provider>
  )
}
