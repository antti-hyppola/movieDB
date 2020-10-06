import React from 'react'
import { useSelector } from 'react-redux'
import { MovieState } from '../redux/types'

interface RootState {
    movies: MovieState
}

export default function SearchPage() {
    const movies = useSelector((state: RootState) => state.movies.movies)
    return (
        <div>
            This is the search page and here are the results:
            {console.log(movies[0])}
            {movies && movies.map((movie: any, index: number) => {
                console.log(movie);
                return (<div>
                    <li key={index} >{movie.title}</li>
                    <li key={index} >{movie.overview}</li>
                    <li key={index} >{movie.release_date}</li>
                    <hr />
                </div>)
            })}
        </div>
    )
}
