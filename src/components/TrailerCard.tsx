import React from 'react'
import { MovieState } from '../redux/types'
import { Card, Button } from 'grommet'
import styled from 'styled-components'

const TrailerText = styled.div`
    /* color: white; */
    text-transform: uppercase;
    text-shadow: -1px -1px 0px rgba(255,255,255,0.3), 1px 1px 0px rgba(0,0,0,0.8);
	color: #fff;
    position: relative;
    top: 10vh;
    font-size: 1.7rem;
    display: block;
    text-align: center;
`

interface TrailerCardProps {
    movie: MovieState['movie'];
}

const TrailerCard: React.FC<TrailerCardProps> = ({ movie }) => {
    const { title, id, poster_path, overview, backdrop_path } = movie
    const imagePath = `url(https://image.tmdb.org/t/p/original${backdrop_path})`

    const handleClick = () => {
        
    }

    return (
        <Card justify='center' align='center' fill background={imagePath}>
            <TrailerText>
                <h1>{title}</h1>
                <Button primary onClick={handleClick} label='Watch Trailer' />
            </TrailerText>
        </Card >
    )
}
export default TrailerCard
