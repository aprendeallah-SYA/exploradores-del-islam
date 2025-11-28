import { Game, SuraData, PrintableItem } from './types';

export const GAMES_LIST: Game[] = [
  {
    id: 'halal-pacman',
    title: 'Pac-Halal',
    description: 'Come todo lo Halal y evita lo Haram. ¡Cuidado con los fantasmas de las malas acciones!',
    thumbnail: 'https://picsum.photos/400/300?random=1',
    type: 'arcade',
    color: 'bg-yellow-400'
  },
  {
    id: 'pillars-race',
    title: 'Carrera de los Pilares',
    description: 'Conduce por el camino recto y recoge los 5 Pilares del Islam para ganar.',
    thumbnail: 'https://picsum.photos/400/300?random=2',
    type: 'arcade',
    color: 'bg-emerald-400'
  },
  {
    id: 'ramadan-manager',
    title: 'Desafíos de Ramadán',
    description: 'Gestiona el tiempo para el Suhur, Iftar y las oraciones. (Próximamente)',
    thumbnail: 'https://picsum.photos/400/300?random=3',
    type: 'simulation',
    color: 'bg-purple-400'
  },
  {
    id: 'hajj-maze',
    title: 'El Laberinto del Hajj',
    description: 'Viaja por Arafat, Mina y Muzdalifah resolviendo acertijos. (Próximamente)',
    thumbnail: 'https://picsum.photos/400/300?random=4',
    type: 'adventure',
    color: 'bg-blue-400'
  }
];

export const SURAS: SuraData[] = [
  {
    id: 1,
    name: 'Al-Fatiha',
    arabicName: 'الفاتحة',
    meaning: 'La Apertura',
    description: 'La sura más importante, recitada en cada oración.',
    lesson: 'Nos enseña a pedir guía solo a Allah.'
  },
  {
    id: 105,
    name: 'Al-Fil',
    arabicName: 'الفيل',
    meaning: 'El Elefante',
    description: 'La historia de cómo Allah protegió la Kaaba del ejército de elefantes.',
    lesson: 'El poder de Allah es superior a cualquier ejército.'
  },
  {
    id: 112,
    name: 'Al-Ikhlas',
    arabicName: 'الإخلاص',
    meaning: 'La sinceridad',
    description: 'Describe la unidad de Allah de manera perfecta.',
    lesson: 'Allah es Uno, Único y Eterno.'
  }
];

export const PRINTABLES: PrintableItem[] = [
  { id: '1', title: 'Historias de Profetas: Adam (AS)', category: 'Historia', description: 'Cuaderno de actividades y colorear sobre el primer hombre.', downloadUrl: '#' },
  { id: '2', title: 'Alfabeto Árabe: Alif & Baa', category: 'Árabe', description: 'Fichas de trazo y vocabulario básico.', downloadUrl: '#' },
  { id: '3', title: 'Calendario de Ramadán', category: 'Calendario', description: 'Un calendario para marcar los días de ayuno.', downloadUrl: '#' },
  { id: '4', title: 'Colorea: La Familia en Eid', category: 'Arte', description: 'Escena festiva estilo manga para colorear.', downloadUrl: '#' },
];