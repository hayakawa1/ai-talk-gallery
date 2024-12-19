import genresData from '../data/genres.json';

export interface Genre {
  name: string;
  description: string;
  example: string;
}

interface GenresData {
  genres: Genre[];
}

export const getGenres = (): Genre[] => {
  return genresData.genres;
}; 