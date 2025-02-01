import React from 'react';
import { Menu, Phone } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-[#FFA500] text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Jaaw Rice</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#daily" className="hover:text-orange-200 transition-colors">Plat du Jour</a>
          <a href="#menu" className="hover:text-orange-200 transition-colors">Notre Menu</a>
          <a href="#order" className="hover:text-orange-200 transition-colors">Commander</a>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="tel:+221761565989" className="flex items-center space-x-2 hover:text-orange-200">
            <Phone size={20} />
            <span>76 156 59 89</span>
          </a>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};