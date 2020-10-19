import React from 'react'
import { useSelector } from 'react-redux'
import { MovieState } from '../redux/types'
import MovieCard from '../components/MovieCard'
import { Grid } from 'grommet'

interface RootState {
    movies: MovieState
}

const SearchPage: React.FC = () => {
    const movies = useSelector((state: RootState) => state.movies.movies.movieSearch)

    let movieMarkUp = movies.map((movie: any, index: number) => {
        return < MovieCard key={index} movie={movie} />
    })

    let render = !movies.length ? (
        <h1>Search for movie titles above</h1>
    ) : (
            <Grid columns='medium' justify='center'>
                {movieMarkUp}
            </Grid >
        )

    return render
}

export default SearchPage
