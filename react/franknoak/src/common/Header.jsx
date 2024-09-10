import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">Sasi</div>
        <div className="space-x-4 flex items-center">
          <Link to="/this-just-in" className="text-black font-semibold px-4 py-2 hover:underline">This Just IN</Link>
          <Link to="/men" className="text-black font-semibold px-4 py-2 hover:underline">Men</Link>
          <Link to="/women" className="text-black font-semibold px-4 py-2 hover:underline">Women</Link>
          <Link to="/our-story" className="text-black font-semibold px-4 py-2 hover:underline">Our Story</Link>
          <Link to="/test" className="text-black font-semibold px-4 py-2 hover:underline">Test-Page</Link>
        </div>
        <div className="space-x-4 flex items-center">
          <Link to="/search">
            <FontAwesomeIcon icon={faSearch} className="text-white border-2 border-black rounded-full p-1 bg-black" />
          </Link>
          <Link to="/account">
            <FontAwesomeIcon icon={faUser} className="text-white border-2 border-black rounded-full p-1 bg-black" />
          </Link>
          <Link to="/favorites">
            <FontAwesomeIcon icon={faHeart} className="text-white border-2 border-black rounded-full p-1 bg-black" />
          </Link>
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingBag} className="text-white border-2 border-black rounded-full p-1 bg-black" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
