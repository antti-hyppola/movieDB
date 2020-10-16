import { SET_MOVIES, SEARCH_MOVIES, SET_MOVIE, EMPTY_MOVIES, CLEAR_MOVIE } from '../types'
import axios from 'axios'

const apiKey = process.env.REACT_APP_API_KEY

export const searchMovies = (query: string) => (dispatch: any) => {
    dispatch({ type: EMPTY_MOVIES })
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1?limit=10`
    axios.get(url).then(res => {
        dispatch({ type: SEARCH_MOVIES, payload: res.data.results })
    })
}

export const getPopularMovies = () => (dispatch: any) => {
    dispatch({ type: EMPTY_MOVIES });
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1&region=GB`
    axios.get(url).then(res => {
        dispatch({ type: SET_MOVIES, payload: res.data.results })
    }).catch(err => console.log(err))
}

export const getTrailer = (id: number) => (dispatch: any) => {
    dispatch({ type: CLEAR_MOVIE });
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
    axios.get(url).then(res => {
        dispatch({ type: SET_MOVIE, payload: res.data.results[0] })
    })
}