import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { searchMovies } from '../../redux/actions/movieActions'
import { useDispatch } from 'react-redux'
//Grommet
import { Nav, RoutedAnchor, TextInput, Button, Form, FormField, Box } from 'grommet'
//Icons
import { Home, Search } from 'grommet-icons'
//Styles
import styled from 'styled-components'
const SearchContainer = styled(Box)`
    width: 100%;
    height: 8vh;
    padding-top: 4px;
    display: none;
    align-items: center;

    @media (min-width: 769px) {
    display: flex;
  }
`
const MyButton = styled(Button)`
    height: 60%;
`
const MyNav = styled(Nav)`
    width: 100%;
`


export default function Navbar() {
    const [query, setQuery] = useState('')
    const [search, setSearch] = useState(false)
    const dispatch = useDispatch();
    let searchQuery = query.replace(/\s+/g, '%20')

    const handleSearch = (e: any) => {
        e.preventDefault()
        dispatch(searchMovies(searchQuery))
        setSearch(true)
    }
    return (
        <>
            <MyNav background='#4C495D' direction='row' elevation='small' align='center' justify='center' alignContent='around'>
                <RoutedAnchor path='/' icon={<Home />} />
                <Form onSubmit={handleSearch}>
                    <SearchContainer justify='center' direction='row' gap='medium'>
                        <FormField>
                            <TextInput name='search' placeholder='Search' icon={<Search />} value={query} onChange={(e) => setQuery(e.target.value)} size='small' />
                        </FormField>
                        <MyButton hoverIndicator='background' size='small' color='#802BB1' secondary type='submit' label='Search' />
                    </SearchContainer>
                </Form>
            </MyNav>
            {search && <Redirect to='/search' />}
        </>
    )
}
