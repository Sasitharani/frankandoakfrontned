import React from "react";

export default function Seclastrow() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2  m-4 p-5 h-[850px] ">
        <div className="flex items-center mx-auto ">
          <div className="text-5xl font-semibold">
            Inspire Better Living.
            <div className="text-2xl font-medium mt-10">
              Born in Canada, we are grounded on innovation, our community, and
              respecting the planet we all call home.
            </div>
            <a href="/" className="text-3xl">Who we are</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 ">
          <div className="bg-[#F9F9F9] relative ">
            <img className="object-cover  h-[400px] w-[300px]"
              src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_2_900x.jpg?v=1712334213"
            />
              <div class="absolute inset-0 mt-[350px] text-white text-2xl font-bold ">Sustainable Practices</div>
          </div>
          <div className="bg-[#F9F9F9] relative">
            <img className="h-[400px] w-[300px] object-cover"
              src="https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804"
            />
            <div class="absolute inset-0 mt-[350px] text-white text-2xl font-bold "> Design Philosphy</div>
          </div>
          <div className="bg-[#F9F9F9] relative">
            <img className="h-[400px] w-[300px] object-cover"
              src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_3_900x.jpg?v=1712334263"
              width="600"
              height="700"
            />
            <div class="absolute inset-0 mt-[350px] text-white text-2xl font-bold ">Fabric Innovation</div>
          </div>
          <div className="bg-[#F9F9F9] relative ">
            <img className="  h-[400px] w-[300px] object-cover"
              src="https://www.frankandoak.com/cdn/shop/files/story-partners_900x.jpg?v=1712160804"
              width="600"
              height="700"
            />
            <div class="absolute inset-0 mt-[350px] text-white text-2xl font-bold ">Patners and Factory</div>
          </div>
        </div>
      </div>
    </div>
  );
}
