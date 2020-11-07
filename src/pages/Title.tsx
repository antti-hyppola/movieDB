import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
//Components
import NotFound from '../components/layout/NotFound'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { getMovie } from '../redux/actions/movieActions'
import { RootState } from '../redux/types'
//Grommet
import { Image, Heading, Main, Paragraph, List } from 'grommet'
//Styles
import Placeholder from '../images/placeholder.png'
import styled from 'styled-components'
const Poster = styled(Image)`
    grid-area: poster;
    max-width: 40vw;
    height: auto;
`
const Container = styled(Main)`
    margin: 12px;
    display: grid;
    grid-column-gap: 6%;
    grid-template-columns: 45% 23% 15%;
    grid-template-rows: auto;
    grid-template-areas: 
    'poster title .'
    'poster overview videos'
    'poster release rating';
`

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
    }, [dispatch, id])

    const handleClick = (event: any) => {
        videos.results.forEach((video: any) => {
            if (video.name === event.item) window.open(`https://www.youtube.com/watch?v=${video.key}`, '_blank') || window.location.replace(`https://www.youtube.com/watch?v=${video.key}`)
        })
    }

    return (
        movie.id === 0 ? <NotFound /> : (
            <Container align='center'>
                <Poster src={imagePath} />
                <Heading style={{ gridArea: 'title' }}>{movie.title}</Heading>
                <Paragraph style={{ gridArea: 'overview' }} fill>{movie.overview}</Paragraph>
                <Paragraph style={{ gridArea: 'release' }} fill>Release date: {movie.release_date}</Paragraph>
                <Paragraph style={{ gridArea: 'rating' }} fill>Rating: {movie.vote_average} Total votes: {movie.vote_count}</Paragraph>
                <List onClickItem={(event: any) => handleClick(event)} style={{ gridArea: 'videos' }} data={videos.results && videos.results.map((video: any) => (video.name))} />
            </Container>
        )
    )
}
