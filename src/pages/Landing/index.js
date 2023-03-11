import React from 'react'

import Home from './Home'
import NavBar from '../../components/Layouts/NavBar'
import StoriaBlock from './StoriaBlock'
import Agency from './Agency'
import Environment from './Environment'
import Sport from './Sport'
import WorldMap from './WorldMap'

import { Box, useMediaQuery } from '@mui/material'

const Landing = () => {

    const match = useMediaQuery('(min-width : 1280px)')
    return (
        <Box sx={{marginTop: match ? '122px' : '70px'}}>
            <Home />
            <NavBar />
            <StoriaBlock />
            <Agency />
            <Environment />
            <Sport />
            <WorldMap />
        </Box>
    )
}

export default Landing;