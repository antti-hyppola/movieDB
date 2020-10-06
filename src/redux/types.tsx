export const SET_MOVIES = 'SET_MOVIES'
export const SEARCH_MOVIES = 'SEARCH_MOVIES'
export const SEARCH_TRAILER = 'SEARCH_TRAILER'

export interface Movie {
    results: [];
}

export interface MovieState {
    movies: Movie[];
    movie: {};
}

interface SetMoviesAction {
    type: typeof SET_MOVIES;
    payload: Movie;
}

interface SearchMoviesAction {
    type: typeof SEARCH_MOVIES;
    payload: Movie;
}

interface SearchTrailerAction {
    type: typeof SEARCH_TRAILER;
    payload: Movie;
}

export type MovieActionTypes = SetMoviesAction | SearchMoviesAction | SearchTrailerAction;