import { SET_POPULAR, SEARCH_MOVIES, SET_MOVIE, EMPTY_MOVIES, CLEAR_MOVIE, SET_TOP_RATED, SET_PLAYING_NOW } from '../types'
import axios from 'axios'

const apiKey = process.env.REACT_APP_API_KEY

export const getMovies = (url: string, dispatchType: any) => (dispatch: any) => {
    dispatch({ type: EMPTY_MOVIES });
    axios.get(url).then(res => {
        dispatch({ type: dispatchType, payload: res.data.results })
    }).catch(err => console.log(err))
}

export const searchMovies = (query: string) => (dispatch: any) => {
    dispatch({ type: EMPTY_MOVIES })
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1?limit=10`
    axios.get(url).then(res => {
        dispatch({ type: SEARCH_MOVIES, payload: res.data.results })
    })
}


export const openTrailer = (id: number) => (dispatch: any) => {
    dispatch({ type: CLEAR_MOVIE });
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
    axios.get(url).then(res => {
        interface MovieTrailer {
            type?: string;
            key?: string;
        }
        let trailer: MovieTrailer = {
        };
        res.data.results.forEach((movie: any) => {
            if (movie.type === "Trailer") trailer = movie
        })
        window.open(`https://www.youtube.com/watch?v=${trailer.key}`, '_blank') || window.location.replace(`https://www.youtube.com/watch?v=${trailer.key}`)
        dispatch({ type: SET_MOVIE, payload: res.data.results })
    })
}

