import React from 'react'
//Redux
import { useDispatch } from 'react-redux'
import { MovieState } from '../redux/types'
import { openTrailer } from '../redux/actions/movieActions'
//Grommet
import { Card, Button, Paragraph } from 'grommet'
//Styles
import styled from 'styled-components'
const TrailerText = styled.div`
    text-transform: uppercase;
    text-shadow: -1px -1px 0px rgba(255,255,255,0.3), 1px 1px 0px rgba(0,0,0,0.8);
	color: #fff;
    position: relative;
    top: 10vh;
    display: block;
    text-align: center;
    z-index: 1000;
    max-width: 90%;
    max-height: 100%;
    line-height: 1.5;
`
const MyParagraph = styled.p`
    font-size: 2.3em;
`

interface TrailerCardProps {
    movie: MovieState['movie'];
}

const TrailerCard: React.FC<TrailerCardProps> = ({ movie }) => {
    const { title, id, backdrop_path } = movie
    const imagePath = `url(https://image.tmdb.org/t/p/original${backdrop_path})`
    const dispatch = useDispatch()
    const handleClick = (e: any) => {
        dispatch(openTrailer(id))
    }

    return (
        <Card justify='center' align='center' fill background={imagePath}>
            <TrailerText>
                <MyParagraph>{title}</MyParagraph>
                <Button hoverIndicator primary onClick={handleClick} label='Watch Trailer' />
            </TrailerText>
        </Card >
    )
}
export default TrailerCard
