import React from 'react'
import { useSelector } from 'react-redux'
import { MovieState } from '../redux/types'
import MovieCard from './MovieCard'
import { Grid } from 'grommet'

interface RootState {
    movies: MovieState
}

const SearchPage: React.FC = () => {
    const movies = useSelector((state: RootState) => state.movies.movies)

    let movieMarkUp = movies.map((movie: any, index: number) => {
        return < MovieCard key={index} movie={movie} />
    })

    return (
        <Grid columns='medium' justify='center'>
            {movieMarkUp}
        </Grid >
    )
}

export default SearchPage
