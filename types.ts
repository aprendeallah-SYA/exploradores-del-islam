export enum ViewState {
  HOME = 'HOME',
  GAMES = 'GAMES',
  LIBRARY = 'LIBRARY',
  GALLERY = 'GALLERY',
  PRINTABLES = 'PRINTABLES',
  CONTACT = 'CONTACT'
}

export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  type: 'arcade' | 'quiz' | 'adventure' | 'simulation';
  color: string;
}

export interface SuraData {
  id: number;
  name: string;
  arabicName: string;
  meaning: string;
  description: string;
  lesson: string;
}

export interface PrintableItem {
  id: string;
  title: string;
  category: string;
  description: string;
  downloadUrl: string; // Mock URL
}