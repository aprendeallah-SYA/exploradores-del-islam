import React from 'react';
import { ViewState } from '../types';
import { Compass, BookOpen, Gamepad2, Image, Printer, Mail } from 'lucide-react';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const navItems = [
    { view: ViewState.HOME, label: 'Mapa', icon: Compass },
    { view: ViewState.GAMES, label: 'Juegos', icon: Gamepad2 },
    { view: ViewState.LIBRARY, label: 'Biblioteca', icon: BookOpen },
    { view: ViewState.GALLERY, label: 'Galería', icon: Image },
    { view: ViewState.PRINTABLES, label: 'Imprimir', icon: Printer },
    { view: ViewState.CONTACT, label: 'Buzón', icon: Mail },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b-4 border-emerald-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => setView(ViewState.HOME)}
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:animate-bounce">
              E
            </div>
            <span className="ml-3 text-2xl font-display font-bold text-emerald-800 tracking-wide">
              Exploradores<span className="text-amber-500">DelIslam</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => setView(item.view)}
                className={`flex items-center px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                  currentView === item.view
                    ? 'bg-emerald-100 text-emerald-700 shadow-inner scale-105'
                    : 'text-gray-500 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
              >
                <item.icon className="w-5 h-5 mr-2" />
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Icon (Simplified for this demo) */}
          <div className="md:hidden flex items-center">
             <div className="text-emerald-600 font-bold text-xs">Menú Abajo</div>
          </div>
        </div>
      </div>
      
      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe z-50 flex justify-around p-2 shadow-[0_-5px_10px_rgba(0,0,0,0.05)]">
        {navItems.map((item) => (
          <button
            key={item.view}
            onClick={() => setView(item.view)}
            className={`flex flex-col items-center p-2 rounded-lg ${
              currentView === item.view ? 'text-emerald-600' : 'text-gray-400'
            }`}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-[10px] font-bold mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};