import React, { useState } from 'react';

const Test = () => {
  const [showBar, setShowBar] = useState(true);

  return (
    <div className="relative">
      <div class="relative w-full h-64 overflow-hidden group">
    <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2110377-012.02_450x.jpg?v=1722283940" alt="Img1" class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0" />
    <img src="//www.frankandoak.com/cdn/shop/files/2110377-012.01_1200x.jpg?v=1722283940" alt="Img2" class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100" />
    </div>



    </div>
  );
};

export default Test;
