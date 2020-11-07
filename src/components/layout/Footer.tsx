import React from 'react'
import tmdb from '../../images/TMdB.svg'
import { Box, Image, Text } from 'grommet'

export default function Footer() {
    return (
        <Box align='center' direction='row' gap='medium' justify='between' as='footer'>
            <Image src={tmdb} />
            <Text>This product uses the TMDb API but is not endorsed or certified by TMDb.</Text>
        </Box>
    )
}
