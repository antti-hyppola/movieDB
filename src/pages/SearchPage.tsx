import React from 'react'
import { useSelector } from 'react-redux'
import { MovieState } from '../redux/types'
import MovieCard from '../components/MovieCard'
import { Box, Grid, Heading } from 'grommet'


interface RootState {
    movies: MovieState
}

const SearchPage: React.FC = () => {
    const movies = useSelector((state: RootState) => state.movies.movies.movieSearch)

    let movieMarkUp = movies.map((movie: any, index: number) => {
        return < MovieCard key={index} movie={movie} />
    })

    let render = !movies.length ? (
        <Heading>Search for movie titles above</Heading>
    ) : (
            <Grid columns={['small', 'small', 'small', 'small', 'small']} gap='medium' justify='center'>
                {movieMarkUp}
            </Grid >
        )

    return (
        <Box align='center'>
            {render}
        </Box>
    )
}

export default SearchPage
