export const SET_MOVIES = 'SET_MOVIES'
export const SEARCH_MOVIES = 'SEARCH_MOVIES'
export const SET_MOVIE = 'SET_MOVIE'
export const EMPTY_MOVIES = 'EMPTY_MOVIES'
export const CLEAR_MOVIE = 'CLEAR_MOVIE'

export interface Movie {
    results: [];
}

export type MovieState = {
    movies: Movie[];
    movie: {
        title?: string;
        id: number;
        overview?: string;
        poster_path?: string;
        release_date?: string;
        backdrop_path?: string;
        type?: string;
        key?: string;
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

interface SetMovieAction {
    type: typeof SET_MOVIE;
    payload: Movie;
}

interface EmptyMoviesAction {
    type: typeof EMPTY_MOVIES;
}
interface ClearMovieAction {
    type: typeof CLEAR_MOVIE;
}

export type MovieActionTypes = SetMoviesAction | SearchMoviesAction | SetMovieAction | EmptyMoviesAction | ClearMovieAction;