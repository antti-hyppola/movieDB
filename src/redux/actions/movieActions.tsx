import { SET_MOVIES, SEARCH_MOVIES, SEARCH_TRAILER, EMPTY_MOVIES } from '../types'
import axios from 'axios'

const apiKey = process.env.REACT_APP_API_KEY

export const searchMovies = (query: string) => (dispatch: any) => {
    dispatch({ type: EMPTY_MOVIES })
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1`
    axios.get(url).then(res => {
        dispatch({ type: SEARCH_MOVIES, payload: res.data.results })
    })
}