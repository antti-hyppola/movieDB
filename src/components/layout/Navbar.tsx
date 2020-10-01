import React, { useState } from 'react'
import axios from 'axios'
import SearchPage from '../SearchPage'
import { Redirect } from 'react-router-dom'
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
    const [query, setQuery] = useState('')
    const [data, setData] = useState(null)
    const [search, setSearch] = useState(false)

    const apiKey = process.env.REACT_APP_API_KEY

    async function searchMovies() {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1`
        const res = await axios.get(url)
        setData(res.data.results)
        setSearch(true)
    }

    const handleSearch = (e: any) => {
        if (e) e.preventDefault()
        searchMovies()
        console.log(data)
    }
    return (
        <>
            <Nav direction='row-responsive' elevation='small' background='neutral-2' justify='center'>
                <Anchor icon={<Home />} />
                <SearchContainer>
                    <form onSubmit={handleSearch}>
                        <TextInput name='search' placeholder='Search' icon={<Search />} value={query} onChange={(e) => setQuery(e.target.value)} size='small' />
                        <input type='submit' />
                    </form>
                </SearchContainer>
                <Anchor icon={<AppsRounded />} />
            </Nav>
            {search && <Redirect to='/search' />}
        </>
    )
}
