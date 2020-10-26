import { SET_POPULAR, SEARCH_MOVIES, SET_MOVIE, MovieActionTypes, MovieState, EMPTY_MOVIES, CLEAR_MOVIE, SET_TOP_RATED, SET_PLAYING_NOW, SET_COMING_SOON } from '../types'

const initialState: MovieState = {
    movies: {
        playingNow: [],
        comingSoon: [],
        topRated: [],
        popularMovies: [],
        movieSearch: []
    },
    movie: {
        title: '',
        id: 0,
        overview: '',
        poster_path: '',
        release_date: '',
        backdrop_path: '',
        type: '',
        key: '',
        vote_average: 0,
        vote_count: 0,
        videos: {}
    }
}

export function movieReducer(state = initialState, action: MovieActionTypes): MovieState {
    switch (action.type) {
        case SET_POPULAR:
            return {
                movies: {
                    ...state.movies,
                    popularMovies: [
                        ...action.payload
                    ]
                },
                movie: {
                    ...state.movie
                }
            }
        case SET_TOP_RATED:
            return {
                movies: {
                    ...state.movies,
                    topRated: [
                        ...action.payload
                    ]
                },
                movie: {
                    ...state.movie
                }
            }
        case SET_PLAYING_NOW:
            return {
                movies: {
                    ...state.movies,
                    playingNow: [
                        ...action.payload
                    ]
                },
                movie: {
                    ...state.movie
                }
            }
        case SET_COMING_SOON:
            return {
                movies: {
                    ...state.movies,
                    comingSoon: [
                        ...action.payload
                    ]
                },
                movie: {
                    ...state.movie
                }
            }
        case SEARCH_MOVIES:
            return {
                movies: {
                    ...state.movies,
                    movieSearch: [
                        ...action.payload
                    ]
                }
                ,
                movie: {
                    ...state.movie
                }
            }
        case SET_MOVIE:
            return {
                movies: {
                    ...state.movies
                },
                movie: {
                    ...state.movie,
                    ...action.payload
                }
            }
        case EMPTY_MOVIES:
            return {
                movies: {
                    ...state.movies
                },
                movie: {
                    ...state.movie
                }
            }
        case CLEAR_MOVIE:
            return {
                movies: {
                    ...state.movies
                },
                movie: {
                    title: '',
                    id: 0,
                    overview: '',
                    poster_path: '',
                    release_date: '',
                    backdrop_path: '',
                    type: '',
                    key: '',
                    vote_count: 0,
                    vote_average: 0,
                    videos: {}
                }
            }
        default:
            return state
    }
} 