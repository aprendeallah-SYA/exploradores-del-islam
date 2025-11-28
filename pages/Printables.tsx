import React from 'react';
import { PRINTABLES } from '../constants';
import { Download, Printer } from 'lucide-react';

export const Printables: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-display font-bold text-emerald-900 mb-4">Zona de Impresión</h2>
        <p className="text-gray-600">Recursos educativos de alta calidad para descargar, imprimir y aprender en casa.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRINTABLES.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full font-bold uppercase">{item.category}</span>
              <Printer className="w-5 h-5 text-gray-300" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm mb-6 flex-1">{item.description}</p>
            
            <div className="mt-auto">
              <button className="w-full flex items-center justify-center bg-gray-900 text-white py-3 rounded-xl hover:bg-emerald-600 transition-colors">
                <Download className="w-4 h-4 mr-2" /> Descargar PDF
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-yellow-50 rounded-2xl p-8 text-center border-2 border-yellow-200 border-dashed">
        <h3 className="text-xl font-bold text-yellow-800 mb-2">¿Necesitas algo específico?</h3>
        <p className="text-yellow-700 mb-4">Envíanos una sugerencia en el buzón y nuestros diseñadores trabajarán en ello.</p>
      </div>
    </div>
  );
};