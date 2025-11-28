import React from 'react';
import { ViewState } from '../types';
import { Map, Star, Book, Gamepad } from 'lucide-react';

interface HomeProps {
  setView: (view: ViewState) => void;
}

export const Home: React.FC<HomeProps> = ({ setView }) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-12">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-teal-500 rounded-3xl p-8 md:p-12 text-white shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 drop-shadow-md">
            ¡As-salamu alaykum, Explorador!
          </h1>
          <p className="text-lg md:text-xl text-emerald-50 mb-8 font-light leading-relaxed">
            Bienvenido a tu mapa de aventuras. Aquí aprenderemos sobre nuestra hermosa fe, 
            jugaremos desafíos divertidos y descubriremos historias increíbles. 
            <br/>¿Estás listo para comenzar el viaje?
          </p>
          <button 
            onClick={() => setView(ViewState.GAMES)}
            className="bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 hover:bg-yellow-300 transition-transform flex items-center gap-2"
          >
            <Gamepad className="w-6 h-6" />
            Empezar a Jugar
          </button>
        </div>
        <div className="hidden md:block absolute bottom-0 right-10 animate-float">
          <img 
            src="https://picsum.photos/300/400" 
            alt="Personaje Guía" 
            className="w-48 h-64 object-cover rounded-t-full border-4 border-white shadow-2xl mask-image-gradient" 
            style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
          />
        </div>
      </div>

      {/* Feature Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Game Corner Card */}
        <div 
          onClick={() => setView(ViewState.GAMES)}
          className="group bg-white rounded-3xl p-6 shadow-lg border-2 border-transparent hover:border-emerald-400 hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-2"
        >
          <div className="h-40 bg-purple-100 rounded-2xl mb-4 flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            <Gamepad className="w-16 h-16 text-purple-500 group-hover:scale-110 transition-transform" />
          </div>
          <h2 className="text-2xl font-display font-bold text-gray-800 mb-2">Rincón del Juego</h2>
          <p className="text-gray-500 text-sm">Aprende jugando con Pac-Halal, Carreras de los Pilares y más.</p>
        </div>

        {/* Library Card */}
        <div 
          onClick={() => setView(ViewState.LIBRARY)}
          className="group bg-white rounded-3xl p-6 shadow-lg border-2 border-transparent hover:border-blue-400 hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-2"
        >
          <div className="h-40 bg-blue-100 rounded-2xl mb-4 flex items-center justify-center overflow-hidden relative">
            <Book className="w-16 h-16 text-blue-500 group-hover:scale-110 transition-transform" />
          </div>
          <h2 className="text-2xl font-display font-bold text-gray-800 mb-2">Biblioteca de la Fe</h2>
          <p className="text-gray-500 text-sm">Lee Suras con explicaciones estilo manga y la vida del Profeta (saws).</p>
        </div>

        {/* Gallery/Printables Combo */}
        <div 
          onClick={() => setView(ViewState.PRINTABLES)}
          className="group bg-white rounded-3xl p-6 shadow-lg border-2 border-transparent hover:border-orange-400 hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-2"
        >
          <div className="h-40 bg-orange-100 rounded-2xl mb-4 flex items-center justify-center overflow-hidden relative">
             <Star className="w-16 h-16 text-orange-500 group-hover:rotate-180 transition-transform duration-700" />
          </div>
          <h2 className="text-2xl font-display font-bold text-gray-800 mb-2">Zona Creativa</h2>
          <p className="text-gray-500 text-sm">Descarga dibujos para colorear y cuadernos de actividades.</p>
        </div>

      </div>

      {/* Quote of the day */}
      <div className="bg-white border-l-8 border-brand-gold p-6 rounded-r-xl shadow-md flex items-start gap-4">
         <div className="text-4xl text-brand-gold font-serif">"</div>
         <div>
            <p className="text-lg text-gray-700 italic font-semibold">
              El más perfecto de los creyentes en fe es aquel que tiene el mejor carácter y es más amable con su familia.
            </p>
            <p className="text-sm text-gray-400 mt-2 font-bold uppercase tracking-wider">— Profeta Muhammad (ﷺ)</p>
         </div>
      </div>
    </div>
  );
};