import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';

export const HalalPacman: React.FC = () => {
  const gridSize = 15;
  const initialPlayerPos = { x: 1, y: 1 };
  const [playerPos, setPlayerPos] = useState(initialPlayerPos);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [level, setLevel] = useState(1);
  const [direction, setDirection] = useState<'UP' | 'DOWN' | 'LEFT' | 'RIGHT'>('RIGHT');
  
  // 0: Empty, 1: Wall, 2: Halal Food (Coin), 3: Haram (Enemy), 4: Player
  const initialMap = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,2,2,2,1,2,2,2,1,2,2,2,2,1],
    [1,2,1,1,2,1,2,1,2,1,2,1,1,2,1],
    [1,2,2,2,2,2,2,3,2,2,2,2,2,2,1],
    [1,2,1,1,2,1,1,0,1,1,2,1,1,2,1],
    [1,2,2,2,2,0,0,0,0,0,2,2,2,2,1],
    [1,2,1,1,2,1,1,3,1,1,2,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  ];

  const [gameMap, setGameMap] = useState<number[][]>(JSON.parse(JSON.stringify(initialMap)));

  const movePlayer = useCallback(() => {
    if (gameOver) return;

    setPlayerPos((prev) => {
      let newX = prev.x;
      let newY = prev.y;

      if (direction === 'UP') newY--;
      if (direction === 'DOWN') newY++;
      if (direction === 'LEFT') newX--;
      if (direction === 'RIGHT') newX++;

      // Collision Check
      if (gameMap[newY] && gameMap[newY][newX] !== 1) {
        // Check for interactions
        const cellContent = gameMap[newY][newX];
        
        if (cellContent === 2) { // Halal Food
          setScore(s => s + 10);
          const newMap = [...gameMap];
          newMap[newY][newX] = 0;
          setGameMap(newMap);
        } else if (cellContent === 3) { // Haram Enemy
          setGameOver(true);
          return prev;
        }

        return { x: newX, y: newY };
      }
      return prev;
    });
  }, [direction, gameMap, gameOver]);

  // Game Loop
  useEffect(() => {
    const interval = setInterval(movePlayer, 300);
    return () => clearInterval(interval);
  }, [movePlayer]);

  // Key Controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') setDirection('UP');
      if (e.key === 'ArrowDown') setDirection('DOWN');
      if (e.key === 'ArrowLeft') setDirection('LEFT');
      if (e.key === 'ArrowRight') setDirection('RIGHT');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const resetGame = () => {
    setPlayerPos(initialPlayerPos);
    setScore(0);
    setGameOver(false);
    setGameMap(JSON.parse(JSON.stringify(initialMap)));
    setDirection('RIGHT');
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 rounded-2xl border-4 border-yellow-400 shadow-2xl">
      <div className="flex justify-between w-full mb-4 text-white font-display">
        <div>Nivel: {level}</div>
        <div className="text-yellow-400 text-xl">Puntos Halal: {score}</div>
      </div>

      <div className="relative bg-black p-2 rounded-lg border-2 border-blue-900">
        {gameOver && (
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-10 text-white">
            <h3 className="text-2xl font-bold text-red-500 mb-2">¡Oh no!</h3>
            <p className="text-center mb-4 px-4">Tocaste algo Haram. ¡Inténtalo de nuevo y mantente en el camino recto!</p>
            <button onClick={resetGame} className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold hover:bg-yellow-400 flex items-center">
              <RotateCcw className="w-4 h-4 mr-2" /> Reiniciar
            </button>
          </div>
        )}
        
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: `repeat(${gridSize}, 20px)`, 
            gap: '1px' 
          }}
        >
          {gameMap.map((row, y) => (
            row.map((cell, x) => {
              let content = null;
              if (playerPos.x === x && playerPos.y === y) {
                 content = <div className="w-full h-full bg-yellow-400 rounded-full animate-pulse" />; // Player
              } else if (cell === 1) {
                 content = <div className="w-full h-full bg-blue-800 rounded-sm" />; // Wall
              } else if (cell === 2) {
                 content = <div className="w-2 h-2 bg-emerald-400 rounded-full m-auto" />; // Food
              } else if (cell === 3) {
                 content = <div className="w-full h-full bg-red-600 rounded-t-full" />; // Enemy
              }

              return (
                <div key={`${x}-${y}`} className="w-5 h-5 flex items-center justify-center">
                  {content}
                </div>
              );
            })
          ))}
        </div>
      </div>

      {/* Mobile Controls */}
      <div className="mt-6 grid grid-cols-3 gap-2 md:hidden">
        <div />
        <button onClick={() => setDirection('UP')} className="bg-gray-700 p-3 rounded-lg active:bg-yellow-500"><ArrowUp className="text-white"/></button>
        <div />
        <button onClick={() => setDirection('LEFT')} className="bg-gray-700 p-3 rounded-lg active:bg-yellow-500"><ArrowLeft className="text-white"/></button>
        <button onClick={() => setDirection('DOWN')} className="bg-gray-700 p-3 rounded-lg active:bg-yellow-500"><ArrowDown className="text-white"/></button>
        <button onClick={() => setDirection('RIGHT')} className="bg-gray-700 p-3 rounded-lg active:bg-yellow-500"><ArrowRight className="text-white"/></button>
      </div>
      
      <p className="text-gray-400 text-xs mt-4">Usa las flechas para moverte.</p>
    </div>
  );
};