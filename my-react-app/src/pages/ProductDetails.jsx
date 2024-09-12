import React from 'react'
import Header from '../common/Header'

export default function ProductDetails() {
  return (
    <div>
        <Header />
        <section className='py-[20px] bg-slate-200 px-5 text-center'>
            <h2 className='text-[40px] font-bold'>Iphone</h2>
        </section>
        <div className="max-w-1320 mx-auto grid grid-cols-[40%_auto] gap-6 py-5">{/*Two column format */}
            <div>
                <div className="border-2">
                <img src='https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png' className='w-[100%]'/> 
                </div>
                 <div className="flex gap-4 py-4"> {/*thumbnail of the image */}
                    <div className='border' ><img src='https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png'/></div>
                    <div className='border'><img src='https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png'/></div>
                    <div className='border'><img src='https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png'/></div>
                    <div className='border'><img src='https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png'/></div>
                </div>
            </div>
         {/*second column */}
            <div>
                <h2>IPHONE</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere est consectetur voluptas nam sequi inventore laborum excepturi facilis, nobis voluptatem officia nemo fuga maiores nihil enim aspernatur! Nihil, eligendi ipsa?</p>
                <h2>5500</h2>
                <div>
                    <input type="number" /><button>Add to cart</button><button>Wishlist</button>
                </div>
            </div>
        </div>
    </div>
  )
}
