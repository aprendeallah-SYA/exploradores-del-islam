import React, { useState } from 'react';
import { SURAS } from '../constants';
import { BookOpen, ChevronDown, ChevronUp, Star } from 'lucide-react';

export const Library: React.FC = () => {
  const [openSuraId, setOpenSuraId] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="mb-12 text-center">
        <h2 className="text-4xl font-display font-bold text-emerald-900 mb-4">La Biblioteca de la Fe</h2>
        <p className="text-emerald-600">Descubre la belleza del Corán y las historias de nuestros Profetas con explicaciones fáciles de entender.</p>
      </header>

      {/* Suras Section */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
          <BookOpen className="w-6 h-6 mr-2" /> Suras con Luz
        </h3>
        <div className="space-y-4">
          {SURAS.map((sura) => (
            <div key={sura.id} className="bg-white rounded-2xl shadow-sm border border-emerald-100 overflow-hidden">
              <button 
                onClick={() => setOpenSuraId(openSuraId === sura.id ? null : sura.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-emerald-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-700">
                    {sura.id}
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-gray-800">{sura.name}</h4>
                    <p className="text-xs text-gray-500">{sura.meaning}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-serif text-emerald-800">{sura.arabicName}</span>
                  {openSuraId === sura.id ? <ChevronUp className="text-emerald-500" /> : <ChevronDown className="text-gray-400" />}
                </div>
              </button>
              
              {openSuraId === sura.id && (
                <div className="px-6 py-6 bg-emerald-50 border-t border-emerald-100">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-bold text-emerald-700 mb-2">Explicación Simplificada</h5>
                      <p className="text-gray-700 mb-4 leading-relaxed">{sura.description}</p>
                      <h5 className="font-bold text-emerald-700 mb-2">Lección de Vida</h5>
                      <div className="bg-white p-4 rounded-xl border-l-4 border-yellow-400 shadow-sm">
                        <p className="text-gray-700 italic">{sura.lesson}</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-inner flex flex-col items-center justify-center text-center">
                      {/* Placeholder for Anime Style Illustration */}
                      <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                        <img src={`https://picsum.photos/400/300?random=${sura.id}`} alt="Ilustración" className="w-full h-full object-cover rounded-lg opacity-80" />
                      </div>
                      <p className="text-xs text-gray-500">Ilustración conceptual de la Sura</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Prophet Stories Teaser */}
      <section>
        <h3 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
          <Star className="w-6 h-6 mr-2" /> Historias del Profeta (Webtoon)
        </h3>
        <div className="bg-gradient-to-br from-indigo-900 to-purple-800 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl">
          <div className="flex-1">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 inline-block">Nuevo Episodio</span>
            <h4 className="text-3xl font-display font-bold mb-4">El Comienzo de la Revelación</h4>
            <p className="text-indigo-200 mb-6">Descubre cómo el Profeta Muhammad (ﷺ) recibió las primeras palabras de Allah en la cueva de Hira, ilustrado en un estilo dinámico y respetuoso.</p>
            <button className="bg-white text-indigo-900 px-6 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors shadow-lg">
              Leer Capítulo 1
            </button>
          </div>
          <div className="w-full md:w-1/3 h-64 bg-black/30 rounded-xl overflow-hidden border-4 border-white/20 transform rotate-2 hover:rotate-0 transition-transform duration-500">
             <img src="https://picsum.photos/400/600?grayscale" alt="Manga Preview" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};