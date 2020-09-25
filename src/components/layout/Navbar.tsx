import React from 'react'
//Grommet
import { Nav, Anchor, TextInput } from 'grommet'
//Icons
import { AppsRounded, Home, Search } from 'grommet-icons'
//Styles
import styled from 'styled-components'
const SearchContainer = styled.div`
    width: 35vw;
    height: 5vh;
    padding-top: 5px;
`


export default function Navbar() {
    return (
        <Nav direction='row-responsive' elevation='small' background='neutral-2' justify='center'>
            <Anchor icon={<Home />} />
            <SearchContainer>
                <TextInput placeholder='Search' icon={<Search />} size='small' />
            </SearchContainer>
            <Anchor icon={<AppsRounded />} />
        </Nav>
    )
}
