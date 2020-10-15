import { SET_MOVIES, SEARCH_MOVIES, SEARCH_TRAILER, MovieActionTypes, MovieState, EMPTY_MOVIES } from '../types'

const initialState: MovieState = {
    movies: [],
    movie: {
        title: '',
        id: 0,
        overview: '',
        poster_path: '',
        release_date: '',
        backdrop_path: ''
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
        case EMPTY_MOVIES:
            return {
                movies: [],
                movie: {
                    title: '',
                    id: 0,
                    overview: '',
                    poster_path: '',
                    release_date: '',
                    backdrop_path: ''
                }
            }
        default:
            return state
    }
} 