import { readFileSync } from 'fs';
import path from 'path';
import genresData from '../data/genres.json';

export interface Subgenre {
  name: string;
  description: string;
  example: string;
}

export interface Genre {
  name: string;
  description: string;
  subgenres: Subgenre[];
}

interface GenresData {
  genres: Genre[];
}

export const getGenres = (): Genre[] => {
  if (process.env.NODE_ENV === 'development') {
    return (genresData as GenresData).genres;
  }
  
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'genres.json');
    const jsonData = readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData) as GenresData;
    return data.genres;
  } catch (error) {
    console.error('Error reading genres file:', error);
    return [];
  }
}; 