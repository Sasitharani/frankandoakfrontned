import React from 'react'

export default function Row2n3() {
  return (
    <div>
        <p className='text-lg font-semibold m-2'>Featured Category</p>
        <p className='text-lg font-semibold m-2'>Just In</p>
        <div className="grid grid-cols-4 gap-2 h-96">
            <div className="relative w-full h- overflow-hidden group">
                <img className="absolute inset-0 w-full h-[350px] object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0" src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2110377-012.02_450x.jpg?v=1722283940" alt="Img1" />
                <img className="absolute inset-0 w-full h-[350px] object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100" src="//www.frankandoak.com/cdn/shop/files/2110377-012.01_1200x.jpg?v=1722283940" alt="Img1" />
                <div className='absolute -bottom-0.5'>Women's Category</div>
            </div>
           
            <div className="relative w-full h-full overflow-hidden group">
            <img className="absolute inset-0 w-full h-[350px] object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0" src="https://www.frankandoak.com/cdn/shop/files/PRE-FALL_WW_LOOK3.-01_1200x.jpg?v=1724254193" alt="Img1" />
            <img className="absolute inset-0 w-full h-[350px] object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100" src="https://www.frankandoak.com/cdn/shop/files/2130297-4BO.03_1200x.jpg?v=1723489145" alt="Img1" />
            <div className='absolute -bottom-0.5'>Women's Category</div>
            </div>
            <div className="relative w-full h-full overflow-hidden group">
            <img className="absolute inset-0 w-full h-[350px] object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0" src="	https://www.frankandoak.com/cdn/shop/files/2310173-5JR.01_1200x.jpg?v=1721145183" alt="Img1" />
            <img className="absolute inset-0 w-full h-[350px] object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100" src="https://www.frankandoak.com/cdn/shop/files/2310173-5JR.03_1200x.jpg?v=1721145183" alt="Img1" />
            <div className='absolute -bottom-0.5'>Women's Category</div>
            </div>
            <div className="relative w-full h-full overflow-hidden group">
            <img className="absolute inset-0 w-full h-[350px] object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0" src="https://www.frankandoak.com/cdn/shop/files/2130302-2AY.02_1200x.jpg?v=1721141422" alt="Img1" />
            <img className="absolute inset-0 w-full h-[350px] object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100" src="https://www.frankandoak.com/cdn/shop/files/2130302-2AY.03_1200x.jpg?v=1721141422" alt="Img1" />
            <div className='absolute -bottom-0.5'>Women's Category</div>
            </div>
        </div>
    </div>
  )
}

