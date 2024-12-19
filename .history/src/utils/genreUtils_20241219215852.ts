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
  return genresData.genres;
}; 