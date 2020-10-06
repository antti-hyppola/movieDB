import { SET_MOVIES, SEARCH_MOVIES, SEARCH_TRAILER, MovieActionTypes, MovieState } from '../types'

const initialState: MovieState = {
    movies: [],
    movie: {}
}

export function movieReducer(state = initialState, action: MovieActionTypes): MovieState {
    switch (action.type) {
        case SET_MOVIES:
            return {
                movies: [
                    ...state.movies,
                    action.payload
                ],
                movie: {
                    ...state.movie
                }
            }
        case SEARCH_MOVIES:
            return {
                movies: [
                    ...state.movies,
                    action.payload
                ],
                movie: {
                    ...state.movie
                }
            }
        default:
            return state
    }
} 