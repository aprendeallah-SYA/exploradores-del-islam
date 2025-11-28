import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { GameHub } from './pages/GameHub';
import { Library } from './pages/Library';
import { Printables } from './pages/Printables';
import { Gallery } from './pages/Gallery';
import { ViewState } from './types';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => (
  <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-3xl shadow-xl border-t-8 border-emerald-500">
    <div className="text-center mb-8">
      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Mail className="w-8 h-8 text-emerald-600" />
      </div>
      <h2 className="text-2xl font-display font-bold text-gray-800">Contáctanos</h2>
      <p className="text-gray-500 text-sm">Envía tus sugerencias a aprendeallah@gmail.com</p>
    </div>
    
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">Tu Nombre</label>
        <input type="text" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="Ej: Yusuf" />
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">Mensaje</label>
        <textarea className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all h-32" placeholder="Me gustaría ver un juego sobre..."></textarea>
      </div>
      <button className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        Enviar Mensaje
      </button>
    </form>
  </div>
);

function App() {
  const [currentView, setView] = useState<ViewState>(ViewState.HOME);

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME: return <Home setView={setView} />;
      case ViewState.GAMES: return <GameHub />;
      case ViewState.LIBRARY: return <Library />;
      case ViewState.GALLERY: return <Gallery />;
      case ViewState.PRINTABLES: return <Printables />;
      case ViewState.CONTACT: return <Contact />;
      default: return <Home setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen font-sans bg-emerald-50/50 pb-20 md:pb-0">
      <Navigation currentView={currentView} setView={setView} />
      <main className="animate-fade-in py-8">
        {renderView()}
      </main>
      
      {/* Footer */}
      <footer className="bg-emerald-900 text-emerald-200 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-4">Exploradores Del Islam</h3>
            <p className="text-sm opacity-80">Creando un espacio seguro y divertido para que la próxima generación ame su fe.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li onClick={() => setView(ViewState.GAMES)} className="cursor-pointer hover:text-white">Juegos</li>
              <li onClick={() => setView(ViewState.LIBRARY)} className="cursor-pointer hover:text-white">Historias</li>
              <li onClick={() => setView(ViewState.PRINTABLES)} className="cursor-pointer hover:text-white">Descargas</li>
            </ul>
          </div>
          <div>
             <h4 className="font-bold text-white mb-4">Legal</h4>
             <p className="text-xs opacity-60">© 2024 Exploradores del Islam. Todas las ilustraciones son representaciones artísticas respetuosas.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;