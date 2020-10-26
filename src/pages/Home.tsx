import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../redux/actions/movieActions'
import { RootState, SET_COMING_SOON, SET_PLAYING_NOW, SET_POPULAR, SET_TOP_RATED } from '../redux/types'
import { Box, Carousel, Grid } from 'grommet'
import TrailerCard from '../components/TrailerCard'
import MovieCard from '../components/MovieCard'

const apiKey = process.env.REACT_APP_API_KEY

const Home: React.FC = () => {
    const popularMovies = useSelector((state: RootState) => state.movies.movies.popularMovies)
    const topRated = useSelector((state: RootState) => state.movies.movies.topRated)
    const playingNow = useSelector((state: RootState) => state.movies.movies.playingNow)
    const comingSoon = useSelector((state: RootState) => state.movies.movies.comingSoon)
    const dispatch = useDispatch()

    useEffect(() => {
        //Get popular movies
        dispatch(getMovies(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1&region=GB`, SET_POPULAR))
        //Get top rated movies
        dispatch(getMovies(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1&region=GB`, SET_TOP_RATED))
        //Get playing now movies
        dispatch(getMovies(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1&region=GB`, SET_PLAYING_NOW))
        //Get upcoming movies
        dispatch(getMovies(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1&region=GB`, SET_COMING_SOON))

    }, [])

    return (
        <div>
            Welcome to Movie Database!
            <Box height='65vh' width='60vw'>
                <Carousel fill play={5000} >
                    {popularMovies.map((movie: any, index: number) => {
                        return < TrailerCard movie={movie} key={index} />
                    }
                    )}
                </Carousel>
            </Box>
            Top Rated Movies:
            <Grid columns='small' gap='medium'>
                {topRated.slice(0, 5).map((movie: any, index: number) => {
                    return <MovieCard movie={movie} key={index} />
                })}
            </Grid>
            In theaters now:
            <Grid columns='small' gap='medium'>
                {playingNow.slice(0, 5).map((movie: any, index: number) => {
                    return <MovieCard movie={movie} key={index} />
                })}
            </Grid>
            Coming soon:
            <Grid columns='small' gap='medium'>
                {comingSoon.slice(0, 5).map((movie: any, index: number) => {
                    return <MovieCard movie={movie} key={index} />
                })}
            </Grid>
        </div>
    )
}

export default Home
