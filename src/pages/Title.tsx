import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Placeholder from '../images/placeholder.png'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { getMovie } from '../redux/actions/movieActions'
import { RootState } from '../redux/types'
//Grommet
import { Image, Heading, Main, Paragraph, List } from 'grommet'

interface ParamTypes {
    id: string;
}

export default function Title() {
    const dispatch = useDispatch()
    const { id } = useParams<ParamTypes>()
    const movie = useSelector((state: RootState) => state.movies.movie)
    const videos = movie.videos
    let imagePath = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : Placeholder
    useEffect(() => {
        dispatch(getMovie(id))
    }, [])


    return (
        <Main align='center'>
            <Heading>{movie.title}</Heading>
            <Image fit='contain' src={imagePath} />
            <Paragraph fill>{movie.overview}</Paragraph>
            <Paragraph fill>Release date: {movie.release_date}</Paragraph>
            <Paragraph fill>Rating: {movie.vote_average} Total votes: {movie.vote_count}</Paragraph>
            <List data={videos.results && videos.results.map((video: any) => (video.type))} />
        </Main>
    )
}
