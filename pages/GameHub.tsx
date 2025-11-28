import React, { useState } from 'react';
import { GAMES_LIST } from '../constants';
import { HalalPacman } from '../components/games/HalalPacman';
import { PillarsRace } from '../components/games/PillarsRace';
import { ArrowLeft, PlayCircle, Lock } from 'lucide-react';

export const GameHub: React.FC = () => {
  const [activeGameId, setActiveGameId] = useState<string | null>(null);

  const renderActiveGame = () => {
    switch (activeGameId) {
      case 'halal-pacman':
        return <HalalPacman />;
      case 'pillars-race':
        return <PillarsRace />;
      default:
        return (
          <div className="text-center p-12 bg-white rounded-2xl shadow-xl">
             <Lock className="w-12 h-12 text-gray-300 mx-auto mb-4"/>
             <h3 className="text-xl font-bold text-gray-600">Este juego está en desarrollo</h3>
             <p className="text-gray-400">¡Vuelve pronto para jugar!</p>
          </div>
        );
    }
  };

  if (activeGameId) {
    return (
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <button 
          onClick={() => setActiveGameId(null)}
          className="flex items-center text-emerald-600 font-bold mb-6 hover:text-emerald-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver a la Sala de Juegos
        </button>
        <h2 className="text-3xl font-display font-bold text-emerald-900 mb-6 text-center">
          {GAMES_LIST.find(g => g.id === activeGameId)?.title}
        </h2>
        {renderActiveGame()}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-display font-bold text-emerald-900 mb-4">Sala de Juegos</h2>
        <p className="text-lg text-emerald-700 max-w-2xl mx-auto">Selecciona una aventura para aprender divirtiéndote. ¡Gana puntos y aprende sobre el Islam!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {GAMES_LIST.map((game) => (
          <div 
            key={game.id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col"
          >
            <div className={`h-48 ${game.color} relative group cursor-pointer`} onClick={() => setActiveGameId(game.id)}>
              <img src={game.thumbnail} alt={game.title} className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <PlayCircle className="w-16 h-16 text-white drop-shadow-lg" />
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{game.type}</span>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{game.title}</h3>
              <p className="text-sm text-gray-500 mb-4 flex-1">{game.description}</p>
              <button 
                onClick={() => setActiveGameId(game.id)}
                className="w-full py-2 rounded-xl bg-emerald-100 text-emerald-700 font-bold hover:bg-emerald-200 transition-colors"
              >
                Jugar Ahora
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};