import React, { useEffect } from 'react'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../redux/actions/movieActions'
//Types
import { RootState, SET_COMING_SOON, SET_PLAYING_NOW, SET_POPULAR, SET_TOP_RATED } from '../redux/types'
//Grommet
import { Box, Carousel, Grid, Heading, Paragraph } from 'grommet'
//Components
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
    }, [dispatch])

    return (
        <Box align='center'>
            <Heading>
                Welcome to Movie Database!
            </Heading>
            <Box height='65vh' width='60vw'>
                <Carousel fill play={5000} controls='arrows'>
                    {popularMovies.map((movie: any, index: number) => {
                        return < TrailerCard movie={movie} key={index} />
                    }
                    )}
                </Carousel>
            </Box>
            <Paragraph size='xlarge'>
                Top Rated Movies:
            </Paragraph>
            <Grid responsive columns={['small', 'small', 'small', 'small', 'small']} gap='medium'>
                {topRated.slice(0, 5).map((movie: any, index: number) => {
                    return <MovieCard movie={movie} key={index} />
                })}
            </Grid>
            <Paragraph size='xlarge'>
                In theaters now:
            </Paragraph>
            <Grid columns={['small', 'small', 'small', 'small', 'small']} gap='medium'>
                {playingNow.slice(0, 5).map((movie: any, index: number) => {
                    return <MovieCard movie={movie} key={index} />
                })}
            </Grid>
            <Paragraph size='xlarge'>
                Coming soon:
            </Paragraph>
            <Grid columns={['small', 'small', 'small', 'small', 'small']} gap='medium'>
                {comingSoon.slice(0, 5).map((movie: any, index: number) => {
                    return <MovieCard movie={movie} key={index} />
                })}
            </Grid>
        </Box>
    )
}

export default Home
