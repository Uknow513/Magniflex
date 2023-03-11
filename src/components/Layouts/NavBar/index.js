import React, { useState } from 'react';

import {
    Box,
    Container,
} from '@mui/material'

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        position: 'sticky',
        zIndex: 1000,
        top: 122,
        background: '#F7F7F7',
        padding: '16px 0px',
        marginBottom: '24px',
        '@media (max-width:1280px)': {
            top: 70
        }
    },
    content: {
        display: 'flex !important',
        justifyContent: 'center'
    },
    itemStyle: {
        fontSize: '14px',
        cursor: 'pointer',
        padding: '10px 30px',
        "&:focus": {
            fontWeight: 700
        },
        '@media (max-width:1000px)': {
            fontSize: '10px',
            padding: '5px 10px'
        }
    }
}))

const item_list = [
    {
        label: 'STORIA',
        link: 'storiaBlock'
    },
    {
        label: 'AZIENDA',
        link: 'aziendablock'
    },
    {
        label: 'AMBIENTE',
        link: 'ambienteblock'
    },
    {
        label: 'SPORT',
        link: 'sportblock'
    }
]

const NavBar = () => {

    const classes = useStyles();

    const [selectedItem, setSelectedItem] = useState('STORIA')

    const handleSelectedItem = (row) => {
        setSelectedItem(row.label)
        const reftp = document.getElementById('aziendablock');
        console.log(reftp)
        reftp?.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }

    return (
        <Box className={classes.root}>
            <Container className={classes.content}>
                {
                    item_list.map((row, i) => {
                        return (
                            <Box
                                key={i}
                                className={classes.itemStyle}
                                style={{fontWeight: selectedItem === row.label ? 'bold' : ''}}
                                onClick={() => handleSelectedItem(row.label)}
                            >
                                {row.label}
                            </Box>
                        )
                    })
                }
            </Container>
        </Box>
    )
}

export default NavBar;