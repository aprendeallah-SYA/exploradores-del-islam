import React, { useState, useEffect } from 'react';
import { Trophy, Car, AlertTriangle } from 'lucide-react';

export const PillarsRace: React.FC = () => {
  const [lane, setLane] = useState(1); // 0: Left, 1: Center, 2: Right
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(500); // ms
  const [objects, setObjects] = useState<{id: number, lane: number, type: 'pillar' | 'obstacle', y: number}[]>([]);
  const [gameOver, setGameOver] = useState(false);
  
  // Game Tick
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setObjects(prev => {
        // Move objects down
        const moved = prev.map(obj => ({...obj, y: obj.y + 1})).filter(obj => obj.y < 10);
        
        // Spawn new object randomly
        if (Math.random() > 0.6) {
           moved.push({
             id: Date.now(),
             lane: Math.floor(Math.random() * 3),
             type: Math.random() > 0.3 ? 'pillar' : 'obstacle',
             y: 0
           });
        }
        return moved;
      });

      // Increase Score simply by surviving
      setScore(s => s + 1);

    }, speed);

    return () => clearInterval(interval);
  }, [gameOver, speed]);

  // Collision Detection
  useEffect(() => {
    const playerY = 8; // Player stays at Y=8
    const collision = objects.find(obj => obj.y === playerY && obj.lane === lane);
    
    if (collision) {
      if (collision.type === 'obstacle') {
        setGameOver(true);
      } else {
        setScore(s => s + 50); // Bonus for pillars
        setObjects(prev => prev.filter(p => p.id !== collision.id)); // Remove collected pillar
      }
    }
  }, [objects, lane]);

  return (
    <div className="flex flex-col items-center bg-emerald-900 p-4 rounded-2xl border-4 border-emerald-400 shadow-2xl relative overflow-hidden h-[500px] w-full max-w-md mx-auto">
      <div className="absolute top-4 left-4 z-10 text-white font-bold bg-black/50 px-3 py-1 rounded-full">
        Puntos: {score}
      </div>

      {gameOver && (
        <div className="absolute inset-0 z-50 bg-black/80 flex flex-col items-center justify-center text-white">
          <Trophy className="w-16 h-16 text-yellow-400 mb-4" />
          <h2 className="text-3xl font-display text-white mb-2">¡Fin del Juego!</h2>
          <p className="mb-4">Puntuación Final: {score}</p>
          <button 
            onClick={() => {
              setGameOver(false);
              setObjects([]);
              setScore(0);
              setLane(1);
            }} 
            className="bg-emerald-500 px-6 py-2 rounded-full font-bold hover:bg-emerald-400"
          >
            Jugar de Nuevo
          </button>
        </div>
      )}

      {/* Road */}
      <div className="relative w-full h-full flex justify-between px-8 bg-gray-800">
        <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-dashed border-l border-white/30 h-full"></div>
        <div className="absolute top-0 bottom-0 right-1/3 w-1 bg-dashed border-l border-white/30 h-full"></div>

        {/* Objects */}
        {objects.map(obj => (
          <div 
            key={obj.id}
            className={`absolute transition-all duration-300 ease-linear flex items-center justify-center rounded-full shadow-lg ${obj.type === 'pillar' ? 'bg-yellow-400 w-10 h-10' : 'bg-red-500 w-8 h-8'}`}
            style={{ 
              top: `${obj.y * 10}%`, 
              left: obj.lane === 0 ? '15%' : obj.lane === 1 ? '45%' : '75%',
            }}
          >
             {obj.type === 'pillar' ? <span className="text-xs font-bold text-black">☪</span> : <AlertTriangle className="w-5 h-5 text-white"/>}
          </div>
        ))}

        {/* Player Car */}
        <div 
          className="absolute transition-all duration-200"
          style={{ top: '80%', left: lane === 0 ? '12%' : lane === 1 ? '42%' : '72%' }}
        >
          <div className="bg-blue-500 w-12 h-16 rounded-lg shadow-xl flex items-center justify-center relative border-b-4 border-blue-700">
            <Car className="text-white w-8 h-8" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping delay-75"></div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-8 z-20">
        <button className="bg-white/20 p-4 rounded-full backdrop-blur-sm active:bg-white/40" onClick={() => setLane(Math.max(0, lane - 1))}>⬅️</button>
        <button className="bg-white/20 p-4 rounded-full backdrop-blur-sm active:bg-white/40" onClick={() => setLane(Math.min(2, lane + 1))}>➡️</button>
      </div>
    </div>
  );
};