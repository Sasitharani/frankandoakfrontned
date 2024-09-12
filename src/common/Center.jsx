import React from 'react'
import { useState } from 'react';


export default function Center() {
    const [showBar, setShowBar] = useState(true);
  return (

   <div className="relative">
      {showBar && (

        <div className="absolute top-0 left-0 w-full bg-black text-white p-4 grid-cols-3">
            <div className="flex justify-end">
            <button onClick={() => setShowBar(false)} className="bg-white text-black px-1 ">x</button>
            </div>
      
          <div className='flex justify-between'>
          <p className="font-bold">Win a $5,000 fall wardrobe</p>
          <p>It's starting to feel like fall— And we're celebrating with a very special giveaway.</p>
            <button className="bg-white text-black px-4 py-2 my-4">Enter Now</button>
            </div>
         
       

        </div>
      )}
      <div className="h-screen bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: "url('https://www.frankandoak.com/cdn/shop/files/desktop_duo_f142bc55-c4e2-4945-a203-7bad87652202_1536x.jpg?v=1723666577')" }}>
        <h1 className="text-black text-6xl font-bold mb-4">Fall 2024</h1>
        <h1 className="text-black text-3xl font-bold mb-4 text-center">The New Classics</h1>
        <div className="flex space-x-4">
          <button className="bg-black text-white px-4 py-2 w-40">Women</button>
          <button className="bg-black text-white px-4 py-2 w-40">Men</button>
        </div>
      </div>
      <div className='flex justify-between bg-black text-white p-3'>
      <p>Free Shipping over $99</p>
      <p>Free Returns</p>
      <p>Earn Points</p>
      <p>Buy Now, Pay Later</p>
      </div>
    </div>

  )
}