
import React from 'react';
import { CATEGORIES } from '../constants';
import SearchIcon from './icons/SearchIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with title and motto */}
        <div className="flex justify-between items-center py-4 border-b border-slate-200">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
              Anyósnyelv
            </h1>
            <p className="text-sm text-slate-500 mt-1 italic">
              Mert valakinek ki kell mondani
            </p>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Keresés..."
                className="border border-slate-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                <SearchIcon />
              </div>
            </div>
            <button className="bg-red-700 text-white font-bold py-2 px-5 rounded-md hover:bg-red-800 transition-colors">
              Előfizetés
            </button>
          </div>
        </div>
        
        {/* Navigation bar */}
        <nav className="flex justify-center md:justify-start items-center space-x-6 md:space-x-8 py-3 overflow-x-auto">
          {CATEGORIES.map(category => (
            <a 
              key={category} 
              href="#" 
              className="text-slate-600 font-semibold hover:text-red-700 transition-colors whitespace-nowrap"
            >
              {category}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
