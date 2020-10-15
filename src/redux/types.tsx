export const SET_MOVIES = 'SET_MOVIES'
export const SEARCH_MOVIES = 'SEARCH_MOVIES'
export const SEARCH_TRAILER = 'SEARCH_TRAILER'
export const EMPTY_MOVIES = 'EMPTY_MOVIES'

export interface Movie {
    results: [];
}

export interface MovieState {
    movies: Movie[];
    movie: {
        title: string;
        id: number;
        overview: string;
        poster_path: string;
        release_date: string;
        backdrop_path: string
    };
}

interface SetMoviesAction {
    type: typeof SET_MOVIES;
    payload: Movie[];
}

interface SearchMoviesAction {
    type: typeof SEARCH_MOVIES;
    payload: Movie[];
}

interface SearchTrailerAction {
    type: typeof SEARCH_TRAILER;
    payload: Movie;
}

interface EmptyMoviesAction {
    type: typeof EMPTY_MOVIES;
}

export type MovieActionTypes = SetMoviesAction | SearchMoviesAction | SearchTrailerAction | EmptyMoviesAction;