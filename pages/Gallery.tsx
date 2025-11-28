import React from 'react';
import { Download } from 'lucide-react';

export const Gallery: React.FC = () => {
  const images = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    url: `https://picsum.photos/600/600?random=${i + 10}`,
    category: i % 2 === 0 ? 'Color' : 'Para Colorear'
  }));

  return (
    <div className="max-w-6xl mx-auto p-6">
       <div className="text-center mb-10">
        <h2 className="text-4xl font-display font-bold text-emerald-900">Galería de Arte</h2>
        <p className="text-emerald-600 mt-2">Imágenes inspiradoras estilo Anime Islámico.</p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img) => (
          <div key={img.id} className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-lg bg-white">
            <img src={img.url} alt="Gallery Item" className={`w-full h-auto object-cover ${img.category === 'Para Colorear' ? 'grayscale contrast-125 brightness-110' : ''}`} />
            
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
               <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-2">{img.category}</span>
               <button className="bg-emerald-500 p-3 rounded-full hover:bg-emerald-400 transform hover:scale-110 transition-all">
                 <Download className="w-6 h-6 text-white" />
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};