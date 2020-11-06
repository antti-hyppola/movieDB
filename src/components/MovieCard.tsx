import React from 'react'
//Router
import { Link } from 'react-router-dom'
//Grommet
import { Card, CardBody, CardFooter, CardHeader, Image } from 'grommet'
//Types
import { MovieState } from '../redux/types'
//Styles
import placeholder from '../images/placeholder.png'
import styled from 'styled-components'
const MyCard = styled(Card)`
    background-color: #2D283E;
    max-height: 70vh;
    width: 40vw;

`
const MyImg = styled(Image)`
    display: block;
    width: 100%;
`

interface MovieCardProps {
    movie: MovieState['movie'];
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const { title, overview, release_date, poster_path, id } = movie
    let imagePath = poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : placeholder


    return (
        <MyCard elevation='medium' margin='small' align='center' round='xsmall'>
            <Link style={{ color: 'inherit' }} to={{ pathname: `/titles/${id}` }}>
                <MyImg src={imagePath} />
                <CardHeader>{title}</CardHeader>
            </Link>
            <br />
            <CardBody>{overview?.slice(0, 55)}...</CardBody>
            <CardFooter style={{ color: '#802BB1' }}>Released {release_date}</CardFooter>
        </MyCard>
    )
}

export default MovieCard
