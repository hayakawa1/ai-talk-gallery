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

export const getGenres = (): Genre[] => {
  return genresData.genres;
}; 