import React from 'react'
//Grommet
import { Card, CardBody, CardFooter, CardHeader, Image } from 'grommet'
import placeholder from '../images/placeholder.png'
//Types
import { MovieState } from '../redux/types'

interface MovieCardProps {
    movie: MovieState['movie'];
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const { title, overview, release_date, poster_path } = movie
    let imagePath = poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : placeholder
    return (
        <Card elevation='medium' margin='small' align='center' height='large' width='medium'>
            <CardHeader>{title}</CardHeader>
            <Image fit='contain' src={imagePath} /> :
            <CardBody>{overview}</CardBody>
            <CardFooter>Released {release_date}</CardFooter>
        </Card>
    )
}

export default MovieCard
