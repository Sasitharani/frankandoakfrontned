import React from 'react'

export default function Seclastrow() {
  return (
    <div>
        <div className="grid grid-cols-2 gap-2 border-2 border-red-100 m-4 p-5">
            <div className="border-2 border-green-400"></div>
            <div className="grid grid-cols-2 gap-2">
                <div className="bg-slate-300"><img src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_2_900x.jpg?v=1712334213" width="600" height="700"/></div>
                <div className="bg-slate-400"><img src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_2_900x.jpg?v=1712334213" width="600" height="700"/></div>
                <div className="bg-slate-500"><img src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_2_900x.jpg?v=1712334213" width="600" height="700"/></div>
                <div className="bg-slate-600"><img src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_2_900x.jpg?v=1712334213" width="600" height="700"/></div>
            </div>
        </div>
    </div>
  )
}
