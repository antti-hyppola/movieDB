import { SET_MOVIES, SEARCH_MOVIES, SET_MOVIE, MovieActionTypes, MovieState, EMPTY_MOVIES, CLEAR_MOVIE } from '../types'

const initialState: MovieState = {
    movies: [],
    movie: {
        title: '',
        id: 0,
        overview: '',
        poster_path: '',
        release_date: '',
        backdrop_path: '',
        type: '',
        key: ''
    }
}

export function movieReducer(state = initialState, action: MovieActionTypes): MovieState {
    switch (action.type) {
        case SET_MOVIES:
            return {
                movies: [
                    ...state.movies,
                    ...action.payload
                ],
                movie: {
                    ...state.movie
                }
            }
        case SEARCH_MOVIES:
            return {
                movies: [
                    ...state.movies,
                    ...action.payload
                ],
                movie: {
                    ...state.movie
                }
            }
        case SET_MOVIE:
            return {
                movies: [
                    ...state.movies
                ],
                movie: {
                    ...state.movie,
                    ...action.payload
                }
            }
        case EMPTY_MOVIES:
            return {
                movies: [],
                movie: {
                    ...state.movie
                }
            }
        case CLEAR_MOVIE:
            return {
                movies: [
                    ...state.movies
                ],
                movie: {
                    title: '',
                    id: 0,
                    overview: '',
                    poster_path: '',
                    release_date: '',
                    backdrop_path: '',
                    type: '',
                    key: ''
                }
            }
        default:
            return state
    }
} 