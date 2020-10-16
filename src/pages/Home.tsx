import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularMovies } from '../redux/actions/movieActions'
import { MovieState } from '../redux/types'
import { Box, Carousel } from 'grommet'
import TrailerCard from '../components/TrailerCard'

interface RootState {
    movies: MovieState
}

const Home: React.FC = () => {
    const movies = useSelector((state: RootState) => state.movies.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopularMovies())
    }, [])

    return (
        <div>
            Welcome to Movie Database!
            <Box height='65vh' width='60vw'>
                <Carousel fill play={5000} >
                    {movies.map((movie: any, index: number) => {
                        return < TrailerCard movie={movie} key={index} />
                    }
                    )}
                </Carousel>
            </Box>
        </div>
    )
}

export default Home
