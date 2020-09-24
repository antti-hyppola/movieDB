import React from 'react'
//Grommet
import { Nav, Anchor, TextInput } from 'grommet'
//Icons
import { AppsRounded, Home, Search } from 'grommet-icons'

export default function Navbar() {
    return (
        <Nav direction='row' elevation='small' background='neutral-2'>
            <Anchor icon={<Home />} />
            <TextInput placeholder='Search' icon={<Search />} size='small' />
            <Anchor icon={<AppsRounded />} />
        </Nav>
    )
}
