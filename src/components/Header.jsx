// src/components/Header.jsx

import React from 'react';
import { FaBars, FaSearch, FaUserCircle } from 'react-icons/fa';
import logoMontreal from '../assets/logo-montreal.gif';
import téléchargement from '../assets/téléchargement.png';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-4">
      <div className="w-full flex justify-between items-center h-16">
        {/* Partie gauche : logo + Montréal + Menu */}
        <div className="flex items-center gap-6">
        <Link
  to="/"
  className="flex items-center gap-2 font-semibold text-gray-800 text-lg hover:underline"
>
  <span>Montréal</span>
  <img src={téléchargement} alt="Logo Montréal" className="h-6 w-auto" />
</Link>


          {/* Séparateur */}
          <div className="h-6 border-l border-gray-300"></div>

          {/* Menu */}
          <div className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:underline">
            <FaBars />
            <span className="font-semibold">Menu</span>
          </div>
        </div>

        {/* Partie droite : Recherche + Mon compte */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:underline">
            <FaSearch />
            <span className="font-semibold">Recherche</span>
          </div>

          <div className="h-6 border-l border-gray-300"></div>

          <div className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:underline">
            <FaUserCircle />
            <span className="font-semibold">Mon compte</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
