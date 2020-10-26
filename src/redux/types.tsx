export const SET_POPULAR = 'SET_POPULAR'
export const SET_PLAYING_NOW = 'SET_PLAYING_NOW'
export const SET_COMING_SOON = 'SET_COMING_SOON'
export const SET_TOP_RATED = 'SET_TOP_RATED'
export const SEARCH_MOVIES = 'SEARCH_MOVIES'
export const SET_MOVIE = 'SET_MOVIE'
export const EMPTY_MOVIES = 'EMPTY_MOVIES'
export const CLEAR_MOVIE = 'CLEAR_MOVIE'

interface Movie {
    results: [];
}

export type MovieState = {
    movies: {
        playingNow: Movie[];
        comingSoon: Movie[];
        topRated: Movie[];
        popularMovies: Movie[];
        movieSearch: Movie[];
    }
    movie: {
        title?: string;
        id: number;
        overview?: string;
        poster_path?: string;
        release_date?: string;
        backdrop_path?: string;
        type?: string;
        key?: string;
        vote_average?: number;
        vote_count?: number;
        videos: {
            [results: string]: [
                {
                    type: string;
                    key: string;
                }
            ]
        }
    };
}

export type RootState = {
    movies: MovieState;
    movie: MovieState['movie']
}

interface SetPopularAction {
    type: typeof SET_POPULAR;
    payload: Movie[];
}
interface SetComingSoonAction {
    type: typeof SET_COMING_SOON;
    payload: Movie[];
}
interface SetTopRatedAction {
    type: typeof SET_TOP_RATED;
    payload: Movie[];
}
interface SetPlayingNowAction {
    type: typeof SET_PLAYING_NOW;
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

export type MovieActionTypes = SetPopularAction | SetComingSoonAction | SetPlayingNowAction | SetTopRatedAction | SearchMoviesAction | SetMovieAction | EmptyMoviesAction | ClearMovieAction;