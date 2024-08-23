import React, { useContext } from 'react'
import { countContext } from '../context/MainContext'



export default function Header() {
    let contextData=useContext(countContext)
    let {count,setCount}=contextData
console.log(contextData)
  return (
    <div>
        <h1>Header</h1>
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Count + 1</button>
    </div>
  )
}
