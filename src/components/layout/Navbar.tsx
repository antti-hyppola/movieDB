import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { searchMovies } from '../../redux/actions/movieActions'
import { useDispatch } from 'react-redux'
//Grommet
import { Nav, Anchor, TextInput, Button } from 'grommet'
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
    const [query, setQuery] = useState('')
    const [search, setSearch] = useState(false)
    const dispatch = useDispatch();
    let searchQuery = query.replace(/\s+/g, '%20')

    const handleSearch = (e: any) => {
        if (e) e.preventDefault()
        dispatch(searchMovies(searchQuery))
        setSearch(true)
    }
    return (
        <>
            <Nav direction='row-responsive' elevation='small' background='neutral-2' justify='center'>
                <Anchor icon={<Home />} />
                <SearchContainer>
                    <form onSubmit={handleSearch}>
                        <TextInput name='search' placeholder='Search' icon={<Search />} value={query} onChange={(e) => setQuery(e.target.value)} size='small' />
                        <Button type='submit' label='Search' />
                    </form>
                </SearchContainer>
                <Anchor icon={<AppsRounded />} />
            </Nav>
            {search && <Redirect to='/search' />}
        </>
    )
}
